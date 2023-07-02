#!/usr/bin/env node

import improtLocal from "import-local";
import { log } from "@tiequan/utils";
import entry from "../lib/index.js";
import { fileURLToPath } from "url";

log.info("tq-cli", "使用本地版本");

// esm中使用__filename
const __filename = fileURLToPath(import.meta.url);
if (improtLocal(__filename)) {
  log.info("tq-cli", "使用本地版本");
} else {
  entry(process.argv.slice(2));
}

// console.log("tq", __filename, __dirname);
