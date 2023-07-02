import { program } from "commander";
import InitCommand from "@tiequan/init";
import semver from "semver";

function preAction() {
  //process.version 需要大于或等于 14.0.0
  if (!semver.gte(process.version, "14.0.0")) {
    throw new Error("node 版本不正确");
  }
}
export default function entry(argv) {
  // 添加命令
  program
    .name("tiequan")
    .usage("<command> [options]")
    .version("0.1")
    .option("-d , --debug", "是否开启debug", false)
    .hook("preAction", preAction);

  InitCommand(program);

  // 解析
  program.parse(process.argv);
}

process.on("uncaughtException", (e) => {
  console.log(e.message);
});
