import './custom-mathjax-config.js';
import {startup} from '@mathjax/src/components/js/startup/init.js';
import {Loader} from '@mathjax/src/js/components/loader.js';
import '@mathjax/src/components/js/core/core.js';
import '@mathjax/src/components/js/input/tex-base/tex-base.js';
import '@mathjax/src/components/js/input/tex/extensions/ams/ams.js';
import '@mathjax/src/components/js/input/tex/extensions/boldsymbol/boldsymbol.js';
import {loadFont} from '@mathjax/src/components/js/output/svg/svg.js';

Loader.preLoaded(
  'loader', 'startup', 'core', 'input/tex-base', '[tex]/ams', '[tex]/boldsymbol',
  'output/svg'
);

Loader.saveVersion('mathjax.js');
loadFont(startup, true);
