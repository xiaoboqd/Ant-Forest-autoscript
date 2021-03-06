/*
 * @Author: NickHopps
 * @Last Modified by: NickHopps
 * @Last Modified time: 2019-03-12 02:09:14
 * @Description: 蚂蚁森林自动收能量
 */

/***********************
 * 初始化
 ***********************/
// 检查手机是否开启无障碍服务
auto();

// 请求截图权限
if (! requestScreenCapture()) {
  toast("请求截图失败");
  exit();
}

/************************
 * 依赖加载
 ***********************/

// 加载本地配置
var config = storages.create("ant_forest_config");
if (!config.contains("color_offset")) {
  toastLog("请完善配置后再运行");
  engines.execScriptFile("./config.js");
  engines.myEngine().forceStop();
}

var Automator = require("./lib/Automator.js");
var Unlock = require("./lib/Unlock.js");
var Ant_forest = require("./core/Ant_forest.js");

var automator = Automator();
var unlock = Unlock(automator);
var ant_forest = Ant_forest(automator, unlock);

/************************
 * 主程序
 ***********************/
ant_forest.exec();
