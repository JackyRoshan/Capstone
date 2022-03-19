'use strict';

// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'useroperation',
    operation: null,
    numberList: {
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name: 'canteen',
      kind: 'Hunan cuisine',
      average: 88,
      distance: 453,
      desk: 'C2',
      wait: 5
    },
    message: [{
      title: 'Title1',
      id: 'message1',
      content: 'fdsfsfsdfds',
      time: '2012-12-12'
    }, {
      title: 'Title2',
      id: 'message2',
      content: 'fsdfsfsdsdfdsf',
      time: '2012-12-12'
    }],
    integral: [{
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      integralid: 'renma1',
      name: 'Canteen',
      delMoney: 20,
      useMoney: 100,
      needIntegral: 200
    }, {
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      integralid: 'renma2',
      name: 'Canteen',
      delMoney: 20,
      useMoney: 100,
      needIntegral: 200
    }, {
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name: 'Canteen',
      integralid: 'renma3',
      delMoney: 20,
      useMoney: 100,
      needIntegral: 200
    }],
    currentCouponTab: 0,
    couponNumber: [{
      title: 'unuse',
      count: 6
    }, {
      title: 'Usage record',
      count: 0
    }, {
      title: 'Expired',
      count: 0
    }],
    couponNoUseList: [{
      name: 'Canteen',
      id: 'shopId',
      delMoney: 100,
      useCondition: 'Consumption ready to use',
      starTime: '2015.12.01',
      endTime: '2016.12.03'
    }, {
      name: 'Canteen',
      id: 'shopId',
      delMoney: 100,
      useCondition: 'Available at 1000',
      starTime: '2015.12.01',
      endTime: '2016.12.03'
    }, {
      name: 'Canteen',
      id: 'shopId',
      discount: 5,
      useCondition: 'Available at 100',
      starTime: '2015.12.01',
      endTime: '2016.12.03'
    }],
    couponUseList: [{
      name: 'Canteen',
      id: 'shopId',
      delMoney: 190,
      useCondition: 'Consumption ready to use',
      starTime: '2015.12.01',
      endTime: '2016.12.03'
    }, {
      name: 'haha',
      id: 'shopId',
      delMoney: 100,
      useCondition: 'Available at 1000',
      starTime: '2015.12.01',
      endTime: '2016.12.03'
    }, {
      name: 'Canteen',
      id: 'shopId',
      discount: 5,
      useCondition: 'Available at 100',
      starTime: '2015.12.01',
      endTime: '2016.12.03'
    }],
    orderNumber: ['To be paid', 'whole'],
    orderList: {
      pay: [{
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: 'Canteen',
        code: 'No12312312',
        time: '2017-03-26 17:26',
        money: '238'
      }],
      finish: [{
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: 'Canteen',
        code: 'No12312312',
        time: '2017-03-26 17:26',
        money: '238',
        delMoney: '23',
        actMoney: '215',
        restaurantId: 'No123123',
        waiterId: 'waiter123123'
      }],
      cancel: [{
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: 'Canteen',
        code: 'No12312312',
        time: '2017-03-26 17:26',
        money: '238'
      }]
    },
    shopArray: ['Please select business category', 'Hunan cuisine', 'Sichuan cuisine', 'Cantonese cuisine', 'Shaxian snacks', 'Hui cuisine', 'tea cake'],
    index: 0,
    showMessage: null
  },
  /**
   * 输入店名保存
   * @param e
   */
  shopNameInput: function shopNameInput(e) {
    this.setData({
      shopName: e.detail.value
    });
  },

  /**
   * 选择消息显示
   */
  chooseMessage: function chooseMessage(e) {
    this.setData({
      showMessage: e.currentTarget.dataset.message
    });
  },

  /**
   * 设置couponTab
   * @param e
   */
  chooseCouponTab: function chooseCouponTab(e) {
    this.setData({
      currentCouponTab: e.currentTarget.dataset.tabid
    });
  },

  /**
   * 去支付
   * @param e
   */
  goPay: function goPay(e) {
    wx.navigateTo({
      url: '../payorder/payorder?id=' + e.currentTarget.dataset.id
    });
  },

  /**
   * 去打分或者打赏
   * @param e
   */
  goGratuity: function goGratuity(e) {
    var restaurantId = e.currentTarget.dataset.restaurantid;
    var waiterId = e.currentTarget.dataset.waiterid;
    var kind = e.currentTarget.dataset.kind;
    var url = '';
    if (kind === 'shop') {
      url = '../grade/grade?restaurantId=' + restaurantId;
    } else {
      url = '../gratuity/gratuity?waiterId=' + waiterId;
    }
    wx.navigateTo({
      url: url
    });
  },

  /**
   * 选择经营品类
   */
  chooseShopKind: function chooseShopKind(e) {
    this.setData({
      index: e.detail.value
    });
  },

  /**
   * 开始上传商家入驻相关信息
   */
  startShop: function startShop() {
    // todo 入驻信息添加到缓存中
    if (!this.data.shopName || this.data.index === 0) {
      return wx.showModal({
        title: 'Incomplete information',
        content: 'Please complete the supplementary information',
        showCancel: false
      });
    }
    wx.redirectTo({
      url: '../businessCooperation/businessCooperation?shopName=' + this.data.shopName + '&shopKind=' + this.data.shopArray[this.data.index]
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(params) {
    // 由跳转链接设置标题
    var operation = params.operation;
    // 设置operation
    this.setData({
      operation: params.operation
    });
    // 判断传入类型
    if (operation === 'number') {
      operation = 'My platoon number';
    } else if (operation === 'message') {
      operation = 'news';
    } else if (operation === 'integral') {
      operation = 'Point exchange';
    } else if (operation === 'order') {
      operation = 'My order';
    } else if (operation === 'merchant') {
      operation = 'Merchant settlement';
    } else {
      operation = 'coupon';
    }
    // 设置导航栏标题
    wx.setNavigationBarTitle({
      title: operation
    });
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
//# sourceMappingURL=useroperation.js.map
