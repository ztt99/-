import { homedir } from "os";
import { resolve } from "path";
import { log, makeList, makeInput, getLatestVersion } from "@tiequan/utils";

const ADD_TEMPLATE = [
  {
    name: "模版1",
    npmName: "tiequan-cli",
    version: "1.0.1",
  },
];

const ADD_TYPE = [
  {
    name: "项目",
    value: "project",
  },
  {
    name: "页面",
    value: "page",
  },
];

const TEMP_HOME = ".tq";

const getAddType = async () => {
  return await makeList({
    choices: ADD_TYPE,
    message: "请选择类型",
    defaultValue: "project",
  });
};

const getAddName = async () => {
  return await makeInput({
    message: "请输入项目名",
  });
};
/**
 * 项目模版是在npm上获取的，因此要去拿npm上最新的模版
 * @returns
 */
const getAddTemplate = async () => {
  const tmp = await makeList({
    choices: ADD_TEMPLATE,
    defaultValue: "",
  });

  const version = await getLatestVersion();

  const currentTemplate = ADD_TEMPLATE.find((item) => item.name === tmp);

  currentTemplate.version = version;
  return currentTemplate;
};
// 缓存的目录
const makeTargetPath = () => {
  return resolve(homedir(), TEMP_HOME, "addTemplate");
};

const createTemplate = async (name, opts) => {
  const addType = await getAddType();
  console.log(addType, "addType");
  if (addType === "project") {
    const name = await getAddName();

    const template = await getAddTemplate();

    // 创建download的目录
    const targetPath = makeTargetPath();

    return {
      type: addType,
      name,
      template,
      targetPath,
    };
  }
};

export default createTemplate;
