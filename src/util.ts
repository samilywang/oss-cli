export const parseFilenameHash = (filenameWithoutExt: string, md5Separator = '.') => {
  if (filenameWithoutExt.lastIndexOf(md5Separator) < 0) {
    return {
      filename: filenameWithoutExt,
      hash: '',
    };
  }

  const filename = filenameWithoutExt.slice(0, filenameWithoutExt.lastIndexOf(md5Separator));
  const hash = filenameWithoutExt.slice(filenameWithoutExt.lastIndexOf(md5Separator) + 1);
  return {
    filename,
    hash,
  };
};
