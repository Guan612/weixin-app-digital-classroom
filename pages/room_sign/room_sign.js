// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    list: [{
      id: 1,
      num: '',
      price: '',
      desc: '我是描述我是描述我是描述我是描述我是描述我是描述',
      title: '课堂一',
      imageURL: '/images/ipad.jpg',
      order: '123456'
    }, {
      id: 2,
      num: '',
      price: '',
      desc: '我是描述我是描述我是描述我是描述我是描述我是描述',
      title: '课堂二',
      imageURL: '/images/ipad.jpg',
      order: '123456'
    }, {
      id: 3,
      num: '',
      price: '',
      desc: '我是描述我是描述我是描述我是描述我是描述我是描述',
      title: '课堂三',
      imageURL: '/images/ipad.jpg',
      order: '123456'
    }],

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

  },
  handleRoute: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  handleClick: function () {
    wx.navigateBack({
      delta: 1
    })
  }
})