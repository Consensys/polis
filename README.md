# Polis

---

Polis is a platform dedicated to showcasing web3 tools, templates, and boilerplates. Frequently, these resources remain isolated or challenging to find within the web3 landscape. Polis is committed to addressing this challenge by offering a solution to enhance their discoverability and accessibility.

---

## How It Works

![polis](https://hackmd.io/_uploads/SyIparth2.png)

**If you are a Contributor:**

- You can submit new tools/boilerplates/templates
- You will also be able to edit the application later

Note: Contributors will need to connect their wallet to be able to submit and edit the applications.

**If you are a User:**

- You can explore tools, templates and boilerplates on Polis
- You will find all necessary web3 tools/templates/boilerplates in one place

**What are the main features?**

- Connect Wallet
- Submit New Applications: _Can contribute and share your own application on the platform_
- Edit Applications: _Contributors are able to edit the applications they've submitted_
- Editor's Pick: _Users can discover the applications most used by the community_

## Technical Details:

| Name   | Link                            | Text           |
| ------ | ------------------------------- | -------------- |
| Nodejs | https://nodejs.org/en/download/ | Latest Version |
| Infura | https://infura.io/              |                |

### **Libraries used**

Here's an overview of the included frameworks and tools.

- **Next.js** - A frameworks fo React applications that is focused on server-rendered and minimalistic approach.
- **Typescript** - Superset of JavaScript which primarily provides optional static typing, classes and interfaces.
- **Tailwind CSS**- UI & Styling Library.
- **[Web3 Storage](https://web3.storage/)**- A decentralized storage solution which natively uses decentralized data and identity protocols like IPFS, Filecoin and UCAN.

---

## Run It Locally

1. Clone the repository

```
git@github.com:Consensys/polis.git
```

2. Install Dependancies

```
cd polis
npm install
```

3. Grab your Infura API key

## Architecture

### Components

IPFS Storage: Our app uses IPFS for storing a simple JSON database. This database is saved in IPFS, which ensures data integrity and redundancy across the network.

#### Database Manipulation:

To enhance data manipulation capabilities, we convert the JSON database into a JavaScript Map object. This conversion allows us to perform various database operations efficiently, such as adding new applications or updating existing ones.

#### IPNS for Data Updates:

As the database evolves due to changes, a new version of the file is created. To keep track of changes and ensure accessibility to the latest version, we employ IPNS (InterPlanetary Name System). The latest file is published into an IPNS name, allowing us to resolve it and retrieve the most recent version of the database.

### Workflow

**Database Initialization** : If you're deploying your own version of the app, follow these steps for database initialization:

- Run `npm run init-db` in the command line interface (CLI).

- The CLI will prompt you for your Infura API key and secret, as we utilize Infura IPFS for the app.

- After successful initialization, the CLI will provide you with two values: DB_HASH and DB_KEY.

- Set these values as environment variables for your application. These variables will be essential for accessing and interacting with the database.

**Data Conversion**: After retrieval, the JSON database is converted into a JavaScript Map object. This conversion simplifies and accelerates subsequent database operations.

**Data Manipulation**: Users can interact with the app by adding new applications or updating existing ones. These changes are made to the JavaScript Map representation of the database.

**Database Update**: When changes occur, a new version of the JSON database file is generated. This ensures a historical record of changes made to the database.

**IPNS Publication**: To provide easy access to the latest version of the database, the most recent JSON file is published into an IPNS name. This IPNS name acts as a pointer to the latest version of the database.

**User Access**: Users of the app can resolve the IPNS name to retrieve the most up-to-date version of the database. This allows them to access and manipulate the latest application data.

---
