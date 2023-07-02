import log from "npmlog";
// 当level为verbose时，也会打印log.verbose的值，是为了debug显示调试信息

if (process.argv.includes("--debug")) {
  log.level = "verbose";
} else {
  log.level = "info";
}
log.heading = "tiequan";
// 增加自定义打印状态
log.addLevel("zt", 5000, { fg: "green", bold: true });
log.verbose("调试", "调试中");

export default log;
