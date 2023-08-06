import axios from "axios";
import ora from "ora";

async function getNpmInfo() {
  const spinner = ora("正在获取最新版本...").start();
  try {
    const templateVersion = await axios.get(
      "https://registry.npmjs.com/tiequan-cli"
    );
    spinner.stop();
    if (templateVersion.status === 200) {
      return (
        templateVersion.data["dist-tags"] &&
        templateVersion.data["dist-tags"].latest
      );
    }
  } catch {}
  spinner.stop();
}
async function getLatestVersion() {
  return await getNpmInfo();
}

export { getLatestVersion };
