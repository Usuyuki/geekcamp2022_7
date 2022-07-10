package action

import(
	"github.com/gin-gonic/gin"
)
func ThinkAction(c *gin.Context) {
	c.JSON(200, gin.H{
		"status": "🟢元気です。",
	})
}