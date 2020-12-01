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
    "revision": "decebccf475a266a5004def6756130dd"
  },
  {
    "url": "Argo_Workflow.html",
    "revision": "ae381272457ded6d807b4df1d75866ae"
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
    "url": "assets/img/image-20200525100810390.6eab7d83.png",
    "revision": "6eab7d834c5155bdc2c163701dbd6fc6"
  },
  {
    "url": "assets/img/image-20200525183356337.42db40db.png",
    "revision": "42db40db9d06034c53adc3502bba040b"
  },
  {
    "url": "assets/img/image-20200525183459047.467d8763.png",
    "revision": "467d8763a8f8b8f671e2f0cec555368b"
  },
  {
    "url": "assets/img/image-20200526101255416.f8b71ef7.png",
    "revision": "f8b71ef79b63865930d6cd66c8e83fe7"
  },
  {
    "url": "assets/img/image-20200526173737738.749cdb1e.png",
    "revision": "749cdb1efe9004ce3476a2d524347c3b"
  },
  {
    "url": "assets/img/image-20200526174946632.f3dabfd3.png",
    "revision": "f3dabfd37b5248a14787b3c5c030a544"
  },
  {
    "url": "assets/img/image-20200526175324000.d103dd8e.png",
    "revision": "d103dd8e83ee5d4cdd52c2e935f76f13"
  },
  {
    "url": "assets/img/image-20200527103356698.28b79ca3.png",
    "revision": "28b79ca38fccca309ad6a17f0b3c3c7d"
  },
  {
    "url": "assets/img/image-20200527104025743.618b2e59.png",
    "revision": "618b2e59df04322e461d9e51cc9d0e1b"
  },
  {
    "url": "assets/img/image-20200527141936808.923cfb7d.png",
    "revision": "923cfb7d1e8424cbb7242812f1342b6e"
  },
  {
    "url": "assets/img/image-20200527142043419.b1c5776c.png",
    "revision": "b1c5776cd7dfbdaf7eb0019457719873"
  },
  {
    "url": "assets/img/image-20200527145129067.093f3a82.png",
    "revision": "093f3a82dcc9b2615b88a656c003371d"
  },
  {
    "url": "assets/img/image-20200527145506546.ab2ef333.png",
    "revision": "ab2ef333927badebe10e1eef7043cd6c"
  },
  {
    "url": "assets/img/image-20200527154735288.d58bfebd.png",
    "revision": "d58bfebd84ef9d2c66519312b25684b1"
  },
  {
    "url": "assets/img/image-20200527155443266.ed1e2be0.png",
    "revision": "ed1e2be0f354a67d798f77faf4b15c86"
  },
  {
    "url": "assets/img/image-20200527160916885.cfaaaa16.png",
    "revision": "cfaaaa169dfe2a7d1f565c543acb7443"
  },
  {
    "url": "assets/img/image-20200527173053897.f0b599b6.png",
    "revision": "f0b599b698178ba7e849afe4aa5e7d19"
  },
  {
    "url": "assets/img/image-20200528094604956.b4377982.png",
    "revision": "b4377982cc575d64f45e16393b35e57e"
  },
  {
    "url": "assets/img/image-20200528095147715.c8b1dc70.png",
    "revision": "c8b1dc7055410880d4ce33f3ea9fa19d"
  },
  {
    "url": "assets/img/image-20200528095254668.46de1ee6.png",
    "revision": "46de1ee636d0dfb7598e7f935abec05e"
  },
  {
    "url": "assets/img/image-20200528095939519.388bb296.png",
    "revision": "388bb29677924cc82327ac5e51cf658d"
  },
  {
    "url": "assets/img/image-20200528100312141.41f4023f.png",
    "revision": "41f4023f5b4702fc2cb1b5b8e2760367"
  },
  {
    "url": "assets/img/image-20200528100711927.83d91a76.png",
    "revision": "83d91a76426c86721bfd1102cc1e5f87"
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
    "url": "assets/img/streaming-flow.1acdb841.png",
    "revision": "1acdb841d036bec190db33dddcec8650"
  },
  {
    "url": "assets/js/1.6fc172ed.js",
    "revision": "1b28d0ff7bbf173efecf8c28cef7cc84"
  },
  {
    "url": "assets/js/10.eb48bdc7.js",
    "revision": "05c85e6119b2496d5224422bede04228"
  },
  {
    "url": "assets/js/11.31bd1d63.js",
    "revision": "4bc65ac0f0b2951446f5f232c7c03ccb"
  },
  {
    "url": "assets/js/12.9d61d6db.js",
    "revision": "fd9910388f0fb0f0ce4421797c2af355"
  },
  {
    "url": "assets/js/13.c5445f95.js",
    "revision": "e9757af0a147f774d656374646687f15"
  },
  {
    "url": "assets/js/14.73ba4ce6.js",
    "revision": "1f0d801bbc9d4713775911c701df45ae"
  },
  {
    "url": "assets/js/15.bdca7928.js",
    "revision": "d7c7af4a8bc01e91b6ad564bf11f8728"
  },
  {
    "url": "assets/js/16.bf1c650e.js",
    "revision": "a1921fd5f9f01c2574628333b43a4a24"
  },
  {
    "url": "assets/js/17.1910c1b6.js",
    "revision": "146558721c64d9f328ebf9aae497ecc8"
  },
  {
    "url": "assets/js/18.76b503f8.js",
    "revision": "f1963595c1280dfaf598680716c42f34"
  },
  {
    "url": "assets/js/3.145bfa2d.js",
    "revision": "9a6537a2da3f17913ca0a3920f4a6392"
  },
  {
    "url": "assets/js/4.70e156f6.js",
    "revision": "03aaa8995a4bd0a17b721447a0ed01f7"
  },
  {
    "url": "assets/js/5.6314a156.js",
    "revision": "aac5e01f0887c0108dbaa21f68f11b06"
  },
  {
    "url": "assets/js/6.05906ec6.js",
    "revision": "702b8f1a80b7c85fbf34e36f8029826e"
  },
  {
    "url": "assets/js/7.1f86b037.js",
    "revision": "52d5ce84314ff4154c2a19bb2003ece4"
  },
  {
    "url": "assets/js/8.5190719f.js",
    "revision": "9c319cf97f64b26e7539623d612b17c5"
  },
  {
    "url": "assets/js/9.83166baa.js",
    "revision": "6e8942586151656fc17eb0a4674baed7"
  },
  {
    "url": "assets/js/app.3e8cdc82.js",
    "revision": "02a28ff9fb81e705fc80600af3189697"
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
    "url": "big-data/Spark2.html",
    "revision": "5400201de230c70669f0b6f557035f71"
  },
  {
    "url": "categories/Argo/index.html",
    "revision": "e9f0c56d75881c7336d1a300ac17edaf"
  },
  {
    "url": "categories/DevOps/index.html",
    "revision": "75e1f299ebfde253af89b1d1cdf69a35"
  },
  {
    "url": "categories/Docker/index.html",
    "revision": "7c3ac77953bcbbf98a59e1c60771d713"
  },
  {
    "url": "categories/index.html",
    "revision": "059414702685fce2b45150b0e3f0ac22"
  },
  {
    "url": "categories/Spark/index.html",
    "revision": "dc92147eedffa54315141662e93a3f23"
  },
  {
    "url": "cloud-native/docker/docker_basics.html",
    "revision": "f38f868cd71dd0c593e28623f08c19dd"
  },
  {
    "url": "index.html",
    "revision": "cfb7dab9ca96b8ffb72739bb2ba4e722"
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
    "revision": "394aeaa9a75d91458afe627c7012c32b"
  },
  {
    "url": "tag/Argo/index.html",
    "revision": "99ecf4a9ef051949f8b052d96154a6e8"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "5ef8d881eaafe7d16fc965561b8cb4e9"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "c06ca088934ca2c109d4285a8905175d"
  },
  {
    "url": "tag/index.html",
    "revision": "2b743da92c590a484d8236a83f1cae1c"
  },
  {
    "url": "tag/Spark2/index.html",
    "revision": "7deee3c2537699507dd0c0007e0aba2b"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "b7207cc3af964653d04ffe686212fafe"
  },
  {
    "url": "timeline/index.html",
    "revision": "46a8f6cd53d5943412ca498af47d41ad"
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
