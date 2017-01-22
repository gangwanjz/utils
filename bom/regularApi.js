
function ApiError({ message, errorCode, ...data }) {
  this.name = 'ApiError';
  this.message = message;
  this.errorCode = errorCode;
  this.data = data;
  this.stack = (new Error()).stack;
}
ApiError.prototype = Object.create(Error.prototype);
ApiError.prototype.constructor = ApiError;

function ApiStatusError() {
  ApiError.apply(this, arguments);
}
ApiStatusError.prototype = Object.create(ApiError.prototype);
ApiStatusError.prototype.constructor = ApiStatusError;

let _apiError = new ApiError({});

async function regularApi(url, params) {
  try {
    var res = await fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',  // FIXME: 使登录失效时不往 SSO 不跳转，临时方案
      },
      body: JSON.stringify(params),
      credentials: 'same-origin',
    });
    res = await res.json();
  } catch (e) {
    e.__proto__ = _apiError;
    throw e;
  }
  if (res.status === 1) {
    return res.data;
  } else {
    throw new ApiStatusError(res.data);
  }
}

export default regularApi;
export { ApiError, ApiStatusError };
