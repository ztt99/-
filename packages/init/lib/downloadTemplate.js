import { join } from "path";
import { pathExistsSync } from "path-exists";
import { mkdirpSync } from "fs-extra";
import ora from "ora";
import { execa } from "execa";
import { log } from "@tiequan/utils";

function getCacheDir(targetPath) {
  return join(targetPath, "node_modules");
}

function makeCacheDir(targetPath) {
  const cache = getCacheDir(targetPath);
  //判断路径是否存在
  if (!pathExistsSync(cache)) {
    // 如果这个路径下的不存在，那就创建
    mkdirpSync(cache);
  }
}

async function downloadAddTemplate(targetPath, template) {
  console.log(template);
  const { npmName, version } = template;
  const installCommand = "npm";
  const installArgs = ["install", `${npmName}@${version}`];

  const cwd = targetPath;
  log.warn(cwd);
  // await execa(installCommand, installArgs, { cwd });
}
export default async function downloadTemplate(selectTemplate) {
  const { targetPath, template } = selectTemplate;

  makeCacheDir(targetPath);
  const spinner = ora("正在下载模版...").start();
  try {
    await downloadAddTemplate(targetPath, template);
    spinner.stop();
  } catch {}
  spinner.stop();
}
