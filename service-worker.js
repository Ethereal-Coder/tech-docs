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
    "revision": "b8247b0f207d78b1c6dd0e471d5af890"
  },
  {
    "url": "Argo_Workflow.html",
    "revision": "7b399cf73948496c3e2ede145a029b97"
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
    "url": "assets/img/image-20201129142650210.ace6571d.png",
    "revision": "ace6571d016f30b8fe3fd9e83721bdc4"
  },
  {
    "url": "assets/img/image-20201129144024320.de397611.png",
    "revision": "de39761191ff8003d44ed337628f3de5"
  },
  {
    "url": "assets/img/image-20201129144147137.15dd5ceb.png",
    "revision": "15dd5cebf2c2bc97869cac0952500147"
  },
  {
    "url": "assets/img/image-20201129144448504.988a8a85.png",
    "revision": "988a8a851a8f6e08c33e8c191743d0e5"
  },
  {
    "url": "assets/img/image-20201129144557215.aa1a88fd.png",
    "revision": "aa1a88fd0cc29cace55c917fe519a512"
  },
  {
    "url": "assets/img/image-20201129144632088.f2b8f086.png",
    "revision": "f2b8f086b7198c3533813197bff19a66"
  },
  {
    "url": "assets/img/image-20201129150608883.381f7a85.png",
    "revision": "381f7a85432548e9358de8f7f804a451"
  },
  {
    "url": "assets/js/1.6fc172ed.js",
    "revision": "1b28d0ff7bbf173efecf8c28cef7cc84"
  },
  {
    "url": "assets/js/10.507ecdd7.js",
    "revision": "df7069354ef6d6d9e9191115912d5973"
  },
  {
    "url": "assets/js/11.54689a3b.js",
    "revision": "402a44c298663346ea84bcb8c487c1d9"
  },
  {
    "url": "assets/js/12.341bf5d4.js",
    "revision": "9341b132b3e607362f3052e965e5f070"
  },
  {
    "url": "assets/js/13.01360c7d.js",
    "revision": "114ede9ed9aad9927537e1b1545cd01e"
  },
  {
    "url": "assets/js/14.8fe831d4.js",
    "revision": "4a8266529fca9bf931acd3d4de6be455"
  },
  {
    "url": "assets/js/15.2345da93.js",
    "revision": "eba4fdad68587c769a130bb3245519de"
  },
  {
    "url": "assets/js/16.23d9a5fb.js",
    "revision": "375799bfdc98b5e10dc8497789957eb4"
  },
  {
    "url": "assets/js/17.0cd6be9a.js",
    "revision": "a48f622100c2e977d1b89f2361d1d2ca"
  },
  {
    "url": "assets/js/3.b3c7cbef.js",
    "revision": "1fe20aaccfcc733c0922014fa39e47f7"
  },
  {
    "url": "assets/js/4.ba68e02b.js",
    "revision": "d1e08cabd3120a06594856bc4135530a"
  },
  {
    "url": "assets/js/5.f1d4b2e7.js",
    "revision": "29ee9989fb62aa61ea9a596defda88d0"
  },
  {
    "url": "assets/js/6.3ce1963f.js",
    "revision": "0a78a6637dc99f3cbe4a8713bb3126b9"
  },
  {
    "url": "assets/js/7.01f549f7.js",
    "revision": "f3df5fae8957274a665cd2e682ccf98a"
  },
  {
    "url": "assets/js/8.1deefecf.js",
    "revision": "975a99aebb5457f3d0266220fc795e32"
  },
  {
    "url": "assets/js/9.67de81f8.js",
    "revision": "961b813bbaf11eddc98da2e9aa2d4bda"
  },
  {
    "url": "assets/js/app.cf3c5dfd.js",
    "revision": "1d6989175e074cd1b3bf8626f470da44"
  },
  {
    "url": "avatar.png",
    "revision": "51760db1844908d4e03806cca519d133"
  },
  {
    "url": "banner-full-screen.png",
    "revision": "a6d9776e29d816ef118b924ad261c3d0"
  },
  {
    "url": "banner-normal.png",
    "revision": "d30bf39a19bf8cbc4d02c48e5045fbf9"
  },
  {
    "url": "categories/Argo/index.html",
    "revision": "8700f1bdf759ab2f5bd234bf9d458d0a"
  },
  {
    "url": "categories/DevOps/index.html",
    "revision": "b3d15a8065bdafc9a62f5c1fb93e57d7"
  },
  {
    "url": "categories/Docker/index.html",
    "revision": "2ebfd75e7d5e284c9813d4d17c6c879c"
  },
  {
    "url": "categories/index.html",
    "revision": "220c71470cf5cf58bac5f6620bad8aa6"
  },
  {
    "url": "cloud-native/docker/docker_basics.html",
    "revision": "e6a92d0a42105fa5b5dc341e7d9af947"
  },
  {
    "url": "index.html",
    "revision": "ccc7ac5848284ca6afaa0a587c883383"
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
    "revision": "a3336b4c3a5e9a1d8e2f32be8dab2db5"
  },
  {
    "url": "others/Vuepress_GitHubActions.html",
    "revision": "024b3e921eb7f1bb8a6e7165a964b56d"
  },
  {
    "url": "tag/Argo/index.html",
    "revision": "aaa18ba0a8d219ad4948242108b304ae"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "afe8fa135a7fa4cb83875582aec7bb7d"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "02a8f5dd8b57a1d0349d02ca57e4960b"
  },
  {
    "url": "tag/index.html",
    "revision": "a67f457279b9c29d81f6ae316da0dbc8"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "378661e61c9e909fc1b6a51694b66289"
  },
  {
    "url": "timeline/index.html",
    "revision": "3c87317fbe82249dc5382a3b557822c6"
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
