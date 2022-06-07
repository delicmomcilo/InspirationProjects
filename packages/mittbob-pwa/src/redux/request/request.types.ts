export type AllowedMethods = 'GET' | 'PATCH' | 'POST' | 'DELETE' | 'PUT'

export type RequestHeaders = { [key: string]: string | number | unknown};
export type Queries = RequestHeaders;


type UploadProperty = string;
type FileName = string;
type FilesArray = Array<{ property: UploadProperty, blob: Blob, name: FileName}>
export type RequestResponse = { response: Response; json: any }
export type UploadPayload = { [key: string]: string | Blob } & { files?: FilesArray };

export interface MethodConfig {
  url: string;
  headers?: RequestHeaders;
  removeContentTypeJson?: boolean;
  blobReturnType?: boolean;
  data?: unknown
}

export interface UploadConfig {
  url: string,
  headers?: RequestHeaders
  data: UploadPayload
}

export interface DownloadConfig {
  url: string,
  headers?: RequestHeaders
}