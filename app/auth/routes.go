package auth

import (
	"dst-management-platform-api/utils"
	"github.com/gin-gonic/gin"
)

func RouteAuth(r *gin.Engine) *gin.Engine {
	v1 := r.Group("v1")
	{
		// 系统
		v1.POST("/login", handleLogin)
		v1.GET("/userinfo", utils.MWtoken(), handleUserinfo)
		v1.GET("/menu", utils.MWtoken(), handleMenu)
		v1.POST("/update/password", utils.MWtoken(), handleUpdatePassword)

		// 设置
		v1.GET("/setting/room", utils.MWtoken(), handleRoomSettingGet)
		v1.POST("/setting/room", utils.MWtoken(), handleRoomSettingPost)
	}

	return r
}
