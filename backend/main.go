package main

import (
	"backend/route"
	"backend/middleware"
    "github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()
	// ミドルウェア
	middleware.AllowCORS(r)
	// ルーティング
	route.GetRouter(r)
    r.Run(":8001")
}