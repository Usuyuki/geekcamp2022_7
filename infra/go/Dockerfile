FROM golang:1.18-alpine
RUN apk update && apk add git && apk add bash && apk add vim
RUN mkdir /backend
WORKDIR /backend
ADD ../../backend /backend

RUN go install

ENTRYPOINT ["go", "run", "main.go"]