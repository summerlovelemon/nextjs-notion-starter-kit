<<<<<<< HEAD
<p align="center">
  <a href="https://transitivebullsh.it/nextjs-notion-starter-kit">
    <img alt="Example article page" src="https://ssfy.io/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252Fd147d76c-28a4-4cdd-a503-2d6bcc50a787%252Ftransitivebullsh.it__(5)-opt.jpg%3Ftable%3Dblock%26id%3D5b87b717-ca5b-49da-b17c-12c3eab1644a%26cache%3Dv2" width="689">
  </a>
</p>

# Next.js Notion Starter Kit

> The perfect starter kit for building websites with Next.js and Notion.

[![Build Status](https://travis-ci.com/transitive-bullshit/nextjs-notion-starter-kit.svg?branch=main)](https://travis-ci.com/transitive-bullshit/nextjs-notion-starter-kit) [![Prettier Code Formatting](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)

## Intro

This repo is what I use to power my personal blog / portfolio site [transitivebullsh.it](https://transitivebullsh.it).

It uses Notion as a CMS, fetching content from Notion and then uses [Next.js](https://nextjs.org/) and [react-notion-x](https://github.com/NotionX/react-notion-x) to render everything.

The site is then deployed to [Vercel](http://vercel.com).

## Features

- Setup only takes a few minutes ([single config file](./site.config.js)) 💪
- Robust support for Notion content via [react-notion-x](https://github.com/NotionX/react-notion-x)
- Next.js / TS / React / Notion
- Excellent page speeds
- Sexy LQIP image previews
- Embedded GitHub comments
- Automatic open graph images
- Automatic pretty URLs
- Automatic table of contents
- Full support for dark mode
- Quick search via CMD+P just like in Notion
- Responsive for desktop / tablet / mobile
- Optimized for Next.js and Vercel

## Setup

**All config is defined in [site.config.js](./site.config.js).**

1. Fork / clone this repo
2. Change a few values in [site.config.js](./site.config.js)
3. `npm install`
4. `npm run dev` to test locally
5. `npm run deploy` to deploy to vercel 💪

I tried to make configuration as easy as possible.

All you really need to do to get started is edit `rootNotionPageId`. It defaults to rendering my site's public notion page [78fc5a4b88d74b0e824e29407e9f1ec1](https://notion.so/78fc5a4b88d74b0e824e29407e9f1ec1).

You'll want to make your root Notion page **public** and then copy the link to your clipboard. Then extract the last part of the URL that looks like `d1b5dcf8b9ff425b8aef5ce6f0730202`, which is your page's Notion iD.

I recommend setting up a collection on your home page (I use an inline gallery [here](https://notion.so/78fc5a4b88d74b0e824e29407e9f1ec1)) that contains all of your articles / projects / content. There are no structural constraints on your Notion workspace, however, so feel free to add content as you would normally in Notion. There are a few parts of the code with logic to only show comments on blog post pages (collection item detail pages).

## URL Paths

The app defaults to slightly different pathnames in dev and prod (though pasting any dev pathname into prod will work and vice-versa).

In development, it will use `/nextjs-notion-blog-d1b5dcf8b9ff425b8aef5ce6f0730202` which is a slugified version of the page's title suffixed with its Notion ID. I've found that it's really useful to always have the Notion Page ID front and center during local development.

In production, it will use `/nextjs-notion-blog` which is a bit nicer as it gets rid of the extra ID clutter.

The mapping of Notion ID to slugified page titles is done automatically for you as part of the build process. Just keep in mind that if you plan on changing page titles over time, you probably want to make sure old links will still work, and we don't currently provide a solution for detecting old links aside from Next.js built-in [support for redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects).

See [mapPageUrl](./lib/map-page-url.ts) and [getCanonicalPageId](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-canonical-page-id.ts) from for more details.

NOTE: if you have multiple pages in your workspace with the same slugified name, the app will throw an error letting you know that there are duplicate URL pathnames.

## Theming

All CSS styles that customize Notion content are located in [styles/notion.css](./styles/notion.css).

They mainly target global CSS classes exported by react-notion-x [styles.css](https://github.com/NotionX/react-notion-x/blob/master/packages/react-notion-x/src/styles.css).

It should be pretty easy to customize most styling-related things, especially with local development and hot reload.

### Dark Mode

<p align="center">
  <img alt="Light Mode" src="https://ssfy.io/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F83ea9f0f-4761-4c0b-b53e-1913627975fc%252Ftransitivebullsh.it_-opt.jpg%3Ftable%3Dblock%26id%3Ded7e8f60-c6d1-449e-840b-5c7762505c44%26cache%3Dv2" width="45%"> 
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark Mode" src="https://ssfy.io/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252Fc0839d6c-7141-48df-8afd-69b27fed84aa%252Ftransitivebullsh.it__(1)-opt.jpg%3Ftable%3Dblock%26id%3D23b11fe5-d6df-422d-9674-39cf7f547523%26cache%3Dv2" width="45%">
</p>

Dark mode is fully supported and can be toggled via the sun / moon icon in the footer.

## Extras

All extra dependencies are optional -- the project should work just fine out of the box.

If you want to copy some of the fancier elements of my site, then you'll have to set up a few extras.

### Fathom Analytics

[Fathom](https://usefathom.com/ref/42TFOZ) provides a lightweight alternative to Google Analytics.

It's optional, but I really love how simple and elegant their solution is.

To enable analytics, just add a `NEXT_PUBLIC_FATHOM_ID` environment variable.

This environment variable will only be taken into account in production, so you don't have to worry about messing up your analytics with localhost development.

### GitHub Comments

<p align="center">
  <img alt="Embedded GitHub Comments" src="https://ssfy.io/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252Fa43f996c-de07-4d8a-8461-b35f9d43e4b2%252Fcomments-desktop-opt.jpg%3Ftable%3Dblock%26id%3Ded07d7c2-57c9-4aba-81b3-f5fa069371d4%26cache%3Dv2" width="420">
</p>

[Utteranc.es](https://utteranc.es/) is an amazing [open source project](https://github.com/utterance/utterances) which enables developers to embed GitHub issues as a comments section on their websites. Genius.

The integration is really simple. Just edit the `utterancesGitHubRepo` config value to point to the repo you'd like to use for issue comments.

You probably want to read through the Utterances docs before enabling this in production, since there are some subtleties around how issues get mapped to pages on your site, but overall the setup was super easy imho and I love the results.

### Preview Images

This is a really cool feature that's inspired by Medium's smooth image loading, where we first load a low quality, blurred version of an image and animate in the full quality version once it loads. It's such a nice effect, but it does add a bit of work to set up.

If `isPreviewImageSupportEnabled` is set to `true`, then the app will compute LQIP images via [lqip-modern](https://github.com/transitive-bullshit/lqip-modern) for all images referenced by your Notion workspace. These will be stored in a Google Firebase collection (as base64 JPEG data), so they only need to be computed once.

You'll have to set up your own Google Firebase instance of Firestore and supply three environment variables:

```bash
# base64-encoded string containing your google credentials json file
GOOGLE_APPLICATION_CREDENTIALS=

# name of your google cloud project
GCLOUD_PROJECT=

# name of the firebase collection to store images in
FIREBASE_COLLECTION_IMAGES=
```

The actual work happens in the [create-preview-image](./api/create-preview-image) serverless function.

### Automatic Social Images

<p align="center">
  <img alt="Auto-generated social image" src="https://ssfy.io/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252Fe1877c31-0bc9-46b7-8aaf-7bcae21baf2b%252Fsocial-image-opt.jpeg%3Ftable%3Dblock%26id%3D735b04d2-2a77-4035-8942-a17f8d41fe83%26cache%3Dv2" width="420">
</p>

Open Graph images like this one will be generated for each page of your site automatically based each page's content.

By default, it takes into account:

- cover image (falling back to a default site-wide cover image)
- page icon (falling back to a default site-wide icon)
- page title
- page subtitle (optional; pulled from the "Description" property of collection pages)

This feature works by rendering some custom HTML to a [Puppeteer](https://pptr.dev) instance in this [serverless function](./api/render-social-image/[pageId].ts) that takes in the page ID as input.

Here's an example of a social image URL in production: [/api/render-social-image/71201624b204481f862630ea25ce62fe](https://transitivebullsh.it/api/render-social-image/71201624b204481f862630ea25ce62fe)

Note that you shouldn't have to do anything extra to enable this feature as long as you're deploying to Vercel.

### Automatic Table of Contents

<p align="center">
  <img alt="Smooth ToC Scrollspy" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcb2df62d-9028-440b-964b-117711450921%2Ftoc2.gif?table=block&id=d7e9951b-289c-4ff2-8b82-b0a61fe260b1&cache=v2" width="240">
</p>

By default, every article page will have a table of contents displayed as an `aside` on desktop. It uses **scrollspy** logic to automatically update the current section as the user scrolls through your document, and makes it really easy to jump between different sections.

If a page has less than `minTableOfContentsItems` (default 3), the table of contents will be hidden. It is also hidden on the index page and if the browser window is too small.

This table of contents uses the same logic that Notion uses for its built-in Table of Contents block (see [getPageTableOfContents](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-page-table-of-contents.ts) for the underlying logic and associated unit tests).

## Screenshots

### Mobile Article Page

<p align="center">
  <a href="https://transitivebullsh.it/free-resources-for-indie-saas-devs">
    <img alt="Mobile Article Page" src="https://ssfy.io/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F6c05a0f9-59a0-4322-bef9-3f08fe4efc6a%252Farticle-mobile-opt.jpg%3Ftable%3Dblock%26id%3Da1eb2263-fdf1-4d51-a3d4-8a02cb32bbba%26cache%3Dv2" width="300">
  </a>
</p>

### Desktop Home Page

<p align="center">
  <a href="https://transitivebullsh.it">
    <img alt="Desktop Home Page" src="https://ssfy.io/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F1d3ab4b2-60af-4b95-b35d-cac5d440b8ca%252Ftransitivebullsh.it_-opt.jpg%3Ftable%3Dblock%26id%3D97f445e8-2da1-41cd-996a-5ad0e73a1d79%26cache%3Dv2" width="600">
  </a>
</p>

### Desktop Article Page (Dark Mode)

<p align="center">
  <a href="https://transitivebullsh.it/free-resources-for-indie-saas-devs">
    <img alt="Desktop Article Page" src="https://ssfy.io/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252Fb564d13f-b71b-4473-8531-65b5dd9b995f%252Ftransitivebullsh.it__(4)-opt.jpg%3Ftable%3Dblock%26id%3D16e03de2-0df7-4232-a129-e1666505c4d2%26cache%3Dv2" width="600">
  </a>
</p>

## License

MIT © [Travis Fischer](https://transitivebullsh.it)

Support my open source work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
=======
<p align="center">
  <a href="https://transitivebullsh.it/nextjs-notion-starter-kit">
    <img alt="Example article page" src="https://user-images.githubusercontent.com/552829/160132094-12875e09-41ec-450a-80fc-ae8cd488129d.jpg" width="689">
  </a>
</p>

# Next.js Notion Starter Kit

> The perfect starter kit for building websites with Next.js and Notion.

[![Build Status](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/actions/workflows/build.yml/badge.svg)](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/actions/workflows/build.yml) [![Prettier Code Formatting](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)

## Intro

This repo is what I use to power my personal blog and portfolio site [transitivebullsh.it](https://transitivebullsh.it).

It uses Notion as a CMS, [react-notion-x](https://github.com/NotionX/react-notion-x), [Next.js](https://nextjs.org/), and [Vercel](https://vercel.com).

## Features

- Setup only takes a few minutes ([single config file](./site.config.ts)) 💪
- Robust support for Notion content via [react-notion-x](https://github.com/NotionX/react-notion-x)
- Built using Next.js, TS, and React
- Excellent page speeds
- Smooth image previews
- Automatic social images
- Automatic pretty URLs
- Automatic table of contents
- Full support for dark mode
- Quick search via CMD+K / CMD+P
- Responsive for different devices
- Optimized for Next.js and Vercel

## Demos

- [Default demo](https://nextjs-notion-starter-kit.transitivebullsh.it) - Deployed from the `main` branch
- [My site](https://transitivebullsh.it) - Deployed from the `transitive-bullshit` branch

## Setup

**All config is defined in [site.config.ts](./site.config.ts).**

This project requires a recent version of Node.js (>= 14.17).

1. Fork / clone this repo
2. Change a few values in [site.config.ts](./site.config.ts)
3. `npm install`
4. `npm run dev` to test locally
5. `npm run deploy` to deploy to vercel 💪

I tried to make configuration as easy as possible — All you really need to do to get started is edit `rootNotionPageId`.

We recommend duplicating the [default page](https://notion.so/7875426197cf461698809def95960ebf) as a starting point, but you can use any public notion page you want.

Make sure your root Notion page is **public** and then copy the link to your clipboard. Extract the last part of the URL that looks like `7875426197cf461698809def95960ebf`, which is your page's Notion ID.

In order to find your Notion workspace ID (optional), just load any of your site's pages into your browser and open up the developer console. There will be a global variable that you can access called `block` which is the Notion data for the current page. If you enter `block.space_id`, it will print out your page's workspace ID.

I recommend setting up a collection on your home page that contains all of your articles / projects / content. There are no structural constraints on your Notion workspace, however, so feel free to add content as you normally would in Notion.

## URL Paths

The app defaults to slightly different URL paths in dev vs prod (though pasting any dev pathname into prod will work and vice-versa).

In development, it will use `/nextjs-notion-blog-d1b5dcf8b9ff425b8aef5ce6f0730202` which is a slugified version of the page's title suffixed with its Notion ID. I've found that it's really useful to always have the Notion Page ID front and center during local development.

In production, it will use `/nextjs-notion-blog` which is a bit nicer as it gets rid of the extra ID clutter.

The mapping of Notion ID to slugified page titles is done automatically as part of the build process. Just keep in mind that if you plan on changing page titles over time, you probably want to make sure old links will still work, and we don't currently provide a solution for detecting old links aside from Next.js's built-in [support for redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects).

See [mapPageUrl](./lib/map-page-url.ts) and [getCanonicalPageId](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-canonical-page-id.ts) for more details.

You can override the default slug generation on a per-page basis by adding a `Slug` text property to your database. Any page which has a `Slug` property will use that as its slug.

NOTE: if you have multiple pages in your workspace with the same slugified name, the app will throw an error letting you know that there are duplicate URL pathnames.

## Preview Images

<p align="center">
  <img alt="Example preview image" src="https://user-images.githubusercontent.com/552829/160142320-35343317-aa9e-4710-bcf7-67e5cdec586d.gif" width="458">
</p>

We use [next/image](https://nextjs.org/docs/api-reference/next/image) to serve images efficiently, with preview images optionally generated via [lqip-modern](https://github.com/transitive-bullshit/lqip-modern). This gives us extremely optimized image support for sexy smooth images.

Preview images are **enabled by default**, but they can be slow to generate, so if you want to disable them, set `isPreviewImageSupportEnabled` to `false` in `site.config.ts`.

### Redis

If you want to cache generated preview images to speed up subsequent builds, you'll need to first set up an external [Redis](https://redis.io) data store. To enable redis caching, set `isRedisEnabled` to `true` in `site.config.ts` and then set `REDIS_HOST` and `REDIS_PASSWORD` environment variables to point to your redis instance.

You can do this locally by adding a `.env` file:

```bash
REDIS_HOST='TODO'
REDIS_PASSWORD='TODO'
```

If you're not sure which Redis provider to use, we recommend [Redis Labs](https://redis.com), which provides a free plan.

Note that preview images and redis caching are both optional features. If you’d rather not deal with them, just disable them in your site config.

## Styles

All CSS styles that customize Notion content are located in [styles/notion.css](./styles/notion.css). They mainly target global CSS classes exported by react-notion-x [styles.css](https://github.com/NotionX/react-notion-x/blob/master/packages/react-notion-x/src/styles.css).

Every notion block gets its own unique classname, so you can target individual blocks like this:

```css
.notion-block-260baa77f1e1428b97fb14ac99c7c385 {
  display: none;
}
```

## Dark Mode

<p align="center">
  <img alt="Light Mode" src="https://transitive-bs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F83ea9f0f-4761-4c0b-b53e-1913627975fc%2Ftransitivebullsh.it_-opt.jpg?table=block&id=ed7e8f60-c6d1-449e-840b-5c7762505c44&spaceId=fde5ac74-eea3-4527-8f00-4482710e1af3&width=2000&userId=&cache=v2" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark Mode" src="https://transitive-bs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc0839d6c-7141-48df-8afd-69b27fed84aa%2Ftransitivebullsh.it__(1)-opt.jpg?table=block&id=23b11fe5-d6df-422d-9674-39cf7f547523&spaceId=fde5ac74-eea3-4527-8f00-4482710e1af3&width=2000&userId=&cache=v2" width="45%">
</p>

Dark mode is fully supported and can be toggled via the sun / moon icon in the footer.

## Automatic Social Images

<p align="center">
  <img alt="Example social image" src="https://user-images.githubusercontent.com/552829/162001133-34d4cf24-123a-4569-a540-f683b22830d1.jpeg" width="600">
</p>

All Open Graph and social meta tags are generated from your Notion content, which makes social sharing look professional by default.

Social images are generated automatically using headless chrome. You can tweak the default React template for social images by editing [api/social-images.tsx](./pages/api/social-image.tsx).

You can view an example social image live in production [here](https://transitivebullsh.it/api/social-image?id=dfc7f709-ae3e-42c6-9292-f6543d5586f0).

## Automatic Table of Contents

<p align="center">
  <img alt="Smooth ToC Scrollspy" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcb2df62d-9028-440b-964b-117711450921%2Ftoc2.gif?table=block&id=d7e9951b-289c-4ff2-8b82-b0a61fe260b1&cache=v2" width="240">
</p>

By default, every article page will have a table of contents displayed as an `aside` on desktop. It uses **scrollspy** logic to automatically update the current section as the user scrolls through your document, and makes it really easy to jump between different sections.

If a page has less than `minTableOfContentsItems` (default 3), the table of contents will be hidden. It is also hidden on the index page and if the browser window is too small.

This table of contents uses the same logic that Notion uses for its built-in Table of Contents block (see [getPageTableOfContents](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-page-table-of-contents.ts) for the underlying logic).

## Responsive

<p align="center">
  <img alt="Mobile article page" src="https://user-images.githubusercontent.com/552829/160132983-c2dd5830-80b3-4a0e-a8f1-abab5dbeed11.jpg" width="300">
</p>

All pages are designed to be responsive across common device sizes.

## Analytics

Analytics are an optional feature that are easy to enable if you want.

### Fathom Analytics

[Fathom](https://usefathom.com/ref/42TFOZ) provides a lightweight alternative to Google Analytics.

To enable, just add a `NEXT_PUBLIC_FATHOM_ID` environment variable, which will only be used in production.

### PostHog Analytics

[PostHog](https://posthog.com/) provides a lightweight, **open source** alternative to Google Analytics.

To enable, just add a `NEXT_PUBLIC_POSTHOG_ID` environment variable, which will only be used in production.

## Environment Variables

If you're using Redis, analytics, or any other feature which requires environment variables, then you'll need to [add them to your Vercel project](https://vercel.com/docs/concepts/projects/environment-variables).

If you want to test your redis builds with GitHub Actions, then you'll need to edit the [default build action](./.github/workflows/build.yml) to add `REDIS_HOST` and `REDIS_PASSWORD`. Here is an [example from my personal branch](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/blob/transitive-bullshit/.github/workflows/build.yml#L17-L21). You'll also need to add these environment variables to your GitHub repo as [repository secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets).

## Contributing

See the [contribution guide](contributing.md) and join our amazing list of [contributors](https://github.com/transitive-bullshit/nextjs-notion-starter-kit/graphs/contributors)!

## License

MIT © [Travis Fischer](https://transitivebullsh.it)

Support my open source work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
>>>>>>> ba0c6f055aaa1553b5187ea98800a965ee998c93
