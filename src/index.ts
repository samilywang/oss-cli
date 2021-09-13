export interface OssCliOptions {
  // 上传oss的文件夹路径
  prefix?: string;
  // 无脑上传, 跳过所有检查, 直接所有文件上传
  force?: boolean;
  // 同名同Hash值的文件是否跳过上传
  skipUploadFileWithSameHash?: boolean;
  // 是否删除旧版本文件
  delOldVersions?: boolean;
  // 是否打印日志
  noLogOutput?: boolean;
}

export const defaultOssCliOptions: OssCliOptions = {
  prefix: '',
  force: false,
  skipUploadFileWithSameHash: false,
  delOldVersions: true,
  noLogOutput: false,
};
