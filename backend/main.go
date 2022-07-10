package main

import (
	"backend/route"
	"backend/middleware"
    "github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()
	r = middleware.AllowCORS(r)
	r = route.GetRouter(r)
    r.Run(":8001")
}