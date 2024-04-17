package hello

import (
	"net/http"

	"github.com/zeromicro/go-zero/rest/httpx"

	"github.com/jaronnie/jzero/daemon/internal/logic/hello"
	"github.com/jaronnie/jzero/daemon/internal/svc"
	"github.com/jaronnie/jzero/daemon/internal/types"

	"github.com/jaronnie/jzero/daemon/pkg/response"
)

func HelloPathHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req types.PathRequest
		if err := httpx.Parse(r, &req); err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
			return
		}

		l := hello.NewHelloPathLogic(r.Context(), svcCtx)
		resp, err := l.HelloPath(&req)
		response.Response(w, resp, err)
	}
}