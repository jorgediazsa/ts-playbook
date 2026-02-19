/**
 * EXERCISE 4: Exhaustiveness Checking (`assertNever`)
 * 
 * When dealing with Discriminated Unions, we must ensure every case is handled.
 * If someone adds a `CANCELLED` state tomorrow, `getUIState` from Ex03 would silently 
 * fail or return `undefined`, causing huge bugs!
 * 
 * GOAL:
 * 1. Read `assertNever`. It accepts a `never` type and throws.
 * 2. Look at the `PaymentMethod` union and the `getProcessingFee` function.
 * 3. Notice that we forgot to handle the 'CRYPTO' case!
 * 4. Your task is to implement the missing `CRYPTO` case so the `assertNever` 
 *    guard stops failing the type-check.
 */

export type PaymentMethod =
    | { type: 'CREDIT_CARD'; number: string }
    | { type: 'PAYPAL'; email: string }
    | { type: 'CRYPTO'; wallet: string };

// This enforces that the value being passed has been narrowed down to NO possibilities.
export function assertNever(value: never): never {
    throw new Error(`Unhandled discriminated union case: ${JSON.stringify(value)}`);
}

export function getProcessingFee(payment: PaymentMethod): number {
    switch (payment.type) {
        case 'CREDIT_CARD':
            return 0.03;
        case 'PAYPAL':
            return 0.04;
        // TODO: Add the 'CRYPTO' case here returning `0.01` to fix the compiler error below.
    }

    // FIX ME: Because 'CRYPTO' isn't handled above, `payment` still has the type `{ type: 'CRYPTO' }` here.
    // It cannot be passed into `assertNever`, so it throws a critical compiler error!
    return assertNever(payment);
}
