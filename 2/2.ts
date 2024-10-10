// pages/page2/page2.ts
Page({
  navigateToStudentPage: function() {
      wx.navigateTo({
          url: '/pages/3/3' 
      });
  },

  navigateToTeacherPage: function() {
      wx.navigateTo({
          url: '/pages/4/4' 
      });
  },

  goBack: function() {
      wx.navigateBack(); // 返回上一页
  }
});