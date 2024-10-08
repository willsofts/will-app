"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMultiLanguagesModel = exports.appInit = exports.setProgramLabels = exports.setDefaultLabels = exports.setProgramMessage = exports.getProgramLabels = exports.getDefaultLabels = exports.getProgramMessage = exports.setBaseCss = exports.getBaseCss = exports.isSecureStorage = exports.setSecureStorage = exports.setDefaultRawParameters = exports.setBaseStorage = exports.setChatUrl = exports.setImgUrl = exports.setCdnUrl = exports.setBaseUrl = exports.setApiUrl = exports.setApiToken = exports.getDefaultRawParameters = exports.getBaseStorage = exports.getChatUrl = exports.getImgUrl = exports.getCdnUrl = exports.getBaseUrl = exports.getApiUrl = exports.getApiToken = exports.setDefaultLanguage = exports.getDefaultLanguage = exports.setMultiLanguages = exports.getMultiLanguages = exports.registerNotification = exports.DEFAULT_CONTENT_TYPE = void 0;
const messenger_1 = require("./messenger");
var DEFAULT_LANGUAGE = process.env.VUE_APP_DEFAULT_LANGUAGE;
var API_URL = process.env.VUE_APP_API_URL;
var BASE_URL = process.env.VUE_APP_BASE_URL;
var CDN_URL = process.env.VUE_APP_CDN_URL;
var IMG_URL = process.env.VUE_APP_IMG_URL;
var CHAT_URL = process.env.VUE_APP_CHAT_URL;
var BASE_STORAGE = process.env.VUE_APP_BASE_STORAGE;
var API_TOKEN = process.env.VUE_APP_API_TOKEN;
var DEFAULT_RAW_PARAMETERS = process.env.VUE_APP_DEFAULT_RAW_PARAMETERS == "true";
var SECURE_STORAGE = process.env.VUE_APP_SECURE_STORAGE == "true";
var BASE_CSS = process.env.VUE_APP_BASE_CSS;
var APP_MULTI_LANGUAGES = process.env.VUE_APP_MULTI_LANGUAGES;
var MULTI_LANGUAGES = ["EN", "TH"];
if (APP_MULTI_LANGUAGES && APP_MULTI_LANGUAGES.trim().length > 0) {
    let multilangs = JSON.parse(APP_MULTI_LANGUAGES);
    if (Array.isArray(multilangs))
        MULTI_LANGUAGES = multilangs;
}
exports.DEFAULT_CONTENT_TYPE = "application/json; charset=UTF-8";
console.info("DEFAULT_LANGUAGE=" + DEFAULT_LANGUAGE, ", BASE_STORAGE=" + BASE_STORAGE, ", DEFAULT_RAW_PARAMETERS=" + DEFAULT_RAW_PARAMETERS, ", SECURE_STORAGE=" + SECURE_STORAGE);
console.info("API_URL=" + API_URL, ", BASE_URL=" + BASE_URL, ", CDN_URL=" + CDN_URL, ", IMG_URL=" + IMG_URL + ", BASE_CSS=" + BASE_CSS + ", CHAT_URL=" + CHAT_URL + ", MULTI_LANGUAGES=" + MULTI_LANGUAGES);
console.info("API_TOKEN=" + API_TOKEN);
var notifyCallback;
function registerNotification(callback) { notifyCallback = callback; }
exports.registerNotification = registerNotification;
function getMultiLanguages() { return MULTI_LANGUAGES; }
exports.getMultiLanguages = getMultiLanguages;
function setMultiLanguages(values) {
    console.info("set MULTI_LANGUAGES", values);
    if (values)
        MULTI_LANGUAGES = values;
    if (notifyCallback)
        notifyCallback("multi-languages", MULTI_LANGUAGES);
}
exports.setMultiLanguages = setMultiLanguages;
function getDefaultLanguage() { return DEFAULT_LANGUAGE; }
exports.getDefaultLanguage = getDefaultLanguage;
function setDefaultLanguage(language) {
    console.log("set default_language=" + language);
    if (language && language.trim().length > 0)
        DEFAULT_LANGUAGE = language;
}
exports.setDefaultLanguage = setDefaultLanguage;
function getApiToken() { return API_TOKEN; }
exports.getApiToken = getApiToken;
function getApiUrl() { return API_URL; }
exports.getApiUrl = getApiUrl;
function getBaseUrl() { return BASE_URL; }
exports.getBaseUrl = getBaseUrl;
function getCdnUrl() { return CDN_URL; }
exports.getCdnUrl = getCdnUrl;
function getImgUrl() { return IMG_URL; }
exports.getImgUrl = getImgUrl;
function getChatUrl() { return CHAT_URL; }
exports.getChatUrl = getChatUrl;
function getBaseStorage() { return BASE_STORAGE; }
exports.getBaseStorage = getBaseStorage;
function getDefaultRawParameters() { return DEFAULT_RAW_PARAMETERS; }
exports.getDefaultRawParameters = getDefaultRawParameters;
function setApiToken(value) { API_TOKEN = value; }
exports.setApiToken = setApiToken;
function setApiUrl(value) { API_URL = value; }
exports.setApiUrl = setApiUrl;
function setBaseUrl(value) { BASE_URL = value; }
exports.setBaseUrl = setBaseUrl;
function setCdnUrl(value) { CDN_URL = value; }
exports.setCdnUrl = setCdnUrl;
function setImgUrl(value) { IMG_URL = value; }
exports.setImgUrl = setImgUrl;
function setChatUrl(value) { CHAT_URL = value; }
exports.setChatUrl = setChatUrl;
function setBaseStorage(value) { BASE_STORAGE = value; }
exports.setBaseStorage = setBaseStorage;
function setDefaultRawParameters(value) { DEFAULT_RAW_PARAMETERS = value; }
exports.setDefaultRawParameters = setDefaultRawParameters;
function setSecureStorage(value) { SECURE_STORAGE = value; }
exports.setSecureStorage = setSecureStorage;
function isSecureStorage() { return SECURE_STORAGE; }
exports.isSecureStorage = isSecureStorage;
function getBaseCss() { return BASE_CSS; }
exports.getBaseCss = getBaseCss;
function setBaseCss(value) { BASE_CSS = value; }
exports.setBaseCss = setBaseCss;
var default_labels = [];
var program_labels = [];
var program_message = [];
function getProgramMessage() { return program_message; }
exports.getProgramMessage = getProgramMessage;
function getDefaultLabels() { return default_labels; }
exports.getDefaultLabels = getDefaultLabels;
function getProgramLabels() { return program_labels; }
exports.getProgramLabels = getProgramLabels;
function setProgramMessage(message) { program_message = message; }
exports.setProgramMessage = setProgramMessage;
function setDefaultLabels(labels) { default_labels = labels; }
exports.setDefaultLabels = setDefaultLabels;
function setProgramLabels(labels) { program_labels = labels; }
exports.setProgramLabels = setProgramLabels;
function appInit(settings = { program_message, default_labels, program_labels, listen_messaging: 'child' }) {
    const setting = Object.assign({ listen_messaging: 'child' }, settings);
    setProgramMessage(setting.program_message);
    setDefaultLabels(setting.default_labels);
    setProgramLabels(setting.program_labels);
    if (setting.listen_messaging == 'child') {
        (0, messenger_1.bindingChildMessaging)();
    }
    else if (setting.listen_messaging == 'parent') {
        (0, messenger_1.bindingParentMessaging)();
    }
}
exports.appInit = appInit;
function getMultiLanguagesModel(datas) {
    let multilangs = datas || getMultiLanguages();
    if (!multilangs)
        multilangs = ["EN", "TH"];
    return multilangs.map((item) => { return { lang: item, label: item + "_lang" }; });
}
exports.getMultiLanguagesModel = getMultiLanguagesModel;
