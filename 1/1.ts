// pages/1/1.ts
Page({
  // 页面的初始数据
  data: {
    // 可以在这里定义页面需要的数据
  },

  // 处理登录按钮点击事件
  handleLogin: function() {
    // 跳转到第五页
    wx.navigateTo({
      url: '/pages/5/5' // 假设第五页的路径是 page5/page5
    });
  },

  // 处理注册链接点击事件
  handleRegister: function() {
    // 跳转到第二页
    wx.navigateTo({
      url: '/pages/2/2' // 假设第二页的路径是 page2/page2
    });
  }
});