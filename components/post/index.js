// components/post/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    res:Object,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 跳转至文章详情页面
  onJumpToArticle(event) {
    // console.log(event)
    const pid = event.currentTarget.dataset.postId
    // console.log(pid)
    wx.navigateTo({
      url: '/pages/article/article?pid=' + pid
    })
  },
  }
})
