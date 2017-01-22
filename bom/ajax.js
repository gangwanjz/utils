import _ from 'lodash-compat';

/**
 * fetch 请求
 * @param url 请求的url
 * @param param 请求的参数
 * @param success 请求成功的回调
 * @param error 请求失败的回调
 * @param options 请求的其他配置参数
 */
function ajax(url, param, success, error, options) {
  var _options = _.assign({}, options);
  if (!options) {
    options = {};
  }
  _options.method = (options.method && options.method.toLocaleUpperCase() == 'GET') ? "GET" : "POST";
  if (!_options.headers) {
    _options.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  } else {
    (!_options.headers['Accept']) && (_options.headers['Accept'] = 'application/json');
    (!_options.headers['Content-Type']) && (_options.headers['Content-Type'] = 'application/json');
  }
  if (!_.isEmpty(param)) {
    try {
      _options.body = JSON.stringify(param);
    } catch (e) {
      console.error('JSON stringify error', param);
    }
  }
  (!options['credentials']) && (_options['credentials'] = 'same-origin');
  fetch(url, _options).then(function (_res) {
    if (_res.ok) {
      _res.json().then(function (res) {
        if (res.status == "1") {
          if (success) {
            success(res.data);
          }
        } else if (res.status == "0") {
          if (res.data && res.data.errorCode == "403" || res.data.errorCode == "99") {
            // FIXME 后边需要加进来 重新登录的提示
            //workspace&&(workspace.showDialog({
            //    title: "提示",
            //    content: "用户登录状态失效，需重新登录!",
            //    handler: function () {
            //        window.location.reload();
            //    }
            //}, 'alert'));
          } else {
            if (error) {
              error(res.data);
            } else {
              console.error("AJAX 返回 status 为 0", res);
            }
          }
        }
      });
    } else {
      // TODO: 需要做处理
      console.error("Looks like the response wasn't perfect, got status", _res.status);
    }
  }, function (res) {
    if (error) {
      try {
        var data = JSON.parse(res.responseText).data;
      } catch (e) {
      }
      if (data && data.errorCode && data.message) {
        error(data);
      } else {
        error({message: "未知错误！"});
      }
    } else {
      console.error("AJAX 错误", res);
    }
  });
}

export default ajax;
