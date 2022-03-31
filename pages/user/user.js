'use strict';

// Get global application instance object
var app = getApp();

// Create page instance object
Page({
  /**
   * Initial data of the page
   */
  data: {
    title: 'user',
    userInfo:'',
    userName:'Wechat User',
    userDetail: [{
      title: 'Waiting in line',
      number: 1
    }, {
      title: 'coupon',
      number: 4
    }, {
      title: 'accumulate points',
      number: 20
    }],
    userList: [{
      icon: 'iconfont icon-xiaoxi',
      title: 'My platoon number',
      id: 'number'
    }, {
      icon: 'iconfont icon-lingdang',
      title: 'message',
      id: 'message'
    }, {
      icon: 'iconfont icon-fapiao',
      title: 'Point exchange',
      id: 'integral'
    }, {
      icon: 'iconfont icon-dingdan',
      title: 'My order',
      id: 'order'
    }, {
      icon: 'iconfont icon-iconfontruzhu-copy',
      title: 'Merchant settlement',
      id: 'merchant'
    }]
  },

  /**
   * Life cycle function -- listening for page loading
   */
  onLoad: function onLoad() {
    this.setData({
      userInfo: app.data.userInfo
    });
    // TODO: onLoad
  },


  /**
   * Life cycle function -- monitor the completion of the first rendering of the page
   */
  onReady: function onReady() {
    // TODO: onReady
  },


  /**
   * Life cycle function -- monitor page display
   */
  onShow: function onShow() {
    // TODO: onShow
  },


  /**
   * Life cycle function -- listening for page hiding
   */
  onHide: function onHide() {
    // TODO: onHide
  },


  /**
   * Life cycle function -- monitor page unloading
   */
  onUnload: function onUnload() {
    // TODO: onUnload
  },


  /**
   * Page related event handling function -- listening to user drop-down actions
   */
  onPullDownRefresh: function onPullDownRefresh() {
    // TODO: onPullDownRefresh
    wx.stopPullDownRefresh()
  }
});
//# sourceMappingURL=user.js.map
