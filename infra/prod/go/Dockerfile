# FROM golang:1.18-bullseye
# RUN apt-get update && \
#     apt-get -y install git bash vim && \
#     apt-get clean && \
# rm -rf /var/lib/apt/lists/
# RUN mkdir /backend
# WORKDIR /backend
# ADD ../../backend /backend

FROM golang:1.18-alpine as builder

ENV ROOT=/go/src/app
WORKDIR ${ROOT}

RUN apk update && apk add git
COPY backend/go.mod backend/go.sum ./
RUN go mod download

COPY backend ${ROOT}
RUN CGO_ENABLED=0 GOOS=linux go build -o $ROOT/binary


FROM scratch as prod

ENV ROOT=/go/src/app
WORKDIR ${ROOT}
COPY --from=builder ${ROOT}/binary ${ROOT}

EXPOSE 8080
CMD ["/go/src/app/binary"]
