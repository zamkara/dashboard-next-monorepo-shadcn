# shadcn/ui monorepo template

This is a NextJS monorepo template with React, Turborepo, Tailwind CSS, and shadcn/ui.

## Setup

Install Turbo globally:

```bash
npm install --global turbo
```

Install dependencies with your preferred package manager:

```bash
npm install
```

```bash
pnpm install
```

```bash
bun install
```

## Development

Run the app in development mode from the repository root:

```bash
turbo dev
```

## Production

```bash
pnpm start
```

This will build the `web` app and run a production preview server.

## Other commands

```bash
turbo build
turbo lint
turbo typecheck
turbo format
```

## Adding components

To add components to your app, run this from the repository root:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```
