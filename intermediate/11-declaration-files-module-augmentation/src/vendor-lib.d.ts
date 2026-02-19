// TODO: Write ambient declarations for 'vendor-lib' here to satisfy the compiler.
// It needs to export `createId: () => string`
// It needs to export `parseData: (data: string) => { payload: string, success: boolean } | null`

// FIX ME: Remove this ambient definition and replace it with proper exports
declare module "vendor-lib" {
    export const anything: any;
}
