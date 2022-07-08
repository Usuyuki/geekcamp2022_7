package main 

import (
    "github.com/gin-gonic/gin"
    // "backend/nlp"
)

func main() {
    router := gin.Default()
    // tokens := nlp.NlpTest("暑い最中、ジャンボ最中を食べる最中")
    // for _, token := range tokens {
	// 	features := strings.Join(token.Features(), ",")
	// 	fmt.Printf("%s\t%v\n", token.Surface, features)
	// }
    router.GET("/api", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "技育博用のdocker整備！！",
        })
    })

    router.Run(":8080")
}