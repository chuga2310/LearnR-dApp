(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("server", [], factory);
	else if(typeof exports === 'object')
		exports["server"] = factory();
	else
		root["server"] = factory();
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./swagger-output.json":
/*!*****************************!*\
  !*** ./swagger-output.json ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5691947c3a8fbed7388a.json";

/***/ }),

/***/ "@cosmjs/cosmwasm-stargate":
/*!********************************************!*\
  !*** external "@cosmjs/cosmwasm-stargate" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@cosmjs/cosmwasm-stargate");

/***/ }),

/***/ "@cosmjs/proto-signing":
/*!****************************************!*\
  !*** external "@cosmjs/proto-signing" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@cosmjs/proto-signing");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-fileupload");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-sequence":
/*!************************************!*\
  !*** external "mongoose-sequence" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("mongoose-sequence");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("swagger-ui-express");

/***/ }),

/***/ "web3.storage":
/*!*******************************!*\
  !*** external "web3.storage" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("web3.storage");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/index.js */ "./src/index.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_index_js__WEBPACK_IMPORTED_MODULE_1__]);
_src_index_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/controllers/ApiRoute.js":
/*!*************************************!*\
  !*** ./src/controllers/ApiRoute.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var _cosmjs_cosmwasm_stargate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cosmjs/cosmwasm-stargate */ "@cosmjs/cosmwasm-stargate");
/* harmony import */ var _cosmjs_proto_signing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cosmjs/proto-signing */ "@cosmjs/proto-signing");
/* harmony import */ var web3_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3.storage */ "web3.storage");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/helpers.js */ "./src/helpers/helpers.js");
/* harmony import */ var _models_Pen_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Pen.js */ "./src/models/Pen.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var router = express__WEBPACK_IMPORTED_MODULE_0__.Router();





var mnemonic = process.env.MNEMONIC;
var rpcEndpoint = process.env.RPC;
var contractAddress = process.env.CONTRACT;
var web3Token = process.env.WEB3_STORAGE_TOKEN;
var storage = new web3_storage__WEBPACK_IMPORTED_MODULE_3__.Web3Storage({
  token: web3Token
});
var wallet;
var firstAccount;
var client;
var signingClient;

var getWallet = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var wallet;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _cosmjs_proto_signing__WEBPACK_IMPORTED_MODULE_2__.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
              prefix: 'aura'
            });

          case 2:
            wallet = _context.sent;
            return _context.abrupt("return", wallet);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getWallet() {
    return _ref.apply(this, arguments);
  };
}();

var get1stAccount = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(wallet) {
    var _yield$wallet$getAcco, _yield$wallet$getAcco2, firstAccount;

    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return wallet.getAccounts();

          case 2:
            _yield$wallet$getAcco = _context2.sent;
            _yield$wallet$getAcco2 = _slicedToArray(_yield$wallet$getAcco, 1);
            firstAccount = _yield$wallet$getAcco2[0];
            return _context2.abrupt("return", firstAccount);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function get1stAccount(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var getAuraWasmClient = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var client;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _cosmjs_cosmwasm_stargate__WEBPACK_IMPORTED_MODULE_1__.CosmWasmClient.connect(rpcEndpoint);

          case 2:
            client = _context3.sent;
            return _context3.abrupt("return", client);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getAuraWasmClient() {
    return _ref3.apply(this, arguments);
  };
}();

var getSigningAuraWasmClient = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(wallet) {
    var signingClient;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _cosmjs_cosmwasm_stargate__WEBPACK_IMPORTED_MODULE_1__.SigningCosmWasmClient.connectWithSigner(rpcEndpoint, wallet);

          case 2:
            signingClient = _context4.sent;
            return _context4.abrupt("return", signingClient);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getSigningAuraWasmClient(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

function makeFileObjects(img) {
  // You can create File objects from a Buffer of binary data
  var buffer = Buffer.from(img.data, 'base64');
  var files = [new web3_storage__WEBPACK_IMPORTED_MODULE_3__.File(['contents-of-file-1'], 'plain-utf8.txt'), new web3_storage__WEBPACK_IMPORTED_MODULE_3__.File([buffer], img.name)];
  return files;
}

router.route('/Image/Upload').post( /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var imageFile, filesObj, cid, metadataGatewayURL, imageGatewayURL, imageURI, metadataURI;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            /* 	#swagger.tags = ['Image']
            #swagger.description = 'Upload image to IPFS' */

            /*    #swagger.consumes = ['multipart/form-data']  
                #swagger.parameters['image'] = {
                    in: 'formData',
                    type: 'file',
                    required: 'true',
                    description: 'Some description...',
            } */
            imageFile = req.files.image;
            _context5.prev = 1;
            filesObj = makeFileObjects(imageFile);
            _context5.next = 5;
            return storage.put(filesObj);

          case 5:
            cid = _context5.sent;
            console.log('Content added with CID:', cid);
            metadataGatewayURL = (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_4__.makeGatewayURL)(cid, 'metadata.json');
            imageGatewayURL = (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_4__.makeGatewayURL)(cid, imageFile.name);
            imageURI = "ipfs://".concat(cid, "/").concat(imageFile.name);
            metadataURI = "ipfs://".concat(cid, "/metadata.json");
            res.status(200).json({
              data: [{
                cid: cid,
                metadataGatewayURL: metadataGatewayURL,
                imageGatewayURL: imageGatewayURL,
                imageURI: imageURI,
                metadataURI: metadataURI
              }],
              message: 'Upload Result'
            });
            _context5.next = 17;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](1);
            res.status(500).json({
              data: [_context5.t0.message],
              message: 'Error'
            });

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 14]]);
  }));

  return function (_x3, _x4) {
    return _ref5.apply(this, arguments);
  };
}());
router.route('/Token/Mint').post( /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var result, mintMsg, fee, response;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (wallet) {
              _context6.next = 4;
              break;
            }

            _context6.next = 3;
            return getWallet();

          case 3:
            wallet = _context6.sent;

          case 4:
            if (firstAccount) {
              _context6.next = 8;
              break;
            }

            _context6.next = 7;
            return get1stAccount(wallet);

          case 7:
            firstAccount = _context6.sent;

          case 8:
            if (signingClient) {
              _context6.next = 12;
              break;
            }

            _context6.next = 11;
            return getSigningAuraWasmClient(wallet);

          case 11:
            signingClient = _context6.sent;

          case 12:
            _context6.prev = 12;
            _context6.next = 15;
            return _models_Pen_js__WEBPACK_IMPORTED_MODULE_5__["default"].create({
              contract: contractAddress,
              owner: firstAccount.address,
              quality: req.body.quality,
              level: req.body.level,
              effect: req.body.effect,
              resilience: req.body.resilience,
              number_of_mints: req.body.number_of_mints,
              durability: req.body.durability
            });

          case 15:
            result = _context6.sent;

            if (!result) {
              _context6.next = 31;
              break;
            }

            mintMsg = {
              mint: {
                id: "".concat(result.index),
                owner: result.owner
              }
            };
            fee = {
              amount: [{
                denom: 'uaura',
                amount: '153'
              }],
              gas: '152375'
            };
            _context6.prev = 19;
            _context6.next = 22;
            return signingClient.execute(firstAccount.address, contractAddress, mintMsg, fee);

          case 22:
            response = _context6.sent;
            _context6.next = 25;
            return _models_Pen_js__WEBPACK_IMPORTED_MODULE_5__["default"].findOneAndUpdate({
              index: result.index
            }, {
              deploy_status: true
            }, {
              upsert: true
            });

          case 25:
            res.status(200).json({
              data: [response],
              message: 'Mint Result'
            });
            _context6.next = 31;
            break;

          case 28:
            _context6.prev = 28;
            _context6.t0 = _context6["catch"](19);
            res.status(500).json({
              data: [_context6.t0.message],
              message: 'Error'
            });

          case 31:
            _context6.next = 36;
            break;

          case 33:
            _context6.prev = 33;
            _context6.t1 = _context6["catch"](12);

            if (err) {
              res.status(500).json({
                data: [err.message],
                message: 'Error'
              });
            }

          case 36:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[12, 33], [19, 28]]);
  }));

  return function (_x5, _x6) {
    return _ref6.apply(this, arguments);
  };
}());
router.route('/Token/Get/:id').get( /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var nftInfo, result;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (client) {
              _context7.next = 4;
              break;
            }

            _context7.next = 3;
            return getAuraWasmClient();

          case 3:
            client = _context7.sent;

          case 4:
            nftInfo = {
              get_pen: {
                id: String(req.params.id)
              }
            };
            console.log(client);
            _context7.prev = 6;
            _context7.next = 9;
            return client.queryContractSmart(contractAddress, nftInfo);

          case 9:
            result = _context7.sent;
            res.status(200).json({
              data: [result],
              message: 'Found Result'
            });
            _context7.next = 17;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](6);
            console.log(_context7.t0);
            res.status(500).json({
              data: [_context7.t0.message],
              message: 'Error'
            });

          case 17:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[6, 13]]);
  }));

  return function (_x7, _x8) {
    return _ref7.apply(this, arguments);
  };
}());
router.post('/Token/Transfer', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res, next) {
    var transMsg, fee, result;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            if (wallet) {
              _context8.next = 4;
              break;
            }

            _context8.next = 3;
            return getWallet();

          case 3:
            wallet = _context8.sent;

          case 4:
            if (firstAccount) {
              _context8.next = 8;
              break;
            }

            _context8.next = 7;
            return get1stAccount(wallet);

          case 7:
            firstAccount = _context8.sent;

          case 8:
            if (signingClient) {
              _context8.next = 12;
              break;
            }

            _context8.next = 11;
            return getSigningAuraWasmClient(wallet);

          case 11:
            signingClient = _context8.sent;

          case 12:
            transMsg = {
              transfer_nft: {
                token_id: req.body.token_id,
                recipient: req.body.recipient
              }
            };
            fee = {
              amount: [{
                denom: 'uaura',
                amount: '1000'
              }],
              gas: '152375'
            };
            _context8.prev = 14;
            _context8.next = 17;
            return signingClient.execute(firstAccount.address, contractAddress, transMsg, fee);

          case 17:
            result = _context8.sent;
            res.status(200).json({
              data: [result],
              message: 'Tranfer Result'
            });
            _context8.next = 24;
            break;

          case 21:
            _context8.prev = 21;
            _context8.t0 = _context8["catch"](14);
            res.status(500).json({
              data: [_context8.t0.message],
              message: 'Error'
            });

          case 24:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[14, 21]]);
  }));

  return function (_x9, _x10, _x11) {
    return _ref8.apply(this, arguments);
  };
}());
router.route('/metadata/:contract/token/:index').get( /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var conditions, tokenInfo;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            /* 	#swagger.tags = ['Token Mongodb']
            #swagger.description = 'Get Info NFT Token' */
            conditions = {
              index: String(req.params.index),
              contract: String(req.params.contract)
            };
            _context9.prev = 1;
            _context9.next = 4;
            return _models_Pen_js__WEBPACK_IMPORTED_MODULE_5__["default"].findOne(conditions).exec();

          case 4:
            tokenInfo = _context9.sent;
            res.status(200).json({
              data: [tokenInfo],
              message: 'Found Result'
            });
            _context9.next = 12;
            break;

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](1);
            console.log(_context9.t0);
            res.status(500).json({
              data: [_context9.t0.message],
              message: 'Error'
            });

          case 12:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 8]]);
  }));

  return function (_x12, _x13) {
    return _ref9.apply(this, arguments);
  };
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./src/controllers/ConnectWallet.js":
/*!******************************************!*\
  !*** ./src/controllers/ConnectWallet.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var _cosmjs_cosmwasm_stargate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cosmjs/cosmwasm-stargate */ "@cosmjs/cosmwasm-stargate");
/* harmony import */ var _cosmjs_proto_signing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cosmjs/proto-signing */ "@cosmjs/proto-signing");
/* harmony import */ var web3_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3.storage */ "web3.storage");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/helpers.js */ "./src/helpers/helpers.js");
/* harmony import */ var _models_Pen_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Pen.js */ "./src/models/Pen.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ "path");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var router = express__WEBPACK_IMPORTED_MODULE_0__.Router();







var __dirname = path__WEBPACK_IMPORTED_MODULE_6__.resolve();

var mnemonic = process.env.MNEMONIC;
var rpcEndpoint = process.env.RPC;
var contractAddress = process.env.CONTRACT;
var web3Token = process.env.WEB3_STORAGE_TOKEN;
var storage = new web3_storage__WEBPACK_IMPORTED_MODULE_3__.Web3Storage({
  token: web3Token
});
var wallet;
var firstAccount;
var client;
var signingClient;
router.route('/connect-wallet').get( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.sendFile(__dirname + '/src/html/connect-wallet.html');

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./src/helpers/helpers.js":
/*!********************************!*\
  !*** ./src/helpers/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jsonFile": () => (/* binding */ jsonFile),
/* harmony export */   "makeGatewayURL": () => (/* binding */ makeGatewayURL)
/* harmony export */ });
/**
 * Return an IPFS gateway URL for the given CID and path
 * @param {string} cid 
 * @param {string} path 
 * @returns {string}
 */
function makeGatewayURL(cid, path) {
  return "https://".concat(cid, ".ipfs.dweb.link/").concat(encodeURIComponent(path));
}
/**
 * Make a File object with the given filename, containing the given object (serialized to JSON).
 * @param {string} filename filename for the returned File object
 * @param {object} obj a JSON-serializable object
 * @returns {File}
 */

function jsonFile(filename, obj) {
  return new File([JSON.stringify(obj)], filename);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swagger-ui-express */ "swagger-ui-express");
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs/promises */ "fs/promises");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes.js */ "./src/routes.js");
/*
 * Run the project and access the documentation at: http://localhost:3000/doc
 *
 * Use the command below to generate the documentation without starting the project:
 * $ npm start
 *
 * Use the command below to generate the documentation at project startup:
 * $ npm run start-gendoc
 */






var __filename = (0,url__WEBPACK_IMPORTED_MODULE_4__.fileURLToPath)("file:///Users/imac/Project/NFT/aura-dapp-example/src/index.js"); // 👇️ "/home/john/Desktop/javascript"


var __dirname = path__WEBPACK_IMPORTED_MODULE_3__.dirname(__filename);

var swaggerFile = JSON.parse(await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.readFile)(new URL(/* asset import */ __webpack_require__(/*! ../swagger-output.json */ "./swagger-output.json"), __webpack_require__.b)));

var app = express__WEBPACK_IMPORTED_MODULE_5__();
app.set('view engine', 'pug');
app.set('views', path__WEBPACK_IMPORTED_MODULE_3__.join(__dirname, "./public/views")); // use pug templates file in /public/views subdirectory


app.use(body_parser__WEBPACK_IMPORTED_MODULE_6__.json());
/* Routes */


/* Middlewares */

app.use(_routes_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
app.use('/static', express__WEBPACK_IMPORTED_MODULE_5__["static"](path__WEBPACK_IMPORTED_MODULE_3__.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.render('home', {
    title: 'Connect Wallet'
  });
});
app.use('/docs', swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__.serve, swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__.setup(swaggerFile));
app.listen(3000, function () {
  console.log("Server is running!\nAPI documentation: http://localhost:3000/docs");
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/models/Pen.js":
/*!***************************!*\
  !*** ./src/models/Pen.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db.js */ "./src/models/db.js");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");


var Schema = mongoose__WEBPACK_IMPORTED_MODULE_1__.Schema;
var penSchema = new Schema({
  contract: String,
  owner: String,
  quality: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  effect: {
    type: Number,
    required: true
  },
  resilience: {
    type: Number,
    required: true
  },
  number_of_mints: {
    type: Number,
    required: true
  },
  durability: {
    type: Number,
    required: true
  },
  deploy_status: {
    type: Boolean,
    "default": false
  }
});
penSchema.plugin(_db_js__WEBPACK_IMPORTED_MODULE_0__.AutoIncrement, {
  inc_field: "index"
});
var pen = mongoose__WEBPACK_IMPORTED_MODULE_1__.model('pens', penSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pen);

/***/ }),

/***/ "./src/models/db.js":
/*!**************************!*\
  !*** ./src/models/db.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoIncrement": () => (/* binding */ AutoIncrement),
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose_sequence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-sequence */ "mongoose-sequence");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // const mongodb_connect = process.env.DB_CONNECTION + "://" + process.env.DB_HOST + ":" + process.env.DB_PORT + '/' + process.env.DB_DATABASE;

var mongodb_connect = process.env.DB_URL;
var AutoIncrement = mongoose_sequence__WEBPACK_IMPORTED_MODULE_1__(mongoose__WEBPACK_IMPORTED_MODULE_0__);
main()["catch"](function (err) {
  return console.log(err);
});

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(mongodb_connect);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}



/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-fileupload */ "express-fileupload");
/* harmony import */ var _controllers_ApiRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/ApiRoute.js */ "./src/controllers/ApiRoute.js");
/* harmony import */ var _controllers_ConnectWallet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/ConnectWallet.js */ "./src/controllers/ConnectWallet.js");

var router = express__WEBPACK_IMPORTED_MODULE_0__.Router(); // import bodyParser from 'body-parser';

 // router.use(bodyParser.json());

router.use(express_fileupload__WEBPACK_IMPORTED_MODULE_1__());


router.use(_controllers_ApiRoute_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
router.use(_controllers_ConnectWallet_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ })

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			if(queue) queue.moduleId = module.id;
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			promise.moduleId = module.id;
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = require("url").pathToFileURL(__filename);
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwid2VicGFjazovL3NlcnZlci9leHRlcm5hbCBjb21tb25qcyBcIkBjb3NtanMvY29zbXdhc20tc3RhcmdhdGVcIiIsIndlYnBhY2s6Ly9zZXJ2ZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJAY29zbWpzL3Byb3RvLXNpZ25pbmdcIiIsIndlYnBhY2s6Ly9zZXJ2ZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovL3NlcnZlci9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudi9jb25maWdcIiIsIndlYnBhY2s6Ly9zZXJ2ZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vc2VydmVyL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzcy1maWxldXBsb2FkXCIiLCJ3ZWJwYWNrOi8vc2VydmVyL2V4dGVybmFsIGNvbW1vbmpzIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9zZXJ2ZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJtb25nb29zZS1zZXF1ZW5jZVwiIiwid2VicGFjazovL3NlcnZlci9leHRlcm5hbCBjb21tb25qcyBcInN3YWdnZXItdWktZXhwcmVzc1wiIiwid2VicGFjazovL3NlcnZlci9leHRlcm5hbCBjb21tb25qcyBcIndlYjMuc3RvcmFnZVwiIiwid2VicGFjazovL3NlcnZlci9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZnMvcHJvbWlzZXNcIiIsIndlYnBhY2s6Ly9zZXJ2ZXIvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9zZXJ2ZXIvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInVybFwiIiwid2VicGFjazovL3NlcnZlci8uL2FwcC5qcyIsIndlYnBhY2s6Ly9zZXJ2ZXIvLi9zcmMvY29udHJvbGxlcnMvQXBpUm91dGUuanMiLCJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL2NvbnRyb2xsZXJzL0Nvbm5lY3RXYWxsZXQuanMiLCJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL2hlbHBlcnMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9zZXJ2ZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL21vZGVscy9QZW4uanMiLCJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL21vZGVscy9kYi5qcyIsIndlYnBhY2s6Ly9zZXJ2ZXIvLi9zcmMvcm91dGVzLmpzIiwid2VicGFjazovL3NlcnZlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zZXJ2ZXIvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly9zZXJ2ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NlcnZlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NlcnZlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NlcnZlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zZXJ2ZXIvd2VicGFjay9ydW50aW1lL3JlcXVpcmUgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zZXJ2ZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zZXJ2ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3NlcnZlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJzZXJ2ZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic2VydmVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNlcnZlclwiXSA9IGZhY3RvcnkoKTtcbn0pKGdsb2JhbCwgKCkgPT4ge1xucmV0dXJuICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjb3NtanMvY29zbXdhc20tc3RhcmdhdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNvc21qcy9wcm90by1zaWduaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudi9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWZpbGV1cGxvYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2Utc2VxdWVuY2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dhZ2dlci11aS1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjMuc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy9wcm9taXNlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0ICcuL3NyYy9pbmRleC5qcyciLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5pbXBvcnQgeyBTaWduaW5nQ29zbVdhc21DbGllbnQsIENvc21XYXNtQ2xpZW50IH0gZnJvbSAnQGNvc21qcy9jb3Ntd2FzbS1zdGFyZ2F0ZSc7XG5pbXBvcnQgeyBEaXJlY3RTZWNwMjU2azFIZFdhbGxldCB9IGZyb20gJ0Bjb3NtanMvcHJvdG8tc2lnbmluZyc7XG5pbXBvcnQgeyBXZWIzU3RvcmFnZSwgRmlsZSB9IGZyb20gJ3dlYjMuc3RvcmFnZSc7XG5pbXBvcnQgeyBtYWtlR2F0ZXdheVVSTCB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycy5qcyc7XG5pbXBvcnQgcGVuIGZyb20gJy4uL21vZGVscy9QZW4uanMnO1xuXG5jb25zdCBtbmVtb25pYyA9IHByb2Nlc3MuZW52Lk1ORU1PTklDO1xuY29uc3QgcnBjRW5kcG9pbnQgPSBwcm9jZXNzLmVudi5SUEM7XG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSBwcm9jZXNzLmVudi5DT05UUkFDVDtcbmNvbnN0IHdlYjNUb2tlbiA9IHByb2Nlc3MuZW52LldFQjNfU1RPUkFHRV9UT0tFTjtcbmNvbnN0IHN0b3JhZ2UgPSBuZXcgV2ViM1N0b3JhZ2UoeyB0b2tlbjogd2ViM1Rva2VuIH0pO1xuXG5sZXQgd2FsbGV0O1xubGV0IGZpcnN0QWNjb3VudDtcbmxldCBjbGllbnQ7XG5sZXQgc2lnbmluZ0NsaWVudDtcblxuY29uc3QgZ2V0V2FsbGV0ID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgRGlyZWN0U2VjcDI1NmsxSGRXYWxsZXQuZnJvbU1uZW1vbmljKG1uZW1vbmljLCB7IHByZWZpeDogJ2F1cmEnIH0pO1xuICAgIHJldHVybiB3YWxsZXQ7XG59XG5cbmNvbnN0IGdldDFzdEFjY291bnQgPSBhc3luYyh3YWxsZXQpID0+IHtcbiAgICBjb25zdCBbZmlyc3RBY2NvdW50XSA9IGF3YWl0IHdhbGxldC5nZXRBY2NvdW50cygpO1xuICAgIHJldHVybiBmaXJzdEFjY291bnQ7XG59XG5cbmNvbnN0IGdldEF1cmFXYXNtQ2xpZW50ID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgQ29zbVdhc21DbGllbnQuY29ubmVjdChycGNFbmRwb2ludCk7XG4gICAgcmV0dXJuIGNsaWVudDtcbn1cblxuY29uc3QgZ2V0U2lnbmluZ0F1cmFXYXNtQ2xpZW50ID0gYXN5bmMod2FsbGV0KSA9PiB7XG4gICAgY29uc3Qgc2lnbmluZ0NsaWVudCA9IGF3YWl0IFNpZ25pbmdDb3NtV2FzbUNsaWVudC5jb25uZWN0V2l0aFNpZ25lcihycGNFbmRwb2ludCwgd2FsbGV0KTtcbiAgICByZXR1cm4gc2lnbmluZ0NsaWVudDtcbn1cblxuZnVuY3Rpb24gbWFrZUZpbGVPYmplY3RzKGltZykge1xuICAgIC8vIFlvdSBjYW4gY3JlYXRlIEZpbGUgb2JqZWN0cyBmcm9tIGEgQnVmZmVyIG9mIGJpbmFyeSBkYXRhXG4gICAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGltZy5kYXRhLCAnYmFzZTY0Jyk7XG5cbiAgICBjb25zdCBmaWxlcyA9IFtcbiAgICAgICAgbmV3IEZpbGUoWydjb250ZW50cy1vZi1maWxlLTEnXSwgJ3BsYWluLXV0ZjgudHh0JyksXG4gICAgICAgIG5ldyBGaWxlKFtidWZmZXJdLCBpbWcubmFtZSlcbiAgICBdXG4gICAgcmV0dXJuIGZpbGVzXG59XG5cbnJvdXRlci5yb3V0ZSgnL0ltYWdlL1VwbG9hZCcpLnBvc3QoYXN5bmMocmVxLCByZXMpID0+IHtcbiAgICAvKiBcdCNzd2FnZ2VyLnRhZ3MgPSBbJ0ltYWdlJ11cbiAgICAjc3dhZ2dlci5kZXNjcmlwdGlvbiA9ICdVcGxvYWQgaW1hZ2UgdG8gSVBGUycgKi9cblxuICAgIC8qICAgICNzd2FnZ2VyLmNvbnN1bWVzID0gWydtdWx0aXBhcnQvZm9ybS1kYXRhJ10gIFxuICAgICAgICAjc3dhZ2dlci5wYXJhbWV0ZXJzWydpbWFnZSddID0ge1xuICAgICAgICAgICAgaW46ICdmb3JtRGF0YScsXG4gICAgICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICAgICAgICByZXF1aXJlZDogJ3RydWUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTb21lIGRlc2NyaXB0aW9uLi4uJyxcbiAgICB9ICovXG5cbiAgICBjb25zdCBpbWFnZUZpbGUgPSByZXEuZmlsZXMuaW1hZ2U7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlc09iaiA9IG1ha2VGaWxlT2JqZWN0cyhpbWFnZUZpbGUpO1xuICAgICAgICBjb25zdCBjaWQgPSBhd2FpdCBzdG9yYWdlLnB1dChmaWxlc09iaik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb250ZW50IGFkZGVkIHdpdGggQ0lEOicsIGNpZCk7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhR2F0ZXdheVVSTCA9IG1ha2VHYXRld2F5VVJMKGNpZCwgJ21ldGFkYXRhLmpzb24nKTtcbiAgICAgICAgY29uc3QgaW1hZ2VHYXRld2F5VVJMID0gbWFrZUdhdGV3YXlVUkwoY2lkLCBpbWFnZUZpbGUubmFtZSk7XG4gICAgICAgIGNvbnN0IGltYWdlVVJJID0gYGlwZnM6Ly8ke2NpZH0vJHtpbWFnZUZpbGUubmFtZX1gO1xuICAgICAgICBjb25zdCBtZXRhZGF0YVVSSSA9IGBpcGZzOi8vJHtjaWR9L21ldGFkYXRhLmpzb25gO1xuXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgIGRhdGE6IFt7IGNpZCwgbWV0YWRhdGFHYXRld2F5VVJMLCBpbWFnZUdhdGV3YXlVUkwsIGltYWdlVVJJLCBtZXRhZGF0YVVSSSB9XSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdVcGxvYWQgUmVzdWx0J1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgZGF0YTogW2Vyci5tZXNzYWdlXSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvcidcbiAgICAgICAgfSk7XG4gICAgfVxufSlcblxucm91dGVyLnJvdXRlKCcvVG9rZW4vTWludCcpLnBvc3QoYXN5bmMocmVxLCByZXMpID0+IHtcbiAgICAvKiBcdCNzd2FnZ2VyLnRhZ3MgPSBbJ1Rva2VuJ11cbiAgICAjc3dhZ2dlci5kZXNjcmlwdGlvbiA9ICdNaW50IE5GVCBUb2tlbicgKi9cblxuICAgIC8qICAjc3dhZ2dlci5wYXJhbWV0ZXJzWydvYmonXSA9IHtcbiAgICAgICAgICAgIGluOiAnYm9keScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Rva2VuIEluZm9ybWF0aW9uJyxcbiAgICAgICAgICAgIHNjaGVtYTogeyAkcmVmOiAnIy9kZWZpbml0aW9ucy9NaW50JyB9XG4gICAgfSAqL1xuXG4gICAgaWYgKCF3YWxsZXQpIHtcbiAgICAgICAgd2FsbGV0ID0gYXdhaXQgZ2V0V2FsbGV0KCk7XG4gICAgfVxuICAgIGlmICghZmlyc3RBY2NvdW50KSB7XG4gICAgICAgIGZpcnN0QWNjb3VudCA9IGF3YWl0IGdldDFzdEFjY291bnQod2FsbGV0KTtcbiAgICB9XG4gICAgaWYgKCFzaWduaW5nQ2xpZW50KSB7XG4gICAgICAgIHNpZ25pbmdDbGllbnQgPSBhd2FpdCBnZXRTaWduaW5nQXVyYVdhc21DbGllbnQod2FsbGV0KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGVuLmNyZWF0ZSh7XG4gICAgICAgICAgICBjb250cmFjdDogY29udHJhY3RBZGRyZXNzLFxuICAgICAgICAgICAgb3duZXI6IGZpcnN0QWNjb3VudC5hZGRyZXNzLFxuICAgICAgICAgICAgcXVhbGl0eTogcmVxLmJvZHkucXVhbGl0eSxcbiAgICAgICAgICAgIGxldmVsOiByZXEuYm9keS5sZXZlbCxcbiAgICAgICAgICAgIGVmZmVjdDogcmVxLmJvZHkuZWZmZWN0LFxuICAgICAgICAgICAgcmVzaWxpZW5jZTogcmVxLmJvZHkucmVzaWxpZW5jZSxcbiAgICAgICAgICAgIG51bWJlcl9vZl9taW50czogcmVxLmJvZHkubnVtYmVyX29mX21pbnRzLFxuICAgICAgICAgICAgZHVyYWJpbGl0eTogcmVxLmJvZHkuZHVyYWJpbGl0eVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgY29uc3QgbWludE1zZyA9IHtcbiAgICAgICAgICAgICAgICBtaW50OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBgJHtyZXN1bHQuaW5kZXh9YCxcbiAgICAgICAgICAgICAgICAgICAgb3duZXI6IHJlc3VsdC5vd25lcixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBmZWUgPSB7XG4gICAgICAgICAgICAgICAgYW1vdW50OiBbe1xuICAgICAgICAgICAgICAgICAgICBkZW5vbTogJ3VhdXJhJyxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAnMTUzJyxcbiAgICAgICAgICAgICAgICB9LCBdLFxuICAgICAgICAgICAgICAgIGdhczogJzE1MjM3NScsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzaWduaW5nQ2xpZW50LmV4ZWN1dGUoZmlyc3RBY2NvdW50LmFkZHJlc3MsIGNvbnRyYWN0QWRkcmVzcywgbWludE1zZywgZmVlKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBwZW4uZmluZE9uZUFuZFVwZGF0ZSh7IGluZGV4OiByZXN1bHQuaW5kZXggfSwgeyBkZXBsb3lfc3RhdHVzOiB0cnVlIH0sIHsgdXBzZXJ0OiB0cnVlIH0pO1xuXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbcmVzcG9uc2VdLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTWludCBSZXN1bHQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtlcnIubWVzc2FnZV0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvcidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgIGRhdGE6IFtlcnIubWVzc2FnZV0sXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxufSlcblxucm91dGVyLnJvdXRlKCcvVG9rZW4vR2V0LzppZCcpLmdldChhc3luYyhyZXEsIHJlcykgPT4ge1xuICAgIC8qIFx0I3N3YWdnZXIudGFncyA9IFsnVG9rZW4nXVxuICAgICNzd2FnZ2VyLmRlc2NyaXB0aW9uID0gJ01pbnQgTkZUIFRva2VuJyAqL1xuXG4gICAgaWYgKCFjbGllbnQpIHtcbiAgICAgICAgY2xpZW50ID0gYXdhaXQgZ2V0QXVyYVdhc21DbGllbnQoKTtcbiAgICB9XG4gICAgY29uc3QgbmZ0SW5mbyA9IHtcbiAgICAgICAgZ2V0X3Blbjoge1xuICAgICAgICAgICAgaWQ6IFN0cmluZyhyZXEucGFyYW1zLmlkKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGNsaWVudClcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQucXVlcnlDb250cmFjdFNtYXJ0KGNvbnRyYWN0QWRkcmVzcywgbmZ0SW5mbyk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgIGRhdGE6IFtyZXN1bHRdLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0ZvdW5kIFJlc3VsdCdcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgZGF0YTogW2Vyci5tZXNzYWdlXSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvcidcbiAgICAgICAgfSk7XG4gICAgfVxufSlcblxucm91dGVyLnBvc3QoJy9Ub2tlbi9UcmFuc2ZlcicsIGFzeW5jKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgLyogXHQjc3dhZ2dlci50YWdzID0gWydUb2tlbiddXG4gICAgICAgICNzd2FnZ2VyLmRlc2NyaXB0aW9uID0gJ1RyYW5zZmVyIE5GVCBUb2tlbicgKi9cblxuICAgIC8qICAjc3dhZ2dlci5wYXJhbWV0ZXJzWydvYmonXSA9IHtcbiAgICAgICAgICAgIGluOiAnYm9keScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RyYW5zZmVyIEluZm9ybWF0aW9uJyxcbiAgICAgICAgICAgIHNjaGVtYTogeyAkcmVmOiAnIy9kZWZpbml0aW9ucy9UcmFuc2ZlcicgfVxuICAgIH0gKi9cblxuICAgIGlmICghd2FsbGV0KSB7XG4gICAgICAgIHdhbGxldCA9IGF3YWl0IGdldFdhbGxldCgpO1xuICAgIH1cbiAgICBpZiAoIWZpcnN0QWNjb3VudCkge1xuICAgICAgICBmaXJzdEFjY291bnQgPSBhd2FpdCBnZXQxc3RBY2NvdW50KHdhbGxldCk7XG4gICAgfVxuICAgIGlmICghc2lnbmluZ0NsaWVudCkge1xuICAgICAgICBzaWduaW5nQ2xpZW50ID0gYXdhaXQgZ2V0U2lnbmluZ0F1cmFXYXNtQ2xpZW50KHdhbGxldCk7XG4gICAgfVxuICAgIGNvbnN0IHRyYW5zTXNnID0ge1xuICAgICAgICB0cmFuc2Zlcl9uZnQ6IHtcbiAgICAgICAgICAgIHRva2VuX2lkOiByZXEuYm9keS50b2tlbl9pZCxcbiAgICAgICAgICAgIHJlY2lwaWVudDogcmVxLmJvZHkucmVjaXBpZW50LFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmVlID0ge1xuICAgICAgICBhbW91bnQ6IFt7XG4gICAgICAgICAgICBkZW5vbTogJ3VhdXJhJyxcbiAgICAgICAgICAgIGFtb3VudDogJzEwMDAnLFxuICAgICAgICB9LCBdLFxuICAgICAgICBnYXM6ICcxNTIzNzUnLFxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25pbmdDbGllbnQuZXhlY3V0ZShmaXJzdEFjY291bnQuYWRkcmVzcywgY29udHJhY3RBZGRyZXNzLCB0cmFuc01zZywgZmVlKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgZGF0YTogW3Jlc3VsdF0sXG4gICAgICAgICAgICBtZXNzYWdlOiAnVHJhbmZlciBSZXN1bHQnXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICBkYXRhOiBbZXJyLm1lc3NhZ2VdLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yJ1xuICAgICAgICB9KTtcbiAgICB9XG59KVxuXG5yb3V0ZXIucm91dGUoJy9tZXRhZGF0YS86Y29udHJhY3QvdG9rZW4vOmluZGV4JykuZ2V0KGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICAgLyogXHQjc3dhZ2dlci50YWdzID0gWydUb2tlbiBNb25nb2RiJ11cbiAgICAjc3dhZ2dlci5kZXNjcmlwdGlvbiA9ICdHZXQgSW5mbyBORlQgVG9rZW4nICovXG4gICAgY29uc3QgY29uZGl0aW9ucyA9IHtcbiAgICAgICAgaW5kZXg6IFN0cmluZyhyZXEucGFyYW1zLmluZGV4KSxcbiAgICAgICAgY29udHJhY3Q6IFN0cmluZyhyZXEucGFyYW1zLmNvbnRyYWN0KVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRva2VuSW5mbyA9IGF3YWl0IHBlbi5maW5kT25lKGNvbmRpdGlvbnMpLmV4ZWMoKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgZGF0YTogW3Rva2VuSW5mb10sXG4gICAgICAgICAgICBtZXNzYWdlOiAnRm91bmQgUmVzdWx0J1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICBkYXRhOiBbZXJyLm1lc3NhZ2VdLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yJ1xuICAgICAgICB9KTtcbiAgICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgcm91dGVyIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuaW1wb3J0IHsgU2lnbmluZ0Nvc21XYXNtQ2xpZW50LCBDb3NtV2FzbUNsaWVudCB9IGZyb20gJ0Bjb3NtanMvY29zbXdhc20tc3RhcmdhdGUnO1xuaW1wb3J0IHsgRGlyZWN0U2VjcDI1NmsxSGRXYWxsZXQgfSBmcm9tICdAY29zbWpzL3Byb3RvLXNpZ25pbmcnO1xuaW1wb3J0IHsgV2ViM1N0b3JhZ2UsIEZpbGUgfSBmcm9tICd3ZWIzLnN0b3JhZ2UnO1xuaW1wb3J0IHsgbWFrZUdhdGV3YXlVUkwgfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMuanMnO1xuaW1wb3J0IHBlbiBmcm9tICcuLi9tb2RlbHMvUGVuLmpzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuY29uc3QgX19kaXJuYW1lID0gcGF0aC5yZXNvbHZlKCk7XG5cbmNvbnN0IG1uZW1vbmljID0gcHJvY2Vzcy5lbnYuTU5FTU9OSUM7XG5jb25zdCBycGNFbmRwb2ludCA9IHByb2Nlc3MuZW52LlJQQztcbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IHByb2Nlc3MuZW52LkNPTlRSQUNUO1xuY29uc3Qgd2ViM1Rva2VuID0gcHJvY2Vzcy5lbnYuV0VCM19TVE9SQUdFX1RPS0VOO1xuY29uc3Qgc3RvcmFnZSA9IG5ldyBXZWIzU3RvcmFnZSh7IHRva2VuOiB3ZWIzVG9rZW4gfSk7XG5cbmxldCB3YWxsZXQ7XG5sZXQgZmlyc3RBY2NvdW50O1xubGV0IGNsaWVudDtcbmxldCBzaWduaW5nQ2xpZW50O1xuXG5yb3V0ZXIucm91dGUoJy9jb25uZWN0LXdhbGxldCcpLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICAgICByZXMuc2VuZEZpbGUoX19kaXJuYW1lICsgJy9zcmMvaHRtbC9jb25uZWN0LXdhbGxldC5odG1sJyk7XG5cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlciIsIlxuLyoqXG4gKiBSZXR1cm4gYW4gSVBGUyBnYXRld2F5IFVSTCBmb3IgdGhlIGdpdmVuIENJRCBhbmQgcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IGNpZCBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VHYXRld2F5VVJMKGNpZCwgcGF0aCkge1xuICByZXR1cm4gYGh0dHBzOi8vJHtjaWR9LmlwZnMuZHdlYi5saW5rLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhdGgpfWBcbn1cblxuLyoqXG4gKiBNYWtlIGEgRmlsZSBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gZmlsZW5hbWUsIGNvbnRhaW5pbmcgdGhlIGdpdmVuIG9iamVjdCAoc2VyaWFsaXplZCB0byBKU09OKS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlbmFtZSBmaWxlbmFtZSBmb3IgdGhlIHJldHVybmVkIEZpbGUgb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIGEgSlNPTi1zZXJpYWxpemFibGUgb2JqZWN0XG4gKiBAcmV0dXJucyB7RmlsZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGpzb25GaWxlKGZpbGVuYW1lLCBvYmopIHtcbiAgcmV0dXJuIG5ldyBGaWxlKFtKU09OLnN0cmluZ2lmeShvYmopXSwgZmlsZW5hbWUpXG59XG4iLCIvKlxuICogUnVuIHRoZSBwcm9qZWN0IGFuZCBhY2Nlc3MgdGhlIGRvY3VtZW50YXRpb24gYXQ6IGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kb2NcbiAqXG4gKiBVc2UgdGhlIGNvbW1hbmQgYmVsb3cgdG8gZ2VuZXJhdGUgdGhlIGRvY3VtZW50YXRpb24gd2l0aG91dCBzdGFydGluZyB0aGUgcHJvamVjdDpcbiAqICQgbnBtIHN0YXJ0XG4gKlxuICogVXNlIHRoZSBjb21tYW5kIGJlbG93IHRvIGdlbmVyYXRlIHRoZSBkb2N1bWVudGF0aW9uIGF0IHByb2plY3Qgc3RhcnR1cDpcbiAqICQgbnBtIHJ1biBzdGFydC1nZW5kb2NcbiAqL1xuXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnO1xuXG5pbXBvcnQgc3dhZ2dlclVpIGZyb20gJ3N3YWdnZXItdWktZXhwcmVzcyc7XG5pbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5jb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChcbiAgICBpbXBvcnQubWV0YS51cmwpO1xuXG4vLyDwn5GH77iPIFwiL2hvbWUvam9obi9EZXNrdG9wL2phdmFzY3JpcHRcIlxuY29uc3QgX19kaXJuYW1lID0gcGF0aC5kaXJuYW1lKF9fZmlsZW5hbWUpO1xuXG5jb25zdCBzd2FnZ2VyRmlsZSA9IEpTT04ucGFyc2UoXG4gICAgYXdhaXQgcmVhZEZpbGUoXG4gICAgICAgIG5ldyBVUkwoJy4uL3N3YWdnZXItb3V0cHV0Lmpzb24nLFxuICAgICAgICAgICAgaW1wb3J0Lm1ldGEudXJsKVxuICAgIClcbik7XG5cbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAncHVnJyk7XG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi9wdWJsaWMvdmlld3NcIikpOyAvLyB1c2UgcHVnIHRlbXBsYXRlcyBmaWxlIGluIC9wdWJsaWMvdmlld3Mgc3ViZGlyZWN0b3J5XG5cbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuLyogUm91dGVzICovXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVzLmpzJztcbi8qIE1pZGRsZXdhcmVzICovXG5hcHAudXNlKHJvdXRlcik7XG5hcHAudXNlKCcvc3RhdGljJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycpKSlcbmFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcbiAgICByZXMucmVuZGVyKCdob21lJywge1xuICAgICAgICB0aXRsZTogJ0Nvbm5lY3QgV2FsbGV0JyxcbiAgICB9KTtcbn0pO1xuXG5hcHAudXNlKCcvZG9jcycsIHN3YWdnZXJVaS5zZXJ2ZSwgc3dhZ2dlclVpLnNldHVwKHN3YWdnZXJGaWxlKSk7XG5cbmFwcC5saXN0ZW4oMzAwMCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIGlzIHJ1bm5pbmchXFxuQVBJIGRvY3VtZW50YXRpb246IGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kb2NzXCIpO1xufSkiLCJpbXBvcnQge21haW4sIEF1dG9JbmNyZW1lbnR9IGZyb20gJy4vZGIuanMnO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbnZhciBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5cbmNvbnN0IHBlblNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIGNvbnRyYWN0OiBTdHJpbmcsXG4gICAgb3duZXI6IFN0cmluZyxcbiAgICBxdWFsaXR5OiB7IHR5cGUgOlN0cmluZywgcmVxdWlyZWQgOiB0cnVlIH0sXG4gICAgbGV2ZWw6IHsgdHlwZSA6TnVtYmVyLCByZXF1aXJlZCA6IHRydWUgfSxcbiAgICBlZmZlY3Q6IHsgdHlwZSA6TnVtYmVyLCByZXF1aXJlZCA6IHRydWUgfSxcbiAgICByZXNpbGllbmNlOiB7IHR5cGUgOk51bWJlciwgcmVxdWlyZWQgOiB0cnVlIH0sXG4gICAgbnVtYmVyX29mX21pbnRzOiB7IHR5cGUgOk51bWJlciwgcmVxdWlyZWQgOiB0cnVlIH0sXG4gICAgZHVyYWJpbGl0eTogeyB0eXBlIDpOdW1iZXIsIHJlcXVpcmVkIDogdHJ1ZSB9LFxuICAgIGRlcGxveV9zdGF0dXMgOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH1cbn0pO1xuXG5wZW5TY2hlbWEucGx1Z2luKEF1dG9JbmNyZW1lbnQsIHtpbmNfZmllbGQ6IFwiaW5kZXhcIiB9KTtcblxuY29uc3QgcGVuID0gbW9uZ29vc2UubW9kZWwoJ3BlbnMnLCBwZW5TY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBwZW47XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IEluYyBmcm9tIFwibW9uZ29vc2Utc2VxdWVuY2VcIjtcblxuLy8gY29uc3QgbW9uZ29kYl9jb25uZWN0ID0gcHJvY2Vzcy5lbnYuREJfQ09OTkVDVElPTiArIFwiOi8vXCIgKyBwcm9jZXNzLmVudi5EQl9IT1NUICsgXCI6XCIgKyBwcm9jZXNzLmVudi5EQl9QT1JUICsgJy8nICsgcHJvY2Vzcy5lbnYuREJfREFUQUJBU0U7XG5jb25zdCBtb25nb2RiX2Nvbm5lY3QgPSBwcm9jZXNzLmVudi5EQl9VUkw7XG5jb25zdCBBdXRvSW5jcmVtZW50ID0gSW5jKG1vbmdvb3NlKTsgXG5cbm1haW4oKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChtb25nb2RiX2Nvbm5lY3QpO1xufVxuXG5leHBvcnQge21haW4sIEF1dG9JbmNyZW1lbnR9O1xuIiwiXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbi8vIGltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBmaWxlVXBsb2FkIGZyb20gJ2V4cHJlc3MtZmlsZXVwbG9hZCc7XG4vLyByb3V0ZXIudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbnJvdXRlci51c2UoZmlsZVVwbG9hZCgpKTtcblxuaW1wb3J0IGFwaVYxIGZyb20gJy4vY29udHJvbGxlcnMvQXBpUm91dGUuanMnO1xuaW1wb3J0IGFwaUNvbm5lY3RXYWxsZXQgZnJvbSAnLi9jb250cm9sbGVycy9Db25uZWN0V2FsbGV0LmpzJztcblxucm91dGVyLnVzZShhcGlWMSk7XG5cbnJvdXRlci51c2UoYXBpQ29ubmVjdFdhbGxldCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlciIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiAhcXVldWUuZCkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAxKTtcblx0aWYocXVldWUpIHF1ZXVlLm1vZHVsZUlkID0gbW9kdWxlLmlkO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdHByb21pc2UubW9kdWxlSWQgPSBtb2R1bGUuaWQ7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fSwgKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpKTtcblx0cXVldWUgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gcmVxdWlyZShcInVybFwiKS5wYXRoVG9GaWxlVVJMKF9fZmlsZW5hbWUpO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuLy8gXCIxXCIgbWVhbnMgXCJsb2FkZWRcIiwgb3RoZXJ3aXNlIG5vdCBsb2FkZWQgeWV0XG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMVxufTtcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBjaHVuayBpbnN0YWxsIGZ1bmN0aW9uIG5lZWRlZFxuXG4vLyBubyBjaHVuayBsb2FkaW5nXG5cbi8vIG5vIGV4dGVybmFsIGluc3RhbGwgY2h1bmtcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2FwcC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJleHByZXNzIiwicm91dGVyIiwiUm91dGVyIiwiU2lnbmluZ0Nvc21XYXNtQ2xpZW50IiwiQ29zbVdhc21DbGllbnQiLCJEaXJlY3RTZWNwMjU2azFIZFdhbGxldCIsIldlYjNTdG9yYWdlIiwiRmlsZSIsIm1ha2VHYXRld2F5VVJMIiwicGVuIiwibW5lbW9uaWMiLCJwcm9jZXNzIiwiZW52IiwiTU5FTU9OSUMiLCJycGNFbmRwb2ludCIsIlJQQyIsImNvbnRyYWN0QWRkcmVzcyIsIkNPTlRSQUNUIiwid2ViM1Rva2VuIiwiV0VCM19TVE9SQUdFX1RPS0VOIiwic3RvcmFnZSIsInRva2VuIiwid2FsbGV0IiwiZmlyc3RBY2NvdW50IiwiY2xpZW50Iiwic2lnbmluZ0NsaWVudCIsImdldFdhbGxldCIsImZyb21NbmVtb25pYyIsInByZWZpeCIsImdldDFzdEFjY291bnQiLCJnZXRBY2NvdW50cyIsImdldEF1cmFXYXNtQ2xpZW50IiwiY29ubmVjdCIsImdldFNpZ25pbmdBdXJhV2FzbUNsaWVudCIsImNvbm5lY3RXaXRoU2lnbmVyIiwibWFrZUZpbGVPYmplY3RzIiwiaW1nIiwiYnVmZmVyIiwiQnVmZmVyIiwiZnJvbSIsImRhdGEiLCJmaWxlcyIsIm5hbWUiLCJyb3V0ZSIsInBvc3QiLCJyZXEiLCJyZXMiLCJpbWFnZUZpbGUiLCJpbWFnZSIsImZpbGVzT2JqIiwicHV0IiwiY2lkIiwiY29uc29sZSIsImxvZyIsIm1ldGFkYXRhR2F0ZXdheVVSTCIsImltYWdlR2F0ZXdheVVSTCIsImltYWdlVVJJIiwibWV0YWRhdGFVUkkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImNyZWF0ZSIsImNvbnRyYWN0Iiwib3duZXIiLCJhZGRyZXNzIiwicXVhbGl0eSIsImJvZHkiLCJsZXZlbCIsImVmZmVjdCIsInJlc2lsaWVuY2UiLCJudW1iZXJfb2ZfbWludHMiLCJkdXJhYmlsaXR5IiwicmVzdWx0IiwibWludE1zZyIsIm1pbnQiLCJpZCIsImluZGV4IiwiZmVlIiwiYW1vdW50IiwiZGVub20iLCJnYXMiLCJleGVjdXRlIiwicmVzcG9uc2UiLCJmaW5kT25lQW5kVXBkYXRlIiwiZGVwbG95X3N0YXR1cyIsInVwc2VydCIsImVyciIsImdldCIsIm5mdEluZm8iLCJnZXRfcGVuIiwiU3RyaW5nIiwicGFyYW1zIiwicXVlcnlDb250cmFjdFNtYXJ0IiwibmV4dCIsInRyYW5zTXNnIiwidHJhbnNmZXJfbmZ0IiwidG9rZW5faWQiLCJyZWNpcGllbnQiLCJjb25kaXRpb25zIiwiZmluZE9uZSIsImV4ZWMiLCJ0b2tlbkluZm8iLCJwYXRoIiwiX19kaXJuYW1lIiwicmVzb2x2ZSIsInNlbmRGaWxlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwianNvbkZpbGUiLCJmaWxlbmFtZSIsIm9iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzd2FnZ2VyVWkiLCJyZWFkRmlsZSIsImZpbGVVUkxUb1BhdGgiLCJfX2ZpbGVuYW1lIiwiaW1wb3J0IiwibWV0YSIsInVybCIsImRpcm5hbWUiLCJzd2FnZ2VyRmlsZSIsInBhcnNlIiwiVVJMIiwiYXBwIiwic2V0Iiwiam9pbiIsImJvZHlQYXJzZXIiLCJ1c2UiLCJyZW5kZXIiLCJ0aXRsZSIsInNlcnZlIiwic2V0dXAiLCJsaXN0ZW4iLCJtYWluIiwiQXV0b0luY3JlbWVudCIsIm1vbmdvb3NlIiwiU2NoZW1hIiwicGVuU2NoZW1hIiwidHlwZSIsInJlcXVpcmVkIiwiTnVtYmVyIiwiQm9vbGVhbiIsInBsdWdpbiIsImluY19maWVsZCIsIm1vZGVsIiwiSW5jIiwibW9uZ29kYl9jb25uZWN0IiwiREJfVVJMIiwiZmlsZVVwbG9hZCIsImFwaVYxIiwiYXBpQ29ubmVjdFdhbGxldCJdLCJzb3VyY2VSb290IjoiIn0=