"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appInit = exports.setProgramLabels = exports.setDefaultLabels = exports.setProgramMessage = exports.getProgramLabels = exports.getDefaultLabels = exports.getProgramMessage = exports.isSecureStorage = exports.setSecureStorage = exports.setDefaultRawParameters = exports.setBaseStorage = exports.setImgUrl = exports.setCdnUrl = exports.setBaseUrl = exports.setApiUrl = exports.setApiToken = exports.getDefaultRawParameters = exports.getBaseStorage = exports.getImgUrl = exports.getCdnUrl = exports.getBaseUrl = exports.getApiUrl = exports.getApiToken = exports.setDefaultLanguage = exports.getDefaultLanguage = exports.DEFAULT_CONTENT_TYPE = void 0;
var DEFAULT_LANGUAGE = process.env.VUE_APP_DEFAULT_LANGUAGE;
var API_URL = process.env.VUE_APP_API_URL;
var BASE_URL = process.env.VUE_APP_BASE_URL;
var CDN_URL = process.env.VUE_APP_CDN_URL;
var IMG_URL = process.env.VUE_APP_IMG_URL;
var BASE_STORAGE = process.env.VUE_APP_BASE_STORAGE;
var API_TOKEN = process.env.VUE_APP_API_TOKEN;
var DEFAULT_RAW_PARAMETERS = process.env.VUE_APP_DEFAULT_RAW_PARAMETERS == "true";
var SECURE_STORAGE = process.env.VUE_APP_SECURE_STORAGE == "true";
exports.DEFAULT_CONTENT_TYPE = "application/x-www-form-urlencoded; charset=UTF-8";
console.info("DEFAULT_LANGUAGE=" + DEFAULT_LANGUAGE, ", BASE_STORAGE=" + BASE_STORAGE, ", DEFAULT_RAW_PARAMETERS=" + DEFAULT_RAW_PARAMETERS, ", SECURE_STORAGE=" + SECURE_STORAGE);
console.info("API_URL=" + API_URL, ", BASE_URL=" + BASE_URL, ", CDN_URL=" + CDN_URL, ", IMG_URL=" + IMG_URL);
console.info("API_TOKEN=" + API_TOKEN);
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
function setBaseStorage(value) { BASE_STORAGE = value; }
exports.setBaseStorage = setBaseStorage;
function setDefaultRawParameters(value) { DEFAULT_RAW_PARAMETERS = value; }
exports.setDefaultRawParameters = setDefaultRawParameters;
function setSecureStorage(value) { SECURE_STORAGE = value; }
exports.setSecureStorage = setSecureStorage;
function isSecureStorage() { return SECURE_STORAGE; }
exports.isSecureStorage = isSecureStorage;
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
function appInit(settings = { program_message, default_labels, program_labels }) {
    setProgramMessage(settings.program_message);
    setDefaultLabels(settings.default_labels);
    setProgramLabels(settings.program_labels);
}
exports.appInit = appInit;
