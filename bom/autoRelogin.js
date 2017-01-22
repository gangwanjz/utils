/* 登录失效，前三次自动刷新，用Cookie存储，默认第二天凌晨1点失效 */

import cookie from './cookie';

let refreshing = false;

function autoRelogin(maxTimes=3) {
  if (refreshing) return true;
  let loginInvalidTimes = cookie.get('login_invalid_times') || 0;
  if (loginInvalidTimes < maxTimes) {
    cookie.set('login_invalid_times', ++loginInvalidTimes, new Date().setHours(26, 0, 0, 0));
    location.reload();
    return true;
  } else {
    return false;
  }
}

export default autoRelogin;
