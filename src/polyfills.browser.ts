import 'core-js/es';
import 'core-js/es/reflect';
import 'core-js/stable/reflect';
import 'core-js/features/reflect';
require('zone.js/dist/zone');

if (process.env.ENV === 'production') {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
