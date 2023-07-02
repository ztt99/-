import { log } from "@tiequan/utils";

process.on("uncaughtException", (e) => {
  log.error(e.message);
});

process.on("unhandledRejection", (e) => {
  log.error(e.message);
});
