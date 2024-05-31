const { getApp, getApps, initializeApp } = require("firebase/app");
const { getAuth, FetchProvider } = require("firebase/auth");
const fetch = require("node-fetch")

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

const firebaseConfig = {
  apiKey: "AIzaSyDS5mWRp7NfbfPcaFXuE6qeMgIwXGEitMA",
  authDomain: "proj-manager-mern.firebaseapp.com",
  projectId: "proj-manager-mern",
  storageBucket: "proj-manager-mern.appspot.com",
  messagingSenderId: "58930635426",
  appId: "1:58930635426:web:29da1d6a95ed1e1a84adfb",
  measurementId: "G-RB6GT0XGWG",
};

const fapp = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(fapp);

module.exports = { auth };