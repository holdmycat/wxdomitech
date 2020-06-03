// miniprogram/pages/mainpage/mainpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIndex: -1,
    list:[
      {
        name:"VR/AR",
        imgurl:"/images/vrar.png"
      },
      {
        name:"游戏开发",
        imgurl:"/images/gamedevelop.png"
      },
      {
        name:"游戏策划",
        imgurl:"/images/gamedesign.png"
      },
      {
        name:"APP开发",
        imgurl:"/images/mobileapp.png"
      },
      {
        name:"APP设计",
        imgurl:"/images/appdesign.png"
      },
      {
        name:"微信mini",
        imgurl:"/images/wechatmini.png"
      },
      

    ],
    tabList:[
      {
        id:"0",
        state:0,
        name:'VR/AR',
      },
      {
        id:"1",
        state:0,
        name:'游戏开发',
      },
      {
        id:"2",
        state:0,
        name:'游戏策划',
      },
      {
        id:"3",
        state:0,
        name:'APP开发',
      },{
        id:"4",
        state:0,
        name:'APP设计',
      },
      {
        id:"5",
        state:0,
        name:'微信mini',
      },
       
    ]
  },

  selected: function (e) { 
    var id = e.target.id;
    var nId = parseInt(id);
    var tmp = this.data.tabList;
    if(this.data.curIndex != -1) {
      tmp[this.data.curIndex].state = 0;
    }
    tmp[nId].state = 1;
    this.setData({
      tabList:tmp,
      curIndex:nId
    });
  },
   


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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