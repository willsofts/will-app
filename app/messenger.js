"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDH = exports.setupDiffie = exports.handleRequestMessage = exports.sendMessageToOpener = exports.sendMessageToParent = exports.requestAccessorInfo = exports.sendMessageToFrame = exports.sendMessageInterface = exports.removeAccessorInfo = exports.saveAccessorInfo = exports.getAccessorToken = exports.getAccessorInfo = exports.removeStorage = exports.setStorage = exports.getStorage = exports.getCurrentWindow = exports.setCurrentWindow = exports.setMessagingCallback = void 0;
const app_info_1 = require("./app.info");
const dh_1 = require("./dh");
const secure_ls_1 = __importDefault(require("secure-ls"));
const secureLs = app_info_1.SECURE_STORAGE ? new secure_ls_1.default({ storage: "local" == (0, app_info_1.getBaseStorage)() ? localStorage : sessionStorage }) : null;
console.info("secure storage:", secureLs);
var messagingCallback;
var currentWindow;
function setMessagingCallback(callback) {
    messagingCallback = callback;
}
exports.setMessagingCallback = setMessagingCallback;
function setCurrentWindow(curwin) {
    currentWindow = curwin;
}
exports.setCurrentWindow = setCurrentWindow;
function getCurrentWindow() { return currentWindow; }
exports.getCurrentWindow = getCurrentWindow;
function getStorage(key) {
    if ("local" == (0, app_info_1.getBaseStorage)()) {
        return localStorage.getItem(key);
    }
    return sessionStorage.getItem(key);
}
exports.getStorage = getStorage;
function setStorage(key, value) {
    if ("local" == (0, app_info_1.getBaseStorage)()) {
        localStorage.setItem(key, value);
        return;
    }
    sessionStorage.setItem(key, value);
}
exports.setStorage = setStorage;
function removeStorage(key) {
    if ("local" == (0, app_info_1.getBaseStorage)()) {
        localStorage.removeItem(key);
        return;
    }
    sessionStorage.removeItem(key);
}
exports.removeStorage = removeStorage;
function getAccessorInfo() {
    let info = getStorage("accessorinfo");
    if (info && info != "") {
        try {
            return JSON.parse(info);
        }
        catch (ex) {
            console.error(ex);
        }
    }
    return null;
}
exports.getAccessorInfo = getAccessorInfo;
function getAccessorToken() {
    let json = getAccessorInfo();
    if (json && json.authtoken) {
        return json.authtoken;
    }
    let token = (0, app_info_1.getApiToken)();
    if (token && token != "")
        return token;
    return "";
}
exports.getAccessorToken = getAccessorToken;
function saveAccessorInfo(json) {
    setStorage("accessorinfo", JSON.stringify(json));
}
exports.saveAccessorInfo = saveAccessorInfo;
function removeAccessorInfo() {
    removeStorage("accessorinfo");
}
exports.removeAccessorInfo = removeAccessorInfo;
function sendMessageInterface(win) {
    let moderator = win ? "opener" : "parent";
    let info = getAccessorInfo();
    let options = getStorage("accessoptions");
    let msg = { type: "storage", moderator: moderator, API_URL: (0, app_info_1.getApiUrl)(), BASE_URL: (0, app_info_1.getBaseUrl)(), CDN_URL: (0, app_info_1.getCdnUrl)(), IMG_URL: (0, app_info_1.getImgUrl)(), DEFAULT_LANGUAGE: (0, app_info_1.getDefaultLanguage)(), API_TOKEN: (0, app_info_1.getApiToken)(), accessorinfo: info, accessoptions: options };
    return sendMessageToFrame(msg, win);
}
exports.sendMessageInterface = sendMessageInterface;
function sendMessageToFrame(data, win) {
    if (!data)
        return false;
    try {
        console.log("sendMessageToFrame:", data);
        if (!win)
            win = document.getElementsByTagName('iframe')[0].contentWindow;
        if (win)
            win.postMessage(JSON.stringify(data), "*");
        return true;
    }
    catch (ex) {
        console.log(ex);
    }
    return false;
}
exports.sendMessageToFrame = sendMessageToFrame;
function requestAccessorInfo(callback) {
    if (callback)
        setMessagingCallback(callback);
    let msg = { type: "accessorinfo" };
    console.log("requestAccessorInfo: ", msg);
    console.log("window.opener", window.opener);
    console.log("window.parent", window.parent);
    if (window.opener) {
        return sendMessageToOpener(msg);
    }
    return sendMessageToParent(msg);
}
exports.requestAccessorInfo = requestAccessorInfo;
function sendMessageToParent(data) {
    if (!data)
        return;
    try {
        console.log("sendMessageToParent:", data);
        window.parent.postMessage(JSON.stringify(data), "*");
        return true;
    }
    catch (ex) {
        console.log(ex);
    }
    return false;
}
exports.sendMessageToParent = sendMessageToParent;
function sendMessageToOpener(data) {
    if (!data)
        return;
    try {
        console.log("sendMessageToOpener:", data);
        window.opener.postMessage(JSON.stringify(data), "*");
        return true;
    }
    catch (ex) {
        console.log(ex);
    }
    return false;
}
exports.sendMessageToOpener = sendMessageToOpener;
function handleRequestMessage(data) {
    console.log("handleRequestMessage: data", data);
    if (data.type == "storage") {
        if (data.API_URL !== undefined)
            (0, app_info_1.setApiUrl)(data.API_URL);
        if (data.BASE_URL !== undefined)
            (0, app_info_1.setBaseUrl)(data.BASE_URL);
        if (data.CDN_URL !== undefined)
            (0, app_info_1.setCdnUrl)(data.CDN_URL);
        if (data.IMG_URL !== undefined)
            (0, app_info_1.setImgUrl)(data.IMG_URL);
        if (data.DEFAULT_LANGUAGE !== undefined)
            (0, app_info_1.setDefaultLanguage)(data.DEFAULT_LANGUAGE);
        if (data.API_TOKEN !== undefined)
            (0, app_info_1.setApiToken)(data.API_TOKEN);
        if (data.accessoptions !== undefined)
            setStorage("accessoptions", data.accessoptions);
        if (data.accessorinfo) {
            saveAccessorInfo(data.accessorinfo);
        }
        console.info("handleRequestMessage: accessor info", data.accessorinfo);
        console.info("handleRequestMessage: DEFAULT_LANGUAGE=" + (0, app_info_1.getDefaultLanguage)(), ", BASE_STORAGE=" + (0, app_info_1.getBaseUrl)(), ", DEFAULT_RAW_PARAMETERS=" + (0, app_info_1.getDefaultRawParameters)());
        console.info("handleRequestMessage: API_URL=" + (0, app_info_1.getApiUrl)(), ", BASE_URL=" + (0, app_info_1.getBaseUrl)(), ", CDN_URL=" + (0, app_info_1.getCdnUrl)(), ", IMG_URL=" + (0, app_info_1.getImgUrl)());
        console.info("handleRequestMessage: API_TOKEN=" + (0, app_info_1.getApiToken)());
    }
    if (messagingCallback)
        messagingCallback(data);
}
exports.handleRequestMessage = handleRequestMessage;
function setupDiffie(json) {
    console.log("setupDiffie", getAccessorToken());
    let info = json.body.info;
    if (info) {
        const dh = new dh_1.DH();
        dh.prime = info.prime;
        dh.generator = info.generator;
        dh.otherPublicKey = info.publickey;
        dh.compute();
        dh.updatePublicKey();
        info.privatekey = dh.privateKey;
        info.publickey = dh.publicKey;
        info.sharedkey = dh.sharedKey;
        info.otherpublickey = dh.otherPublicKey;
        saveAccessorInfo(json.body);
    }
}
exports.setupDiffie = setupDiffie;
function getDH() {
    let json = getAccessorInfo();
    if (json && json.info) {
        let info = json.info;
        if (info.prime && info.generator && info.publickey && info.privatekey && info.sharedkey && info.otherpublickey) {
            const dh = new dh_1.DH();
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
exports.getDH = getDH;
window.onmessage = function (e) {
    console.log("window-messenger: onmessage:", e.data);
    try {
        let payload = e.data;
        if (typeof payload === 'string') {
            payload = JSON.parse(e.data);
        }
        //in case of parent window, try to send accessor info
        /*
        if(payload.type=="accessorinfo") {
            sendMessageInterface(getCurrentWindow());
            return;
        }*/
        //in case of child window, try to handle request message
        handleRequestMessage(payload);
    }
    catch (ex) {
        console.error(ex);
    }
};
