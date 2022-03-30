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
    userInfo: null
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
