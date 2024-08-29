This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# NextJS Starter Template

This NextJS starter template include authentication and pricing features and many other useful things

## Table of Contents

- [Getting Started](#getting-started)
- [Installing Libraries](#installing-libraries)
- [Libraries Usage](#libraries-usage)
- [Favicon, Logo, Icons and Illustrations](#favicon-logo-icons-and-illustrations)
- [Global Padding](#global-padding)
- [Theme](#theme)
- [Supabase](#supabase)
- [Stripe](#stripe)
- [Others](#others)
- [Created With The Help Of](#helpers)
- [Lorem](#lorem)

## Getting Started

Create the nextjs application in the local folder:

```bash
npx create-next-app@latest .
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Installing Libraries

Installing those libraries :

- React Query
- shadcn-ui
- Lucide (installed automatically by shadcn-ui)

```bash
 npm i @tanstack/react-query @tanstack/react-query-devtools
 npx shadcn-ui@latest init
```

## Libraries Usage

### React Query

hihihh

### shadcn-ui

egfgwergerhe

## Favicon, Logo, Icons and Illustrations

- [Generate Favicon](https://favicon.io/) and download it, then add it to the public folder
- Create the Logo using figma . You can take the downloaded png image from the favicon website, then upload it to figma, then download it as svg. Finally rename it as logo.svg and download it to the images folder in the assets folder
- For icons use [Lucide](https://lucide.dev/icons/), it is downloaded in this project
- For illustrations use : [Undraw](https://undraw.co/)

## Global Padding

For global padding, I created a class called my-container and a css variable called --container-padding-x in the globals.css file

- globals.css

```css
:root {
  --container-padding-x: 1rem;
}

@media (width > 724px) {
  :root {
    --container-padding-x: 5.12rem;
  }
}
@media (width > 1290px) {
  :root {
    --container-padding-x: 16rem;
  }
}

.my-container {
  width: 100%;
  padding-right: var(--container-padding-x);
  padding-left: var(--container-padding-x);
  margin-right: auto;
  margin-left: auto;
}
```

- to update the global padding, just change the --container-padding-x in an media query

## Theme

- For how i add the theme check : [Jobify nextjs](https://github.com/john-smilga/nextjs-course-openai/tree/main/03-jobify)

- to update the theme, change the colors in the globals.css

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}
```

## Supabase

### installing libraries in your project

```bash
 npm install @supabase/supabase-js @supabase/ssr
```

### Supabase website

- Create new project (don't change the security options)
- Create a table using sql :

  ```bash
  create table public.profiles (
    id uuid not null references auth.users on delete cascade primary key,
    name text not null,
    username text not null
  );
  ```

- Enable Row Level Security
  ```bash
  alter table public.profiles enable row level security;
  ```

check this [page](https://egghead.io/lessons/postgresql-automatically-generate-a-profile-for-every-user-with-postgresql-function-triggers) for more details

### Setup Supabase in your project

- Create .env.local file and add those, you can

  ```.env.local
  NEXT_PUBLIC_SUPABASE_URL=<your_supabase_project_url>
  NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_supabase_anon_key>
  ```

- Get the keys and continue setting up your project by using [this Supabase page](https://supabase.com/dashboard/project/azxvqtxywglyjuneuxfi/settings/api)

- Get the tables TypeScript types from Supabase and add them to your project by CLI

  ```bash
  npx supabase login

  npx supabase gen types typescript --project-id your-project-id > utils/types/database.types.ts
  ```

  run this Everytime you change something in the database

  ```bash
  npx supabase gen types typescript --project-id your-project-id > utils/types/database.types.ts
  ```

### create the confirmation for the email address

- first copy this
  ![confirmation](./assets/readme-images/supa-confir-1.png)

- past it here
  ![confirmation2](./assets/readme-images/supa-confir-2.png)

- then continue the steps in [this page](https://supabase.com/docs/guides/auth/server-side/nextjs) (step 6)

### Login With a provider (ex: login with google)

- go to this page [login with google](https://supabase.com/docs/guides/auth/social-login/auth-google?queryGroups=environment&environment=server#google-pre-built) and follow the steps
- I choose to use Application code rather than using Google's pre-built , so every section in this page [login with google](https://supabase.com/docs/guides/auth/social-login/auth-google?queryGroups=environment&environment=server#google-pre-built) that has a title that include Google pre-built do not look at it
- You can check this [youtube video](https://www.youtube.com/watch?v=k1TL-AzavvY&list=LL&index=1) if you find something not clear

### References :

- [a youtube tutorial of creating a todo app](https://youtu.be/A6-56miVA_0?si=euw2zJ91uK7Ebh8Z)
- [Setting up Server-Side Auth for Next.js with Supabase](https://supabase.com/docs/guides/auth/server-side/nextjs)
- [Server-Side Rendering with Supabase](https://supabase.com/docs/guides/auth/server-side)
- [Nextjs - Supabase Course in egghead.io](https://egghead.io/lessons/postgresql-create-a-new-supabase-project-and-basic-postgresql-schema)

## Stripe

### 1- Take the api keys from [stripe](https://dashboard.stripe.com/test/apikeys) and paste them in the .env file

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

### 2- Then create a Webhook in this [page](https://dashboard.stripe.com/test/webhooks) by creating an endpoint, and add your website url followed by /api/webhooks/stripe in the Endpoint Url field

Note : I hosted this project on vercel to be able to get an public url, because we cannot put localhost:3000 here
![add a webhook for stripe](./assets/readme-images/webhook-stripe.png)

### 3- Then navigate to the webhook that you created and get the Signing secret key by Revealing it , then paste it in the .env file

```bash
STRIPE_WEBHOOK_SECRET=
```

for more information check this [youtube tutorial](https://www.youtube.com/watch?v=Ahwoks_dawU) at 4:12:28, or check the [github repo](https://github.com/adrianhajdin/ai_saas_app) of this tutorial

## Others

- lorem
- lorem

## Helpers

- [Jobify nextjs](https://github.com/john-smilga/nextjs-course-openai/tree/main/03-jobify)
- [nextjs template](https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template)
- [my little lemon website project](https://github.com/hassanaboukhalil/little_lemon_restaurant)
- [project hoobank from JavaScript Mastery youtube channel](https://github.com/adrianhajdin/project_hoobank/tree/main)
- [project banking from JavaScript Mastery youtube channel](https://github.com/adrianhajdin/banking)
- [login with google - google cloud](https://www.youtube.com/watch?v=k1TL-AzavvY&list=LL&index=1)
- [Nextjs - Supabase Course in egghead.io](https://egghead.io/lessons/postgresql-create-a-new-supabase-project-and-basic-postgresql-schema)
- [project AI SaaS Platform with Next js 14, TypeScript, Stripe from JavaScript Mastery youtube channel](https://www.youtube.com/watch?v=Ahwoks_dawU)
