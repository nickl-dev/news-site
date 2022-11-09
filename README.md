# News Site

<a href="https://www.nicklal.dev">
  <img 
    src="https://media.tenor.com/YNp5t_lLA2oAAAAC/breaking-news-news.gif"
    alt="News report GIF that says 'BREAKING NEWS'"
    width="300"
    loading="lazy"
  />
</a>

<br/>
<br/>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Developed with `Next, TypeScript, GraphQL, Tailwind, SASS`

---

## Getting Started

**First**, make sure you install the dependencies:

```bash
npm ci
```

**Second**, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Telemetry

**What is Telemetry?** <br/>
Telemetry is the practice of gathering completely anonymous telemetry data about general usage.

By default, Next.js applications come with telemetry **enabled**. <br/>
For this repository, telemetry has been **disabled**.

However, should you find yourself needing to enable, disable, or check the status of telemetry,
you can use the respective commands:

**Enable telemetry:**

```bash
npx next telemetry enable
# Or
yarn next telemetry enable
```

**Disable telemetry:**

```bash
npx next telemetry disable
# Or
yarn next telemetry disable
```

**Check telemetry status:**

```bash
npx next telemetry status
# Or
yarn next telemetry status
```

See [Next.js telemetry documentation](https://nextjs.org/telemetry) for more details.

---

## Configuring ESLint and Prettier

First, let's remind ourselves of what ESLint and Prettier are:

**What is ESLint?** <br/>
ESLint is a is a tool that alalyzes your code for style and coding errors that can lead to bugs, and offers suggestions on how to fix them.

**What is Prettier?** <br/>
Prettier is an _opinionated_ code formatter. Prettier will completely rewrite your code according to a set of rules. It will not change the _content_ of the code but it will change how the code is _structured_.

By default, Next.js applications come with it's own configuration of ESLint. However, with this project, we're overriding Next.js's default ESLint configuration with **Airbnb**'s configuration. We're combining ESLint and Prettier together with Airbnb's guide/rules to make sure we get ESLint warnings and errors and have our code nicely-formatted according to how the team at Airbnb likes to do it.

Since ESLint and Prettier are already configured at the project/repository level (with dev dependencies, `.eslintrc.json`, and `prettier.rc.json`), you should only have to do the following:

**1.** Install the [VSCode ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
<br/>
**2.** Install the [VSCode Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). <br/>
**3.** Copy and paste the following settings in to your VSCode `settings.json` file:

```
"editor.tabSize": 2,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.trailingComma": "none",
  "prettier.singleQuote": true,
  "prettier.jsxSingleQuote": true,
```

See [the guide that was used](https://www.sandromaglione.com/techblog/create-nextjs-project-with-typescript-eslint-prettier-tailwindcss) to install and configure ESLint and Prettier with Airbnb's guide/rules.
