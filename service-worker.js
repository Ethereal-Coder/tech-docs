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
    "revision": "6dcc46a428b18c5c36e2f8437be0f601"
  },
  {
    "url": "Argo_Workflow.html",
    "revision": "d2d074c977d6ce2cdac303848ba8e0f5"
  },
  {
    "url": "assets/css/0.styles.5e647402.css",
    "revision": "b11fd613eff880f99469fb44a1ed1dc2"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/image-20200415163042515.3fd1575d.png",
    "revision": "3fd1575d1d661a7be8d39d64534d48ef"
  },
  {
    "url": "assets/img/image-20200415163827541.f9709837.png",
    "revision": "f970983796d70cc486c199efcc334dd6"
  },
  {
    "url": "assets/js/1.6fc172ed.js",
    "revision": "1b28d0ff7bbf173efecf8c28cef7cc84"
  },
  {
    "url": "assets/js/10.3ba13620.js",
    "revision": "e5132db631fa50050aee4b9e788c31e2"
  },
  {
    "url": "assets/js/11.352efddf.js",
    "revision": "c212b097a37eeeda26de660733257310"
  },
  {
    "url": "assets/js/12.7ea2c620.js",
    "revision": "d67acbc47b67133bfaee77236b77fbe4"
  },
  {
    "url": "assets/js/13.8489a32d.js",
    "revision": "e09a2b4ac8acf5f31a0d1d5b015a2311"
  },
  {
    "url": "assets/js/14.3e4cc1c9.js",
    "revision": "ad7c64d89cbb7bc060c4462d73c164f0"
  },
  {
    "url": "assets/js/15.63b0aba9.js",
    "revision": "101cd72d9f3e06cb1e4b3d0978fd2b8a"
  },
  {
    "url": "assets/js/3.5516c88a.js",
    "revision": "f94f16dded85ade93217ccbd2e92010c"
  },
  {
    "url": "assets/js/4.38765461.js",
    "revision": "75613ea1c114dcd4bb0ba8aa5142d2d3"
  },
  {
    "url": "assets/js/5.20afb687.js",
    "revision": "3cea53867a2d8d07c7980e0dd6d004a9"
  },
  {
    "url": "assets/js/6.2787c054.js",
    "revision": "d48a56467916153a8a81b1fa2f61c1ef"
  },
  {
    "url": "assets/js/7.a033ae95.js",
    "revision": "c7e6341e42282df050b74ea8ad0d2c35"
  },
  {
    "url": "assets/js/8.d60681bb.js",
    "revision": "a608647d3359cafd452575e6ab7a759c"
  },
  {
    "url": "assets/js/9.81cc0fea.js",
    "revision": "5ea573e587c54d98b38475ca8cb1135c"
  },
  {
    "url": "assets/js/app.5803eb0d.js",
    "revision": "a3ed0ca2c8aff7e84e07dcc72d67e414"
  },
  {
    "url": "avatar.png",
    "revision": "00b3881a1a216b98d9cac7f6dcce4d60"
  },
  {
    "url": "bg.jpg",
    "revision": "cfa2e1273061d50c1d314675e5328d71"
  },
  {
    "url": "bg.png",
    "revision": "4e563f8d1cec36d4fe7dc371f445c5b3"
  },
  {
    "url": "categories/Argo/index.html",
    "revision": "03d086736b82bb87ba4de4795e9347e6"
  },
  {
    "url": "categories/DevOps/index.html",
    "revision": "867d4c168dc4b760230ff22c798149fa"
  },
  {
    "url": "categories/index.html",
    "revision": "30b0a11e1ade99a9c3c7a55b5ceb6f88"
  },
  {
    "url": "go.png",
    "revision": "25b723d25a94b1ee34d7c80cdb313adc"
  },
  {
    "url": "Golang-Advantage.jpg",
    "revision": "3d7414a878f27daec955387611487052"
  },
  {
    "url": "goo.png",
    "revision": "a3336b4c3a5e9a1d8e2f32be8dab2db5"
  },
  {
    "url": "gooo.png",
    "revision": "51760db1844908d4e03806cca519d133"
  },
  {
    "url": "index.html",
    "revision": "41d1a3da1e86c6460184472bebe5df28"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "a46aba34b3ce7a33aca347ae31606056"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "56ff69b411abfc80cb68d0b1267959c5"
  },
  {
    "url": "logo.png",
    "revision": "c9be9cd4cb9edab243197674da8d5459"
  },
  {
    "url": "tag/Argo/index.html",
    "revision": "a0e0870858edd270eac69b9ae0633ff4"
  },
  {
    "url": "tag/index.html",
    "revision": "ec5625e9bc300e5c75d3f3bafd2b37ca"
  },
  {
    "url": "timeline/index.html",
    "revision": "7056fd8d899e590293e109ff7ff5df5d"
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
