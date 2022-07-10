package middleware

import(
    "github.com/gin-gonic/gin"
    "github.com/gin-contrib/cors"
    "time"
)

func AllowCORS(r *gin.Engine) *gin.Engine {
	/**
    * CORS関連
    */
    r.Use(cors.New(cors.Config{
        AllowOrigins: []string{
            "https://musubineru.usuyuki.net",
            "http://localhost:80",
            "http://deno:8000",
        },
        AllowMethods: []string{
            "POST",
            "GET",
        },
        AllowHeaders: []string{
            "Access-Control-Allow-Credentials",
            "Access-Control-Allow-Headers",
            "Content-Type",
            "Content-Length",
            "Accept-Encoding",
            "Authorization",
        },
        AllowCredentials: true,
        MaxAge: 24 * time.Hour,
    }))
	return r
}