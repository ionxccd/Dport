import Parse from 'parse/dist/parse.min.js';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'ar92yvqtkD3nn1vJNOUizEB7veDTpn0ZyH0U5GSN';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'UyBdf8mRgliCTmStmnNfsmAv4VJx9i1z2xXGiX5m';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;
