import inquirer from "inquirer";

async function make({
  name = "name",
  choices,
  defaultValue,
  message,
  type = "list",
  require = true,
  mask = "*",
  validate,
  pageSize,
  loop,
}) {
  const opts = {
    name,
    default: defaultValue,
    message,
    type,
    require,
    mask,
    validate,
    pageSize,
    loop,
  };
  if (type === "list") {
    opts.choices = choices;
  }
  return await inquirer.prompt(opts).then((answer) => {
    return answer.name;
  });
}

export async function makeList(params) {
  return await make(params);
}

export async function makeInput(params) {
  return await make({ type: "input", params });
}
