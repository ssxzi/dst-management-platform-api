package setting

import (
	"dst-management-platform-api/utils"
	"github.com/gin-gonic/gin"
	"net/http"
)

func handleRoomSettingGet(c *gin.Context) {
	config, _ := utils.ReadConfig()
	type Response struct {
		Code    int               `json:"code"`
		Message string            `json:"message"`
		Data    utils.RoomSetting `json:"data"`
	}
	response := Response{
		Code:    200,
		Message: "success",
		Data:    config.RoomSetting,
	}
	c.JSON(http.StatusOK, response)
}

func handleRoomSettingSavePost(c *gin.Context) {
	lang, _ := c.Get("lang")
	langStr := "zh" // 默认语言
	if strLang, ok := lang.(string); ok {
		langStr = strLang
	}
	var roomSetting utils.RoomSetting
	if err := c.ShouldBindJSON(&roomSetting); err != nil {
		// 如果绑定失败，返回 400 错误
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	config, _ := utils.ReadConfig()
	config.RoomSetting = roomSetting
	utils.WriteConfig(config)

	saveSetting(config)
	dstModsSetup()

	c.JSON(http.StatusOK, gin.H{"code": 200, "message": Success("saveSuccess", langStr), "data": nil})
}

func handleRoomSettingSaveAndRestartPost(c *gin.Context) {
	lang, _ := c.Get("lang")
	langStr := "zh" // 默认语言
	if strLang, ok := lang.(string); ok {
		langStr = strLang
	}
	var roomSetting utils.RoomSetting
	if err := c.ShouldBindJSON(&roomSetting); err != nil {
		// 如果绑定失败，返回 400 错误
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	config, _ := utils.ReadConfig()
	config.RoomSetting = roomSetting
	utils.WriteConfig(config)

	saveSetting(config)
	dstModsSetup()
	restartWorld(c, config, langStr)

	c.JSON(http.StatusOK, gin.H{"code": 200, "message": Success("restartSuccess", langStr), "data": nil})
}

func handleRoomSettingSaveAndGeneratePost(c *gin.Context) {
	lang, _ := c.Get("lang")
	langStr := "zh" // 默认语言
	if strLang, ok := lang.(string); ok {
		langStr = strLang
	}
	var roomSetting utils.RoomSetting
	if err := c.ShouldBindJSON(&roomSetting); err != nil {
		// 如果绑定失败，返回 400 错误
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	config, _ := utils.ReadConfig()
	config.RoomSetting = roomSetting
	utils.WriteConfig(config)

	saveSetting(config)
	dstModsSetup()
	generateWorld(c, config, langStr)

	c.JSON(http.StatusOK, gin.H{"code": 200, "message": Success("generateSuccess", langStr), "data": nil})

}
