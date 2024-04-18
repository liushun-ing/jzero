FROM golang:alpine

ENV CGO_ENABLED 0
ENV GOPROXY https://goproxy.io,direct

RUN apk add tzdata ca-certificates curl bash
RUN go install github.com/zeromicro/go-zero/tools/goctl@latest
RUN goctl env check --install --verbose --force
RUN chmod +x /go/bin/protoc

ENV TZ Asia/Shanghai

WORKDIR /app
COPY dist/jzero_linux_amd64_v1/jzero /app/jzero
COPY config.toml /app/config.toml
COPY .protosets /app/.protosets

EXPOSE 8001 8002

ENTRYPOINT ["./jzero"]