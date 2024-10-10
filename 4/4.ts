// pages/teacherRegister/teacherRegister.ts
Page({
  showVerifyCodeModal: function() {
      // 这里可以使用 wx.showModal 来显示一个模态框，展示发送验证码的图片
      wx.showModal({
          title: '发送验证码',
          content: '验证成功，点此返回', // 这里可以是图片的描述文字
          showCancel: false,
          success: function(res) {
              if (res.confirm) {
                  // 发送验证码逻辑
              }
          }
      });
  },
  showRegisterModal: function() {
      // 这里可以使用 wx.showModal 来显示一个模态框，展示注册成功的图片
      wx.showModal({
          title: '注册成功',
          content: '注册成功，点此返回', // 这里可以是图片的描述文字
          showCancel: false,
          success: function(res) {
              if (res.confirm) {
                  // 注册逻辑
              }
          }
      });
  },
  goBack: function() {
      wx.navigateBack(); // 返回上一页
  }
});