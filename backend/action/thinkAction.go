package action

import(
	"github.com/gin-gonic/gin"
	"backend/responder"
	"backend/typefile"
)
func ThinkAction(c *gin.Context) {
	var data typefile.ThinkResponseType
	
	data.What =c.PostForm("what")
	data.Why = c.PostForm("why")
	data.How = c.PostForm("how")
	data.Result = "success"
	// data.Waka = []typefile.Waka{}
	// data.Novel = []typefile.Novel{}
	// data.Homonym = []typefile.Homonym{}
	// data.Synonyms = []typefile.Synonyms{}
	
	responder.ThinkActionResponder(c,data)
}
