/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emailjs/browser/es/api/sendPost.js"
/*!**********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/api/sendPost.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendPost: () => (/* binding */ sendPost)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");


const sendPost = async (url, data, headers = {}) => {
    const response = await fetch(_store_store__WEBPACK_IMPORTED_MODULE_1__.store.origin + url, {
        method: 'POST',
        headers,
        body: data,
    });
    const message = await response.text();
    const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(response.status, message);
    if (response.ok) {
        return responseStatus;
    }
    throw responseStatus;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js"
/*!****************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockedEmailError: () => (/* binding */ blockedEmailError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const blockedEmailError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(403, 'Forbidden');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js"
/*!********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headlessError: () => (/* binding */ headlessError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const headlessError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(451, 'Unavailable For Headless Browser');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   limitRateError: () => (/* binding */ limitRateError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const limitRateError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(429, 'Too Many Requests');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/index.js"
/*!***************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/index.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailJSResponseStatus: () => (/* reexport safe */ _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   init: () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_1__.init),
/* harmony export */   send: () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_2__.send),
/* harmony export */   sendForm: () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/init/init */ "./node_modules/@emailjs/browser/es/methods/init/init.js");
/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/send/send */ "./node_modules/@emailjs/browser/es/methods/send/send.js");
/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    init: _methods_init_init__WEBPACK_IMPORTED_MODULE_1__.init,
    send: _methods_send_send__WEBPACK_IMPORTED_MODULE_2__.send,
    sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm,
    EmailJSResponseStatus: _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus,
});


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/init/init.js"
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/init/init.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");


/**
 * EmailJS global SDK config
 * @param {object} options - the EmailJS global SDK config options
 * @param {string} origin - the non-default EmailJS origin
 */
const init = (options, origin = 'https://api.emailjs.com') => {
    if (!options)
        return;
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_1__.buildOptions)(options);
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey = opts.publicKey;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless = opts.blockHeadless;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider = opts.storageProvider;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList = opts.blockList;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate = opts.limitRate;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.origin = opts.origin || origin;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/send/send.js"
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/send/send.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   send: () => (/* binding */ send)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/@emailjs/browser/es/api/sendPost.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");
/* harmony import */ var _utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validateParams/validateParams */ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js");
/* harmony import */ var _utils_validateTemplateParams_validateTemplateParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateTemplateParams/validateTemplateParams */ "./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js");
/* harmony import */ var _utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/isHeadless/isHeadless */ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js");
/* harmony import */ var _errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/headlessError/headlessError */ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js");
/* harmony import */ var _utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/isBlockedValueInParams/isBlockedValueInParams */ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js");
/* harmony import */ var _errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors/blockedEmailError/blockedEmailError */ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js");
/* harmony import */ var _utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/isLimitRateHit/isLimitRateHit */ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js");
/* harmony import */ var _errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../errors/limitRateError/limitRateError */ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js");











/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templateParams - the template params, what will be set to the EmailJS template
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = async (serviceID, templateID, templateParams, options) => {
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__.buildOptions)(options);
    const publicKey = opts.publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey;
    const blockHeadless = opts.blockHeadless || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless;
    const storageProvider = opts.storageProvider || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider;
    const blockList = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList, ...opts.blockList };
    const limitRate = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate, ...opts.limitRate };
    if (blockHeadless && (0,_utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__.isHeadless)(navigator)) {
        return Promise.reject((0,_errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__.headlessError)());
    }
    (0,_utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_3__.validateParams)(publicKey, serviceID, templateID);
    (0,_utils_validateTemplateParams_validateTemplateParams__WEBPACK_IMPORTED_MODULE_4__.validateTemplateParams)(templateParams);
    if (templateParams && (0,_utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__.isBlockedValueInParams)(blockList, templateParams)) {
        return Promise.reject((0,_errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__.blockedEmailError)());
    }
    if (await (0,_utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0,_errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__.limitRateError)());
    }
    const params = {
        lib_version: '4.4.1',
        user_id: publicKey,
        service_id: serviceID,
        template_id: templateID,
        template_params: templateParams,
    };
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_1__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendForm: () => (/* binding */ sendForm)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/@emailjs/browser/es/api/sendPost.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");
/* harmony import */ var _utils_validateForm_validateForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validateForm/validateForm */ "./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js");
/* harmony import */ var _utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateParams/validateParams */ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js");
/* harmony import */ var _utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/isHeadless/isHeadless */ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js");
/* harmony import */ var _errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/headlessError/headlessError */ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js");
/* harmony import */ var _utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/isBlockedValueInParams/isBlockedValueInParams */ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js");
/* harmony import */ var _errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors/blockedEmailError/blockedEmailError */ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js");
/* harmony import */ var _utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/isLimitRateHit/isLimitRateHit */ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js");
/* harmony import */ var _errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../errors/limitRateError/limitRateError */ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js");











const findHTMLForm = (form) => {
    return typeof form === 'string' ? document.querySelector(form) : form;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = async (serviceID, templateID, form, options) => {
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__.buildOptions)(options);
    const publicKey = opts.publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey;
    const blockHeadless = opts.blockHeadless || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless;
    const storageProvider = _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider || opts.storageProvider;
    const blockList = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList, ...opts.blockList };
    const limitRate = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate, ...opts.limitRate };
    if (blockHeadless && (0,_utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__.isHeadless)(navigator)) {
        return Promise.reject((0,_errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__.headlessError)());
    }
    const currentForm = findHTMLForm(form);
    (0,_utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_4__.validateParams)(publicKey, serviceID, templateID);
    (0,_utils_validateForm_validateForm__WEBPACK_IMPORTED_MODULE_3__.validateForm)(currentForm);
    const formData = new FormData(currentForm);
    if ((0,_utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__.isBlockedValueInParams)(blockList, formData)) {
        return Promise.reject((0,_errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__.blockedEmailError)());
    }
    if (await (0,_utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0,_errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__.limitRateError)());
    }
    formData.append('lib_version', '4.4.1');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', publicKey);
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_1__.sendPost)('/api/v1.0/email/send-form', formData);
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailJSResponseStatus: () => (/* binding */ EmailJSResponseStatus)
/* harmony export */ });
class EmailJSResponseStatus {
    constructor(_status = 0, _text = 'Network Error') {
        this.status = _status;
        this.text = _text;
    }
}


/***/ },

/***/ "./node_modules/@emailjs/browser/es/store/store.js"
/*!*********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/store/store.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _utils_createWebStorage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createWebStorage/createWebStorage */ "./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js");

const store = {
    origin: 'https://api.emailjs.com',
    blockHeadless: false,
    storageProvider: (0,_utils_createWebStorage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__.createWebStorage)(),
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildOptions: () => (/* binding */ buildOptions)
/* harmony export */ });
const buildOptions = (options) => {
    if (!options)
        return {};
    // support compatibility with SDK v3
    if (typeof options === 'string') {
        return {
            publicKey: options,
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (options.toString() === '[object Object]') {
        return options;
    }
    return {};
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWebStorage: () => (/* binding */ createWebStorage)
/* harmony export */ });
const createWebStorage = () => {
    if (typeof localStorage === 'undefined')
        return;
    return {
        get: (key) => Promise.resolve(localStorage.getItem(key)),
        set: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
        remove: (key) => Promise.resolve(localStorage.removeItem(key)),
    };
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBlockedValueInParams: () => (/* binding */ isBlockedValueInParams)
/* harmony export */ });
/* harmony import */ var _validateBlockListParams_validateBlockListParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validateBlockListParams/validateBlockListParams */ "./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js");

const isBlockListDisabled = (options) => {
    return !options.list?.length || !options.watchVariable;
};
const getValue = (data, name) => {
    return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options, params) => {
    if (isBlockListDisabled(options))
        return false;
    (0,_validateBlockListParams_validateBlockListParams__WEBPACK_IMPORTED_MODULE_0__.validateBlockListParams)(options.list, options.watchVariable);
    const value = getValue(params, options.watchVariable);
    if (typeof value !== 'string')
        return false;
    return options.list.includes(value);
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHeadless: () => (/* binding */ isHeadless)
/* harmony export */ });
const isHeadless = (navigator) => {
    return navigator.webdriver || !navigator.languages || navigator.languages.length === 0;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLimitRateHit: () => (/* binding */ isLimitRateHit)
/* harmony export */ });
/* harmony import */ var _validateLimitRateParams_validateLimitRateParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validateLimitRateParams/validateLimitRateParams */ "./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js");

const getLeftTime = async (id, throttle, storage) => {
    const lastTime = Number((await storage.get(id)) || 0);
    return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (defaultID, options, storage) => {
    if (!options.throttle || !storage) {
        return false;
    }
    (0,_validateLimitRateParams_validateLimitRateParams__WEBPACK_IMPORTED_MODULE_0__.validateLimitRateParams)(options.throttle, options.id);
    const id = options.id || defaultID;
    const leftTime = await getLeftTime(id, options.throttle, storage);
    if (leftTime > 0) {
        return true;
    }
    await storage.set(id, Date.now().toString());
    return false;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateBlockListParams: () => (/* binding */ validateBlockListParams)
/* harmony export */ });
const validateBlockListParams = (list, watchVariable) => {
    if (!Array.isArray(list)) {
        throw 'The BlockList list has to be an array';
    }
    if (typeof watchVariable !== 'string') {
        throw 'The BlockList watchVariable has to be a string';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateForm: () => (/* binding */ validateForm)
/* harmony export */ });
const validateForm = (form) => {
    if (!form || form.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of the form';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateLimitRateParams: () => (/* binding */ validateLimitRateParams)
/* harmony export */ });
const validateLimitRateParams = (throttle, id) => {
    if (typeof throttle !== 'number' || throttle < 0) {
        throw 'The LimitRate throttle has to be a positive number';
    }
    if (id && typeof id !== 'string') {
        throw 'The LimitRate ID has to be a non-empty string';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateParams: () => (/* binding */ validateParams)
/* harmony export */ });
const validateParams = (publicKey, serviceID, templateID) => {
    if (!publicKey || typeof publicKey !== 'string') {
        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
    }
    if (!serviceID || typeof serviceID !== 'string') {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID || typeof templateID !== 'string') {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateTemplateParams: () => (/* binding */ validateTemplateParams)
/* harmony export */ });
const validateTemplateParams = (templateParams) => {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (templateParams && templateParams.toString() !== '[object Object]') {
        throw 'The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/';
    }
};


/***/ },

/***/ "./src/scripts/ContactForm.js"
/*!************************************!*\
  !*** ./src/scripts/ContactForm.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/browser */ "./node_modules/@emailjs/browser/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



/* =========================================================================
 *  CONFIG — reemplaza estos valores con tus claves reales
 * ========================================================================= */

const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const RECAPTCHA_SITE_KEY = "YOUR_RECAPTCHA_V3_SITE_KEY";
/* ========================================================================= */

const PHONE_DISPLAY = "770 708 8749";
const TRAILERS_BY_TYPE = {
  dump: ["16' Dump — Down 2 Earth", "Load Trail Dump"],
  enclosed: ["Enclosed 14' x 7' x 7'", "Spartan Cargo Enclosed"],
  hauler: ['Car Hauler 87" x 20\'', 'Car Hauler 102" x 20\'']
};
const ALL_TRAILERS = [...TRAILERS_BY_TYPE.dump, ...TRAILERS_BY_TYPE.enclosed, ...TRAILERS_BY_TYPE.hauler];
const ALL_OPTIONS = [...ALL_TRAILERS, "Not sure yet"];

// Segmentos del control de tipo (mismos íconos que el navbar / la home).
const TRAILER_TYPES = [{
  id: "all",
  label: "All",
  Icon: GridIcon
}, {
  id: "dump",
  label: "Dump",
  Icon: DumpIcon
}, {
  id: "enclosed",
  label: "Enclosed",
  Icon: EnclosedIcon
}, {
  id: "hauler",
  label: "Hauler",
  Icon: HaulerIcon
}];

// Tipo al que pertenece un remolque (para preseleccionar desde data-trailer).
function typeOf(trailer) {
  for (const t of Object.keys(TRAILERS_BY_TYPE)) {
    if (TRAILERS_BY_TYPE[t].includes(trailer)) return t;
  }
  return "all";
}
// Opciones visibles del <select> según el tipo elegido.
function optionsForType(type) {
  const base = type === "all" ? ALL_TRAILERS : TRAILERS_BY_TYPE[type] || ALL_TRAILERS;
  return [...base, "Not sure yet"];
}
// En modo compacto (hero) no hay <select>: el tipo ES la selección. Esto va al email.
const TYPE_LABEL = {
  all: "Not sure yet",
  dump: "Dump trailer",
  enclosed: "Enclosed trailer",
  hauler: "Car hauler"
};
const isConfigured = v => v && !v.startsWith("YOUR_");
const todayStr = new Date().toLocaleDateString("en-CA");

/* -------------------------------------------------------------------------
 *  Validación por campo (patrón "touched": valida en blur, revalida al
 *  cambiar una vez tocado). Mensajes: qué pasó + qué hacer, en una línea.
 * ---------------------------------------------------------------------- */
function validate(name, value, all) {
  switch (name) {
    case "from_name":
      return value.trim() ? "" : "Enter your full name.";
    case "phone":
      return value.trim().length >= 7 ? "" : "Enter a phone we can reach you at.";
    case "reply_to":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter a valid email address.";
    case "trailer":
      return value ? "" : "Pick a trailer (or “Not sure yet”).";
    case "pickup_date":
      return value ? "" : "Choose a pickup date.";
    case "return_date":
      if (!value) return "Choose a return date.";
      if (all.pickup_date && value < all.pickup_date) return "Return can't be before pickup.";
      return "";
    case "requirements_ack":
      return value ? "" : "Please confirm the rental requirements.";
    default:
      return "";
  }
}
const REQUIRED = ["from_name", "phone", "reply_to", "trailer", "pickup_date", "return_date", "requirements_ack"];
function ContactForm({
  defaultTrailer = "",
  compact = false
}) {
  const formRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const initialTrailer = ALL_OPTIONS.includes(defaultTrailer) ? defaultTrailer : "";
  const initialType = initialTrailer ? typeOf(initialTrailer) : "all";
  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    from_name: "",
    phone: "",
    reply_to: "",
    // En compacto el remolque sale del tipo (sin <select>); si no, del modelo elegido.
    trailer: compact ? TYPE_LABEL[initialType] : initialTrailer,
    pickup_date: "",
    return_date: "",
    message: "",
    requirements_ack: false
  });
  const [touched, setTouched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialType);

  // Cambiar de tipo: en compacto fija el remolque al tipo; si no, filtra el <select>.
  function onPickType(t) {
    setType(t);
    if (compact) {
      setField("trailer", TYPE_LABEL[t]);
    } else if (values.trailer && !optionsForType(t).includes(values.trailer)) {
      setField("trailer", "");
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isConfigured(EMAILJS_PUBLIC_KEY)) _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__["default"].init({
      publicKey: EMAILJS_PUBLIC_KEY
    });
    if (isConfigured(RECAPTCHA_SITE_KEY) && !document.getElementById("recaptcha-v3")) {
      const s = document.createElement("script");
      s.id = "recaptcha-v3";
      s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);
  function setField(name, value) {
    const next = {
      ...values,
      [name]: value
    };
    setValues(next);
    if (touched[name]) setErrors(e => ({
      ...e,
      [name]: validate(name, value, next)
    }));
    // return_date depende de pickup_date
    if (name === "pickup_date" && touched.return_date) {
      setErrors(e => ({
        ...e,
        return_date: validate("return_date", next.return_date, next)
      }));
    }
  }
  function onBlur(name) {
    setTouched(t => ({
      ...t,
      [name]: true
    }));
    setErrors(e => ({
      ...e,
      [name]: validate(name, values[name], values)
    }));
  }
  function validateAll() {
    const next = {};
    REQUIRED.forEach(n => {
      next[n] = validate(n, values[n], values);
    });
    setErrors(next);
    setTouched(REQUIRED.reduce((acc, n) => (acc[n] = true, acc), {}));
    return Object.values(next).every(v => !v);
  }
  function getRecaptchaToken() {
    return new Promise(resolve => {
      if (!window.grecaptcha || !isConfigured(RECAPTCHA_SITE_KEY)) return resolve("");
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
          action: "booking"
        }).then(resolve).catch(() => resolve(""));
      });
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateAll()) {
      // Enfoca el primer campo con error
      const first = REQUIRED.find(n => validate(n, values[n], values));
      const el = formRef.current?.querySelector(`[name="${first}"]`);
      if (el && el.focus) el.focus();
      return;
    }
    if (!isConfigured(EMAILJS_PUBLIC_KEY)) {
      setStatus("error");
      setErrorMsg("Form not configured yet. Please call us at " + PHONE_DISPLAY + ".");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      const token = await getRecaptchaToken();
      const form = formRef.current;
      const hidden = form.querySelector('input[name="g-recaptcha-response"]');
      if (hidden) hidden.value = token;
      await _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__["default"].sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY
      });
      setStatus("success");
      form.reset();
      setValues({
        from_name: "",
        phone: "",
        reply_to: "",
        trailer: "",
        pickup_date: "",
        return_date: "",
        message: "",
        requirements_ack: false
      });
      setTouched({});
      setErrors({});
    } catch (err) {
      setStatus("error");
      setErrorMsg(err && typeof err.text === "string" ? err.text : "Something went wrong. Please try again or call us.");
    }
  }

  /* ----------------------------- Success ----------------------------- */
  if (status === "success") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "w-full rounded-xl border border-white/15 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-md",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#D7282F]/20 text-[#D7282F]",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
          className: "h-7 w-7",
          viewBox: "0 0 24 24",
          fill: "none",
          "aria-hidden": "true",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
            d: "M20 7L9 18l-5-5",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
        className: "mt-4 font-display text-2xl font-bold uppercase tracking-tight text-white",
        children: "Booking request sent"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
        className: "mt-2 text-[15px] leading-relaxed text-[#C7CDD3]",
        children: ["Thanks! We'll confirm availability and the next steps shortly. For anything urgent, call ", PHONE_DISPLAY, "."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        type: "button",
        onClick: () => setStatus("idle"),
        className: "mt-5 rounded-md font-display text-[14px] font-bold uppercase tracking-wide text-[#D7282F] underline-offset-4 transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:text-[#EE3A41] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11161B]",
        children: "Send another"
      })]
    });
  }

  /* ------------------------------- Form ------------------------------ */
  const sending = status === "sending";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "w-full rounded-xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:p-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
      className: "font-display text-2xl font-bold uppercase tracking-tight text-white",
      children: "Book your trailer"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      className: "mt-1 text-[14px] text-[#C7CDD3]",
      children: "Send a request and we'll confirm availability."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
      ref: formRef,
      onSubmit: handleSubmit,
      noValidate: true,
      className: "mt-4 space-y-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Field, {
        name: "from_name",
        label: "Full name",
        error: errors.from_name,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          type: "text",
          name: "from_name",
          autoComplete: "name",
          placeholder: "John Smith",
          value: values.from_name,
          onChange: e => setField("from_name", e.target.value),
          onBlur: () => onBlur("from_name"),
          "aria-required": "true",
          "aria-invalid": !!errors.from_name,
          "aria-describedby": "err-from_name",
          className: inputCls(errors.from_name)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "grid gap-3 sm:grid-cols-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Field, {
          name: "phone",
          label: "Phone",
          error: errors.phone,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "tel",
            name: "phone",
            autoComplete: "tel",
            placeholder: "(770) 000-0000",
            value: values.phone,
            onChange: e => setField("phone", e.target.value),
            onBlur: () => onBlur("phone"),
            "aria-required": "true",
            "aria-invalid": !!errors.phone,
            "aria-describedby": "err-phone",
            className: inputCls(errors.phone)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Field, {
          name: "reply_to",
          label: "Email",
          error: errors.reply_to,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "email",
            name: "reply_to",
            autoComplete: "email",
            placeholder: "you@email.com",
            value: values.reply_to,
            onChange: e => setField("reply_to", e.target.value),
            onBlur: () => onBlur("reply_to"),
            "aria-required": "true",
            "aria-invalid": !!errors.reply_to,
            "aria-describedby": "err-reply_to",
            className: inputCls(errors.reply_to)
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "mb-1 block text-[12px] font-semibold uppercase tracking-wide text-[#C7CDD3]",
          children: "Trailer type"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          role: "group",
          "aria-label": "Trailer type",
          className: "grid grid-cols-4 gap-1 rounded-md border border-white/15 bg-white/5 p-1",
          children: TRAILER_TYPES.map(tt => {
            const active = type === tt.id;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              type: "button",
              "aria-pressed": active,
              onClick: () => onPickType(tt.id),
              className: "flex flex-col items-center gap-1 rounded px-1 py-2 font-display text-[11px] font-bold uppercase tracking-wide transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41] focus-visible:ring-offset-1 focus-visible:ring-offset-[#11161B] " + (active ? "bg-[#D7282F] text-white" : "text-[#C7CDD3] hover:bg-white/10"),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(tt.Icon, {
                className: "h-5 w-5"
              }), tt.label]
            }, tt.id);
          })
        })]
      }), compact ?
      /*#__PURE__*/
      /* En el hero el tipo ES la selección; mandamos el valor por un hidden. */
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "hidden",
        name: "trailer",
        value: values.trailer
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Field, {
        name: "trailer",
        label: "Trailer",
        error: errors.trailer,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
          name: "trailer",
          value: values.trailer,
          onChange: e => setField("trailer", e.target.value),
          onBlur: () => onBlur("trailer"),
          "aria-required": "true",
          "aria-invalid": !!errors.trailer,
          "aria-describedby": "err-trailer",
          className: inputCls(errors.trailer),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
            value: "",
            disabled: true,
            style: {
              color: "#1B2127"
            },
            children: "Select a trailer\u2026"
          }), optionsForType(type).map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
            value: t,
            style: {
              color: "#1B2127"
            },
            children: t
          }, t))]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "grid gap-3 sm:grid-cols-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Field, {
          name: "pickup_date",
          label: "Pickup date",
          error: errors.pickup_date,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "date",
            name: "pickup_date",
            min: todayStr,
            value: values.pickup_date,
            onChange: e => setField("pickup_date", e.target.value),
            onBlur: () => onBlur("pickup_date"),
            "aria-required": "true",
            "aria-invalid": !!errors.pickup_date,
            "aria-describedby": "err-pickup_date",
            className: inputCls(errors.pickup_date) + " [color-scheme:dark]"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Field, {
          name: "return_date",
          label: "Return date",
          error: errors.return_date,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "date",
            name: "return_date",
            min: values.pickup_date || todayStr,
            value: values.return_date,
            onChange: e => setField("return_date", e.target.value),
            onBlur: () => onBlur("return_date"),
            "aria-required": "true",
            "aria-invalid": !!errors.return_date,
            "aria-describedby": "err-return_date",
            className: inputCls(errors.return_date) + " [color-scheme:dark]"
          })
        })]
      }), !compact && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Field, {
        name: "message",
        label: "Notes (optional)",
        error: "",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
          name: "message",
          rows: 2,
          placeholder: "Load details, questions\u2026",
          value: values.message,
          onChange: e => setField("message", e.target.value),
          className: inputCls("") + " resize-y"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
          className: "flex items-start gap-2.5 text-[13px] leading-snug text-[#C7CDD3]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "checkbox",
            name: "requirements_ack",
            value: "Yes \u2014 customer confirmed rental requirements",
            checked: values.requirements_ack,
            onChange: e => setField("requirements_ack", e.target.checked),
            onBlur: () => onBlur("requirements_ack"),
            "aria-required": "true",
            "aria-invalid": !!errors.requirements_ack,
            "aria-describedby": "err-requirements_ack",
            className: "mt-0.5 h-4 w-4 shrink-0 accent-[#D7282F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41] focus-visible:ring-offset-1 focus-visible:ring-offset-[#11161B]"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
            children: ["I understand the rental requirements: valid Georgia driver's license, auto insurance, a credit card for the deposit, and a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
              className: "text-white",
              children: "$45 non-refundable booking fee"
            }), "."]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FieldError, {
          id: "err-requirements_ack",
          error: errors.requirements_ack
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "hidden",
        name: "g-recaptcha-response"
      }), status === "error" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
        role: "alert",
        className: "flex items-start gap-2 rounded-md bg-[#D7282F]/15 px-3 py-2 text-[13px] font-medium text-[#FCA5A5]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
          className: "mt-0.5 h-4 w-4 shrink-0",
          viewBox: "0 0 24 24",
          fill: "none",
          "aria-hidden": "true",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
            d: "M12 8v5M12 16.5h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }), errorMsg]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
        type: "submit",
        disabled: sending,
        "aria-busy": sending,
        className: "flex w-full items-center justify-center gap-2 rounded-md bg-[#D7282F] px-5 py-3 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-[background-color,transform] duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-[#EE3A41] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#11161B] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-[#D7282F] disabled:active:translate-y-0",
        children: [sending && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
          className: "h-4 w-4 animate-spin",
          viewBox: "0 0 24 24",
          fill: "none",
          "aria-hidden": "true",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
            cx: "12",
            cy: "12",
            r: "9",
            stroke: "currentColor",
            strokeWidth: "2.5",
            className: "opacity-25"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
            d: "M21 12a9 9 0 0 0-9-9",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })]
        }), sending ? "Sending…" : "Request booking"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
        className: "text-[11px] leading-snug text-[#9AA4AE]",
        children: ["This is a booking request \u2014 not a confirmed reservation. Protected by reCAPTCHA \u2014 Google's", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "https://policies.google.com/privacy",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "rounded underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41]",
          children: "Privacy Policy"
        }), " ", "and", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "https://policies.google.com/terms",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "rounded underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41]",
          children: "Terms"
        }), " ", "apply."]
      })]
    })]
  });
}

/* ------------------------------- Helpers ----------------------------- */

// Borde 1px constante en TODOS los estados (sin layout-shift). El estado va a
// background (hover), ring (focus-visible) y color de borde (error) — nunca al ancho.
function inputCls(error) {
  const base = "w-full rounded-md border bg-white/10 px-3.5 py-2 text-[15px] text-white placeholder:text-[#9AA4AE] " + "transition-[background-color,border-color] duration-[var(--dur-micro)] ease-[var(--ease-out)] " + "hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41]";
  return base + (error ? " border-[#F87171] focus-visible:ring-[#F87171]" : " border-white/20 focus-visible:border-[#EE3A41]");
}
function Field({
  name,
  label,
  error,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
    className: "block",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "mb-1 block text-[12px] font-semibold uppercase tracking-wide text-[#C7CDD3]",
      children: label
    }), children, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FieldError, {
      id: `err-${name}`,
      error: error
    })]
  });
}

// Slot de altura estable (min-height: 1lh) para que mostrar el error no empuje el layout.
function FieldError({
  id,
  error
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    id: id,
    role: error ? "alert" : undefined,
    className: "mt-1 flex min-h-[1lh] items-center gap-1 text-[12px] font-medium text-[#FCA5A5]",
    children: error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
        className: "h-3.5 w-3.5 shrink-0",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
          d: "M12 8v5M12 16.5h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      }), error]
    })
  });
}

/* ------------------------------ Iconos de tipo ----------------------- */
/* Mismos trazos que el navbar / la home (inline SVG, heredan currentColor). */
function GridIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.2",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.2",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.2",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.2",
      stroke: "currentColor",
      strokeWidth: "1.8"
    })]
  });
}
function DumpIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 48 32",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M7 21 L31 21 L36 8 L15 12 Z",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M5 24 H43",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
      cx: "15",
      cy: "27",
      r: "3",
      stroke: "currentColor",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
      cx: "34",
      cy: "27",
      r: "3",
      stroke: "currentColor",
      strokeWidth: "2"
    })]
  });
}
function EnclosedIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 48 32",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
      x: "9",
      y: "7",
      width: "29",
      height: "15",
      rx: "1.5",
      stroke: "currentColor",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M5 16 H9 M38 14 h4",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
      cx: "17",
      cy: "26",
      r: "3",
      stroke: "currentColor",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
      cx: "31",
      cy: "26",
      r: "3",
      stroke: "currentColor",
      strokeWidth: "2"
    })]
  });
}
function HaulerIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 48 32",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M6 19 H38 L44 25",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M6 19 V15",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
      cx: "16",
      cy: "24",
      r: "3",
      stroke: "currentColor",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
      cx: "30",
      cy: "24",
      r: "3",
      stroke: "currentColor",
      strokeWidth: "2"
    })]
  });
}

/***/ },

/***/ "./src/scripts/Footer.js"
/*!*******************************!*\
  !*** ./src/scripts/Footer.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const PHONE_DISPLAY = "770 708 8749";
const PHONE_HREF = "tel:+17707088749";
const EMAIL_DISPLAY = "info@kctrailersrental.com";
const EMAIL_HREF = "mailto:info@kctrailersrental.com";
const LOGO_SRC = "/wp-content/uploads/2026/06/KC_BrandLogo.png";
const FACEBOOK_URL = "#"; // TODO: URL real de la página de Facebook
const LOCATION = "Duluth, Georgia, USA";
const TRAILERS = [{
  name: "16' Dump — Down 2 Earth",
  href: "/16-dump-down-2-earth"
}, {
  name: "Load Trail Dump",
  href: "/load-trail-dump"
}, {
  name: "Enclosed 14' × 7' × 7'",
  href: "/enclosed-14x7"
}, {
  name: "Spartan Cargo Enclosed",
  href: "/spartan-cargo-enclosed"
}, {
  name: 'Car Hauler 87" × 20\'',
  href: "/car-hauler-87"
}, {
  name: 'Car Hauler 102" × 20\'',
  href: "/car-hauler-102"
}];
const COMPANY = [{
  name: "Home",
  href: "/"
}, {
  name: "About",
  href: "/about"
}, {
  name: "Locations",
  href: "/locations"
}, {
  name: "Rental Info",
  href: "/rental-info"
}, {
  name: "Contact / Reserve",
  href: "/contact"
}];

/* Zig-zag (Uiverse.io / kandalgaonkarshubham), portado a style object. */
const FOOTER_PATTERN = {
  background: "radial-gradient(circle farthest-side at 0% 50%, #282828 23.5%, rgba(255,170,0,0) 0) 21px 30px," + "radial-gradient(circle farthest-side at 0% 50%, #2c3539 24%, rgba(240,166,17,0) 0) 19px 30px," + "linear-gradient(#282828 14%, rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%, #282828 0) 0 0," + "linear-gradient(150deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240,166,17,0) 0, rgba(240,166,17,0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0," + "linear-gradient(30deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240,166,17,0) 0, rgba(240,166,17,0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0," + "linear-gradient(90deg, #2c3539 2%, #282828 0, #282828 98%, #2c3539 0%) 0 0 #282828",
  backgroundSize: "40px 60px"
};
const HAZARD_STRIPE = {
  backgroundImage: "repeating-linear-gradient(135deg, #D7282F 0 14px, #1B2127 14px 28px)"
};

/* Anillo de foco reutilizable (rojo claro, ≥3:1 sobre el charcoal del footer). */
const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B2127]";

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

function Footer({
  logoUrl = LOGO_SRC
}) {
  const year = new Date().getFullYear();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("footer", {
    className: "font-display text-[#E7E5DF]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      "aria-hidden": "true",
      className: "h-1 w-full",
      style: HAZARD_STRIPE
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "relative",
      style: FOOTER_PATTERN,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        "aria-hidden": "true",
        className: "absolute inset-0 bg-black/25"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "/",
            "aria-label": "KC Trailer Rentals \u2014 home",
            className: "inline-flex items-center rounded " + FOCUS,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: logoUrl,
              alt: "KC Trailer Rentals",
              className: "h-24 w-auto"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "mt-4 max-w-xs text-[14px] italic leading-relaxed text-[#C7CDD3]",
            children: "Haul with confidence, rent from us."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "mt-5 flex flex-col gap-2 text-[13px]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
              className: "inline-flex items-center gap-2 font-semibold text-[#D7282F]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(GlobeIcon, {
                className: "h-4 w-4"
              }), "Hablamos Espa\xF1ol"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
              className: "inline-flex items-center gap-2 text-[#C7CDD3]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ClockIcon, {
                className: "h-4 w-4"
              }), "24-hour service"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: FACEBOOK_URL,
            "aria-label": "Facebook",
            className: "relative mt-5 inline-grid h-10 w-10 place-items-center rounded-full border border-white/20 text-[#E7E5DF] transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] before:absolute before:-inset-1.5 before:content-[''] hover:border-[#D7282F] hover:bg-[#D7282F] hover:text-white " + FOCUS,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FacebookIcon, {
              className: "h-4 w-4"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FooterHeading, {
            children: "Trailers"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
            className: "space-y-2.5",
            children: TRAILERS.map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FooterLink, {
                href: t.href,
                children: t.name
              })
            }, t.href))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FooterHeading, {
            children: "Company"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
            className: "space-y-2.5",
            children: COMPANY.map(c => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FooterLink, {
                href: c.href,
                children: c.name
              })
            }, c.href))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FooterHeading, {
            children: "Get in touch"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
            className: "space-y-3.5 text-[14px]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: PHONE_HREF,
                className: "inline-flex items-center gap-2.5 rounded font-semibold text-white transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:text-[#D7282F] " + FOCUS,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PhoneIcon, {
                  className: "h-4 w-4 text-[#D7282F]"
                }), PHONE_DISPLAY]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: EMAIL_HREF,
                className: "inline-flex items-center gap-2.5 break-all rounded text-[#C7CDD3] transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:text-[#D7282F] " + FOCUS,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MailIcon, {
                  className: "h-4 w-4 shrink-0 text-[#D7282F]"
                }), EMAIL_DISPLAY]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
              className: "inline-flex items-start gap-2.5 text-[#C7CDD3]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MapPinIcon, {
                className: "mt-0.5 h-4 w-4 shrink-0 text-[#D7282F]"
              }), LOCATION]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "/contact",
            className: "mt-5 inline-flex rounded-md bg-[#D7282F] px-4 py-2.5 text-[14px] font-bold uppercase tracking-wide text-white shadow-sm transition-[background-color,transform] duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-[#EE3A41] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B2127]",
            children: "Reserve Now"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "bg-[#11161B] text-[#9AA4AE]",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-[12px] sm:flex-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
          children: ["\xA9 ", year, " KC Trailer Rentals LLC. All rights reserved."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
          className: "flex items-center gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "/rental-info",
            className: "rounded transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:text-[#D7282F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11161B]",
            children: "Rental Info"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "/contact",
            className: "rounded transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:text-[#D7282F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11161B]",
            children: "Contact"
          })]
        })]
      })
    })]
  });
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function FooterHeading({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
    className: "mb-4 inline-block border-b-2 border-[#D7282F] pb-1 text-[12px] font-bold uppercase tracking-[0.2em] text-white",
    children: children
  });
}
function FooterLink({
  href,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
    href: href,
    className: "rounded text-[14px] text-[#C7CDD3] transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:text-[#D7282F] " + FOCUS,
    children: children
  });
}

/* ------------------------------------------------------------------ */
/*  Icons                                                             */
/* ------------------------------------------------------------------ */

function PhoneIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6.5 4h3l1.5 4-2 1.2a11 11 0 005.8 5.8L16 13l4 1.5v3a2 2 0 01-2.2 2A15.5 15.5 0 014.5 6.2 2 2 0 016.5 4z",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinejoin: "round"
    })
  });
}
function MailIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M4 7l8 6 8-6",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
}
function MapPinIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "12",
      cy: "10",
      r: "2.5",
      stroke: "currentColor",
      strokeWidth: "1.8"
    })]
  });
}
function GlobeIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "9",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18",
      stroke: "currentColor",
      strokeWidth: "1.8"
    })]
  });
}
function ClockIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "9",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12 7v5l3 2",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
}
function FacebookIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M13.5 21v-7h2.3l.4-2.7h-2.7V9.6c0-.8.2-1.3 1.3-1.3h1.5V5.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.6 1.3-3.6 3.7v2.1H8.2V14h2.5v7h2.8z"
    })
  });
}

/***/ },

/***/ "./src/scripts/Navbar.js"
/*!*******************************!*\
  !*** ./src/scripts/Navbar.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const PHONE_DISPLAY = "770 708 8749";
const PHONE_HREF = "tel:+17707088749";
const EMAIL_DISPLAY = "info@kctrailersrental.com";
const EMAIL_HREF = "mailto:info@kctrailersrental.com";
const LOGO_SRC = "/wp-content/uploads/2026/06/KC_BrandLogo.png";
const TRAILER_GROUPS = [{
  category: "Dump Trailers",
  Icon: DumpIcon,
  items: [{
    name: "16' Dump — Down 2 Earth",
    spec: "14,000 lb GVWR · 16'×7'×4'",
    from: "$150",
    href: "/16-dump-down-2-earth"
  }, {
    name: "Load Trail Dump",
    spec: "14,000 lb GVWR · 14' + 2' ext",
    from: "$150",
    href: "/load-trail-dump"
  }]
}, {
  category: "Enclosed Trailers",
  Icon: EnclosedIcon,
  items: [{
    name: "Enclosed 14' × 7' × 7'",
    spec: "7,000 lb GVWR · 5k winch · E-track",
    from: "$90/24h",
    href: "/enclosed-14x7"
  }, {
    name: "Spartan Cargo Enclosed",
    spec: "14,000 lb GVWR · 12k winch · ramps",
    from: "$160",
    href: "/spartan-cargo-enclosed"
  }]
}, {
  category: "Car Haulers",
  Icon: CarHaulerIcon,
  items: [{
    name: 'Load Trail 87" × 20\'',
    spec: "9,990 lb GVWR · 12k winch",
    from: "$100",
    href: "/car-hauler-87"
  }, {
    name: 'Load Trail 102" × 20\'',
    spec: "9,990 lb GVWR · drive-over fenders",
    from: "$110",
    href: "/car-hauler-102"
  }]
}];

// Franja superior del navbar: hazard en grafito (de la paleta) para que haga
// juego con el charcoal del topbar, en vez del rojo de marca.
const TOP_STRIPE = {
  backgroundImage: "repeating-linear-gradient(135deg, #6B7480 0 14px, #1B2127 14px 28px)"
};

/* Anillo de foco reutilizable sobre charcoal (rojo claro, ≥3:1). El botón rojo
   usa anillo BLANCO aparte — un anillo rojo sobre fondo rojo desaparece. */
const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B2127]";
const FOCUS_ON_RED = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B2127]";

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

function Navbar({
  logoUrl = LOGO_SRC
}) {
  const [megaOpen, setMegaOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [mobileOpen, setMobileOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [mobileTrailersOpen, setMobileTrailersOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const closeTimer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  function openMega() {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  }
  function scheduleCloseMega() {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("header", {
    className: "relative z-50 font-display",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      "aria-hidden": "true",
      className: "h-1 w-full",
      style: TOP_STRIPE
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "bg-[#11161B] text-[#C7CDD3]",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 text-[12px] tracking-wide",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: PHONE_HREF,
            className: "inline-flex items-center gap-1.5 rounded font-semibold text-white transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:text-[#D7282F] " + FOCUS,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PhoneIcon, {
              className: "h-3.5 w-3.5"
            }), PHONE_DISPLAY]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: EMAIL_HREF,
            className: "inline-flex items-center gap-1.5 rounded font-semibold text-white transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:text-[#D7282F] " + FOCUS,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MailIcon, {
              className: "h-3.5 w-3.5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "hidden sm:inline",
              children: EMAIL_DISPLAY
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "sm:hidden",
              children: "Email"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
            className: "inline-flex items-center gap-1.5 font-semibold text-[#D7282F]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(GlobeIcon, {
              className: "h-3.5 w-3.5"
            }), "Hablamos Espa\xF1ol"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
            className: "hidden items-center gap-1.5 sm:inline-flex",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ClockIcon, {
              className: "h-3.5 w-3.5"
            }), "24-hour service"]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
      ref: navRef,
      className: "relative bg-[#1B2127] text-[#F4F2ED] shadow-[0_2px_20px_rgba(0,0,0,0.25)]",
      "aria-label": "Primary",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/",
          "aria-label": "KC Trailer Rentals \u2014 home",
          className: "flex items-center rounded " + FOCUS,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            src: logoUrl,
            alt: "KC Trailer Rentals",
            className: "h-16 w-auto"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
          className: "hidden items-center gap-1 lg:flex",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NavItem, {
            href: "/",
            children: "Home"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NavItem, {
            href: "/about",
            children: "About"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            className: "relative",
            onMouseEnter: openMega,
            onMouseLeave: scheduleCloseMega,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
              type: "button",
              "aria-haspopup": "true",
              "aria-expanded": megaOpen,
              onClick: () => setMegaOpen(v => !v),
              className: `flex items-center gap-1.5 rounded-md px-3 py-2 text-[14px] font-semibold uppercase tracking-wide transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] ${megaOpen ? "bg-[#2C353D] text-[#D7282F]" : "text-[#F4F2ED] hover:text-[#D7282F]"} ${FOCUS}`,
              children: ["Trailers", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ChevronIcon, {
                className: `h-3.5 w-3.5 transition-transform duration-[var(--dur-short)] ease-[var(--ease-out)] motion-reduce:transition-none ${megaOpen ? "rotate-180" : ""}`
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NavItem, {
            href: "/locations",
            children: "Locations"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NavItem, {
            href: "/rental-info",
            children: "Rental Info"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "hidden items-center gap-3 lg:flex",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: PHONE_HREF,
            className: "flex items-center gap-2 rounded text-[14px] font-bold text-white transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:text-[#D7282F] " + FOCUS,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PhoneIcon, {
              className: "h-4 w-4 text-[#D7282F]"
            }), PHONE_DISPLAY]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "/contact",
            className: "rounded-md bg-[#D7282F] px-4 py-2 text-[14px] font-bold uppercase tracking-wide text-white shadow-sm transition-[background-color,transform] duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-[#EE3A41] active:translate-y-px " + FOCUS_ON_RED,
            children: "Reserve Now"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          type: "button",
          onClick: () => setMobileOpen(v => !v),
          "aria-label": mobileOpen ? "Close menu" : "Open menu",
          "aria-expanded": mobileOpen,
          className: "grid h-11 w-11 place-items-center rounded-md text-[#F4F2ED] hover:bg-[#2C353D] lg:hidden " + FOCUS,
          children: mobileOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CloseIcon, {
            className: "h-6 w-6"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuIcon, {
            className: "h-6 w-6"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        onMouseEnter: openMega,
        onMouseLeave: scheduleCloseMega,
        className: `absolute inset-x-0 top-full hidden border-t border-[#D7282F]/30 bg-[#1F262D] shadow-2xl transition-[opacity,transform] duration-[var(--dur-short)] ease-[var(--ease-out)] motion-reduce:transition-none lg:block ${megaOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 py-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "col-span-9 grid grid-cols-3 gap-x-8 gap-y-2",
            children: TRAILER_GROUPS.map(group => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "mb-3 flex items-center gap-2 border-b border-white/10 pb-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(group.Icon, {
                  className: "h-7 w-7 text-[#D7282F]"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                  className: "text-[12px] font-bold uppercase tracking-[0.18em] text-[#9AA4AE]",
                  children: group.category
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
                className: "space-y-1",
                children: group.items.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                    href: item.href,
                    className: "group block rounded-md px-3 py-2.5 transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-[#2C353D] " + FOCUS,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                      className: "flex items-center justify-between gap-3",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                        className: "text-[14px] font-semibold text-[#F4F2ED] group-hover:text-[#D7282F]",
                        children: item.name
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                        className: "shrink-0 rounded bg-[#11161B] px-2 py-0.5 text-[11px] font-bold text-[#D7282F]",
                        children: item.from
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      className: "mt-0.5 block text-[12px] text-[#9AA4AE]",
                      children: item.spec
                    })]
                  })
                }, item.href))
              })]
            }, group.category))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "col-span-3 flex flex-col justify-between rounded-lg bg-[#11161B] p-5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
                className: "text-[15px] font-bold text-white",
                children: "Not sure which trailer?"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                className: "mt-2 text-[13px] leading-relaxed text-[#9AA4AE]",
                children: "Tell us your load and we'll match you to the right rig. Full-equipped, available 24 hours."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "mt-5 space-y-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: PHONE_HREF,
                className: "flex items-center justify-center gap-2 rounded-md border border-[#D7282F] px-3 py-2 text-[13px] font-bold text-[#D7282F] transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-[#D7282F] hover:text-white " + FOCUS,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PhoneIcon, {
                  className: "h-4 w-4"
                }), PHONE_DISPLAY]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                href: "/contact",
                className: "flex items-center justify-center rounded-md bg-[#D7282F] px-3 py-2 text-[13px] font-bold uppercase tracking-wide text-white transition-[background-color,transform] duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-[#EE3A41] active:translate-y-px " + FOCUS_ON_RED,
                children: "Reserve Now"
              })]
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: `fixed inset-0 top-0 z-40 lg:hidden ${mobileOpen ? "" : "pointer-events-none"}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        onClick: () => setMobileOpen(false),
        className: `absolute inset-0 bg-black/60 transition-opacity duration-[var(--dur-short)] ease-[var(--ease-out)] motion-reduce:transition-none ${mobileOpen ? "opacity-100" : "opacity-0"}`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: `absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-[#1B2127] shadow-2xl transition-transform duration-[var(--dur-long)] ease-[var(--ease-out)] motion-reduce:transition-none ${mobileOpen ? "translate-x-0" : "translate-x-full"}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center justify-between border-b border-white/10 px-4 py-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "text-[15px] font-extrabold uppercase tracking-[0.12em] text-white",
            children: "Menu"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            type: "button",
            onClick: () => setMobileOpen(false),
            "aria-label": "Close menu",
            className: "grid h-11 w-11 place-items-center rounded-md text-[#F4F2ED] hover:bg-[#2C353D] " + FOCUS,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CloseIcon, {
              className: "h-6 w-6"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
          className: "flex-1 overflow-y-auto px-2 py-3",
          "aria-label": "Mobile",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MobileLink, {
            href: "/",
            onClick: () => setMobileOpen(false),
            children: "Home"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MobileLink, {
            href: "/about",
            onClick: () => setMobileOpen(false),
            children: "About"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
            type: "button",
            "aria-expanded": mobileTrailersOpen,
            onClick: () => setMobileTrailersOpen(v => !v),
            className: "flex w-full items-center justify-between rounded-md px-3 py-3 text-[15px] font-semibold text-[#F4F2ED] hover:bg-[#2C353D] " + FOCUS,
            children: ["Trailers", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ChevronIcon, {
              className: `h-4 w-4 transition-transform duration-[var(--dur-short)] ease-[var(--ease-out)] motion-reduce:transition-none ${mobileTrailersOpen ? "rotate-180" : ""}`
            })]
          }), mobileTrailersOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "mb-1 ml-2 border-l border-white/10 pl-2",
            children: TRAILER_GROUPS.map(group => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "py-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "flex items-center gap-2 px-3 pb-1 pt-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(group.Icon, {
                  className: "h-5 w-5 text-[#D7282F]"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "text-[11px] font-bold uppercase tracking-[0.16em] text-[#9AA4AE]",
                  children: group.category
                })]
              }), group.items.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: item.href,
                onClick: () => setMobileOpen(false),
                className: "flex items-center justify-between gap-2 rounded-md px-3 py-2 hover:bg-[#2C353D] " + FOCUS,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "text-[14px] text-[#F4F2ED]",
                  children: item.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "shrink-0 text-[12px] font-bold text-[#D7282F]",
                  children: item.from
                })]
              }, item.href))]
            }, group.category))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MobileLink, {
            href: "/locations",
            onClick: () => setMobileOpen(false),
            children: "Locations"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MobileLink, {
            href: "/rental-info",
            onClick: () => setMobileOpen(false),
            children: "Rental Info"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "space-y-2 border-t border-white/10 p-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: PHONE_HREF,
            className: "flex items-center justify-center gap-2 rounded-md border border-[#D7282F] px-3 py-2.5 text-[14px] font-bold text-[#D7282F] transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-[#D7282F] hover:text-white " + FOCUS,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PhoneIcon, {
              className: "h-4 w-4"
            }), PHONE_DISPLAY]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "/contact",
            className: "flex items-center justify-center rounded-md bg-[#D7282F] px-3 py-2.5 text-[14px] font-bold uppercase tracking-wide text-white transition-[background-color,transform] duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-[#EE3A41] active:translate-y-px " + FOCUS_ON_RED,
            children: "Reserve Now"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "pt-1 text-center text-[12px] font-semibold text-[#9AA4AE]",
            children: "Hablamos Espa\xF1ol \xB7 24-hour service"
          })]
        })]
      })]
    })]
  });
}

/* ------------------------------------------------------------------ */
/*  Small presentational helpers                                      */
/* ------------------------------------------------------------------ */

function NavItem({
  href,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
      href: href,
      className: "rounded-md px-3 py-2 text-[14px] font-semibold uppercase tracking-wide text-[#F4F2ED] transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:text-[#D7282F] " + FOCUS,
      children: children
    })
  });
}
function MobileLink({
  href,
  children,
  onClick
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
    href: href,
    onClick: onClick,
    className: "block rounded-md px-3 py-3 text-[15px] font-semibold text-[#F4F2ED] hover:bg-[#2C353D] " + FOCUS,
    children: children
  });
}

/* ------------------------------------------------------------------ */
/*  Icons (inline SVG, inherit currentColor)                          */
/* ------------------------------------------------------------------ */

function DumpIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 48 32",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7 21 L31 21 L36 8 L15 12 Z",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M5 24 H43",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "15",
      cy: "27",
      r: "3",
      stroke: "currentColor",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "34",
      cy: "27",
      r: "3",
      stroke: "currentColor",
      strokeWidth: "2"
    })]
  });
}
function EnclosedIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 48 32",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "9",
      y: "7",
      width: "29",
      height: "15",
      rx: "1.5",
      stroke: "currentColor",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M5 16 H9 M38 14 h4",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "17",
      cy: "26",
      r: "3",
      stroke: "currentColor",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "31",
      cy: "26",
      r: "3",
      stroke: "currentColor",
      strokeWidth: "2"
    })]
  });
}
function CarHaulerIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 48 32",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6 19 H38 L44 25",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6 19 V15",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "16",
      cy: "24",
      r: "3",
      stroke: "currentColor",
      strokeWidth: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "30",
      cy: "24",
      r: "3",
      stroke: "currentColor",
      strokeWidth: "2"
    })]
  });
}
function ChevronIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6 9l6 6 6-6",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  });
}
function PhoneIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6.5 4h3l1.5 4-2 1.2a11 11 0 005.8 5.8L16 13l4 1.5v3a2 2 0 01-2.2 2A15.5 15.5 0 014.5 6.2 2 2 0 016.5 4z",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinejoin: "round"
    })
  });
}
function MailIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M4 7l8 6 8-6",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
}
function GlobeIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "9",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18",
      stroke: "currentColor",
      strokeWidth: "1.8"
    })]
  });
}
function ClockIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "9",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12 7v5l3 2",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
}
function MenuIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M4 7h16M4 12h16M4 17h16",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    })
  });
}
function CloseIcon({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6 6l12 12M18 6L6 18",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    })
  });
}

/***/ },

/***/ "./src/scripts/dialogs.js"
/*!********************************!*\
  !*** ./src/scripts/dialogs.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initDialogs)
/* harmony export */ });
/* ==========================================================================
 *  dialogs.js — abre/cierra los <dialog> nativos del sitio.
 *
 *  · Un botón con  data-dialog-open="ID"  abre el <dialog id="ID">.
 *  · Cualquier  [data-dialog-close]  dentro del dialog lo cierra.
 *  · Click en el backdrop (fuera de .kc-dialog-inner) lo cierra.
 *  · Escape y focus-trap los maneja el navegador (showModal()).
 * ======================================================================== */

function initDialogs() {
  // Botones que abren
  document.querySelectorAll("[data-dialog-open]").forEach(btn => {
    const dlg = document.getElementById(btn.getAttribute("data-dialog-open"));
    if (!dlg) return;
    btn.addEventListener("click", () => {
      if (typeof dlg.showModal === "function") dlg.showModal();else dlg.setAttribute("open", ""); // fallback muy viejo
    });
  });

  // Cierre por botón + click en backdrop
  document.querySelectorAll("dialog[data-kc-dialog]").forEach(dlg => {
    dlg.querySelectorAll("[data-dialog-close]").forEach(b => b.addEventListener("click", () => dlg.close()));
    dlg.addEventListener("click", e => {
      if (e.target.closest("[data-dialog-close]")) return;
      const box = dlg.querySelector(".kc-dialog-inner");
      if (!box) return;
      const r = box.getBoundingClientRect();
      const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (!inside) dlg.close();
    });
  });
}

/***/ },

/***/ "./src/scripts/reveal.js"
/*!*******************************!*\
  !*** ./src/scripts/reveal.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initReveal)
/* harmony export */ });
/* ==========================================================================
 *  reveal.js — movimiento de entrada para TODO el sitio.
 *
 *  · Un solo IntersectionObserver, reveal-once (deja de observar al revelar).
 *  · Sin listeners de scroll, sin parallax (Hallmark motion.md).
 *  · Respeta prefers-reduced-motion.
 *  · Fallback sin JS / sin IO: todo queda visible.
 *
 *  Conteo opcional de números (precios, capacidades):
 *      <span data-countup="150" data-prefix="$">0</span>
 *      <span data-countup="14000" data-suffix=" lb">0</span>
 *  Se dispara una vez cuando su sección entra en viewport (o al cargar si no
 *  está dentro de un .reveal). Con reduced-motion, salta directo al valor final.
 * ======================================================================== */

function initReveal() {
  const root = document.documentElement;
  root.classList.add("motion-on"); // por si header.php no lo puso aún (idempotente)

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const els = document.querySelectorAll(".reveal");

  // Sin soporte de IO (o no hay nada que revelar): mostrar todo y contar.
  if (!("IntersectionObserver" in window) || !els.length) {
    els.forEach(el => el.classList.add("is-visible"));
    runCountups(document, reduce);
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      runCountups(entry.target, reduce); // números dentro de esta sección
      io.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px"
  });
  els.forEach(el => io.observe(el));

  // Números que NO están dentro de ningún .reveal: cuéntalos al cargar.
  runCountups(document, reduce, /* onlyLoose */true);
}
function runCountups(scope, reduce, onlyLoose) {
  const nums = scope.querySelectorAll("[data-countup]");
  nums.forEach(el => {
    if (el.dataset.done) return;
    if (onlyLoose && el.closest(".reveal")) return; // lo maneja su sección
    el.dataset.done = "1";
    const target = parseFloat(el.dataset.countup);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    if (reduce || isNaN(target)) {
      el.textContent = prefix + format(target) + suffix;
      return;
    }
    const dur = 900;
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cúbico
      el.textContent = prefix + format(Math.round(target * eased)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// Miles con coma (14000 -> 14,000) para capacidades GVWR.
function format(n) {
  return Number(n).toLocaleString("en-US");
}

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react-dom/client"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

module.exports = window["ReactDOM"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Navbar */ "./src/scripts/Navbar.js");
/* harmony import */ var _scripts_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Footer */ "./src/scripts/Footer.js");
/* harmony import */ var _scripts_ContactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/ContactForm */ "./src/scripts/ContactForm.js");
/* harmony import */ var _scripts_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/reveal */ "./src/scripts/reveal.js");
/* harmony import */ var _scripts_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/dialogs */ "./src/scripts/dialogs.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








// Navbar — el logo se puede pasar con data-logo="..." en el contenedor;
// si no, el componente usa su LOGO_SRC por defecto.

const navMount = document.querySelector("#render-navbar");
if (navMount) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_6___default().createRoot(navMount).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_scripts_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    logoUrl: navMount.dataset.logo
  }));
}

// Footer
const footerMount = document.querySelector("#render-footer");
if (footerMount) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_6___default().createRoot(footerMount).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_scripts_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    logoUrl: footerMount.dataset.logo
  }));
}

// Contact / Booking Form (puede haber más de uno; data-trailer pre-selecciona el remolque)
document.querySelectorAll(".render-contact-form").forEach(el => {
  react_dom_client__WEBPACK_IMPORTED_MODULE_6___default().createRoot(el).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_scripts_ContactForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    defaultTrailer: el.dataset.trailer || "",
    compact: el.dataset.compact === "1"
  }));
});

// Movimiento de entrada para todo el sitio (scroll reveal + count-up).
// El script va en el footer del build, así que el DOM ya está parseado.
(0,_scripts_reveal__WEBPACK_IMPORTED_MODULE_3__["default"])();

// Modales de tipo de remolque (home).
(0,_scripts_dialogs__WEBPACK_IMPORTED_MODULE_4__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map