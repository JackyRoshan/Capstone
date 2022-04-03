'use strict';

/**
 * API module
 * @type {Object}

 */
var wechat = require('./utils/wechat');
var Promise = require('./utils/bluebird');

App({
  /**
   * Global shared
   * Any member can be defined for sharing in the whole application
   */
  data: {
    name: 'WeApp Boilerplate',
    version: '0.1.0',
    userInfo: null,
        restaurant:[
      //5个餐馆的对应数据

      {//1号餐馆
        img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Hamburger.webp',
        name: 'Hamburger',
        id: '1',
        tel: '123412341234',
        status: 'working',
        grade: 'four-star',
        gradeNumber: '4.8',
        //评价
        comment: [{
          content: '服务态度好',
          number: '932'
        }, {
          content: '食材新鲜',
          number: '932'
        }, {
          content: '味道赞',
          number: '932'
        }, {
          content: '一',
          number: '9132'
        }, {
          content: '两个',
          number: '9132'
        }, {
          content: '四个个字',
          number: '9132'
        }, {
          content: '三个字',
          number: '9132'
        }],
        //菜单
        menuList: [{
          title: 'Snacks',
          id: 'list1',
          list: [{
            img: 'https://github.com/xinleif666/Capstone/blob/master/images/Colonel%20chicken%20nuggets.jpg?raw=true',
            name: 'Colonel chicken nuggets',
            count: '1305',
            good: '208',
            price: '5',
            id: 'list1_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Big%20chicken%20cutlet.webp',
            name: 'Big chicken cutlet',
            count: '1234',
            good: '324',
            price: '10',
            id: 'list1_2'
          }]
        }, {
          title: 'Burger',
          id: 'list2',
          list: [{
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Deep%20sea%20cod%20burger.webp',
            name: 'Deep sea cod burger',
            count: '798',
            good: '132',
            price: '7',
            id: 'list2_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Crisp%20beef%20burger.webp',
            name: 'Crisp beef burger',
            count: '690',
            good: '156',
            price: '7',
            id: 'list2_2'
          }]
        }, {
          title: 'Package',
          id: 'list3',
          list: [{
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Dragon%20Twister%20%2B%20Fries%20%2B%20Cola.webp',
            name: 'Dragon Twister + Fries + Cola',
            count: '543',
            good: '109',
            price: '18',
            id: 'list3_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Seven%20shrimp%20burger%20%2B%20Fries%20%2B%20Cola.webp',
            name: 'Seven shrimp burger + Fries + Cola',
            count: '409',
            good: '88',
            price: '14',
            id: 'list3_2'
          }]
        }, {
          title: 'Drinks',
          id: 'list4',
          list: [{
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Fanta.webp',
            name: 'Fanta',
            count: '201',
            good: '23',
            price: '3',
            id: 'list4_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Milk.webp',
            name: 'Milk',
            count: '102',
            good: '10',
            price: '4',
            id: 'list4_2'
          }]
        }],
        // 优惠券
        coupon: {
          id: 'code123123',
          delmoney: 10,
          condition: 100,
          time: '2022-12-12'
        }
      },
      {//2号餐馆--数据基本完善
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Fa044ad345982b2b7d0a2fe3455e6dcef76094a362da5&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651569627&t=fd1ee01853d290ceb80ffeb0985a4342',
        name: 'Beaf Rice',
        id: '2',
        tel: '123456789',
        status: 'rest',
        grade: 'four-star',
        gradeNumber: '4.0',
        //评价
        comment: [{
          content: '服务态度一般',
          number: '932'
        }, {
          content: '食材新鲜',
          number: '932'
        }, {
          content: '味道赞',
          number: '932'
        }, {
          content: '一',
          number: '9132'
        }, {
          content: '两个',
          number: '9132'
        }, {
          content: '四个个字',
          number: '9132'
        }, {
          content: '三个字',
          number: '9132'
        }],
        //菜单
        menuList: [{
          title: 'Beaf',
          id: 'list1', //子菜单1
          list: [{
            img: 'https://img2.baidu.com/it/u=2945226201,1747968739&fm=253&fmt=auto&app=138&f=JPEG?w=690&h=458',
            name: 'niunan rice', //牛腩饭
            count: '1305',
            good: '208',
            price: '25',
            id: 'list1_1' //子菜单1-第1项
          }, {
            img: 'https://pics5.baidu.com/feed/ae51f3deb48f8c54db2fb033d9c30cf3e1fe7f1a.jpeg?token=23140652fd8100bc36216f745926c181&s=E4E29845FA1054C6C4B05D300300C090',
            name: 'niurou rice',
            count: '1234',
            good: '324',
            price: '15',
            id: 'list1_2'
          }]
        }, {
          title: 'Noodle',
          id: 'list2', //子菜单2
          list: [{
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Deep%20sea%20cod%20burger.webp',
            name: 'niunan noodle',
            count: '798',
            good: '132',
            price: '17',
            id: 'list2_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Crisp%20beef%20burger.webp',
            name: 'red niurou noodle',
            count: '690',
            good: '156',
            price: '27',
            id: 'list2_2'
          }]
        }, {
          title: 'local dishes',
          id: 'list3', //子菜单3
          list: [{
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Dragon%20Twister%20%2B%20Fries%20%2B%20Cola.webp',
            name: 'fried beaf wanzi',
            count: '543',
            good: '109',
            price: '18',
            id: 'list3_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Seven%20shrimp%20burger%20%2B%20Fries%20%2B%20Cola.webp',
            name: 'fried niu ban jin',
            count: '409',
            good: '88',
            price: '24',
            id: 'list3_2'
          }]
        }, {
          title: 'Drinks', //每家店的饮料建议不改
          id: 'list4',
          list: [{
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Fanta.webp',
            name: 'Fanta',
            count: '201',
            good: '23',
            price: '3',
            id: 'list4_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Milk.webp',
            name: 'Milk',
            count: '102',
            good: '10',
            price: '4',
            id: 'list4_2'
          }]
        }],
        // 优惠券
        coupon: {
          id: 'code123123',
          delmoney: 10,
          condition: 100,
          time: '2022-12-12'
        }

      },
      {//3号餐馆
        img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Hamburger.webp',
        name: 'Hamburger',
        id: '1',
        tel: '123412341234',
        status: 'working',
        grade: 'four-star',
        gradeNumber: '4.8',
        //评价
        comment: [{
          content: '服务态度好',
          number: '932'
        }, {
          content: '食材新鲜',
          number: '932'
        }, {
          content: '味道赞',
          number: '932'
        }, {
          content: '一',
          number: '9132'
        }, {
          content: '两个',
          number: '9132'
        }, {
          content: '四个个字',
          number: '9132'
        }, {
          content: '三个字',
          number: '9132'
        }],
        //菜单
        menuList: [{
          title: 'Snacks',
          id: 'list1',
          list: [{
            img: 'https://github.com/xinleif666/Capstone/blob/master/images/Colonel%20chicken%20nuggets.jpg?raw=true',
            name: 'Colonel chicken nuggets',
            count: '1305',
            good: '208',
            price: '5',
            id: 'list1_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Big%20chicken%20cutlet.webp',
            name: 'Big chicken cutlet',
            count: '1234',
            good: '324',
            price: '10',
            id: 'list1_2'
          }]
        }, {
          title: 'Burger',
          id: 'list2',
          list: [{
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Deep%20sea%20cod%20burger.webp',
            name: 'Deep sea cod burger',
            count: '798',
            good: '132',
            price: '7',
            id: 'list2_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Crisp%20beef%20burger.webp',
            name: 'Crisp beef burger',
            count: '690',
            good: '156',
            price: '7',
            id: 'list2_2'
          }]
        }, {
          title: 'Package',
          id: 'list3',
          list: [{
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Dragon%20Twister%20%2B%20Fries%20%2B%20Cola.webp',
            name: 'Dragon Twister + Fries + Cola',
            count: '543',
            good: '109',
            price: '18',
            id: 'list3_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Seven%20shrimp%20burger%20%2B%20Fries%20%2B%20Cola.webp',
            name: 'Seven shrimp burger + Fries + Cola',
            count: '409',
            good: '88',
            price: '14',
            id: 'list3_2'
          }]
        }, {
          title: 'Drinks',
          id: 'list4',
          list: [{
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Fanta.webp',
            name: 'Fanta',
            count: '201',
            good: '23',
            price: '3',
            id: 'list4_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Milk.webp',
            name: 'Milk',
            count: '102',
            good: '10',
            price: '4',
            id: 'list4_2'
          }]
        }],
        // 优惠券
        coupon: {
          id: 'code123123',
          delmoney: 10,
          condition: 100,
          time: '2022-12-12'
        }

      },
      {//4号餐馆
        img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Hamburger.webp',
        name: 'Hamburger',
        id: '1',
        tel: '123412341234',
        status: 'working',
        grade: 'four-star',
        gradeNumber: '4.8',
        //评价
        comment: [{
          content: '服务态度好',
          number: '932'
        }, {
          content: '食材新鲜',
          number: '932'
        }, {
          content: '味道赞',
          number: '932'
        }, {
          content: '一',
          number: '9132'
        }, {
          content: '两个',
          number: '9132'
        }, {
          content: '四个个字',
          number: '9132'
        }, {
          content: '三个字',
          number: '9132'
        }],
        //菜单
        menuList: [{
          title: 'Snacks',
          id: 'list1',
          list: [{
            img: 'https://github.com/xinleif666/Capstone/blob/master/images/Colonel%20chicken%20nuggets.jpg?raw=true',
            name: 'Colonel chicken nuggets',
            count: '1305',
            good: '208',
            price: '5',
            id: 'list1_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Big%20chicken%20cutlet.webp',
            name: 'Big chicken cutlet',
            count: '1234',
            good: '324',
            price: '10',
            id: 'list1_2'
          }]
        }, {
          title: 'Burger',
          id: 'list2',
          list: [{
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Deep%20sea%20cod%20burger.webp',
            name: 'Deep sea cod burger',
            count: '798',
            good: '132',
            price: '7',
            id: 'list2_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Crisp%20beef%20burger.webp',
            name: 'Crisp beef burger',
            count: '690',
            good: '156',
            price: '7',
            id: 'list2_2'
          }]
        }, {
          title: 'Package',
          id: 'list3',
          list: [{
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Dragon%20Twister%20%2B%20Fries%20%2B%20Cola.webp',
            name: 'Dragon Twister + Fries + Cola',
            count: '543',
            good: '109',
            price: '18',
            id: 'list3_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Seven%20shrimp%20burger%20%2B%20Fries%20%2B%20Cola.webp',
            name: 'Seven shrimp burger + Fries + Cola',
            count: '409',
            good: '88',
            price: '14',
            id: 'list3_2'
          }]
        }, {
          title: 'Drinks',
          id: 'list4',
          list: [{
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Fanta.webp',
            name: 'Fanta',
            count: '201',
            good: '23',
            price: '3',
            id: 'list4_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Milk.webp',
            name: 'Milk',
            count: '102',
            good: '10',
            price: '4',
            id: 'list4_2'
          }]
        }],
        // 优惠券
        coupon: {
          id: 'code123123',
          delmoney: 10,
          condition: 100,
          time: '2022-12-12'
        }

      },
      {//5号餐馆
        img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Hamburger.webp',
        name: 'Hamburger',
        id: '1',
        tel: '123412341234',
        status: 'working',
        grade: 'four-star',
        gradeNumber: '4.8',
        //评价
        comment: [{
          content: '服务态度好',
          number: '932'
        }, {
          content: '食材新鲜',
          number: '932'
        }, {
          content: '味道赞',
          number: '932'
        }, {
          content: '一',
          number: '9132'
        }, {
          content: '两个',
          number: '9132'
        }, {
          content: '四个个字',
          number: '9132'
        }, {
          content: '三个字',
          number: '9132'
        }],
        //菜单
        menuList: [{
          title: 'Snacks',
          id: 'list1',
          list: [{
            img: 'https://github.com/xinleif666/Capstone/blob/master/images/Colonel%20chicken%20nuggets.jpg?raw=true',
            name: 'Colonel chicken nuggets',
            count: '1305',
            good: '208',
            price: '5',
            id: 'list1_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Big%20chicken%20cutlet.webp',
            name: 'Big chicken cutlet',
            count: '1234',
            good: '324',
            price: '10',
            id: 'list1_2'
          }]
        }, {
          title: 'Burger',
          id: 'list2',
          list: [{
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Deep%20sea%20cod%20burger.webp',
            name: 'Deep sea cod burger',
            count: '798',
            good: '132',
            price: '7',
            id: 'list2_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Crisp%20beef%20burger.webp',
            name: 'Crisp beef burger',
            count: '690',
            good: '156',
            price: '7',
            id: 'list2_2'
          }]
        }, {
          title: 'Package',
          id: 'list3',
          list: [{
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Dragon%20Twister%20%2B%20Fries%20%2B%20Cola.webp',
            name: 'Dragon Twister + Fries + Cola',
            count: '543',
            good: '109',
            price: '18',
            id: 'list3_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Seven%20shrimp%20burger%20%2B%20Fries%20%2B%20Cola.webp',
            name: 'Seven shrimp burger + Fries + Cola',
            count: '409',
            good: '88',
            price: '14',
            id: 'list3_2'
          }]
        }, {
          title: 'Drinks',
          id: 'list4',
          list: [{
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Fanta.webp',
            name: 'Fanta',
            count: '201',
            good: '23',
            price: '3',
            id: 'list4_1'
          }, {
            img: 'https://raw.githubusercontent.com/xinleif666/Capstone/master/images/Milk.webp',
            name: 'Milk',
            count: '102',
            good: '10',
            price: '4',
            id: 'list4_2'
          }]
        }],
        // 优惠券
        coupon: {
          id: 'code123123',
          delmoney: 10,
          condition: 100,
          time: '2022-12-12'
        }

      }
    ]
  },

  other: 'other variables',

  /**
   * Get user information
   */
  getUserInfo: function getUserInfo() {
    var _this = this;

    return new Promise(function (resolve, reject) {
      if (_this.data.userInfo) return reject(_this.data.userInfo);
      wechat.login().then(function () {
        return wechat.getUserInfo();
      }).then(function (res) {
        return res.userInfo;
      }).then(function (info) {
        return _this.data.userInfo = info;
      }).then(function (info) {
        return resolve(info);
      }).catch(function (error) {
        return console.error('failed to get user info, error: ' + error);
      });
    });
  },


  /**
   * Life cycle function -- listen for applet initialization
   * When the applet initialization is completed, onlaunch will be triggered (only triggered once globally)
   */
  onLaunch: function onLaunch() {
    console.log(' ========== Application is launched ========== ');
  },

  /**
   * Life cycle function -- monitor applet display
   * When the applet starts or enters the foreground display from the background, Onshow will be triggered
   */
  onShow: function onShow() {
    console.log(' ========== Application is showed ========== ');
  },

  /**
   * Life cycle function -- listening for applet hiding
   * When the applet enters the background from the foreground, onhide will be triggere
   */
  onHide: function onHide() {
    console.log(' ========== Application is hid ========== ');
  }
});
//# sourceMappingURL=app.js.map
