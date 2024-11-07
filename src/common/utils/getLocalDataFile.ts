import path from 'path';
import fs from 'fs';

export default (): string => {
  let localDataFile: any = process.env.HOME;
  if (!localDataFile) {
    localDataFile = process.env.LOCALAPPDATA;
  }
  const qikoPath = path.join(localDataFile, 'qiko');
  if (!fs.existsSync(qikoPath)) {
    fs.mkdirSync(qikoPath);
  }
  return qikoPath;
};
