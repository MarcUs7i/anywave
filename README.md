<div align="center">
<a href="https://anywave.marcus7i.net">
  <img src="https://github.com/MarcUs7i/anywave/blob/main/public/icon-512x512.png?raw=true" alt="Logo" width="140" height="140">
</a>
</div>

<h1 align="center">
  <a href="https://anywave.marcus7i.net">Anywave</a>
</h1>
<h2 align="center"><a href="https://github.com/Noname968/airin">A permitted and official fork of Airin</a></h2>

<p align="center">
 <img src="https://github.com/1Anime/V1/blob/main/public/image.png?raw=true" alt="main">
</p>


## Introduction

<p><a href="https://anywave.marcus7i.net">Anywave</a> is an anime streaming website made possible by the <a href="https://github.com/consumet">Consumet API</a> and <a href="https://anify.tv">Anify API</a>, built with <a href="https://github.com/vercel/next.js/">Next.js</a> and <a href="https://nextui.org/">Nextui</a>, It offers AniList integration with no ads or interruptions</p>

## Features

- General
  - Free ad-supported streaming service
  - Theming
  - Dub Anime support
  - User-friendly interface
  - Auto sync with AniList
  - Add Anime to your AniList
  - Scene Searching powered by [trace.moe](https://trace.moe)
  - PWA supported
  - Mobile responsive
- Watch Page
  - Player
    - Autoplay next episode
    - Skip op/ed button
  - Comment section
- Profile page to see your watch list

## For Local Development

> If you want to self-host this app, please note that it is only allowed for personal use. Commercial use is not permitted, and including ads on your self-hosted site may result in actions such as site takedown.

1. Clone this repository using :

```bash
git clone https://github.com/MarcUs7i/anywave
```

2. Install package using npm :

```bash
npm install
```

3. Create `.env` file in the root folder and put this inside the file :

```bash
## Redis
# If you don't want to use redis leave it empty or comment it.
REDIS_URL="get redis from upstash, litegix or aiven. They offer free tier."

## AniList
GRAPHQL_ENDPOINT=https://graphql.anilist.co
ANILIST_CLIENT_ID="get your id from here https://anilist.co/settings/developer"
ANILIST_CLIENT_SECRET="get your secret from here https://anilist.co/settings/developer"

## NextAuth Details
NEXTAUTH_SECRET='run this command in your terminal (openssl rand -base64 32)'
NEXTAUTH_URL="for development use http://localhost:3000/ and for production use your domain url"

## NextJS
NEXT_PUBLIC_PROXY_URI="Use a proxy if u wish, not mandatory"
CONSUMET_URI="host your own API from this repo https://github.com/consumet/api.consumet.org. Don't put / at the end of the url."

## Optional (Will work without this)
MALSYNC_URI=https://api.malsync.moe/mal/anime/anilist: ## Dont worry if it not works they ban ips so cant do anything
ZORO_URI="host your own API from this repo https://github.com/ghoshRitesh12/aniwatch-api. Don't put / at the end of the url."

## MongoDB
MONGODB_URI="Your Mongodb connection String"

## Deployment URLs
NEXT_PUBLIC_DEV_URL=http://localhost:3000  # This is the URL for your current local development environment.
NEXT_PUBLIC_PRODUCTION_URL="Your deployement URL. Don't put / at the end of the url"

## In AniList Developer console add redirect url :
# https://{your-domain}/api/auth/callback/AniListProvider
```

4. Add this endpoint as Redirect Url on AniList Developer :

```bash
https://your-website-domain/api/auth/callback/AniListProvider
```

5. Start local server :

```bash
npm run build
```

## Credits

- [Consumet API](https://github.com/consumet/api.consumet.org) for anime sources
- [AniList API](https://github.com/AniList/ApiV2-GraphQL-Docs) for anime details source
- [Anify API](https://anify.tv/discord) for backup anime sources
- [Airin](https://github.com/Noname968/airin) for the base code
- [Moopa](https://github.com/Ani-Moopa/Moopa) for UI Inspiration and ReadMe.md Inspiration

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details.

> This means that if you choose to use or host this site for your own purposes, you are also required to release the source code of any modifications or improvements you make to this project. This open-source ethos is central to the project's philosophy.