# jzero

基于 go-zero 框架项目的代码设计

## 技术栈

* cobra 实现命令行管理
* go-zero 提供 grpc 和 http 请求等

## 特性

* 支持将 grpc 通过 gateway 转化为 http 请求, 并支持自定义 http 请求
* 同时支持在项目中使用 grpc 和 api
* 支持监听 unix socket
* 支持多 proto 多 service(多人开发友好)
* 加入开发中的各种案例请求
* 一键创建项目
* 一键生成各种代码

## 安装

```shell
go install github.com/jaronnie/jzero@latest
# 初始化
jzero init
# 启动样例服务
jzero daemon
```

## 一键创建项目

```shell
jzero new --module=github.com/jaronnie/app1 --dir=./app1 --app=app1
cd app1
jzero gen
go mod tidy
go run main.go --config config.toml
```

## 开发

```shell
# gencode
jzero gen

# run
task run

# test
# unix
curl -s --unix-socket ./jzero.sock http://localhost:8001/api/v1.0/credential/version
# gateway
http://localhost:8001/api/v1.0/credential/version
# grpc
grpcurl -plaintext localhost:8000 credentialpb.credential/CredentialVersion
```

## TODO

- [x] Fix static embed files
- [x] Add go-zero api feature
- [x] Support multi proto, multi service
- [x] Support api ~~multi api,~~ multi service
- [x] Warp rpc and api Response
- [x] Support jzero gen
- [x] Support jzero new

