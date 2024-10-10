Page({
  showModal: function() {
      // 这里可以添加显示浮层的逻辑，例如使用 wx.showModal
      wx.showModal({
          title: '保存个人信息',
          content: '修改成功，点此返回',
          showCancel: true,
          cancelText: '取消',
          confirmText: '确定',
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
    wx.navigateBack({
      delta: 1 // 返回上一页
    });
  }
  });

  