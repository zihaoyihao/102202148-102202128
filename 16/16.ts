Page({
  showSuccessModal: function() {
      wx.showModal({
          title: '申请成功',
          content: '申请成功，点此返回',
          showCancel: true,
          cancelText: '返回',
          confirmText: '确定',
          success: function(res) {
              if (res.confirm) {
                  // 用户点击了确定按钮
              }
          }
      });
  },
  showWaitingModal: function() {
      wx.showModal({
          title: '匹配中，请等待',
          content: '点此返回',
          showCancel: false,
          cancelText: '返回',
          confirmText: '确定'
      });
  },
  goBack: function() {
    wx.navigateBack({
        delta: 1 // 返回上一页
    });
}
});