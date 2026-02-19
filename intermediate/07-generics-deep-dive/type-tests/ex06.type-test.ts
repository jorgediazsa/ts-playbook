import { Functor } from '../src/ex06-hkt-simulation';

// @ts-expect-error - If 'Promise' isn't added to HKTMap, this interface fails
const pf: Functor<'Promise'> = {
    map: (val, fn) => val.then(fn)
};
