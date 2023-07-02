import Command from "@tiequan/command";

class InitCommand extends Command {
  get command() {
    return "init [name]";
  }
  get description() {
    return "init project";
  }
  get options() {
    return [["-f , --force", "是否强制更新", false]];
  }
  action(name, args) {
    console.log(name, args);
  }
}

export default (instanse) => {
  new InitCommand(instanse);
};
