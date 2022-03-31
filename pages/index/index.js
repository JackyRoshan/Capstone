'use strict';

// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'index',
    userInfo: null,
    userSite: 'Locating',
    navList: [{
      navTitle: 'Order',
      navIcon: 'iconfont icon-shalou'
    }, {
      navTitle: 'Recommended',
      navIcon: 'iconfont icon-chuliyuyue'
    }, {
      navTitle: "Special",
      navIcon: 'iconfont icon-erweima'
    }],
    hotShop: [{
      shopImg: '../../images/Hamburger.webp',
      shopName: 'Hamburger'
    }, {
      shopImg: '../../images/F+.webp',
      shopName: 'F+ Beef Rice'
    }, {
      shopImg: '../../images/XianShangYu.webp',
      shopName: 'Xian-Shang-Yu'
    }, {
      shopImg: '../../images/ClanNoodle.jpg',
      shopName: 'Hi Clan Noodles'
    }, {
      shopImg: '../../images/Rice Noodle.webp',
      shopName: 'Rice Noodle'
    }, {
      shopImg: '../../images/Pork Chicken.webp',
      shopName: 'Pork Chicken'
    }],
    
    imgUrls: ['../../images/Cafeteria_1.webp', '../../images/Cafeteria_2.webp', '../../images/Cafeteria_3.jpg']
  },
  /**
   * 用户选择位置
   * @returns {boolean}
   */
  chooseLocation: function chooseLocation() {
    // console.log(1)
    var that = this;
    wx.chooseLocation({
      success: function success(res) {
        console.log(res);
        if (res.name.length <= 0) {
          return that.setData({
            userSite: res.address
          });
        }
        that.setData({
          userSite: res.name
        });
      }
    });
  },

  /**
   * 用户搜索
   */
  goSearch: function goSearch() {
    wx.navigateTo({
      url: '../search/search'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad() {
    var _this = this;

    wx.getLocation({
      success: function success(res) {
        console.log(res);
      }
    });
    console.log(' ---------- onLoad ----------');
    // console.dir(app.data)
    app.getUserInfo().then(function (info) {
      return _this.setData({ userInfo: info });
    }).catch(console.info);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {
    console.log(' ---------- onReady ----------');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    console.log(' ---------- onShow ----------');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {
    console.log(' ---------- onHide ----------');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {
    console.log(' ---------- onUnload ----------');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {
    console.log(' ---------- onPullDownRefresh ----------');
    wx.stopPullDownRefresh()
  }
});
//# sourceMappingURL=index.js.map
