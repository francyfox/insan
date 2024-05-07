## Setup

### docker-compose

```shell
# Билд с нуля (пересборка)
docker-compose up --build
# Если нужно запустить как сервис
docker-compose up -d --remove-orphans
```

### Manual install

По дефолту на проекте используется `pnpm`, но вы можете собрать на `npm`

Пример .env переменных берем из .env.example (или просто копируем и переименовываем файл)

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.