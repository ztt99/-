import Command from "@tiequan/command";
import createTemplate from "./createTemplate.js";
import downloadTemplate from "./downloadTemplate.js";
import installTemplate from "./installTemplate.js";
class InitCommand extends Command {
  get command() {
    return "init [name]";
  }
  get description() {
    return "init project";
  }
  get options() {
    return [
      // 在这里将所有交互式的命令都添加为选项，可以进行jest测试
      ["-f , --force", "是否强制更新", false],
    ];
  }
  async action(name, args) {
    // 创建模版，找到模版的类型，输入模版的name，找到模版的npm信息
    const selectTemplate = await createTemplate(name, args);
    // 下载模版到缓存目录
    await downloadTemplate(selectTemplate);
    // console.log(name, args);
    // 下载到本地
    await installTemplate(selectTemplate, args);
  }
}

export default (instanse) => {
  new InitCommand(instanse);
};
