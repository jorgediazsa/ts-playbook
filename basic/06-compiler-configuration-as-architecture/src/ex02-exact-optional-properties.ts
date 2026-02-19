/**
 * EXERCISE 2: `exactOptionalPropertyTypes`
 * 
 * In standard TypeScript, `{ age?: number }` means `age` can be omitted OR
 * explicitly set to `undefined` (e.g. `{ age: undefined }`).
 * 
 * When `exactOptionalPropertyTypes` is ON, `{ age?: number }` means it can ONLY
 * be omitted. If you want to allow explicit `undefined`, you must write 
 * `{ age?: number | undefined }`.
 * 
 * This seemingly small change resolves massive bugs with `Object.keys()`, `JSON.stringify()`, 
 * and database ORMs that treat missing keys differently than `undefined` values.
 * 
 * GOAL:
 * 1. Read the `UpdateUserPayload`. It is used in a `PATCH` request.
 * 2. If a user wants to clear their bio, they send `bio: null`.
 * 3. Look at `updateUserCache`. The cache function accepts `{ name: "Bob", bio: undefined }`.
 * 4. Notice the type errors when you try to pass explicitly `undefined` properties 
 *    to `UpdateUserPayload`. Fix `UpdateUserPayload` so the tests and type-checks pass.
 */

// TODO: Fix this interface. 
// A PATCH payload might omit a key (meaning do not update it).
// Or it might explicitly send `null` to clear it.
// Or it might explicitly send `undefined` if the frontend form library is being lazy.
// `exactOptionalPropertyTypes` prevents `age: undefined` unless you explicitly allow it!
export interface UpdateUserPayload {
    name?: string;
    age?: number;
    bio?: string | null;
}

// ------------------------------------------------------------------

export function buildPatchPayload(
    newName?: string,
    newAge?: number,
    clearBio?: boolean
): UpdateUserPayload {

    // If `exactOptionalPropertyTypes` is on, the compiler will error here 
    // because `newName` is `string | undefined`, but `name?: string` only accepts `string`!
    const payload: UpdateUserPayload = {
        name: newName, // FIX ME (by updating UpdateUserPayload above)
        age: newAge,   // FIX ME (by updating UpdateUserPayload above)
    };

    if (clearBio) {
        payload.bio = null;
    }

    return payload;
}
