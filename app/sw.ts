import {precacheAndRoute, self} from '@tinijs/pwa';

/*
 * Precaching (the glob patterns are defined in "../build-sw.js")
 */
precacheAndRoute(self.__WB_MANIFEST);

/*
 * Custom (advanced use cases)
 */
