import { executeCallback, runAndReturnUndefined } from '../src/ex03-void-vs-undefined';

// executeCallback MUST accept callbacks whose return value is ignored.
// Once fixed, this should compile.
executeCallback(() => 123);
executeCallback(() => ({ ok: true }));

// runAndReturnUndefined MUST strictly enforce undefined.
runAndReturnUndefined(() => undefined);

// @ts-expect-error - must reject non-undefined returns
runAndReturnUndefined(() => 'nope');

// @ts-expect-error - must reject non-undefined returns even if falsy
runAndReturnUndefined(() => 0 as unknown as undefined);
