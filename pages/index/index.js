//index.js
//获取应用实例
var Bmob = require('../../utils/bmob.js');
var common = require("../../common.js");
var app = getApp()
Page({
  data: {
    userInfo: {},
    bannerUrlList: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg"
    ],
    zhuangbiImg: "/images/zhuangbi_1.jpg",
    indicatorDots: false
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  // 点击生活圈
  lifeMomentTaped: function () {
    wx.navigateTo({
      url: '/pages/moment/moment',
    })
  },
  // 点击算账器
  calculatorTaped: function () {
    wx.navigateTo({
      url: '/pages/calculator/calculator',
    })
  },
  textOneTaped: function (e) {
    this.setData(
      {
        textOne: '哈哈哈哈哈'
      }
    );
    console.log(e);
    common.a11('mwj');
    common.a22('mwj');
  }
})
