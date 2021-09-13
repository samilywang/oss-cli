import * as AliOss from 'ali-oss';
import { accessSync, constants } from 'fs';
import * as path from 'path';
import { OssCliOptions } from '..';
import { parseFilenameHash } from '../util';

export interface AliOssUploadOption {
  localPath: string;
  uploadPath: string;
  md5Separator: string;
  ossCliOptions: OssCliOptions;
  putObjectOptions?: AliOss.PutObjectOptions;
}

// todo: replace fs sync apis with fs promise apis when nodejs move lts version to 16+
export class AliOssClient {
  client: AliOss;

  constructor(options: AliOss.Options) {
    this.client = new AliOss(options);
  }

  async uploadFile({
    localPath,
    uploadPath,
    md5Separator = '.',
    ossCliOptions,
    putObjectOptions = {},
  }: AliOssUploadOption) {
    accessSync(localPath, constants.R_OK);
    const { base, ext } = path.parse(localPath);
    const { filename, hash } = parseFilenameHash(base);

    return this.client.put(uploadPath, localPath, putObjectOptions);
  }

  uploadDir(options: AliOssUploadOption) {}

  deleteFile() {}
}
