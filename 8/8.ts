Page({
  // 页面的初始数据
  data: {
    // 可以添加需要的数据
  },
  navigateToPage6: function() {
    wx.navigateTo({
      url: '/pages/6/6' // 第八页
    });
  },
 // 返回上一页按钮点击事件
 goBack: function() {
  wx.navigateBack({
    delta: 1 // 返回上一页
  });
}
});                                           