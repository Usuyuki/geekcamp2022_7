package action

import(
	"github.com/gin-gonic/gin"
)
func PingAction(c *gin.Context) {
	c.JSON(200, gin.H{
		"status": "🟢元気です。",
	})
}