Page({
  // 其他可能的页面数据和方法...

  // 退出登录按钮点击事件
  logout: function() {
    wx.navigateTo({
      url: '/pages/1/1' // 第一页的路径
    });
  },

  goToPersonalInfo: function() {
    wx.navigateTo({
      url: '/pages/9/9' // 第九页的路径
    });
  },

  

  // 消息按钮点击事件
  goMessage: function() {
    wx.navigateTo({
      url: '/pages/11/11' // 第十一页的路径
    });
  },


                   
  // 项目按钮点击事件
  goProject: function() {
    wx.navigateTo({
      url: '/pages/6/6' // 第六页的路径
    });
  },

  // 返回上一页按钮点击事件
  goBack: function() {
    wx.navigateBack({
      delta: 1 // 返回上一页
    });
  }
});