import InitCommand from "@tiequan/init";
import { createCli } from "./createCli.js";

export default function entry(argv) {
  // 添加命令
  const program = createCli();
  InitCommand(program);

  // 解析
  program.parse(process.argv);
}
