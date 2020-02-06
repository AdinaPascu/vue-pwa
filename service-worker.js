importScripts("/vue-pwa/precache-manifest.0b2a10685bcbe748a4a716a228ca45b4.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("fetch", () => {
    console.log("fetched")
})
