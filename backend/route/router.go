package route

import (
	"github.com/gin-gonic/gin"
	"backend/action"
)

func GetRouter(r *gin.Engine) *gin.Engine {
	r.GET("/ping", action.PingAction)
	// r.GET("/show/:id", ShowOneBlog)
	// r.GET("/create", ShowCreateBlog)
	// r.POST("/create", CreateBlog)
	// r.GET("/edit/:id", ShowEditBlog)
	// r.POST("/edit", EditBlog)
	// r.GET("/delete/:id", ShowCheckDeleteBlog)
	// r.POST("/delete", DeleteBlog)
	return r
}