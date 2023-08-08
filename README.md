This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Architecture

#### Components
IPFS Storage: Our app uses IPFS for storing a simple JSON database. This database is saved in IPFS, which ensures data integrity and redundancy across the network.

##### Database Manipulation: 
To enhance data manipulation capabilities, we convert the JSON database into a JavaScript Map object. This conversion allows us to perform various database operations efficiently, such as adding new applications or updating existing ones.

##### IPNS for Data Updates:
As the database evolves due to changes, a new version of the file is created. To keep track of changes and ensure accessibility to the latest version, we employ IPNS (InterPlanetary Name System). The latest file is published into an IPNS name, allowing us to resolve it and retrieve the most recent version of the database.

#### Workflow

**Database Initialization** :  If you're deploying your own version of the app, follow these steps for database initialization:
-  Run `npm run init-db` in the command line interface (CLI).

- The CLI will prompt you for your Infura API key and secret, as we utilize Infura IPFS for the app.

-  After successful initialization, the CLI will provide you with two values: DB_HASH and DB_KEY.

- Set these values as environment variables for your application. These variables will be essential for accessing and interacting with the database.

**Data Conversion**: After retrieval, the JSON database is converted into a JavaScript Map object. This conversion simplifies and accelerates subsequent database operations.

**Data Manipulation**: Users can interact with the app by adding new applications or updating existing ones. These changes are made to the JavaScript Map representation of the database.

**Database Update**: When changes occur, a new version of the JSON database file is generated. This ensures a historical record of changes made to the database.

**IPNS Publication**: To provide easy access to the latest version of the database, the most recent JSON file is published into an IPNS name. This IPNS name acts as a pointer to the latest version of the database.

**User Access**: Users of the app can resolve the IPNS name to retrieve the most up-to-date version of the database. This allows them to access and manipulate the latest application data.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
