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
    "revision": "dbe15ddc1e393dd22a353e6456aad442"
  },
  {
    "url": "Argo_Workflow.html",
    "revision": "20d0bbb38167e9d9df38694a2de31205"
  },
  {
    "url": "assets/css/0.styles.06e3185a.css",
    "revision": "f8c276d7d5300ff366e6b1fce2e31402"
  },
  {
    "url": "assets/img/bg.a2d1cf1a.svg",
    "revision": "a2d1cf1ad2becdd79823541dae101fcd"
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
    "url": "assets/js/1.e8bc09c6.js",
    "revision": "65e0d53f29807554dc4112aaea193d11"
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
    "url": "assets/js/12.6d0b546a.js",
    "revision": "20f639cb9b7394c22b755b0ce043a870"
  },
  {
    "url": "assets/js/13.8489a32d.js",
    "revision": "e09a2b4ac8acf5f31a0d1d5b015a2311"
  },
  {
    "url": "assets/js/14.1b3977aa.js",
    "revision": "21e5caaa8ad084a470575d26c0989e8f"
  },
  {
    "url": "assets/js/15.63b0aba9.js",
    "revision": "101cd72d9f3e06cb1e4b3d0978fd2b8a"
  },
  {
    "url": "assets/js/3.f87dea88.js",
    "revision": "3262593db1986be91d8a64078cedd4a0"
  },
  {
    "url": "assets/js/4.cf45ce49.js",
    "revision": "75613ea1c114dcd4bb0ba8aa5142d2d3"
  },
  {
    "url": "assets/js/5.34c6c211.js",
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
    "url": "assets/js/app.a67fab7b.js",
    "revision": "783a1085c7f876fc23cba36c96b627d5"
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
    "revision": "1aa64ac511624c1806c525610218ac15"
  },
  {
    "url": "categories/DevOps/index.html",
    "revision": "9fe0767accfaedd9cf45542d3dbc03e3"
  },
  {
    "url": "categories/index.html",
    "revision": "700bae1543eba4d6d68ecd022cc85650"
  },
  {
    "url": "index.html",
    "revision": "9222953b43a1960167b7db1948fa184e"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0098b6a05157f24df2b894b7afeeeab2"
  },
  {
    "url": "live2d/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "logo.png",
    "revision": "c9be9cd4cb9edab243197674da8d5459"
  },
  {
    "url": "tag/Argo/index.html",
    "revision": "55a2226269cc1fb4a70d39e015153221"
  },
  {
    "url": "tag/index.html",
    "revision": "cd21fec419e30ce3494d5909193be1a9"
  },
  {
    "url": "timeline/index.html",
    "revision": "af93baecae08164c9acd77662425b37c"
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
