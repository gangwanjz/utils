/**
 * 使用 import { default as x } from 'x' 而是不是 import x from 'x'，
 * 是为了让当前版本 WebStorm 的可以正常的代码提示
 * TODO: 等待 WebStorm 支持 import x from 'x' 的代码提示
 */

import classNames from 'classnames';

import { default as Datetime } from './data/Datetime';
import { default as mergeModel } from './data/mergeModel';
import { default as roundFloat } from './data/roundFloat';
import { default as template } from './data/template';
import { default as toObject } from './data/toObject';
import { default as toPairs } from './data/toPairs';

import { default as ajax } from './bom/ajax';
import { default as autoRelogin } from './bom/autoRelogin';
import { default as cookie } from './bom/cookie';
import { default as delayAsync } from './bom/delayAsync';
import { default as getOuterHeight } from './bom/getOuterHeight';
import { default as HashPrefix } from './bom/HashPrefix';
import { default as localStorage } from './bom/localStorage';
import { default as print } from './bom/print';
import { default as regularApi, ApiError, ApiStatusError } from './bom/regularApi';
import { default as sessionStorage } from './bom/sessionStorage';

import { default as promisify } from './func/promisify';

import { default as BaseComponent } from './react/BaseComponent';
import { default as ContextMixin } from './react/ContextMixin';
import { default as FormatMixin } from './react/FormatMixin';
import { propLink, propLinkRelay } from './react/propLink';
import { default as reactExtras } from './react/reactExtras';
import { default as reactMixin } from './react/reactMixin';
import { default as toReactElement } from './react/toReactElement';
import { default as valueLink } from './react/valueLink';

export default {
  classNames,
  formatDatetime: Datetime.format,
  parseDatetime: Datetime.parse,
  mergeModel,
  roundFloat,
  template,
  toObject,
  toPairs,

  ApiError,
  ApiStatusError,
  ajax,
  autoRelogin,
  cookie,
  delayAsync,
  getOuterHeight,
  HashPrefix,
  localStorage,
  LS: localStorage,
  print,
  regularApi,
  sessionStorage,

  promisify,

  BaseComponent,
  ContextMixin,
  FormatMixin,
  propLink,
  propLinkRelay,
  reactExtras,
  reactMixin,
  toReactElement,
  valueLink,
}
