package responder

import(
	"github.com/gin-gonic/gin"
	"backend/typefile"
)
func ThinkActionResponder(c *gin.Context,data typefile.ThinkResponseType) {
	c.JSON(200, gin.H{
		"result": data.Result,
		"what": data.What,
		"why": data.Why,
		"how": data.How,
		"waka": data.Waka,
		"novel": data.Novel,
		"homonym": data.Homonym,
		"synonyms": data.Synonyms,
	})
}

