FROM golang:1.18-alpine
RUN apk update && apk add git && apk add bash && apk add vim
RUN mkdir /backend
WORKDIR /backend
ADD ../../backend /backend

RUN go install
RUN go get -u github.com/cosmtrek/air && \
    go build -o /go/bin/air github.com/cosmtrek/air

# ENTRYPOINT ["go", "run", "main.go"]
ENTRYPOINT ["air", "-c", ".air.toml"]