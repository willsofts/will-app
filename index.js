"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ALPHABETS: () => ALPHABETS,
  DEFAULT_CONTENT_TYPE: () => DEFAULT_CONTENT_TYPE,
  DEFAULT_PAGE_SETTINGS: () => DEFAULT_PAGE_SETTINGS,
  DEFAULT_PERMITS: () => DEFAULT_PERMITS,
  DH: () => DH,
  KnMask: () => KnMask,
  NUMERICS: () => NUMERICS,
  Paging: () => Paging,
  Permission: () => Permission,
  Utilities: () => Utilities,
  addWindow: () => addWindow,
  alertDialog: () => alertDialog,
  alertbox: () => alertbox,
  alertmsg: () => alertmsg,
  appInit: () => appInit,
  assignAppConfig: () => assignAppConfig,
  bindingChildMessaging: () => bindingChildMessaging,
  bindingParentMessaging: () => bindingParentMessaging,
  checkInputKey: () => checkInputKey,
  checkInputNumberOnly: () => checkInputNumberOnly,
  checkNumberOnly: () => checkNumberOnly,
  clearCalendar: () => clearCalendar,
  clearComma: () => clearComma,
  closeChildWindows: () => closeChildWindows,
  confirmApprove: () => confirmApprove,
  confirmCancel: () => confirmCancel,
  confirmClear: () => confirmClear,
  confirmDelete: () => confirmDelete,
  confirmDialog: () => confirmDialog,
  confirmDialogBox: () => confirmDialogBox,
  confirmErase: () => confirmErase,
  confirmExport: () => confirmExport,
  confirmImport: () => confirmImport,
  confirmProcess: () => confirmProcess,
  confirmReceive: () => confirmReceive,
  confirmReject: () => confirmReject,
  confirmRemove: () => confirmRemove,
  confirmRequest: () => confirmRequest,
  confirmResend: () => confirmResend,
  confirmReset: () => confirmReset,
  confirmRevise: () => confirmRevise,
  confirmSave: () => confirmSave,
  confirmSaveAs: () => confirmSaveAs,
  confirmSend: () => confirmSend,
  confirmUpdate: () => confirmUpdate,
  confirmbox: () => confirmbox,
  confirmmsg: () => confirmmsg,
  createLinkStyle: () => createLinkStyle,
  createNewPassword: () => createNewPassword,
  decryptCipherData: () => decryptCipherData,
  detectErrorResponse: () => detectErrorResponse,
  disableControls: () => disableControls,
  ensureTableSetting: () => ensureTableSetting,
  fetchLabel: () => fetchLabel,
  fetchMessageCode: () => fetchMessageCode,
  formatDataTable: () => formatDataTable,
  formatDecimal: () => formatDecimal,
  formatFloating: () => formatFloating,
  formatNumber: () => formatNumber,
  generateUUID: () => generateUUID,
  getAccessTokenKey: () => getAccessTokenKey,
  getAccessorInfo: () => getAccessorInfo,
  getAccessorToken: () => getAccessorToken,
  getAlphabets: () => getAlphabets,
  getApiLabel: () => getApiLabel,
  getApiMessageCode: () => getApiMessageCode,
  getApiToken: () => getApiToken,
  getApiUrl: () => getApiUrl,
  getAppInfo: () => getAppInfo,
  getBaseCss: () => getBaseCss,
  getBaseStorage: () => getBaseStorage,
  getBaseUrl: () => getBaseUrl,
  getCaretPosition: () => getCaretPosition,
  getCdnUrl: () => getCdnUrl,
  getChatUrl: () => getChatUrl,
  getChildWindows: () => getChildWindows,
  getConfig: () => getConfig,
  getControlClasses: () => getControlClasses,
  getCurrentWindow: () => getCurrentWindow,
  getDH: () => getDH,
  getDefaultLabels: () => getDefaultLabels,
  getDefaultLanguage: () => getDefaultLanguage,
  getDefaultRawParameters: () => getDefaultRawParameters,
  getDigits: () => getDigits,
  getImgUrl: () => getImgUrl,
  getJQuery: () => getJQuery,
  getLabel: () => getLabel,
  getLabelItem: () => getLabelItem,
  getLabelModel: () => getLabelModel,
  getLabelObject: () => getLabelObject,
  getMessageCode: () => getMessageCode,
  getMetaInfo: () => getMetaInfo,
  getMultiLanguages: () => getMultiLanguages,
  getMultiLanguagesModel: () => getMultiLanguagesModel,
  getPermitModel: () => getPermitModel,
  getPrimeNumber: () => getPrimeNumber,
  getProgramLabels: () => getProgramLabels,
  getProgramMessage: () => getProgramMessage,
  getRandomNumber: () => getRandomNumber,
  getRequestID: () => getRequestID,
  getStorage: () => getStorage,
  getTokenKey: () => getTokenKey,
  getWindowByName: () => getWindowByName,
  getWindowOpen: () => getWindowOpen,
  handleRequestMessage: () => handleRequestMessage,
  indexOfAlphabets: () => indexOfAlphabets,
  initAppConfig: () => initAppConfig,
  initConfigure: () => initConfigure,
  inputNumberOnly: () => inputNumberOnly,
  isDigit: () => isDigit,
  isDisplayPageHeader: () => isDisplayPageHeader,
  isLetter: () => isLetter,
  isLowerCase: () => isLowerCase,
  isSecureStorage: () => isSecureStorage,
  isUpperCase: () => isUpperCase,
  loadAndMergeLabel: () => loadAndMergeLabel,
  loadAndMergeMessageCode: () => loadAndMergeMessageCode,
  loadAndMergeProgramLabel: () => loadAndMergeProgramLabel,
  loadAppConfig: () => loadAppConfig,
  loadPermissions: () => loadPermissions,
  mergeMessageCodes: () => mergeMessageCodes,
  mergeProgramLabels: () => mergeProgramLabels,
  modPowInt: () => modPowInt,
  openCalendar: () => openCalendar,
  openNewWindow: () => openNewWindow,
  parseErrorThrown: () => parseErrorThrown,
  parseNumber: () => parseNumber,
  putComma: () => putComma,
  random: () => random,
  randomNumber: () => randomNumber,
  randomPassword: () => randomPassword,
  randomize: () => randomize,
  registerNotification: () => registerNotification,
  removeAccessorInfo: () => removeAccessorInfo,
  removeComma: () => removeComma,
  removeDelimiter: () => removeDelimiter,
  removeStorage: () => removeStorage,
  replaceString: () => replaceString,
  requestAccessorInfo: () => requestAccessorInfo,
  resetRequestID: () => resetRequestID,
  saveAccessorInfo: () => saveAccessorInfo,
  sendMessageInterface: () => sendMessageInterface,
  sendMessageToFrame: () => sendMessageToFrame,
  sendMessageToOpener: () => sendMessageToOpener,
  sendMessageToParent: () => sendMessageToParent,
  serializeParameters: () => serializeParameters,
  setApiToken: () => setApiToken,
  setApiUrl: () => setApiUrl,
  setBaseCss: () => setBaseCss,
  setBaseStorage: () => setBaseStorage,
  setBaseUrl: () => setBaseUrl,
  setCaretPosition: () => setCaretPosition,
  setCdnUrl: () => setCdnUrl,
  setChatUrl: () => setChatUrl,
  setCurrentWindow: () => setCurrentWindow,
  setDefaultLabels: () => setDefaultLabels,
  setDefaultLanguage: () => setDefaultLanguage,
  setDefaultRawParameters: () => setDefaultRawParameters,
  setDragFunction: () => setDragFunction,
  setImgUrl: () => setImgUrl,
  setMessagingCallback: () => setMessagingCallback,
  setMetaInfo: () => setMetaInfo,
  setMultiLanguages: () => setMultiLanguages,
  setProgramLabels: () => setProgramLabels,
  setProgramMessage: () => setProgramMessage,
  setSecureStorage: () => setSecureStorage,
  setStorage: () => setStorage,
  setTokenKey: () => setTokenKey,
  setupApplication: () => setupApplication,
  setupDiffie: () => setupDiffie,
  startApplication: () => startApplication,
  startWaiting: () => startWaiting,
  stopWaiting: () => stopWaiting,
  submitFailure: () => submitFailure,
  submitWindow: () => submitWindow,
  successbox: () => successbox,
  triggerInput: () => triggerInput,
  warningbox: () => warningbox
});
module.exports = __toCommonJS(index_exports);

// src/app/jquery.util.ts
var import_jquery = __toESM(require("jquery"));
function getJQuery() {
  const jq = globalThis.jQuery || globalThis.$;
  if (!jq) {
    console.warn("jQuery not found. Please load jquery first.");
    return import_jquery.default;
  }
  return jq;
}
var jquery_util_default = getJQuery();

// src/app/app.util.ts
var import_bootbox = __toESM(require("bootbox"));

// src/app/msg.util.ts
function getMessageCode(errcode, params, defaultMessage) {
  if (errcode && errcode.trim().length > 0) {
    let program_message2 = getProgramMessage();
    let lang = getDefaultLanguage();
    if (!lang || lang.trim().length == 0) lang = "EN";
    let msg = null;
    let message_code = getStorage("message_code");
    if (message_code) {
      try {
        let message_codes = JSON.parse(message_code);
        msg = message_codes.find((item) => {
          return item.code == errcode;
        });
      } catch (ex) {
        console.error(ex);
      }
    }
    if (!msg) msg = program_message2.find((item) => {
      return item.code == errcode;
    });
    if (msg) {
      let text = msg[lang];
      if (text && text.trim().length > 0) {
        return replaceString(text, params);
      }
    }
  }
  return defaultMessage ?? errcode;
}
function replaceString(str, arrStr) {
  if (arrStr) {
    let regex = /%s/g;
    for (let t_str of arrStr) {
      str = str.replaceAll(regex, t_str);
    }
  }
  if (str) {
    let regex = /%s/g;
    str = str.replaceAll(regex, "");
  }
  return str;
}
function mergeMessageCodes(data_messages) {
  if (!data_messages) return false;
  if (!Array.isArray(data_messages) || data_messages.length <= 0) return false;
  let program_message2 = getProgramMessage();
  program_message2.unshift(...data_messages);
  return true;
}
function getApiMessageCode() {
  return getApiUrl() + (getMetaInfo()?.API_MESSAGE_CODE || "/api/msgcode/fetch");
}
function loadAndMergeMessageCode(callback, loadMessageCode = String(getMetaInfo()?.LOAD_MESSAGE_CODE) == "true", url = getApiMessageCode()) {
  if (!loadMessageCode) return;
  if (getStorage("message_code")) {
    return;
  }
  fetchMessageCode(void 0, function(success, data) {
    if (success) {
      setStorage("message_code", JSON.stringify(data.body));
      if (callback) callback(success, data.body);
    }
  }, url);
}
function fetchMessageCode(code, callback, url = getApiMessageCode()) {
  console.log("fetchMessageCode: ", code);
  let authtoken = getAccessorToken();
  jquery_util_default.ajax({
    url,
    type: "POST",
    data: code ? JSON.stringify({ msgcode: code }) : "",
    dataType: "json",
    headers: { "authtoken": authtoken },
    contentType: DEFAULT_CONTENT_TYPE,
    error: function(transport, status, errorThrown) {
      console.error(errorThrown);
      if (callback) callback(false, errorThrown, transport);
    },
    success: function(data) {
      if (callback) callback(true, data);
    }
  });
}

// src/app/app.util.ts
var fs_winary = new Array();
var drag_function;
function getChildWindows() {
  return fs_winary;
}
function setDragFunction(func) {
  drag_function = func;
}
function getWindowOpen(win) {
  return fs_winary.find((w) => win == w);
}
function getWindowByName(winname) {
  if (!winname) return null;
  return fs_winary.find((w) => winname == w.name);
}
function closeChildWindows() {
  for (let win of fs_winary) {
    try {
      if (win) win.close();
    } catch (ex) {
      console.error(ex);
    }
  }
}
function addWindow(awindow) {
  if (!awindow) return;
  fs_winary.unshift(awindow);
}
function buildFormParams(frm, params) {
  if (typeof params === "string") {
    let prms = params.split("&");
    for (let prm of prms) {
      let kary = prm.split("=");
      let inp = jquery_util_default('<input type="hidden" name="' + kary[0] + '"></input>');
      inp.val(kary[1]);
      frm.append(inp);
    }
  } else if (Array.isArray(params)) {
    for (let prm of params) {
      if (prm.name) {
        let inp = jquery_util_default('<input type="hidden" name="' + prm.name + '"></input>');
        inp.val(prm.value);
        frm.append(inp);
      }
    }
  } else if (params) {
    for (let prm in params) {
      let inp = jquery_util_default('<input type="hidden" name="' + prm + '"></input>');
      inp.val(params[prm]);
      frm.append(inp);
    }
  }
}
function submitWindow(settings) {
  let p = settings;
  if (p.url && p.url != "" && p.params) {
    let method = p.method || "POST";
    let frm = jquery_util_default("<form method='" + method + "'></form>");
    frm.attr("action", p.url);
    frm.attr("target", p.windowName);
    buildFormParams(frm, p.params);
    let layer = jquery_util_default("<div class='open-new-window-submit-layer'></div>");
    layer.append(frm);
    jquery_util_default("body").append(layer);
    frm.trigger("submit");
    setTimeout(function() {
      layer.remove();
    }, 1500);
  }
}
function openNewWindow(settings) {
  let defaultSettings = {
    newTab: true,
    method: "POST",
    url: "",
    windowName: "_blank",
    windowWidth: window.screen.availWidth,
    windowHeight: window.screen.availHeight,
    windowFeatures: "toobar=no,menubar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes",
    fullScreen: null,
    params: null
  };
  let p = { ...defaultSettings, ...settings };
  try {
    let fswin = getWindowByName(p.windowName);
    if (fswin) {
      console.log("openNewWindow: found", fswin);
      fswin.focus();
      return fswin;
    }
  } catch (ex) {
    console.error(ex);
  }
  let fs_window = null;
  if (p.newTab) {
    if (p.params) fs_window = window.open("", p.windowName);
    else fs_window = window.open(p.url, p.windowName);
  } else {
    let sw = window.screen.availWidth;
    let sh = window.screen.availHeight;
    let wx = (sw - p.windowWidth) / 2;
    let wy = (sh - p.windowHeight) / 2;
    let fs_features = "top=" + wy + ",left=" + wx + ",width=" + p.windowWidth + ",height=" + p.windowHeight + "," + p.windowFeatures;
    if (p.params) fs_window = window.open("", p.windowName, fs_features);
    else fs_window = window.open(p.url, p.windowName, fs_features);
  }
  if (fs_window) fs_window.opener = globalThis;
  try {
    addWindow(fs_window);
  } catch (ex) {
    console.error(ex);
  }
  submitWindow(p);
  return fs_window;
}
function startWaiting() {
  try {
    let dc = jquery_util_default(document.body);
    let sh = dc.innerHeight();
    let fslayer = jquery_util_default("#fswaitlayer");
    let lh = fslayer.height();
    let fstop = mouseY;
    if (lh !== void 0 && sh !== void 0) {
      if (lh > sh - fstop) fstop = mouseY - lh;
    }
    let dw = dc.innerWidth();
    fslayer.css("top", fstop);
    if (dw !== void 0) fslayer.css("left", mouseX > 0 ? mouseX : dw - 50);
    fslayer.show();
  } catch (ex) {
    console.error(ex);
  }
}
function stopWaiting() {
  jquery_util_default("#fswaitlayer").hide();
}
function submitFailure(xhr, status, errorThrown, checking = true) {
  stopWaiting();
  console.log("submitFailure", xhr.responseText);
  errorThrown = parseErrorThrown(xhr, status, errorThrown);
  alertbox(errorThrown, function() {
    if (checking && xhr.status == 401) {
      try {
        window.parent.reLogin();
      } catch (ex) {
        console.error(ex);
      }
    }
  });
}
function parseErrorThrown(xhr, status, errorThrown) {
  if (!errorThrown || errorThrown == xhr.status) {
    errorThrown = xhr.responseText;
  }
  try {
    if (xhr.status == 400 || xhr.status == 401) errorThrown = xhr.responseText;
    if (xhr.responseText) {
      let json = JSON.parse(xhr.responseText);
      if (json.message) errorThrown = json.message;
      if (json.text) errorThrown = json.text;
      if (json.head.errordesc) errorThrown = json.head.errordesc;
    }
  } catch (ex) {
    console.error(ex);
  }
  if (!errorThrown || errorThrown.trim().length == 0) errorThrown = "Unknown error or network error";
  return errorThrown;
}
function detectErrorResponse(data) {
  if (typeof data === "string") {
    try {
      data = JSON.parse(data);
    } catch (ex) {
      console.error(ex);
    }
  }
  if (data?.head?.errorflag == "Y") {
    alertmsg(data.head.errordesc);
    return true;
  }
  return false;
}
function successbox(callback, params) {
  let title = getMessageCode("fsinfo", void 0, "Information");
  alertbox("QS0004", callback, void 0, params, void 0, title, "fa fa-info-circle");
}
function warningbox(errcode, callback, params) {
  let title = getMessageCode("fswarn", void 0, "Warning");
  alertbox(errcode, callback, void 0, params, void 0, title, "fas fa fa-exclamation-circle");
}
function alertbox(errcode, callback, defaultmsg, params, addonmsg, title, icon) {
  if (!title || title.trim().length == 0) title = getMessageCode("fsalert", void 0, "Alert");
  let txt = getMessageCode(errcode, params);
  if (txt != null && txt != "") {
    if (addonmsg) txt += " " + addonmsg;
    alertDialog(txt, callback, title, icon);
  } else if (defaultmsg) {
    if (addonmsg) defaultmsg += " " + addonmsg;
    alertDialog(defaultmsg, callback, title, icon);
  } else {
    alertDialog(errcode, callback, title, icon);
  }
}
function alertDialog(msg, callbackfn, title = "Alert", icon = "fa fa-bell-o fas fa-bell") {
  if (!msg) {
    console.log("alertDialog: msg undefined");
    return;
  }
  try {
    let fs_okbtn = getMessageCode("fsokbtn", void 0, "OK");
    let box = globalThis.bootbox;
    if (!box) box = import_bootbox.default;
    box.alert({
      title: "<em class='" + icon + "'></em>&nbsp;<label>" + title + "</label>",
      message: msg,
      callback: function() {
        if (callbackfn) callbackfn();
      },
      backdrop: false,
      buttons: {
        ok: { label: fs_okbtn }
      }
    });
    let dialog = jquery_util_default(".bootbox > .modal-dialog");
    if (drag_function) drag_function(dialog);
    else dialog.draggable();
    return;
  } catch (ex) {
    console.error(ex);
  }
  if (callbackfn) callbackfn();
}
function confirmbox(errcode, okFn, cancelFn, defaultmsg, params, addonmsg, title, icon) {
  if (!title || title.trim().length == 0) title = getMessageCode("fsconfirm", void 0, "Confirmation");
  let txt = getMessageCode(errcode, params);
  if (txt != null && txt != "") {
    if (addonmsg) txt += " " + addonmsg;
    return confirmDialog(txt, okFn, cancelFn, title, icon);
  } else if (defaultmsg) {
    if (addonmsg) defaultmsg += " " + addonmsg;
    return confirmDialog(defaultmsg, okFn, cancelFn, title, icon);
  } else {
    return confirmDialog(errcode, okFn, cancelFn, title, icon);
  }
}
function confirmDialog(msg, okCallback, cancelCallback, title = "Confirmation", icon = "fas fa fa-question-circle") {
  try {
    let fs_confirmbtn = getMessageCode("fsconfirmbtn", void 0, "OK");
    let fs_cancelbtn = getMessageCode("fscancelbtn", void 0, "Cancel");
    let box = globalThis.bootbox ?? import_bootbox.default;
    box.confirm({
      title: "<em class='" + icon + "'></em>&nbsp;<label>" + title + "</label>",
      message: msg,
      callback: function(result) {
        if (result) {
          if (okCallback) okCallback();
        } else if (cancelCallback) {
          cancelCallback();
        }
      },
      backdrop: false,
      swapButtonOrder: true,
      buttons: {
        confirm: { label: fs_confirmbtn },
        cancel: { label: fs_cancelbtn }
      }
    });
    let dialog = jquery_util_default(".bootbox > .modal-dialog");
    if (drag_function) drag_function(dialog);
    else dialog.draggable();
  } catch (ex) {
    console.error(ex);
  }
  return true;
}
function alertmsg(errcode, defaultmsg, params, callback) {
  alertbox(errcode, callback, defaultmsg, params);
}
function confirmmsg(errcode, defaultmsg, params, okFn, cancelFn) {
  confirmbox(errcode, okFn, cancelFn, defaultmsg, params);
}
function confirmDialogBox(errcode, params, defaultmsg, okFn, cancelFn, addonmsg) {
  return confirmbox(errcode, okFn, cancelFn, defaultmsg, params, addonmsg);
}
function confirmDelete(params, okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0001", params, "Do you want to delete this transaction?", okFn, cancelFn, addonmsg);
}
function confirmSave(okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0002", null, "Do you want to save this transaction?", okFn, cancelFn, addonmsg);
}
function confirmCancel(okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0003", null, "Do you want to cancel this transaction?", okFn, cancelFn, addonmsg);
}
function confirmRemove(params, okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0005", params, "Do you want to delete this record?", okFn, cancelFn, addonmsg);
}
function confirmSend(okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0006", null, "Do you want to send this transaction?", okFn, cancelFn, addonmsg);
}
function confirmUpdate(okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0007", null, "Do you want to update this transaction?", okFn, cancelFn, addonmsg);
}
function confirmClear(params, okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0008", params, "Do you want to clear this?", okFn, cancelFn, addonmsg);
}
function confirmProcess(okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0009", null, "Do you want to process this transaction?", okFn, cancelFn, addonmsg);
}
function confirmSaveAs(okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0010", null, "Do you want to save as this transaction?", okFn, cancelFn, addonmsg);
}
function confirmReceive(okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0011", null, "Do you want to receive this transaction?", okFn, cancelFn, addonmsg);
}
function confirmReset(okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0012", null, "Do you want to reset this trasaction?", okFn, cancelFn, addonmsg);
}
function confirmErase(params, okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0013", params, "Do you want to delete %s row(s)?", okFn, cancelFn, addonmsg);
}
function confirmApprove(params, okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0014", params, "Do you want to confirm approve the %s request?", okFn, cancelFn, addonmsg);
}
function confirmReject(params, okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0015", params, "Do you want to reject %s?", okFn, cancelFn, addonmsg);
}
function confirmRequest(okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0016", null, "Do you want to create this request?", okFn, cancelFn, addonmsg);
}
function confirmImport(okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0017", null, "Do you want to import this transaction?", okFn, cancelFn, addonmsg);
}
function confirmExport(okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0018", null, "Do you want to export this transaction?", okFn, cancelFn, addonmsg);
}
function confirmResend(okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0019", null, "Do you want to resend this transaction?", okFn, cancelFn, addonmsg);
}
function confirmRevise(params, okFn, cancelFn, addonmsg) {
  return confirmDialogBox("QS0020", params, "Do you want to revise the transaction?", okFn, cancelFn, addonmsg);
}
var mouseX = 0;
var mouseY = 0;
function startApplication(pid, callback) {
  console.log("startApplication: pid=" + pid);
  jquery_util_default(document).on("mousedown", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });
  jquery_util_default(globalThis).on("beforeunload", function(e) {
    if (fs_winary.length > 0) {
      e.preventDefault();
      e.returnValue = "";
      return "";
    }
  }).on("unload", function() {
    closeChildWindows();
  });
  let modal = jquery_util_default?.fn?.modal;
  if (!modal) modal = globalThis.jQuery?.fn?.modal;
  if (modal) {
    try {
      modal.Constructor.Default.backdrop = "static";
      modal.Constructor.Default.keyboard = false;
    } catch (ex) {
      console.error(ex);
    }
  }
  if (callback) setupApplication(callback);
}
function setupApplication(callback) {
  let reply = requestAccessorInfo(callback);
  console.log("request access info: ", reply);
}
function serializeParameters(parameters, addonParameters, raw) {
  if (addonParameters) {
    Object.assign(parameters, addonParameters);
  }
  let jsondata = {};
  let cipherdata = false;
  if (raw || getDefaultRawParameters()) {
    jsondata = parameters;
  } else {
    let dh = getDH();
    if (dh) {
      cipherdata = true;
      jsondata.ciphertext = dh.encrypt(JSON.stringify(parameters));
    } else {
      jsondata = parameters;
    }
  }
  console.log("serialize: parameters", JSON.stringify(parameters));
  console.log("serialize: jsondata", JSON.stringify(jsondata));
  let token = getAccessorToken();
  let key = getAccessTokenKey();
  let headers = { "authtoken": token, "tokenkey": key, "data-type": cipherdata ? "json/cipher" : "", language: getDefaultLanguage() || "EN" };
  return { cipherdata, jsondata: JSON.stringify(jsondata), jsonobject: jsondata, headers };
}
function decryptCipherData(headers, data) {
  let accepttype = headers["accept-type"];
  let dh = getDH();
  if (accepttype == "json/cipher") {
    let json = JSON.parse(data);
    if (dh && json.body.data && typeof json.body.data === "string") {
      let jsondatatext = dh.decrypt(json.body.data);
      console.log("decryptCipherData: jsondatatext", jsondatatext);
      let jsondata = JSON.parse(jsondatatext);
      json.body = jsondata;
      return json;
    }
  }
  if (dh && accepttype == "text/cipher") {
    let jsontext = dh.decrypt(data);
    console.log("decryptCipherData: jsontext", jsontext);
    if (jsontext) {
      let json = JSON.parse(jsontext);
      return json;
    }
  }
  return data;
}
function createLinkStyle(css_url) {
  if (css_url && css_url.trim().length > 0) {
    console.log("try to create link style:", css_url);
    try {
      let style = document.createElement("link");
      style.type = "text/css";
      style.rel = "stylesheet";
      style.href = css_url;
      document.head.appendChild(style);
    } catch (ex) {
      console.error(ex);
    }
  }
}
function disableControls(...elements) {
  jquery_util_default(elements).each(function(index, element) {
    let $src = jquery_util_default(element);
    $src.attr("disabled", "true");
    setTimeout(function() {
      $src.removeAttr("disabled");
    }, 1e3);
  });
}
function generateUUID() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  } else {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replaceAll(/[xy]/g, function(c) {
      const r = Math.trunc(randomize() * 16);
      const v = c === "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  }
}
var fs_requestid = null;
function getRequestID() {
  if (!fs_requestid) {
    fs_requestid = generateUUID();
  }
  return fs_requestid;
}
function resetRequestID() {
  fs_requestid = null;
}
function randomize() {
  const cryptoObj = globalThis.crypto ?? globalThis.msCrypto;
  let array = new Uint32Array(1);
  cryptoObj.getRandomValues(array);
  return array[0] / (4294967295 + 1);
}

// src/app/dh.ts
var import_crypto_js = __toESM(require("crypto-js"));
var getPrimes = function(min, max) {
  const isPrime = new Array(max + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(max); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= max; j += i) {
        isPrime[j] = false;
      }
    }
  }
  const result = [];
  for (let i = Math.max(min, 2); i <= max; i++) {
    if (isPrime[i]) {
      result.push(i);
    }
  }
  return result;
};
var getRandomNum = function(min, max) {
  return Math.floor(randomize() * (max - min + 1) + min);
};
var getRandomPrime = function(min, max) {
  const primes = getPrimes(min, max);
  return primes[getRandomNum(0, primes.length - 1)];
};
var getPrimeNumber = function() {
  return getRandomPrime(1e3, 1e4);
};
function modPowInt(base, exp, mod) {
  let result = 1n;
  base = base % mod;
  while (exp > 0n) {
    if (exp % 2n === 1n) {
      result = result * base % mod;
    }
    exp >>= 1n;
    base = base * base % mod;
  }
  return result;
}
var DH = class {
  prime;
  generator;
  privateKey;
  publicKey;
  sharedKey;
  otherPublicKey;
  constructor() {
    this.prime = "" + getPrimeNumber();
    this.generator = "" + getPrimeNumber();
    this.privateKey = "" + getPrimeNumber();
    this.publicKey = "" + getPrimeNumber();
    this.sharedKey = "" + getPrimeNumber();
    this.otherPublicKey = "" + getPrimeNumber();
  }
  encryptText(word, keyBase64) {
    let key = import_crypto_js.default.enc.Base64.parse(keyBase64);
    let srcs = import_crypto_js.default.enc.Utf8.parse(word);
    let encrypted = import_crypto_js.default.AES.encrypt(srcs, key, { mode: import_crypto_js.default.mode.ECB, padding: import_crypto_js.default.pad.Pkcs7 });
    return encrypted.toString();
  }
  decryptText(word, keyBase64) {
    let key = import_crypto_js.default.enc.Base64.parse(keyBase64);
    let decrypt = import_crypto_js.default.AES.decrypt(word, key, { mode: import_crypto_js.default.mode.ECB, padding: import_crypto_js.default.pad.Pkcs7 });
    return import_crypto_js.default.enc.Utf8.stringify(decrypt).toString();
  }
  encrypt(word) {
    let hash = import_crypto_js.default.SHA256(this.sharedKey);
    let keyBase64 = hash.toString(import_crypto_js.default.enc.Base64);
    let key = import_crypto_js.default.enc.Base64.parse(keyBase64);
    let srcs = import_crypto_js.default.enc.Utf8.parse(word);
    let encrypted = import_crypto_js.default.AES.encrypt(srcs, key, { mode: import_crypto_js.default.mode.ECB, padding: import_crypto_js.default.pad.Pkcs7 });
    return encrypted.toString();
  }
  decrypt(word) {
    let hash = import_crypto_js.default.SHA256(this.sharedKey);
    let keyBase64 = hash.toString(import_crypto_js.default.enc.Base64);
    let key = import_crypto_js.default.enc.Base64.parse(keyBase64);
    let decrypt = import_crypto_js.default.AES.decrypt(word, key, { mode: import_crypto_js.default.mode.ECB, padding: import_crypto_js.default.pad.Pkcs7 });
    return import_crypto_js.default.enc.Utf8.stringify(decrypt).toString();
  }
  computePublicKey() {
    let G = BigInt(this.generator);
    let P = BigInt(this.prime);
    let a = BigInt(this.privateKey);
    let ap = modPowInt(G, a, P);
    this.publicKey = ap.toString();
  }
  computeSharedKey() {
    let P = BigInt(this.prime);
    let a = BigInt(this.privateKey);
    let bp = BigInt(this.otherPublicKey);
    let ashare = modPowInt(bp, a, P);
    this.sharedKey = ashare.toString();
  }
  compute() {
    this.computePublicKey();
    this.computeSharedKey();
  }
  requestGenerator(callback, aurl) {
    this.requestPublicKey(this, callback, aurl);
  }
  getAccessorInfo() {
    return getAccessorInfo();
  }
  getAccessorToken() {
    let json = this.getAccessorInfo();
    if (json?.authtoken) {
      return json.authtoken;
    }
    return "";
  }
  getRequestID() {
    return getRequestID();
  }
  requestPublicKey(dh, callback, aurl) {
    if (!aurl) aurl = getApiUrl() + "/api/crypto/dh";
    let authtoken = this.getAccessorToken();
    let requestid = this.getRequestID();
    jquery_util_default.ajax({
      url: aurl,
      type: "POST",
      dataType: "json",
      headers: { "authtoken": authtoken, "x-request-id": requestid },
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      error: (transport, status, errorThrown) => {
        console.log(errorThrown);
        if (callback) callback(false, errorThrown);
      },
      success: (data, status, transport) => {
        console.log(transport.responseText);
        if (dh && data.body.info) {
          let info = data.body.info;
          dh.prime = info.prime;
          dh.generator = info.generator;
          dh.otherPublicKey = info.publickey;
          dh.compute();
          dh.submitPublicKey();
        }
        if (callback) callback(true, data, transport);
      }
    });
  }
  submitPublicKey(callback, aurl) {
    if (!aurl) aurl = getApiUrl() + "/api/crypto/dh";
    let authtoken = this.getAccessorToken();
    let requestid = this.getRequestID();
    jquery_util_default.ajax({
      url: aurl,
      type: "POST",
      data: {
        publickey: this.publicKey
      },
      dataType: "json",
      headers: { "authtoken": authtoken, "x-request-id": requestid },
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      error: (transport, status, errorThrown) => {
        console.log(errorThrown);
        if (callback) callback(false, errorThrown);
      },
      success: (data, status, transport) => {
        console.log(transport.responseText);
        if (callback) callback(true, transport);
      }
    });
  }
  updatePublicKey(callback, aurl) {
    if (!aurl) aurl = getApiUrl() + "/api/crypto/update";
    let authtoken = this.getAccessorToken();
    let requestid = this.getRequestID();
    jquery_util_default.ajax({
      url: aurl,
      type: "POST",
      data: {
        publickey: this.publicKey
      },
      dataType: "json",
      headers: { "authtoken": authtoken, "x-request-id": requestid },
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      error: (transport, status, errorThrown) => {
        console.log(errorThrown);
        if (callback) callback(false, errorThrown);
      },
      success: (data, status, transport) => {
        console.log(transport.responseText);
        if (callback) callback(true, transport);
      }
    });
  }
};

// src/app/messenger.ts
var import_secure_ls = __toESM(require("secure-ls"));
var messagingCallback;
var currentWindow;
var secureEngine;
function getSecureEngine() {
  if (!secureEngine) {
    secureEngine = isSecureStorage() ? new import_secure_ls.default({ storage: "local" == getBaseStorage() ? localStorage : sessionStorage }) : null;
  }
  return secureEngine;
}
function setMessagingCallback(callback) {
  messagingCallback = callback;
}
function setCurrentWindow(curwin) {
  currentWindow = curwin;
}
function getCurrentWindow() {
  return currentWindow;
}
function getStorage(key) {
  let secureLs = getSecureEngine();
  if (secureLs) return secureLs.get(key);
  if ("local" == getBaseStorage()) {
    return localStorage.getItem(key);
  }
  return sessionStorage.getItem(key);
}
function setStorage(key, value) {
  let secureLs = getSecureEngine();
  if (secureLs) {
    secureLs.set(key, value);
    return;
  }
  if ("local" == getBaseStorage()) {
    localStorage.setItem(key, value);
    return;
  }
  sessionStorage.setItem(key, value);
}
function removeStorage(key) {
  let secureLs = getSecureEngine();
  if (secureLs) {
    secureLs.remove(key);
    return;
  }
  if ("local" == getBaseStorage()) {
    localStorage.removeItem(key);
    return;
  }
  sessionStorage.removeItem(key);
}
function getAccessorInfo() {
  let info = getStorage("accessorinfo");
  if (info && info != "") {
    try {
      return JSON.parse(info);
    } catch (ex) {
      console.error(ex);
    }
  }
  return null;
}
function getAccessorToken() {
  let json = getAccessorInfo();
  if (json?.authtoken) {
    return json.authtoken;
  }
  let token = getApiToken();
  return token || "";
}
function getAccessTokenKey() {
  let json = getAccessorInfo();
  if (json?.tokenkey) {
    return json.tokenkey;
  }
  let token = getTokenKey();
  return token || "";
}
function saveAccessorInfo(json) {
  setStorage("accessorinfo", JSON.stringify(json));
}
function removeAccessorInfo() {
  removeStorage("accessorinfo");
}
function sendMessageInterface(type, win) {
  let moderator = win ? "opener" : "parent";
  let info = getAccessorInfo();
  let options = getStorage("accessoptions");
  let msg = { type: type || "storage", archetype: "willsofts", moderator, API_URL: getApiUrl(), BASE_URL: getBaseUrl(), CDN_URL: getCdnUrl(), IMG_URL: getImgUrl(), DEFAULT_LANGUAGE: getDefaultLanguage(), API_TOKEN: getApiToken(), BASE_STORAGE: getBaseStorage(), SECURE_STORAGE: isSecureStorage(), BASE_CSS: getBaseCss(), CHAT_URL: getChatUrl(), MULTI_LANGUAGES: getMultiLanguages(), TOKEN_KEY: getTokenKey(), META_INFO: getMetaInfo(), accessorinfo: info, accessoptions: options };
  return sendMessageToFrame(msg, win);
}
var ALLOWED_ORIGINS = "*";
function sendMessageToFrame(data, win) {
  if (!data) return false;
  try {
    console.log("sendMessageToFrame:", data, "window:", win);
    data.archetype = "willsofts";
    const jsondata = JSON.stringify(data);
    if (win == "*") {
      win = null;
      getChildWindows().forEach((w) => {
        console.log("sendMessageToFrame: post to windows: ", w);
        try {
          w.postMessage(jsondata, ALLOWED_ORIGINS);
        } catch (ex) {
          console.warn(ex);
        }
      });
    }
    if (win) {
      console.log("sendMessageToFrame: post to window", win);
      win.postMessage(jsondata, ALLOWED_ORIGINS);
    } else {
      let frames = document.getElementsByTagName("iframe");
      if (frames) {
        for (let fr of frames) {
          let awin = fr.contentWindow;
          console.log("sendMessageToFrame: post to frame", awin);
          if (awin) awin.postMessage(jsondata, ALLOWED_ORIGINS);
        }
      }
    }
    return true;
  } catch (ex) {
    console.log(ex);
  }
  return false;
}
function requestAccessorInfo(callback) {
  if (callback) setMessagingCallback(callback);
  let msg = { type: "accessorinfo", archetype: "willsofts" };
  console.log("requestAccessorInfo: ", msg);
  console.log("window.opener", window.opener);
  console.log("window.parent", window.parent);
  if (window.opener) {
    return sendMessageToOpener(msg);
  }
  return sendMessageToParent(msg);
}
function sendMessageToParent(data) {
  if (!data) return;
  try {
    console.log("sendMessageToParent:", data);
    window.parent.postMessage(JSON.stringify(data), ALLOWED_ORIGINS);
    return true;
  } catch (ex) {
    console.log(ex);
  }
  return false;
}
function sendMessageToOpener(data) {
  if (!data) return;
  try {
    console.log("sendMessageToOpener:", data);
    window.opener.postMessage(JSON.stringify(data), ALLOWED_ORIGINS);
    return true;
  } catch (ex) {
    console.log(ex);
  }
  return false;
}
function handleRequestMessage(data) {
  if (data.type == "storage") {
    console.log("handleRequestMessage: data", data);
    const setters = {
      TOKEN_KEY: setTokenKey,
      API_URL: setApiUrl,
      BASE_URL: setBaseUrl,
      CDN_URL: setCdnUrl,
      IMG_URL: setImgUrl,
      DEFAULT_LANGUAGE: setDefaultLanguage,
      API_TOKEN: setApiToken,
      BASE_STORAGE: setBaseStorage,
      SECURE_STORAGE: setSecureStorage,
      BASE_CSS: setBaseCss,
      CHAT_URL: setChatUrl,
      MULTI_LANGUAGES: setMultiLanguages,
      DEFAULT_RAW_PARAMETERS: setDefaultRawParameters,
      META_INFO: setMetaInfo
    };
    for (const key in setters) {
      if (data[key] !== void 0) {
        setters[key](data[key]);
      }
    }
    if (data.accessoptions !== void 0) setStorage("accessoptions", data.accessoptions);
    if (data.accessorinfo) {
      saveAccessorInfo(data.accessorinfo);
    }
    console.info("handleRequestMessage: accessor info", data.accessorinfo);
    console.info("handleRequestMessage: DEFAULT_LANGUAGE=" + getDefaultLanguage(), ", BASE_STORAGE=" + getBaseStorage(), ", DEFAULT_RAW_PARAMETERS=" + getDefaultRawParameters(), ", SECURE_STORAGE=" + isSecureStorage());
    console.info("handleRequestMessage: API_URL=" + getApiUrl(), ", BASE_URL=" + getBaseUrl(), ", CDN_URL=" + getCdnUrl(), ", IMG_URL=" + getImgUrl() + ", BASE_CSS=" + getBaseCss() + ", CHAT_URL=" + getChatUrl() + ", MULTI_LANGUAGES=" + getMultiLanguages());
    console.info("handleRequestMessage: API_TOKEN=" + getApiToken(), ", META_INFO=", getMetaInfo());
    createLinkStyle(getBaseCss());
  }
  handleMessagingCallback(data);
}
function handleMessagingCallback(data) {
  if (!messagingCallback || data.archetype !== "willsofts") {
    return;
  }
  if (data.type === "storage") {
    try {
      initConfigure();
    } catch (ex) {
      console.error(ex);
    }
  }
  const exceptTypes = getMetaInfo().EXCEPT_MESSAGE_TYPES ?? ["appinfo"];
  if (exceptTypes.includes(data.type)) {
    return;
  }
  messagingCallback(data);
}
function setupDiffie(json) {
  console.log("setupDiffie", getAccessorToken());
  let info = json.body.info;
  if (info) {
    const dh = new DH();
    dh.prime = info.prime;
    dh.generator = info.generator;
    dh.otherPublicKey = info.publickey;
    dh.compute();
    if (String(getMetaInfo().DISABLE_DIFFIE) !== "true") {
      dh.updatePublicKey((success) => {
        if (success) {
          info.handshake = "C";
          saveAccessorInfo(json.body);
        }
      });
    }
    info.privatekey = dh.privateKey;
    info.publickey = dh.publicKey;
    info.sharedkey = dh.sharedKey;
    info.otherpublickey = dh.otherPublicKey;
    info.handshake = "";
    saveAccessorInfo(json.body);
  }
}
function getDH() {
  let json = getAccessorInfo();
  if (json?.info) {
    let info = json.info;
    if (!info.handshake || info.handshake == "" || info.handshake == "F") return null;
    if (info.prime && info.generator && info.publickey && info.privatekey && info.sharedkey && info.otherpublickey) {
      const dh = new DH();
      dh.prime = info.prime;
      dh.generator = info.generator;
      dh.otherPublicKey = info.publickey;
      dh.privateKey = info.privatekey;
      dh.publicKey = info.publickey;
      dh.sharedKey = info.sharedkey;
      dh.otherPublicKey = info.otherpublickey;
      return dh;
    }
  }
  return null;
}
function bindingChildMessaging() {
  window.onmessage = function(e) {
    console.log("window-messenger: onmessage:", e.data);
    try {
      let payload = e.data;
      if (typeof payload === "string") {
        payload = JSON.parse(e.data);
      }
      handleRequestMessage(payload);
    } catch (ex) {
      console.error(ex);
    }
  };
}
function bindingParentMessaging(callback) {
  window.onmessage = function(e) {
    console.log("window-main: onmessage:", e.data);
    try {
      let payload = e.data;
      if (typeof payload === "string") {
        payload = JSON.parse(e.data);
      }
      if (payload.type == "accessorinfo") {
        sendMessageInterface("storage", getCurrentWindow());
        return;
      } else if (payload.type == "appinfo") {
        sendMessageInterface("appinfo", getCurrentWindow());
        return;
      }
      if (callback) callback(payload);
    } catch (ex) {
      console.error(ex);
    }
  };
}

// src/app/app.info.ts
var import_meta = {};
var env = (typeof import_meta !== "undefined" && import_meta.env) ?? (typeof process !== "undefined" ? process.env : {});
var appInfo = {
  DEFAULT_LANGUAGE: env.VUE_APP_DEFAULT_LANGUAGE,
  API_URL: env.VUE_APP_API_URL,
  BASE_URL: env.VUE_APP_BASE_URL,
  CDN_URL: env.VUE_APP_CDN_URL,
  IMG_URL: env.VUE_APP_IMG_URL,
  CHAT_URL: env.VUE_APP_CHAT_URL,
  BASE_STORAGE: env.VUE_APP_BASE_STORAGE,
  API_TOKEN: env.VUE_APP_API_TOKEN,
  DEFAULT_RAW_PARAMETERS: env.VUE_APP_DEFAULT_RAW_PARAMETERS == "true",
  SECURE_STORAGE: env.VUE_APP_SECURE_STORAGE == "true",
  BASE_CSS: env.VUE_APP_BASE_CSS,
  MULTI_LANGUAGES: ["EN", "TH"],
  TOKEN_KEY: env.VUE_APP_TOKEN_KEY,
  META_INFO: {}
};
var APP_MULTI_LANGUAGES = env.VUE_APP_MULTI_LANGUAGES;
if (APP_MULTI_LANGUAGES && APP_MULTI_LANGUAGES.trim().length > 0) {
  let multilangs = JSON.parse(APP_MULTI_LANGUAGES);
  if (Array.isArray(multilangs)) appInfo.MULTI_LANGUAGES = multilangs;
}
var DEFAULT_CONTENT_TYPE = "application/json; charset=UTF-8";
console.log("AppInfo", appInfo);
var notifyCallback;
function getConfig(key) {
  return appInfo[key];
}
function getAppInfo() {
  return appInfo;
}
function registerNotification(callback) {
  notifyCallback = callback;
}
function getMultiLanguages() {
  return appInfo.MULTI_LANGUAGES ?? [];
}
function setMultiLanguages(values) {
  console.info("set MULTI_LANGUAGES", values);
  if (values) appInfo.MULTI_LANGUAGES = values;
  if (notifyCallback) notifyCallback("multi-languages", appInfo.MULTI_LANGUAGES);
}
function getDefaultLanguage() {
  return appInfo.DEFAULT_LANGUAGE;
}
function setDefaultLanguage(language) {
  console.log("set default_language=" + language);
  if (language && language.trim().length > 0) appInfo.DEFAULT_LANGUAGE = language;
}
function getApiToken() {
  return appInfo.API_TOKEN ?? "";
}
function getApiUrl() {
  return appInfo.API_URL ?? "";
}
function getBaseUrl() {
  return appInfo.BASE_URL ?? "";
}
function getCdnUrl() {
  return appInfo.CDN_URL ?? "";
}
function getImgUrl() {
  return appInfo.IMG_URL ?? "";
}
function getChatUrl() {
  return appInfo.CHAT_URL ?? "";
}
function getBaseStorage() {
  return appInfo.BASE_STORAGE ?? "";
}
function getDefaultRawParameters() {
  return String(appInfo.DEFAULT_RAW_PARAMETERS) == "true";
}
function setApiToken(value) {
  appInfo.API_TOKEN = value;
}
function setApiUrl(value) {
  appInfo.API_URL = value;
}
function setBaseUrl(value) {
  appInfo.BASE_URL = value;
}
function setCdnUrl(value) {
  appInfo.CDN_URL = value;
}
function setImgUrl(value) {
  appInfo.IMG_URL = value;
}
function setChatUrl(value) {
  appInfo.CHAT_URL = value;
}
function setBaseStorage(value) {
  appInfo.BASE_STORAGE = value;
}
function setDefaultRawParameters(value) {
  appInfo.DEFAULT_RAW_PARAMETERS = value;
}
function setSecureStorage(value) {
  appInfo.SECURE_STORAGE = value;
}
function isSecureStorage() {
  return String(appInfo.SECURE_STORAGE) == "true";
}
function getBaseCss() {
  return appInfo.BASE_CSS ?? "";
}
function setBaseCss(value) {
  appInfo.BASE_CSS = value;
}
function getTokenKey() {
  return appInfo.TOKEN_KEY ?? "";
}
function setTokenKey(value) {
  appInfo.TOKEN_KEY = value;
}
function getMetaInfo() {
  return appInfo.META_INFO;
}
function setMetaInfo(value = {}) {
  appInfo.META_INFO = value;
}
var default_labels = [];
var program_labels = [];
var program_message = [];
function getProgramMessage() {
  return program_message;
}
function getDefaultLabels() {
  return default_labels;
}
function getProgramLabels() {
  return program_labels;
}
function setProgramMessage(message) {
  program_message = message;
}
function setDefaultLabels(labels) {
  default_labels = labels;
}
function setProgramLabels(labels) {
  program_labels = labels;
}
function isDisplayPageHeader() {
  return String(getMetaInfo()?.DISPLAY_PAGE_HEADER) != "false";
}
function appInit(options, callback) {
  const settings = options ?? { program_message, default_labels, program_labels, listen_messaging: "child" };
  const setting = { listen_messaging: "child", ...settings };
  setProgramMessage(setting.program_message);
  setDefaultLabels(setting.default_labels);
  setProgramLabels(setting.program_labels);
  if (setting.listen_messaging == "child") {
    bindingChildMessaging();
  } else if (setting.listen_messaging == "parent") {
    bindingParentMessaging(callback);
  }
  initConfigure();
}
function getMultiLanguagesModel(datas) {
  let multilangs = datas || getMultiLanguages();
  if (!multilangs) multilangs = ["EN", "TH"];
  return multilangs.map((item) => {
    return { lang: item, label: item + "_lang" };
  });
}
function assignAppConfig(data, callback) {
  console.log("assignAppConfig:", data);
  if (!data) return;
  const setters = {
    TOKEN_KEY: setTokenKey,
    API_URL: setApiUrl,
    BASE_URL: setBaseUrl,
    CDN_URL: setCdnUrl,
    IMG_URL: setImgUrl,
    DEFAULT_LANGUAGE: setDefaultLanguage,
    API_TOKEN: setApiToken,
    BASE_STORAGE: setBaseStorage,
    SECURE_STORAGE: setSecureStorage,
    BASE_CSS: setBaseCss,
    CHAT_URL: setChatUrl,
    MULTI_LANGUAGES: setMultiLanguages,
    DEFAULT_RAW_PARAMETERS: setDefaultRawParameters,
    META_INFO: setMetaInfo
  };
  for (const key in setters) {
    if (data[key] !== void 0) {
      setters[key](data[key]);
    }
  }
  console.info("appConfig: DEFAULT_LANGUAGE=" + getDefaultLanguage(), ", BASE_STORAGE=" + getBaseStorage(), ", DEFAULT_RAW_PARAMETERS=" + getDefaultRawParameters(), ", SECURE_STORAGE=" + isSecureStorage());
  console.info("appConfig: API_URL=" + getApiUrl(), ", BASE_URL=" + getBaseUrl(), ", CDN_URL=" + getCdnUrl(), ", IMG_URL=" + getImgUrl() + ", BASE_CSS=" + getBaseCss() + ", CHAT_URL=" + getChatUrl() + ", MULTI_LANGUAGES=" + getMultiLanguages());
  console.info("appConfig: API_TOKEN=" + getApiToken(), ", META_INFO=", getMetaInfo());
  createLinkStyle(getBaseCss());
  if (callback) callback(data);
}
function loadAppConfig(callback, url = "../config/app.config.json") {
  initConfigure();
  fetch(url).then((response) => response.json()).then((data) => {
    assignAppConfig(data, callback);
  }).catch(() => {
    if (callback) callback();
  });
}
function initConfigure() {
  let key = "TOKEN_KEY";
  let token = localStorage.getItem(key);
  if (!token || token.trim().length == 0) token = sessionStorage.getItem(key);
  if (token) setTokenKey(token);
  const searchParams = new URLSearchParams(globalThis.location.href);
  token = searchParams.get("fsKey");
  if (!token || token.trim().length == 0) token = searchParams.get("tokenkey");
  if (token) setTokenKey(token);
}
function initAppConfig(callback) {
  try {
    assignAppConfig(globalThis.getAppConfigs(), callback);
  } catch (ex) {
    console.error(ex);
  }
}

// src/app/Utilities.ts
var Utilities = class {
  static NORMAL = 0;
  static INTER = 1;
  static SHORT = 0;
  static LONG = 1;
  static SHORT_MONTH_ARRAY = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  static LONG_MONTH_ARRAY = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  static SHORT_WEEK_DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  static LONG_WEEK_DAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  /**
   * To get date in format dd/MM/yyyy
   * @param now Date or undefind
   * @returns string
   */
  static getDateNow(now) {
    now = now ?? /* @__PURE__ */ new Date();
    return this.formatDate(now, false);
  }
  /**
   * To get time in format HH:mm:ss
   * @param now Date or undefined
   * @returns string
   */
  static getTimeNow(now) {
    return this.currentTime(now);
  }
  /**
   * To get datetime in format dd/MM/yyyy HH:mm:ss
   * @param now Date or undefined
   * @returns string
   */
  static getDateTimeNow(now) {
    now = now ?? /* @__PURE__ */ new Date();
    return this.getDateNow(now) + " " + this.getTimeNow(now);
  }
  /**
   * To get date in format yyyy-MM-dd
   * @param now Date or undefined
   * @returns string
   */
  static getYMD(now) {
    return this.formatDate(now, true);
  }
  /**
   * To get date in format dd/MM/yyyy
   * @param now Date or undefined
   * @returns string
   */
  static getDMY(now) {
    return this.formatDate(now, false);
  }
  /**
   * To format Date to dd/MM/yyyy or yyyy-MM-dd 
   * @param now Date or undefined
   * @param ymd boolean default false
   * @returns string
   */
  static formatDate(now, ymd = false) {
    if (!now) return "";
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yy = now.getFullYear();
    let result = "";
    if (ymd) {
      result = "" + yy;
      result += (mm < 10 ? "-0" : "-") + mm;
      result += (dd < 10 ? "-0" : "-") + dd;
    } else {
      result = (dd < 10 ? "0" : "") + dd;
      result += (mm < 10 ? "/0" : "/") + mm;
      result += "/" + yy;
    }
    return result;
  }
  /**
   * To format time HH:mm:ss
   * @param now Date or undefined
   * @returns string
   */
  static formatTime(now) {
    if (!now) return "";
    return this.getTimeNow(now);
  }
  /**
   * To format date into dd/MM/yyyy HH:mm:ss or yyyy-MM-dd HH:mm:ss
   * @param now Date or undefined
   * @param ymd boolean default false
   * @returns string
   */
  static formatDateTime(now, ymd = false) {
    if (!now) return "";
    return this.formatDate(now, ymd) + " " + this.getTimeNow(now);
  }
  /**
   * To format time HH:mm:ss
   * @param now Date or undefined
   * @returns string
   */
  static getHMS(now) {
    if (!now) return "";
    return "" + now;
  }
  /**
   * To format Date to yyyy-MM-dd
   * @param now Date or undefined
   * @returns string
   */
  static currentDate(now) {
    now = now ?? /* @__PURE__ */ new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yy = now.getFullYear();
    let result = "" + yy;
    result += (mm < 10 ? "-0" : "-") + mm;
    result += (dd < 10 ? "-0" : "-") + dd;
    return result;
  }
  /**
   * To format time to HH:mm:ss
   * @param now Date or undefined
   * @returns string
   */
  static currentTime(now) {
    now = now ?? /* @__PURE__ */ new Date();
    let hh = now.getHours();
    let mm = now.getMinutes();
    let ss = now.getSeconds();
    let result = (hh < 10 ? "0" : "") + hh;
    result += (mm < 10 ? ":0" : ":") + mm;
    result += (ss < 10 ? ":0" : ":") + ss;
    return result;
  }
  /**
   * To format Date to yyyy-MM-dd HH:mm:ss
   * @param now Date or undefined
   * @returns string
   */
  static currentDateTime(now) {
    now = now ?? /* @__PURE__ */ new Date();
    return this.currentDate(now) + " " + this.currentTime(now);
  }
  /**
   * To get current time in milli seconds
   * @param now Date or undefined
   * @returns number
   */
  static currentTimeMillis(now) {
    now = now ?? /* @__PURE__ */ new Date();
    return now.getTime();
  }
  /**
   * To add number of days into Date
   * @param days number
   * @param date Date or undefined
   * @returns Date
   */
  static addDays(days, date) {
    date = date ?? /* @__PURE__ */ new Date();
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  /**
   * To compare between date
   * @param adate Date or undefined
   * @param bdate Date or undefined
   * @returns number, -1 = lesser than, 0 = equal , 1 = greater than
   */
  static compareDate(adate, bdate) {
    if (!adate && !bdate) return 0;
    let astr = this.formatDate(adate, true);
    let bstr = this.formatDate(bdate, true);
    return this.compareString(astr, bstr);
  }
  /**
   * To compare between time
   * @param adate Date or undefined
   * @param bdate Date or undefined
   * @returns number, -1 = lesser than, 0 = equal , 1 = greater than 
   */
  static compareTime(adate, bdate) {
    if (!adate && !bdate) return 0;
    let astr = this.formatTime(adate);
    let bstr = this.formatTime(bdate);
    return this.compareString(astr, bstr);
  }
  /**
   * To compare between datetime
   * @param adate Date or undefined
   * @param bdate Date or undefined
   * @returns number, -1 = lesser than, 0 = equal , 1 = greater than
   */
  static compareDateTime(adate, bdate) {
    if (!adate && !bdate) return 0;
    let astr = this.formatDateTime(adate, true);
    let bstr = this.formatDateTime(bdate, true);
    return this.compareString(astr, bstr);
  }
  /**
   * To compare string value
   * @param astr string
   * @param bstr string
   * @returns number, -1 = lesser than, 0 = equal , 1 = greater than
   */
  static compareString(astr, bstr) {
    if (!astr && !bstr) return 0;
    if (!astr && bstr) return -1;
    if (astr && !bstr) return 1;
    let text = "" + astr;
    return text.localeCompare(bstr, void 0, { sensitivity: "accent" });
  }
  /**
   * To check string equals with ignore case
   * @param astr string
   * @param bstr string
   * @returns boolean
   */
  static equalsIgnoreCase(astr, bstr) {
    return this.compareString(astr, bstr) == 0;
  }
  /**
   * To check data is string or not
   * @param value any
   * @returns boolean
   */
  static isString(value) {
    return typeof value === "string" || Object.prototype.toString.call(value) === "[object String]";
  }
  /**
   * To check attributes is in object element
   * @param element unknown
   * @param attributes string array
   * @returns boolean
   */
  static hasAttributes(element, attributes) {
    if (element === void 0 || element === null) return false;
    return attributes.every(
      (attribute) => Object.hasOwn(element, attribute)
    );
  }
  /**
   * To parse integer (especially from string)
   * @param dataValue any
   * @param defaultValue number
   * @returns number
   */
  static parseInteger(dataValue, defaultValue) {
    if (dataValue) {
      if (this.isString(dataValue)) {
        return Number.parseInt(dataValue.replaceAll(",", ""));
      } else if (typeof dataValue === "number") {
        return dataValue;
      }
    }
    return defaultValue;
  }
  /**
   * To parse float (especially from string)
   * @param dataValue any
   * @param defaultValue number
   * @returns number
   */
  static parseFloat(dataValue, defaultValue) {
    if (dataValue) {
      if (this.isString(dataValue)) {
        return Number.parseFloat(dataValue.replaceAll(",", ""));
      } else if (typeof dataValue === "number") {
        return dataValue;
      }
    }
    return defaultValue;
  }
  /**
   * To parse boolean (especially from string)
   * @param dataValue any
   * @param defaultValue boolean
   * @returns boolean
   */
  static parseBoolean(dataValue, defaultValue) {
    if (dataValue !== void 0 && dataValue !== null) {
      if (this.isString(dataValue)) {
        let pr = ("" + dataValue).toLowerCase();
        if (pr === "true") return true;
        if (pr === "false") return false;
        return Boolean(pr);
      } else if (typeof dataValue === "boolean") {
        return dataValue;
      }
    }
    return defaultValue;
  }
  /**
   * To parse Date with data value string in format dd/MM/yyyy, yyyy-MM-dd, dd/MM/yyyy HH:mm:ss, yyyy-MM-dd HH:mm:ss
   * @param dataValue 
   * @param defaultValue 
   * @returns Date
   */
  static parseDate(dataValue, defaultValue) {
    if (!dataValue) return defaultValue;
    if (dataValue instanceof Date) {
      return dataValue;
    }
    if (!this.isString(dataValue)) return defaultValue;
    let datestr = ("" + dataValue).trim();
    if (!datestr) return defaultValue;
    return this.parseIsoDate(datestr) ?? this.parseCustomDate(datestr) ?? defaultValue;
  }
  static parseIsoDate(datestr) {
    if (datestr.includes("T") && datestr.includes("Z")) {
      try {
        const dateInstance = new Date(datestr);
        if (!Number.isNaN(dateInstance.valueOf())) return dateInstance;
      } catch (ex) {
        console.warn(ex);
      }
    }
    return void 0;
  }
  static parseCustomDate(datestr) {
    let result = void 0;
    let separator = " ";
    if (datestr.includes("T")) separator = "T";
    let [date, time] = datestr.split(separator);
    if (date.includes(":")) {
      time = date;
      date = "";
    }
    if (date) {
      if (date.includes("/")) {
        let [day, month, year] = date.split("/");
        result = new Date(Number(year), Number(month) - 1, Number(day));
      } else if (date.includes("-")) {
        let [year, month, day] = date.split("-");
        result = new Date(Number(year), Number(month) - 1, Number(day));
      }
    }
    return this.parseCustomTime(result, time);
  }
  static parseCustomTime(date, time) {
    let result = date;
    if (time) {
      result = result ?? /* @__PURE__ */ new Date();
      let [hours, minutes, seconds] = time.split(":");
      if (hours) result.setHours(Number(hours));
      if (minutes) result.setMinutes(Number(minutes));
      if (seconds) {
        result = this.parseCustomSecond(result, seconds);
      } else {
        result.setSeconds(0);
      }
    }
    return result;
  }
  static parseCustomSecond(date, seconds) {
    if (seconds.includes(".")) {
      let [sec, msec] = seconds.split(".");
      date.setSeconds(Number(sec));
      let idx = msec.indexOf("Z");
      if (idx > 0) {
        msec = msec.substring(0, idx);
      }
      if (msec.length > 3) msec = msec.substring(0, 3);
      date.setMilliseconds(Number(msec));
    } else {
      date.setSeconds(Number(seconds));
    }
    return date;
  }
  /**
   * To parse time with data value string in format HH:mm:ss
   * @param dataValue 
   * @param defaultValue 
   * @returns Date
   */
  static parseTime(dataValue, defaultValue) {
    if (dataValue && dataValue.trim().length > 0) {
      let [hours, minutes, seconds] = dataValue.split(":");
      let result = /* @__PURE__ */ new Date();
      if (hours) result.setHours(Number(hours));
      if (minutes) result.setMinutes(Number(minutes));
      if (seconds) result.setSeconds(Number(seconds));
      else result.setSeconds(0);
      return result;
    }
    return defaultValue;
  }
  /**
   * get current date/time now
   * @returns Date
   */
  static now() {
    return /* @__PURE__ */ new Date();
  }
  /**
   * try to translate variables in template with foramt ${key} with value in variables
   * @returns string
   */
  static translateVariables(template, variables) {
    let data = variables;
    if (variables instanceof Map) {
      data = Object.fromEntries(variables);
    }
    for (let key in data) {
      template = template.replaceAll("${" + key + "}", data[key]);
    }
    return template;
  }
  /**
   * serialize timestamp into string format yyyyMMddHHmmssSSS
   * @returns string
   */
  static serializeTimestamp(now, delimiter, includeMillis = true) {
    let dd = now.getDate();
    let mo = now.getMonth() + 1;
    let year = now.getFullYear();
    let month = (mo < 10 ? "0" : "") + mo;
    let day = (dd < 10 ? "0" : "") + dd;
    let hh = now.getHours();
    let mm = now.getMinutes();
    let ss = now.getSeconds();
    let hour = (hh < 10 ? "0" : "") + hh;
    let minute = (mm < 10 ? "0" : "") + mm;
    let second = (ss < 10 ? "0" : "") + ss;
    let ml = now.getMilliseconds();
    let millis = (ml < 100 ? "0" : "") + ml;
    if (includeMillis) {
      return [year, month, day, hour, minute, second, millis].join(delimiter ?? "");
    }
    return [year, month, day, hour, minute, second].join(delimiter ?? "");
  }
  /**
   * To get date format with short or long month
   * @returns string
   */
  static getFormatDate(date = /* @__PURE__ */ new Date(), fortype = this.SHORT, delimiter = " ", forstyle = this.NORMAL, separater = ",") {
    let dd = date.getDate();
    let mm = date.getMonth();
    let yy = date.getFullYear();
    let mstr = "";
    if (fortype == this.SHORT) {
      mstr = this.SHORT_MONTH_ARRAY[mm];
    } else {
      mstr = this.LONG_MONTH_ARRAY[mm];
    }
    if (forstyle == this.INTER) {
      return mstr + delimiter + dd + separater + delimiter + yy;
    }
    return dd + delimiter + mstr + delimiter + yy;
  }
  /**
   * To get date format with short month
   * @returns string
   */
  static getShortDate(date = /* @__PURE__ */ new Date(), delimiter = " ", forstyle = this.NORMAL) {
    return this.getFormatDate(date, this.SHORT, delimiter, forstyle);
  }
  /**
   * To get date format with long month
   * @returns string
   */
  static getLongDate(date = /* @__PURE__ */ new Date(), delimiter = " ", forstyle = this.NORMAL) {
    return this.getFormatDate(date, this.LONG, delimiter, forstyle);
  }
  /**
   * To get week day with short or long format
   * @returns string
   */
  static getWeekDay(date = /* @__PURE__ */ new Date(), fortype = this.LONG) {
    if (fortype == this.SHORT) {
      return this.SHORT_WEEK_DAY[date.getDay()];
    }
    return this.LONG_WEEK_DAY[date.getDay()];
  }
  /**
   * To get short week day
   * @returns string
   */
  static getShortWeekDay(date = /* @__PURE__ */ new Date()) {
    return this.getWeekDay(date, this.SHORT);
  }
  /**
   * To get long week day
   * @returns string
   */
  static getLongWeekDay(date = /* @__PURE__ */ new Date()) {
    return this.getWeekDay(date, this.LONG);
  }
  /**
   * To get week day format
   * @returns string
   */
  static getFormatWeekDate(date = /* @__PURE__ */ new Date(), fortype = this.LONG, delimiter = " ", forstyle = this.NORMAL, separater = ",") {
    let weekday = this.getWeekDay(date, fortype);
    let result = this.getFormatDate(date, fortype, delimiter, forstyle, separater);
    return weekday + separater + delimiter + result;
  }
  /**
   * To get date instance from string or number of timestamp
   * @returns string
   */
  static date(input, defaultValue) {
    if (input) {
      if (typeof input == "string") {
        let value = this.parseInteger(input);
        if (value) return new Date(value);
      }
      if (typeof input == "number") {
        return new Date(input);
      }
    }
    return defaultValue ?? /* @__PURE__ */ new Date();
  }
  /**
   * To verify it has value
   * @returns boolean
   */
  static hasValue(val) {
    return val !== void 0 && val !== null && val !== "";
  }
};

// src/app/ctrl.util.ts
function getControlClasses(attrClass, ...classes) {
  let ctrlClasses = "";
  if (!attrClass) attrClass = "";
  for (let c of classes) {
    if (!attrClass.includes(c)) ctrlClasses += " " + c;
  }
  return ctrlClasses;
}
function clearCalendar(src) {
  let dpkr = jquery_util_default(src);
  if (dpkr.is(":disabled")) return;
  if (dpkr.is("[readonly]")) {
    let edit = dpkr.attr("editable");
    if ("true" != edit) return;
  }
  dpkr.val("");
  src.dispatchEvent(new Event("select"));
  let ifn = dpkr.data("afterSelectDatePicker");
  if (ifn) ifn("", dpkr);
}
function openCalendar(src) {
  let dpkr = jquery_util_default(src);
  if (dpkr.is(":disabled")) return;
  if (dpkr.is("[readonly]")) {
    let edit = dpkr.attr("editable");
    if ("true" != edit) return;
  }
  try {
    let picker = dpkr;
    picker.datepicker({
      showOn: "",
      dateFormat: "dd/mm/yy",
      changeMonth: true,
      changeYear: true,
      yearRange: "c-100:+100",
      onSelect: function(input, inst) {
        src.focus();
        src.dispatchEvent(new Event("select"));
        let fn = dpkr.data("afterSelectDatePicker");
        if (fn) fn(input, inst);
      }
    });
    picker.datepicker("show");
    jquery_util_default(document).off("focusin");
    return;
  } catch (ex) {
    console.error(ex);
  }
}
function triggerInput(input) {
  input.dispatchEvent(new Event("input", { bubbles: true }));
}
function inputNumberOnly(myfield, e, decimal, isPlus) {
  let key;
  if (e) key = e.which;
  else return true;
  let keychar = String.fromCodePoint(key);
  let element = myfield;
  isPlus = Boolean(isPlus);
  let isPoint = decimal !== null && decimal !== void 0 && Number(decimal) !== 0;
  if (key == 45 && !element.value.includes("-") && !isPlus) {
    element.value = "-" + element.value;
    triggerInput(element);
  }
  if (key == 46 && !element.value.includes(".") && isPoint) {
    if (element.value == "") element.value = "0";
    triggerInput(element);
    return true;
  }
  if (key == null || key == 0 || key == 8 || key == 9 || key == 27) return true;
  else if ("0123456789".includes(keychar)) {
    triggerInput(element);
    return true;
  } else return false;
}
function checkInputNumberOnly(myfield, e, decimal, isPlus) {
  let iskeyup = myfield.getAttribute("keyup");
  if (iskeyup === "false") {
    return false;
  }
  myfield.setAttribute("keyup", "false");
  return inputNumberOnly(myfield, e, decimal, isPlus);
}
function checkInputKey(myfield, event, decimal, maxvalue) {
  let iNum = event.keyCode;
  if (iNum >= 48 && iNum <= 57 || iNum >= 96 && iNum <= 105 || iNum == 109 || iNum == 110 || iNum == 189 || iNum == 190) {
    myfield.setAttribute("keyup", true);
    let c_pos = getCaretPosition(myfield);
    let o_len = myfield.value.length;
    formatNumber(myfield, maxvalue, decimal);
    let n_len = myfield.value.length;
    setCaretPosition(myfield, n_len > o_len ? c_pos + 1 : c_pos);
    triggerInput(myfield);
  }
}
function cleansingValues(element, valueBfChange, fraction, point, data) {
  data = clearComma(data);
  try {
    let dot = "";
    let x = data.split(".");
    if (x.length == 2 && point > 0) {
      dot = x[1].length > point ? "." + x[1].substring(0, point) : "." + x[1];
    }
    while (x[0].length > 1 && x[0].charAt(0) == "0") {
      x[0] = x[0].substring(1);
    }
    if (fraction == 0 && Number(x[0]) > 0 || fraction > 0 && x[0].length > fraction) {
      return [valueBfChange, true];
    }
    data = x[0] + dot;
  } catch (ex) {
    console.error(ex);
  }
  return [data, false];
}
function formatNumber(element, maxvalue, decimal) {
  let valueBfChange = element.value;
  let data = element.value;
  let point = 0;
  if (decimal) {
    let precisions = Number(decimal);
    point = precisions >= 0 ? precisions : 2;
  }
  let fraction = null;
  let mxvalue = maxvalue ? Number(maxvalue) : -1;
  if (mxvalue >= 0) {
    fraction = mxvalue;
    if (data.includes("-")) fraction++;
  }
  let unchanged = false;
  [data, unchanged] = cleansingValues(element, valueBfChange, fraction, point, data);
  element.value = unchanged ? data : putComma(data);
}
function putComma(data) {
  if (data.includes(",")) {
    data = clearComma(data);
  }
  let move = data.includes(".") ? data.indexOf(".") : data.length;
  let minus = data.includes("-") ? 1 : 0;
  while (move > 3) {
    if (minus && move <= 4) {
      break;
    }
    data = data.substring(0, move - 3) + "," + data.substring(move - 3);
    move -= 3;
  }
  return data;
}
function clearComma(data) {
  while (data.includes(",")) {
    data = data.replaceAll(",", "");
  }
  return data;
}
function getCaretPosition(ctrl) {
  let iCaretPos = 0;
  if (document.selection) {
    ctrl.focus();
    let selector = document.selection.createRange();
    selector.moveStart("character", -ctrl.value.length);
    iCaretPos = selector.text.length;
  } else if (ctrl.selectionStart || ctrl.selectionStart == "0") {
    iCaretPos = ctrl.selectionStart;
  }
  return iCaretPos;
}
function setCaretPosition(ctrl, iCaretPos) {
  if (ctrl.createTextRange) {
    let selector = ctrl.createTextRange();
    selector.collapse(true);
    selector.moveEnd("character", iCaretPos);
    selector.moveStart("character", iCaretPos);
    selector.select();
  } else if (ctrl.selectionStart || ctrl.selectionStart == "0") {
    ctrl.selectionStart = iCaretPos;
    ctrl.selectionEnd = iCaretPos;
    ctrl.focus();
  }
}
function parseNumber(avalue) {
  if (!avalue) return 0;
  return Number(removeComma(avalue));
}
function removeComma(avalue) {
  if (!avalue) return avalue;
  let result = avalue + "";
  while (result.includes(",")) {
    result = removeDelimiter(result, ",");
  }
  return result;
}
function removeDelimiter(avalue, delimiter) {
  return avalue.replace(delimiter, "");
}
function formatFloating(avalue, decimal) {
  avalue = avalue + "";
  avalue = removeComma(avalue);
  return formatDecimal(avalue, decimal, true);
}
function resolveDecimalSign(avalue) {
  let sign = "";
  let result = avalue + "";
  let i = result.indexOf("-");
  if (i >= 0) {
    sign = "-";
    result = result.substring(i + 1);
  } else {
    i = result.indexOf("+");
    if (i >= 0) {
      sign = "+";
      result = result.substring(i + 1);
    }
  }
  return [result, sign];
}
function resolveDecimalString(avalue) {
  let cstr = "";
  let bstr = "";
  let astr = avalue;
  let i = avalue.indexOf(".");
  if (i > 0) {
    astr = avalue.substring(0, i);
    bstr = avalue.substring(i + 1);
    cstr = avalue.substring(i);
  }
  let la = astr.length;
  if (la > 3) {
    let tstr = astr;
    astr = "";
    while (tstr != "") {
      la = tstr.length;
      let md = la % 3;
      if (md > 0) {
        astr += tstr.substring(0, md) + ",";
        tstr = tstr.substring(md);
      } else {
        astr += tstr.substring(0, 3);
        tstr = tstr.substring(3);
        if (tstr != "") astr += ",";
      }
    }
  }
  return [astr, bstr, cstr];
}
function formatDecimal(avalue, decimal, verifydecimal) {
  let [result, sign] = resolveDecimalSign(avalue);
  let [astr, bstr, cstr] = resolveDecimalString(result);
  if (!verifydecimal) {
    return sign + astr + cstr;
  }
  if (decimal <= 0) {
    return sign + astr;
  }
  if (astr == "") return "";
  let l = bstr.length;
  if (decimal > l) {
    let j = 0;
    for (j = l; j < decimal; j++) {
      bstr += "0";
    }
  } else {
    bstr = bstr.substring(0, decimal);
  }
  return sign + astr + "." + bstr;
}
var header_action = { type: "button", action: "edit" };
function ensureTableSetting(settings) {
  let headers = { autoFormat: true, ...settings };
  if (headers.actions) {
    for (let act of headers.actions) {
      let item = { ...header_action, ...act };
      if (!item.css && "button" == item.type) {
        if ("edit" == item.action) {
          item.css = "btn-edit fa-data-edit fa-btn fa fa-pencil";
        } else if ("delete" == item.action) {
          item.css = "btn-delete fa-data-delete fa-btn fa fa-trash";
        } else if ("view" == item.action) {
          item.css = "btn-view fa-data-view fa-btn fa fa-eye";
        }
      }
      Object.assign(act, item);
    }
  }
  return headers;
}
function formatDataTable(data, field) {
  try {
    if (field) {
      if (field.type == "DECIMAL") {
        return formatFloating(data, field.decimal === void 0 ? 2 : field.decimal);
      } else if (field.type == "DATE") {
        let date = Utilities.parseDate(data);
        if (date) return Utilities.formatDate(date);
      } else if (field.type == "DATETIME") {
        let date = Utilities.parseDate(data);
        if (date) return Utilities.formatDateTime(date);
      }
    }
    return data;
  } catch (ex) {
    console.error(ex);
    return data;
  }
}

// src/app/KnMask.ts
var KnMask = class _KnMask {
  maskChar = "*";
  constructor(maskChar = "*") {
    this.maskChar = maskChar;
  }
  /**
   * @param text The number in plain text
   * @param mask The mask pattern. 
   *    Use # to include the digit from the position. 
   *    Use x or * to mask the digit at that position.
   *    Any other char will be inserted.
   *
   * @return The masked string
   */
  static maskingNumber(text, mask = "####-xxxx-####", maskChar = "*") {
    let masked = "";
    if (text && text.trim().length > 0) {
      let index = 0;
      let length = text.length;
      for (let i = 0; i < mask.length; i++) {
        let c = mask.charAt(i);
        if (c == "#") {
          if (index < length) {
            masked = masked.concat(text.charAt(index));
          }
          index++;
        } else if (c == "x" || c == "X" || c == maskChar) {
          masked = masked.concat(c);
          index++;
        } else {
          masked = masked.concat(c);
        }
      }
    }
    return masked;
  }
  /**
   * @param text The number in plain text
   * @param maskLength number of remaining original text
   * @param maskChar default is "*" to be masked
   * @return The masked string
   * ex. text = "1234567898765432"
   * after maskingHead(text,4) = ************5432
   * mask head but last 4 characters remain
   */
  static maskingHead(text, maskLength = 4, maskChar = "*") {
    let masked = "";
    if (text && text.trim().length > 0) {
      let length = text.length;
      let maskPoint = length - maskLength;
      for (let i = 0; i < length; i++) {
        let c = text.charAt(i);
        if (i >= maskPoint) {
          masked = masked.concat(c);
        } else {
          masked = masked.concat(maskChar);
        }
      }
    }
    return masked;
  }
  /**
   * @param text The number in plain text
   * @param maskLength number of remaining original text
   * @param maskChar default is "*" to be masked
   * @return The masked string
   * ex. text = "1234567898765432"
   * after maskingTail(text,4) = 1234************
   * mask tail (until end of string) but first 4 characters remain
   */
  static maskingTail(text, maskLength = 4, maskChar = "*") {
    let masked = "";
    if (text && text.trim().length > 0) {
      let length = text.length;
      for (let i = 0; i < length; i++) {
        let c = text.charAt(i);
        if (i >= maskLength) {
          masked = masked.concat(maskChar);
        } else {
          masked = masked.concat(c);
        }
      }
    }
    return masked;
  }
  /**
   * @param text The number in plain text
   * @param maskLength number of remaining original text
   * @param maskChar default is "*" to be masked
   * @return The masked string
   * ex. text = "1234567898765432"
   * after maskingHeadAndTail(text,4) = 1234********5432
   * mask head and tail (until end of string) but first & last 4 characters remain
   */
  static maskingHeadAndTail(text, maskLength = 4, maskChar = "*") {
    let masked = "";
    if (text && text.trim().length > 0) {
      let length = text.length;
      let maskPoint = length - maskLength;
      for (let i = 0; i < length; i++) {
        let c = text.charAt(i);
        if (i >= maskPoint) {
          masked = masked.concat(c);
        } else if (i >= maskLength) {
          masked = masked.concat(maskChar);
        } else {
          masked = masked.concat(c);
        }
      }
    }
    return masked;
  }
  maskHead(text, maskLength = 4) {
    return _KnMask.maskingHead(text, maskLength, this.maskChar);
  }
  maskNumber(text, mask = "####-xxxx-####") {
    return _KnMask.maskingNumber(text, mask, this.maskChar);
  }
  maskTail(text, maskLength = 4) {
    return _KnMask.maskingTail(text, maskLength, this.maskChar);
  }
  maskHeadAndTail(text, maskLength = 4) {
    return _KnMask.maskingHeadAndTail(text, maskLength, this.maskChar);
  }
  maskSensitive(json, attributes = ["password", "pwd"]) {
    return _KnMask.maskingSensitive(json, attributes);
  }
  maskSensitiveObject(json, attributes = ["password", "pwd"]) {
    return _KnMask.maskingSensitiveObject(json, attributes);
  }
  maskAttribute(json, attributes = ["password", "pwd"]) {
    return _KnMask.maskingAttribute(json, attributes);
  }
  maskAttributeObject(json, attributes = ["password", "pwd"]) {
    return _KnMask.maskingAttributeObject(json, attributes);
  }
  /**
   * @param json object
   * @param attributes detected attributes, default is ["password","pwd"]
   * @return new deep clone object with detected attributes
   * ex. json = { name: "xxx", password: "yyy", userpwd: "1234" }
   * after maskingSensitive(json) = { name: 'xxx', password: undefined, userpwd: undefined }
   */
  static maskingSensitive(json, attributes = ["password", "pwd"]) {
    if (json) {
      const newjson = structuredClone(json);
      this.maskingSensitiveObject(newjson, attributes);
      return newjson;
    }
    return json;
  }
  /**
   * @param json object
   * @param attributes detected attributes, default is ["password","pwd"]
   * @return old object with detected attributes
   * ex. json = { name: "xxx", password: "yyy", userpwd: "1234" }
   * after maskingSensitiveObject(json) = { name: 'xxx', password: undefined, userpwd: undefined }
   */
  static maskingSensitiveObject(json, attributes = ["password", "pwd"]) {
    if (json) {
      let regex = new RegExp(attributes.join("|"), "i");
      for (let key of Object.keys(json)) {
        if (regex.test(key)) {
          json[key] = void 0;
        }
        if (typeof json[key] === "object") {
          this.maskingSensitiveObject(json[key], attributes);
        }
      }
    }
  }
  /**
   * @param json object
   * @param attributes detected attributes, default is ["password","pwd"]
   * @return new deep clone object with detected attributes
   * ex. json = { name: "xxx", password: "yyy", userpwd: "1234" }
   * after maskingAttribute(json) = { name: 'xxx', password: '******', userpwd: '******' }
   */
  static maskingAttribute(json, attributes = ["password", "pwd"]) {
    if (json) {
      const newjson = structuredClone(json);
      this.maskingAttributeObject(newjson, attributes);
      return newjson;
    }
    return json;
  }
  /**
   * @param json object
   * @param attributes detected attributes, default is ["password","pwd"]
   * @return old object with detected attributes
   * ex. json = { name: "xxx", password: "yyy", userpwd: "1234" }
   * after maskingAttributeObject(json) = { name: 'xxx', password: '******', userpwd: '******' }
   */
  static maskingAttributeObject(json, attributes = ["password", "pwd"], mask = "******") {
    if (json) {
      let regex = new RegExp(attributes.join("|"), "i");
      for (let key of Object.keys(json)) {
        if (regex.test(key)) {
          json[key] = mask;
        }
        if (typeof json[key] === "object") {
          this.maskingAttributeObject(json[key], attributes);
        }
      }
    }
  }
};

// src/app/label.util.ts
function getLabel(name, defaultLabel, lang = getDefaultLanguage()) {
  let result = void 0;
  let default_labels2 = getDefaultLabels();
  let program_labels2 = getProgramLabels();
  if (!lang || lang.trim().length == 0) lang = "EN";
  let label_item = getLabelItem(name, lang, program_labels2);
  if (label_item) {
    result = label_item.value;
  }
  if (!result) {
    label_item = getLabelItem(name, lang, default_labels2);
    if (label_item) {
      result = label_item.value;
    }
  }
  return result ?? defaultLabel;
}
function getLabelItem(name, lang, label_category) {
  if (!lang || lang.trim().length == 0) lang = "EN";
  let lang_item = label_category.find((item) => {
    return item.language == lang;
  });
  if (!lang_item) lang_item = label_category.find((item) => {
    return item.language == "EN";
  });
  if (lang_item) {
    return lang_item.label.find((item) => {
      return item.name == name;
    });
  }
  return void 0;
}
function getLabelObject(lang, label_category) {
  const language = lang && lang.trim().length > 0 ? lang : getDefaultLanguage() || "EN";
  let lang_item = label_category.find((item) => {
    return item.language == language;
  });
  if (!lang_item) lang_item = label_category.find((item) => {
    return item.language == "EN";
  });
  if (lang_item) {
    return lang_item.label;
  }
  return void 0;
}
function getLabelModel(lang = getDefaultLanguage()) {
  let default_labels2 = getDefaultLabels();
  let program_labels2 = getProgramLabels();
  let default_item = getLabelObject(lang, default_labels2);
  let program_item = getLabelObject(lang, program_labels2);
  let default_model = {};
  let program_model = {};
  if (default_item) {
    default_item.forEach((element) => {
      default_model[element.name] = element.value;
    });
  }
  if (program_item) {
    program_item.forEach((element) => {
      program_model[element.name] = element.value;
    });
  }
  return Object.assign(default_model, program_model);
}
function getApiLabel() {
  return getApiUrl() + (getMetaInfo().API_LABEL || "/api/label/fetch");
}
function mergeProgramLabels(data_labels) {
  if (!data_labels) return false;
  if (!Array.isArray(data_labels) || data_labels.length <= 0) return false;
  let program_labels2 = getProgramLabels();
  for (let data of data_labels) {
    let lang = data.language;
    let lang_item = program_labels2.find((item) => {
      return item.language == lang;
    });
    if (lang_item) {
      let concat_labels = [...lang_item.label, ...data.label];
      lang_item.label = [...new Map(concat_labels.map((item) => [item.name, item])).values()];
    }
  }
  return true;
}
function loadAndMergeLabel(id, callback, loadLabel = String(getMetaInfo()?.LOAD_LABEL) == "true", url = getApiLabel()) {
  loadAndMergeProgramLabel(id, callback, loadLabel, url);
  loadAndMergeMessageCode();
}
function loadAndMergeProgramLabel(id, callback, loadLabel = String(getMetaInfo()?.LOAD_LABEL) == "true", url = getApiLabel()) {
  if (!loadLabel) return;
  let label_cached = getStorage(id);
  if (label_cached) {
    let merged = mergeProgramLabels(label_cached);
    if (merged && callback) callback(true, label_cached);
    return;
  }
  fetchLabel(id, function(success, data) {
    if (success) {
      setStorage(id, data.body);
      let merged = mergeProgramLabels(data.body);
      if (merged && callback) callback(true, data.body);
    }
  }, url);
}
function fetchLabel(id, callback, url = getApiLabel()) {
  console.log("fetchLabel:", id);
  let authtoken = getAccessorToken();
  jquery_util_default.ajax({
    url,
    type: "POST",
    data: JSON.stringify({ labelid: id }),
    dataType: "json",
    headers: { "authtoken": authtoken },
    contentType: DEFAULT_CONTENT_TYPE,
    error: function(transport, status, errorThrown) {
      console.error(errorThrown);
      if (callback) callback(false, errorThrown, transport);
    },
    success: function(data) {
      if (callback) callback(true, data);
    }
  });
}

// src/app/Paging.ts
var DEFAULT_PAGE_SETTINGS = { page: 1, rowsPerPage: 10, totalRows: 0, totalPages: 1, limit: 10, offset: 10, rows: 0, orderBy: "", orderDir: "" };
var Paging = class {
  setting;
  constructor(setting = {}) {
    this.setting = { ...DEFAULT_PAGE_SETTINGS, ...setting };
  }
  clear() {
    this.reset(DEFAULT_PAGE_SETTINGS);
  }
  reset(setting) {
    if (setting) {
      this.setting = { ...this.setting, ...setting };
    }
  }
  hasPaging(rows) {
    if (!rows) rows = this.setting.totalRows;
    let chapter = this.setting.rowsPerPage;
    return chapter > 0 && rows > chapter;
  }
  recordsOffset() {
    let page = this.setting.page - 1;
    let chapter = this.setting.rowsPerPage;
    if (page > 0) return page * chapter;
    return 0;
  }
  recordsNumber(seqno) {
    return seqno + this.recordsOffset();
  }
  buildPagingModel(opts) {
    const options = opts ?? { totalRows: 0 };
    const results = [];
    const totalRows = this.resolveTotalRows(options.totalRows);
    const totalPages = this.calculateTotalPages(totalRows);
    const pagingRange = this.calculatePagingRange();
    this.addFirstAndPrevious(results, pagingRange);
    this.addPageNumbers(results, totalRows, totalPages, pagingRange);
    this.addLast(results, totalRows, pagingRange);
    return results;
  }
  resolveTotalRows(totalRows) {
    return totalRows || this.setting.totalRows;
  }
  calculateTotalPages(totalRows) {
    let pages = 0;
    for (let i = 0; i < totalRows; i += this.setting.rowsPerPage) {
      pages++;
    }
    return pages;
  }
  calculatePagingRange() {
    let pages = this.setting.page;
    let chapters = this.setting.rowsPerPage;
    let limit = this.setting.limit <= 0 ? chapters : this.setting.limit;
    let counter = 0;
    let startIdx = pages;
    while (startIdx > limit) {
      counter++;
      startIdx -= limit;
    }
    return { pages, chapters, limit, previousPage: counter * limit };
  }
  addFirstAndPrevious(results, range) {
    if (range.limit > 0 && range.pages > range.limit) {
      results.push(
        { page: 1, text: "|<", css: "" },
        { page: range.previousPage, text: "<<", css: "" }
      );
    }
  }
  getNextPageNumber(page, totalPages) {
    let nextPage = page;
    if (nextPage > totalPages) nextPage = totalPages;
    return nextPage;
  }
  addPageNumbers(results, totalRows, totalPages, range) {
    let pageNumber = 0;
    let pageCounter = 0;
    for (let i = 0; i < totalRows; i += range.chapters) {
      pageNumber++;
      if (range.limit > 0) {
        if (pageNumber <= range.previousPage) continue;
        pageCounter++;
        if (range.limit < pageCounter) {
          let nextPage = this.getNextPageNumber(pageNumber, totalPages);
          results.push({ page: nextPage, text: ">>", css: "" });
          break;
        }
      }
      const selected = range.pages === pageNumber || pageNumber === 1 && range.pages === 0 ? "pageselectedclass active" : "";
      results.push({
        page: pageNumber,
        text: String(pageNumber),
        css: selected
      });
    }
  }
  addLast(results, totalRows, range) {
    if (range.limit <= 0) return;
    let pageCount = 0;
    for (let i = 0; i < totalRows; i += range.chapters) {
      pageCount++;
    }
    if (range.limit < pageCount) {
      results.push({ page: pageCount, text: ">|", css: "" });
    }
  }
};

// src/app/permit.util.ts
var permitsChunk = {};
var DEFAULT_PERMITS = { all: false, insert: false, retrieve: false, update: false, delete: false, import: false, export: false, launch: true, print: false };
var Permission = class {
  permits;
  constructor(setting = {}) {
    this.permits = { ...DEFAULT_PERMITS, ...setting };
  }
  canDo(action) {
    let cando = this.permits[action];
    return cando !== void 0 && cando;
  }
};
async function getPermitModel(pid) {
  if (!pid || pid.trim().length == 0) return void 0;
  if (!permitsChunk[pid]) {
    await loadPermissions(pid);
  }
  return new Permission(permitsChunk[pid]);
}
async function loadPermissions(pid) {
  if (!pid || pid.trim().length == 0) return void 0;
  try {
    let params = serializeParameters({ progid: pid });
    let options = { method: "POST", headers: { ...params.headers, "Content-Type": DEFAULT_CONTENT_TYPE }, body: params.jsondata };
    let response = await fetch(getApiUrl() + "/api/permit/get", options);
    let json = await response.json();
    console.log("loadPermissions: pid=" + pid, json);
    if (json?.body[pid]) {
      permitsChunk[pid] = json.body[pid];
    }
  } catch (ex) {
    console.error(ex);
  }
}

// src/app/pwd.util.ts
function randomPassword() {
  let now = /* @__PURE__ */ new Date();
  let time = now.getTime().toString(16);
  time = time.substring(time.length - 4);
  let l = Math.floor(randomize() * 1e5) + 1e3;
  let code = l.toString(16);
  code = code.substring(0, 4);
  return time + code;
}
function getAlphabets(text) {
  if (!text || text.trim().length == 0) return 0;
  let count = 0;
  for (let i = 0, isz = text.length; i < isz; i++) {
    if (isLetter(text.charAt(i))) {
      count++;
    }
  }
  return count;
}
function getDigits(text) {
  if (!text || text.trim().length == 0) return 0;
  return (text.match(/\d/g) || []).length;
}
function isDigit(c) {
  return c >= "0" && c <= "9";
}
function isLetter(c) {
  return /[a-zA-Z]/.test(c);
}
function isLowerCase(c) {
  return c == c.toLowerCase();
}
function isUpperCase(c) {
  return c == c.toUpperCase();
}
function indexOfAlphabets(text) {
  if (!text || text.trim().length == 0) return -1;
  for (let i = 0, isz = text.length; i < isz; i++) {
    if (isLetter(text.charAt(i))) {
      return i;
    }
  }
  return -1;
}
function createNewPassword() {
  let text = randomPassword();
  let digits = getDigits(text);
  let letters = getAlphabets(text);
  while (digits == 0 || letters <= 1) {
    text = randomPassword();
    digits = getDigits(text);
    letters = getAlphabets(text);
  }
  let idx = indexOfAlphabets(text);
  if (idx >= 0) {
    let ch = text.charAt(idx);
    ch = ch.toUpperCase();
    return text.substring(0, idx) + ch + text.substring(idx + 1);
  }
  return text;
}
function checkNumberOnly(text) {
  if (!text || text.trim().length == 0) return false;
  return /^\d*$/.test(text);
}

// src/app/random.util.ts
var ALPHABETS = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
var NUMERICS = Array.from("0123456789");
function getRandomNumber(min = 1, max = 1e6) {
  return Math.floor(randomize() * (max - min + 1) + min);
}
function random(len = 6, alphabets = ALPHABETS) {
  let result = "";
  let max = alphabets.length - 1;
  for (let i = 0; i < len; i++) {
    let idx = getRandomNumber(1, max);
    result += alphabets[idx - 1];
  }
  return result;
}
function randomNumber(len = 6, alphabets = NUMERICS) {
  return random(len, alphabets);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ALPHABETS,
  DEFAULT_CONTENT_TYPE,
  DEFAULT_PAGE_SETTINGS,
  DEFAULT_PERMITS,
  DH,
  KnMask,
  NUMERICS,
  Paging,
  Permission,
  Utilities,
  addWindow,
  alertDialog,
  alertbox,
  alertmsg,
  appInit,
  assignAppConfig,
  bindingChildMessaging,
  bindingParentMessaging,
  checkInputKey,
  checkInputNumberOnly,
  checkNumberOnly,
  clearCalendar,
  clearComma,
  closeChildWindows,
  confirmApprove,
  confirmCancel,
  confirmClear,
  confirmDelete,
  confirmDialog,
  confirmDialogBox,
  confirmErase,
  confirmExport,
  confirmImport,
  confirmProcess,
  confirmReceive,
  confirmReject,
  confirmRemove,
  confirmRequest,
  confirmResend,
  confirmReset,
  confirmRevise,
  confirmSave,
  confirmSaveAs,
  confirmSend,
  confirmUpdate,
  confirmbox,
  confirmmsg,
  createLinkStyle,
  createNewPassword,
  decryptCipherData,
  detectErrorResponse,
  disableControls,
  ensureTableSetting,
  fetchLabel,
  fetchMessageCode,
  formatDataTable,
  formatDecimal,
  formatFloating,
  formatNumber,
  generateUUID,
  getAccessTokenKey,
  getAccessorInfo,
  getAccessorToken,
  getAlphabets,
  getApiLabel,
  getApiMessageCode,
  getApiToken,
  getApiUrl,
  getAppInfo,
  getBaseCss,
  getBaseStorage,
  getBaseUrl,
  getCaretPosition,
  getCdnUrl,
  getChatUrl,
  getChildWindows,
  getConfig,
  getControlClasses,
  getCurrentWindow,
  getDH,
  getDefaultLabels,
  getDefaultLanguage,
  getDefaultRawParameters,
  getDigits,
  getImgUrl,
  getJQuery,
  getLabel,
  getLabelItem,
  getLabelModel,
  getLabelObject,
  getMessageCode,
  getMetaInfo,
  getMultiLanguages,
  getMultiLanguagesModel,
  getPermitModel,
  getPrimeNumber,
  getProgramLabels,
  getProgramMessage,
  getRandomNumber,
  getRequestID,
  getStorage,
  getTokenKey,
  getWindowByName,
  getWindowOpen,
  handleRequestMessage,
  indexOfAlphabets,
  initAppConfig,
  initConfigure,
  inputNumberOnly,
  isDigit,
  isDisplayPageHeader,
  isLetter,
  isLowerCase,
  isSecureStorage,
  isUpperCase,
  loadAndMergeLabel,
  loadAndMergeMessageCode,
  loadAndMergeProgramLabel,
  loadAppConfig,
  loadPermissions,
  mergeMessageCodes,
  mergeProgramLabels,
  modPowInt,
  openCalendar,
  openNewWindow,
  parseErrorThrown,
  parseNumber,
  putComma,
  random,
  randomNumber,
  randomPassword,
  randomize,
  registerNotification,
  removeAccessorInfo,
  removeComma,
  removeDelimiter,
  removeStorage,
  replaceString,
  requestAccessorInfo,
  resetRequestID,
  saveAccessorInfo,
  sendMessageInterface,
  sendMessageToFrame,
  sendMessageToOpener,
  sendMessageToParent,
  serializeParameters,
  setApiToken,
  setApiUrl,
  setBaseCss,
  setBaseStorage,
  setBaseUrl,
  setCaretPosition,
  setCdnUrl,
  setChatUrl,
  setCurrentWindow,
  setDefaultLabels,
  setDefaultLanguage,
  setDefaultRawParameters,
  setDragFunction,
  setImgUrl,
  setMessagingCallback,
  setMetaInfo,
  setMultiLanguages,
  setProgramLabels,
  setProgramMessage,
  setSecureStorage,
  setStorage,
  setTokenKey,
  setupApplication,
  setupDiffie,
  startApplication,
  startWaiting,
  stopWaiting,
  submitFailure,
  submitWindow,
  successbox,
  triggerInput,
  warningbox
});
