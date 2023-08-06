import { pathExistsSync } from "path-exists";
import fse from "fs-extra";
import { join } from "path";
import { log } from "@tiequan/utils";

export default function installTemplate(selectTemplate, opts) {
  const { force = false } = opts;
  const { targetPath, name, template } = selectTemplate;
  const rootDir = process.cwd();
  //确保目录存在，如果不存在，那么创建
  fse.ensureDirSync(targetPath);
  // 要下载的目录
  const installDir = join(rootDir, name);
  // console.log(installDir, targetPath, name, template);
  if (!pathExistsSync(installDir) || force) {
    fse.removeSync(installDir);
    copyFile(targetPath, name, template, rootDir);
  } else {
    log.error("当前目录存在");
  }
}

function getCacheFilePath(targetPath, template) {
  return join(targetPath, "node_modules", template.npmName);
}

function copyFile(targetPath, name, template, rootDir) {
  const originFile = getCacheFilePath(targetPath, template);
  // 读取文件
  const fileList = fse.readdirSync(originFile);
  log.info(fileList, "fileList");
  fileList.forEach((file) =>
    // 使用copyFileSync报错，因为copyFileSync是拷贝文件，这个file包含文件夹
    fse.copySync(`${originFile}/${file}`, `${rootDir}/${name}/${file}`)
  );
}
