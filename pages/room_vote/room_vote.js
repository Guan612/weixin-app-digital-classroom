// pages/reward_complaint/reward_complaint.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: 1,
    list: [{
        id: 1,
        title: '选项1'
      },
      {
        id: 2,
        title: '选项2'
      },
      {
        id: 3,
        title: '选项3'
      }
    ]
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
  onClick(event) {
    const {
      name
    } = event.currentTarget.dataset;
    this.setData({
      radio: name,
    });
  },
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },
  handleClick() {
    wx.navigateBack({
      delta: 1
    })
  }
})