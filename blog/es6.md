### this

请问下面的代码之中，this的指向有几个？
```
function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}

var f = foo.call({id: 1});

var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1
```


### promise 

- 三个状态 pendding  resolve reject 
- 使用then方法，接收 两个参数 （函数）
- 手写promise【自定义】覆盖全局，使用内置
  - 引入自己写的promise.js，创建个构造方法Promise
  - 添加then方法 使用原型链
   ```
   Promise.prototype.then = function (onResolved,onReject)
   {

   }
   ```
- 解决了回调地狱的问题 
- 封装微信小程序的请求方法上，直接导入request.js就好
  ```
  
    const baseURL = 'http://demo.api.xxx.com';

    /**
     *  使用Promise 对wx.request进行分装
     * @param {*} params 
     */

    function request(params = { methods, url, data }) {
      return  new Promise(function (resolve,reject) {
        wx.request({
          url: baseURL + params.url,
          method: params.method,
          data: params.data ? JSON.stringify(params.data) : null,
          header: { 
            'Content-Type': 'application/json',
            'accessToken': ''
           },
          timeout: 5000,
          success(res) { 
            if (res.statusCode == 200) {
              if (res.data.code == 0) {
                resolve(res.data);
              } else {
                wx.showToast({
                  title: '提示',
                  content: res.data.msg,
                  showCancel: false,
                  success:function(res) {}
                })
                reject(res,data);
              }
            } else {
              wx.showToast({
                title: '提示',
                content: '网络请求超时！',
                showCancel: false,
                success: function(res) {}
              })
              reject();
            } 

          },
          fail (err) {
            reject(err)
          }
        })
      })
    }

    module.exports = {
      request: request
    }
    
  在请求方法下 引入api
    const { request }  = require('../utils/request');

    // 获取全部数据
    function getList() {
      return request({
        url: '/manager/list', 
        method: 'GET'
      })
    }
  ```

  

### 工作中如何提高效率

 1.map循环找出键值对  比如换挡我们需要到一个