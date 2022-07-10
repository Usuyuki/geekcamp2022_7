package action

import(
	"github.com/gin-gonic/gin"
	"backend/responder"
	"backend/typefile"
	"backend/usecase/novel"
)
func ThinkAction(c *gin.Context) {
	var data typefile.ThinkResponseType
	
	data.What =c.PostForm("what")
	data.Why = c.PostForm("why")
	data.How = c.PostForm("how")
	data.Result = "success"


	//もらった文章の解析
	

	// data.Waka = []typefile.Waka{}
	// @todo ここは チャンネルで繋いで、並列動作させる
	data.Novel = novel.GetByNovel()
	// data.Homonym = []typefile.Homonym{}
	// data.Synonyms = []typefile.Synonyms{}
	
	responder.ThinkActionResponder(c,data)
}
