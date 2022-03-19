'use strict';

// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad() {
    this.setData({
      userInfo: app.data.userInfo
    });
    // TODO: onLoad
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {
    // TODO: onReady
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    // TODO: onShow
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {
    // TODO: onHide
  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {
    // TODO: onUnload
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {
    // TODO: onPullDownRefresh
  }
});
//# sourceMappingURL=user.js.map
