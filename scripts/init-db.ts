import inquirer from "inquirer";
import * as Name from "w3name";
import chalk from "chalk";
import ora from "ora";

(async () => {
  console.log(
    chalk.green(
      "You are about to initialize a new IPFS database for the polis app.\nYour db file will be added to infura IPFS and published to IPNS to handle future updates"
    )
  );

  const confirmQuestion = [
    {
      type: "confirm",
      name: "confirm",
      message: "Continue?",
    },
  ];

  const confirmation = await inquirer.prompt(confirmQuestion);

  if (!confirmation.confirm) {
    console.log(chalk.yellow("Exiting initialization..."));
    return;
  }

  const infuraQuestions = [
    {
      type: "input",
      name: "infuraUrl",
      message:
        "what is the infura ipfs endpoint ? (https://ipfs.infura.io:5001)",
    },
    {
      type: "input",
      name: "infurakey",
      message: "what is the infura ipfs api key ?",
      validate: (value: string) => {
        if (value.trim().length === 0) {
          return "Please enter a valid key.";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "infuraSecret",
      message: "what is the infura ipfs api secret ?",
      validate: (value: string) => {
        if (value.trim().length === 0) {
          return "Please enter a valid api secret.";
        }
        return true;
      },
    },
  ];

  const answers = await inquirer.prompt(infuraQuestions);

  console.log("\n");

  const spinner = ora("Adding a empty database to IPFS...\n").start();

  const { infuraUrl, infurakey, infuraSecret } = answers;

  const jsonDataBlob = new Blob(["[]"], { type: "application/json" });

  let baseUrl = `${infuraUrl || "https://ipfs.infura.io:5001"}/api/v0/add`;

  const formData = new FormData();

  formData.append("data", jsonDataBlob, "db.json");

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(infurakey + ":" + infuraSecret).toString("base64"),
      },
      body: formData,
    });

    const hash = (await response.json()).Hash;

    console.log("\n");

    spinner.succeed(`Sucessfully created a db in ipfs Hash: ${hash}\n`);

    const spinner2 = ora("Publishing the has to ipns...\n").start();

    const name = await Name.create();

    const revision = await Name.v0(name, hash);
    await Name.publish(revision, name.key);

    const keyBase64 = Buffer.from(name.key.bytes).toString("base64");

    console.log("\n");

    spinner2.succeed("sucessfully published the database to IPNS\n");

    console.log(
      `your ipns name (DB_HASH) is: ${chalk.blueBright.bold.underline(
        name.toString()
      )}`
    );
    console.log(
      `your ipns key in base64 (DB_KEY) is:  ${chalk.blueBright.bold.underline(
        keyBase64
      )}`
    );
    console.log(
      "please update your environment variables in the polis app accordingly!"
    );
  } catch (error) {
    console.error(chalk.red("Error creating the db"), error);
    process.exit();
  }
})();
