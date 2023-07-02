class Command {
  constructor(instanse) {
    if (!instanse) throw new Error("instanse not be bull");
    this.program = instanse;

    const cmd = this.program.command(this.command);
    cmd.description(this.description);
    if (this.options.length) {
      this.options.forEach((option) => {
        cmd.option(...option);
      });
    }
    cmd.hook("preAction", () => {
      this.preAction();
    });
    cmd.hook("postAction", () => {
      this.postAction();
    });
    cmd.action((name, opts) => {
      this.action(name, opts);
    });
  }
  get command() {
    throw Error("command");
  }
  get description() {
    throw Error("description");
  }

  get options() {
    return [];
  }

  action() {
    throw Error("action");
  }
  preAction() {
    console.log("preAction");
  }
  postAction() {
    console.log("postAction");
  }
}

export default Command;
