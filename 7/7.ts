Page({
  showModal: function() {
      // 这里可以添加显示浮层的逻辑，例如使用 wx.showModal
      wx.showModal({
          title: '创建项目',
          content: '创建成功，点此返回',
          showCancel: false,
          success: function(res) {
              if (res.confirm) {
                  // 用户点击确定按钮
              } else if (res.cancel) {
                  // 用户点击取消按钮
              }
          }
      });
  },
  goBack: function() {
      // 返回上一页的逻辑
      wx.navigateBack({
          delta: 1
      });
  }
});