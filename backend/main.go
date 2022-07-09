package main 

import (
    "github.com/gin-gonic/gin"
    "github.com/gin-contrib/cors"
    // "nlp"
    "time"
)

func main() {
    gin.SetMode(gin.ReleaseMode)
    router := gin.Default()
    // tokens := nlp.nlpTest("暑い最中、ジャンボ最中を食べる最中")
    // for _, token := range tokens {
	// 	features := strings.Join(token.Features(), ",")
	// 	fmt.Printf("%s\t%v\n", token.Surface, features)
	// }

    /**
    * CORS関連
    */
    router.Use(cors.New(cors.Config{
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

    router.GET("/", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "技育博用のdocker整備です",
            "hitokoto": "はじまった！",
        })
    })

    router.Run(":8001")
}