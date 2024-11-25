/**
 * https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#discriminating-unions
 *
 * Discriminating Union
 *
 * Allows us to have specific properties for each type
 * - Eliminates optional properties ?
 * - Strong cohesion
 * - Easy to understand
 */

type FailedFileOperation = {
    status: 'failed',
    errMessage: string, // error message only for failed operation <- specific properties
}

type SuccessFileOperation = {
    status: 'success',
    fileData: string // file data only for success operation <- specific properties
}

type UploadingFileOperation = {
    status: 'loading',
    isLoading: true, // loading only for uploading operation <- specific properties
}

type FileOperation = FailedFileOperation | SuccessFileOperation | UploadingFileOperation;