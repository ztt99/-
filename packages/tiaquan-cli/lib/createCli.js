import semver from "semver";
import { log } from "@tiequan/utils";
import { program } from "commander";

function preAction() {
  //process.version 需要大于或等于 14.0.0
  if (!semver.gte(process.version, "14.0.0")) {
    throw new Error("node 版本不正确");
  }
}

export const createCli = () => {
  program
    .name("tiequan")
    .usage("<command> [options]")
    .version("0.1")
    .option("-d , --debug", "是否开启debug", false)
    .hook("preAction", preAction);

  program.on("option:debug", () => {
    if (program.opts().debug) {
      log.info("debug", "launch debug mode");
    }
  });
  program.on("command:*", (name) => {
    log.warn(name);
  });
  return program;
};
