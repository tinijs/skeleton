import {precacheAndRoute, self} from '@tinijs/pwa';

// 0. Precaching (change the glob patterns in "../build-sw.js")
precacheAndRoute(self.__WB_MANIFEST);

// 1. Custom (advanced usecases)
// ...
