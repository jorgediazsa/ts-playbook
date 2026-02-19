import { describe, it } from 'vitest';

describe('Exercise 01: Ambient Types', () => {

    it('structural only - runtime will fail in vitest due to node_modules resolution hack, purely typecheck exercise', () => {
        // We don't want to actually link node_modules for a fixture here, 
        // we just want `tsc` to see the module augmentations.
    });

});
