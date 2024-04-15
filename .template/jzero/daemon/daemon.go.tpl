package daemon

import (
	"fmt"

	"github.com/zeromicro/go-zero/core/conf"
	"github.com/zeromicro/go-zero/core/service"
	"github.com/zeromicro/go-zero/gateway"
	"github.com/zeromicro/go-zero/zrpc"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	"{{ .Module }}/daemon/internal/config"
	"{{ .Module }}/daemon/internal/handler"
	credentialsvr "{{ .Module }}/daemon/internal/server/credential"
	credentialv2svr "{{ .Module }}/daemon/internal/server/credentialv2"
	machinesvr "{{ .Module }}/daemon/internal/server/machine"
	machinev2svr "{{ .Module }}/daemon/internal/server/machinev2"
	"{{ .Module }}/daemon/internal/svc"
	"{{ .Module }}/daemon/pb/credentialpb"
	"{{ .Module }}/daemon/pb/machinepb"
)

func Start(cfgFile string) {
	var c config.Config
	conf.MustLoad(cfgFile, &c)
	go func() {
		start(c)
	}()
}

func getZrpcServer(c config.Config, ctx *svc.ServiceContext) *zrpc.RpcServer {
	return zrpc.MustNewServer(c.RpcServerConf, func(grpcServer *grpc.Server) {
		credentialpb.RegisterCredentialServer(grpcServer, credentialsvr.NewCredentialServer(ctx))
		credentialpb.RegisterCredentialv2Server(grpcServer, credentialv2svr.NewCredentialv2Server(ctx))
		machinepb.RegisterMachineServer(grpcServer, machinesvr.NewMachineServer(ctx))
		machinepb.RegisterMachinev2Server(grpcServer, machinev2svr.NewMachinev2Server(ctx))

		if c.Mode == service.DevMode || c.Mode == service.TestMode {
			reflection.Register(grpcServer)
		}
	})
}

func start(c config.Config) {
	ctx := svc.NewServiceContext(c)
	s := getZrpcServer(c, ctx)

	gw := gateway.MustNewServer(c.Gateway)
	// gw add routes
	handler.RegisterMyHandlers(gw.Server, ctx)

	// gw add api routes
	handler.RegisterHandlers(gw.Server, ctx)

	group := service.NewServiceGroup()
	group.Add(s)
	group.Add(gw)

	fmt.Printf("Starting rpc server at %s...\n", c.ListenOn)
	fmt.Printf("Starting gateway server at %s:%d...\n", c.Gateway.Host, c.Gateway.Port)
	group.Start()
}
