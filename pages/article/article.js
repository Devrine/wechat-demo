// pages/article/article.js

import {postList} from "../../data/data.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData: {},
    collected:false,
    _pid: null,
    _postCollected: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    const postData = postList[options.pid]
    this.data._pid = options.pid
    const postCollected = wx.getStorageSync('post_collected')
    this.data._postCollected = postCollected
    let collected = postCollected[this.data._pid]
    if(collected === undefined){
      // 如果undefined，则说明文章没有被收藏过
      collected = false
    }
    this.setData({
      postData,
      paragraphs: postData.content.split('\n'),
      collected,
    })
  },

  // 文章是否被收藏
  onCollect(event){
    const postCollected = this.data._postCollected
    wx.getStorageSync('post_collected')
    postCollected[this.data._pid] = !this.data.collected
    // this.data.collected = true
    this.setData({
      collected: !this.data.collected
    })
    wx.setStorageSync('post_collected',postCollected)

    wx.showToast({
      title: this.data.collected?"收藏成功":"取消成功",
      duration: 3000,
    })
  },

  // 文章是否被分享
  onShare(event){
    wx.showActionSheet({
      itemList: ["分享到QQ","分享到微信","分享到朋友圈"],
    })
  },

  // 播放背景音频
  // 出错了
  onMusic(event){
    const mgr = wx.getBackgroundAudioManager()
    mgr.src = postList[0].musicUrl
    mgr.title = postList[0].musicTitle
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