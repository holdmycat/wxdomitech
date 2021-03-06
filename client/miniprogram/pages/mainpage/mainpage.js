// miniprogram/pages/mainpage/mainpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIndex: 0,
    list:[
      {
        id:"0",
        state:1,
        name:"VR/AR",
        imgurl:"/images/vrar.png"
      },
      {
        id:"1",
        state:0,
        name:"游戏开发",
        imgurl:"/images/gamedevelop.png"
      },
      // {
      //   name:"游戏策划",
      //   imgurl:"/images/gamedesign.png"
      // },
      {
        id:"2",
        state:0,
        name:"APP开发",
        imgurl:"/images/mobileapp.png"
      },
      // {
      //   name:"APP设计",
      //   imgurl:"/images/appdesign.png"
      // },
      {
        id:"3",
        state:0,
        name:"微信mini",
        imgurl:"/images/wechatmini.png"
      },
    ],
    videoItemInfo:{
      width:0,
      height:0
    },
    
    videoList:[
      {
        id:"0",
      },
      {
        id:"1",
      },
      {
        id:"2",
      },
      {
        id:"3",
      },
      {
        id:"0",
      },
      {
        id:"1",
      },
      {
        id:"2",
      },
      {
        id:"3",
      },
    ]
  },

  selected: function (e) { 
    var id = e.currentTarget.id;
    var nId = parseInt(id);
    var tmp = this.data.list;
    if(this.data.curIndex != -1) {
      tmp[this.data.curIndex].state = 0;
    }
    tmp[nId].state = 1;
    this.setData({
      list:tmp,
      curIndex:nId
    });
  },
   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var app = getApp()
    console.log(app.globalData.windowWidth);
    var tmp = this.data.videoItemInfo;
    
    tmp.width = app.globalData.windowWidth * 0.88 * 0.5;
    tmp.height = tmp.width * 1.3;
    this.setData({
      videoItemInfo:tmp
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})