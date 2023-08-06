import path from "path";
import { execa } from "execa";

const CLI = path.join(__dirname, "../bin/cli.js");
console.log(CLI);
const bin = () => (...args) => execa(CLI, args);

test("run cli", async () => {
  const { stderr } = await bin()("init");
  console.log(stderr);
});
