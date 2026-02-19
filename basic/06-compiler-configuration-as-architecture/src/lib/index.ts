/**
 * Public surface area for the local fixture "fake-pkg".
 *
 * The sibling package.json exports map only exposes this entrypoint.
 */

export function doSomethingPublic(): string {
    return 'public response';
}
