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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "754322983031ff3696776209812f378d"
  },
  {
    "url": "api/index.html",
    "revision": "118768d2ace2c73e227b6a66c7827288"
  },
  {
    "url": "assets/css/0.styles.9b1de26c.css",
    "revision": "300c00231cd529fc25f7e849f381ae61"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ca20199a.js",
    "revision": "457806681ec03af504032f4657d6e3c8"
  },
  {
    "url": "assets/js/2.da912442.js",
    "revision": "637eebfb2d652fe074e54e32accd495d"
  },
  {
    "url": "assets/js/3.c3a3cc1c.js",
    "revision": "4fe42f602c52a2f9cd8a96bd4705112a"
  },
  {
    "url": "assets/js/4.83dcbf2d.js",
    "revision": "063b36ae1b414a25487974b93036b7cd"
  },
  {
    "url": "assets/js/5.52d90df4.js",
    "revision": "f65cb5d6b261906b5e8668dab03ebde5"
  },
  {
    "url": "assets/js/6.8122c1c8.js",
    "revision": "3264afed40bf00b924f5f805bd994f70"
  },
  {
    "url": "assets/js/7.85f13cc8.js",
    "revision": "a8554948e8ff8ea8d7b8092d266aaae2"
  },
  {
    "url": "assets/js/8.d4c7ca72.js",
    "revision": "86123c49451e83262b51b6e41d712d7a"
  },
  {
    "url": "assets/js/9.0f38a8bf.js",
    "revision": "f30286808e53ed06d67572e1980ff444"
  },
  {
    "url": "assets/js/app.978bed0b.js",
    "revision": "7efea975703ec89eadce9d833598be87"
  },
  {
    "url": "guide/index.html",
    "revision": "21739efba7ee51cfbf37eca675c5aafc"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "90eb8e97d52af71c4972d2cd65962b4d"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
