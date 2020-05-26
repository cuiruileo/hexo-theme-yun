/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d8235db7e4e9d81fa2b4bf96d6cd27b5"
  },
  {
    "url": "about.html",
    "revision": "6598e9075e3e494291e376ed508ed4e5"
  },
  {
    "url": "assets/css/0.styles.3fc9eea4.css",
    "revision": "197c360dc4ae9484db60880f4728af14"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.50cfa49c.js",
    "revision": "9c3d7c3b8367c3ea62ae1c460d5abbb6"
  },
  {
    "url": "assets/js/11.f2050cd2.js",
    "revision": "84c0822af8504adf13ab437bfa130129"
  },
  {
    "url": "assets/js/12.17461310.js",
    "revision": "3a687f95d72652af2e1cb835da564005"
  },
  {
    "url": "assets/js/13.963f934f.js",
    "revision": "f4fbf09ec54f40a8f36c284679ef0e12"
  },
  {
    "url": "assets/js/14.a83e5219.js",
    "revision": "115da2753ab5650d0bcbaf87146cf9bc"
  },
  {
    "url": "assets/js/15.75d67d2c.js",
    "revision": "cda61df4a25e95130f9869f011181832"
  },
  {
    "url": "assets/js/16.5a04131a.js",
    "revision": "5fec857e6524e1e6e2b1dc9940432be5"
  },
  {
    "url": "assets/js/17.c7ca52bb.js",
    "revision": "ff86575cfe45c10cc891b3f955175909"
  },
  {
    "url": "assets/js/18.f1e5a1b7.js",
    "revision": "4116b7810bf48203ca3251dad4eb9724"
  },
  {
    "url": "assets/js/19.b0de147f.js",
    "revision": "93ef5ae2a67cfbe384fed953633f1114"
  },
  {
    "url": "assets/js/2.cc3555a3.js",
    "revision": "3a067f6b93f60cbe3fd36ad7dff67f0d"
  },
  {
    "url": "assets/js/20.2fb50d36.js",
    "revision": "fb2266c71b07f4d638efee43334e591f"
  },
  {
    "url": "assets/js/21.f9f83b8a.js",
    "revision": "500d7a22fb4a0d081c4d35044321973f"
  },
  {
    "url": "assets/js/22.b504bb50.js",
    "revision": "78717792cf800a7d567701a4611ef30d"
  },
  {
    "url": "assets/js/23.660cdb3c.js",
    "revision": "2feea855fb3587bbc1eb8c6b872f3c89"
  },
  {
    "url": "assets/js/24.338b79e4.js",
    "revision": "87994bbacd9a87a6e497de2d7093b635"
  },
  {
    "url": "assets/js/25.96bc925e.js",
    "revision": "36c9fee00b021e4d697126cdfed26bde"
  },
  {
    "url": "assets/js/26.42f356ff.js",
    "revision": "8d9cec6cacb964f76bd8531adbe9f565"
  },
  {
    "url": "assets/js/27.7dfc482c.js",
    "revision": "ad333006e4d81ce315f731de92f297fb"
  },
  {
    "url": "assets/js/3.f4f051f8.js",
    "revision": "9cf70c4cdffccd9b147b90a856d5fdf7"
  },
  {
    "url": "assets/js/4.8ed62a6f.js",
    "revision": "b0b2da157d0752ebe318de8b19bca15f"
  },
  {
    "url": "assets/js/5.24557e6b.js",
    "revision": "3a88cb670fc8ff91980a9ce0bd7f6ceb"
  },
  {
    "url": "assets/js/6.9088afc6.js",
    "revision": "220a258fee6358aa3e2e376e2622884a"
  },
  {
    "url": "assets/js/7.11fff8b0.js",
    "revision": "8921d0cfc4f107b1989865af466c61c0"
  },
  {
    "url": "assets/js/8.6b8ffaa1.js",
    "revision": "c3bf63c96e475ffb4733af72f9578c8c"
  },
  {
    "url": "assets/js/9.043ee7d3.js",
    "revision": "856a90805d06ad062188cd4a138e97a4"
  },
  {
    "url": "assets/js/app.545d73c0.js",
    "revision": "f61f8c21b88774c8465516e76703bb71"
  },
  {
    "url": "demo.html",
    "revision": "1b1de829ccaaaaaf4c396c174a9bdd5e"
  },
  {
    "url": "en/about.html",
    "revision": "b583ee53593b8d7cff42980c4ce2a2c2"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "d5199915eb5a9e823146968452236806"
  },
  {
    "url": "en/guide/config.html",
    "revision": "6912b80b2d18538b1d0c9d4724bde44c"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "f8631f6caa0a8ca89ff2f62f298a18d5"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "eab6c622fda469abd8c26806c1d7ef14"
  },
  {
    "url": "en/guide/index.html",
    "revision": "1351b022379f5cb2d1a4bc123a1ab3a2"
  },
  {
    "url": "en/guide/page.html",
    "revision": "b1f2c97ac5b4fad6dd16e4f9143e6317"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "662ae7aff25927f0cb3fd68e5c5292f6"
  },
  {
    "url": "en/guide/Todo.html",
    "revision": "60b0a34689cb9e77778b529937cd285a"
  },
  {
    "url": "en/index.html",
    "revision": "ab1419d80f49e2cbf7d04c44636260a7"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "065e79a5cedfa70b91a5113d1566cae4"
  },
  {
    "url": "guide/config.html",
    "revision": "976a074b6b3c6a9bf539b15ad49027ea"
  },
  {
    "url": "guide/faq.html",
    "revision": "b9274e046cd34f3f16aea3eff2d7a6da"
  },
  {
    "url": "guide/icon.html",
    "revision": "a4760225f40406786a85fd4092cd3a46"
  },
  {
    "url": "guide/index.html",
    "revision": "c828ce1ac1db16b9133f79c9fdc244d8"
  },
  {
    "url": "guide/page.html",
    "revision": "a63db146a9510d0a4b7f5d40a95891cc"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "a8bac0648a10f78f69055d678efdcc21"
  },
  {
    "url": "guide/Todo.html",
    "revision": "19406c4056f6bbfa36cbb484c327115d"
  },
  {
    "url": "index.html",
    "revision": "1f041d16b0626c90bd924998d8809ff2"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
