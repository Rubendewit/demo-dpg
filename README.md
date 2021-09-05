# Demo application for DPG

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql) to view the GraphQL explorer.

## Next steps

There are still (many) improvements to be made. Due to limited time, the following points have not been picked up, but all are good contenders to improve the application.

### Performance

Most notably, we can gain some performance improvement by pre-rendering all House pages with `getStaticPaths`.
We could potentially leverage the link header in the response to generate the appropriate pages.

During development, I also noticed that data is being refetched (and previously available data is lost) upon navigating back from a House detail page to the homepage. The data should remain, but I have unfortunately not been able to resolve this. Fixing this issue would mean that no extra requests need to be performed when navigating back, and that the scroll position could be restored.

Last but not least, caching could be implemented in the Next API. While not noticeable in a development environment, if this application were used by multiple users, adding proper caching mechanisms is highly encouraged. It would significantly reduce the load on the [API of Ice and Fire](https://www.anapioficeandfire.com/).

### Testing

The tests could be extended to also test the NextJS pages. Cypress is a good options for creating end-to-end tests.
Another option would be to use React Testing Library combined with MockServiceWorker. This setup could allow us to test the pages in a way that closely resembles how a user would use the application.

### Features

Once the aforementioned points have been resolved, we could add more features.

Filtering the Houses could be a fun addition, and the API already supports filtering the houses.

Another option would be to add Character pages, and add links from the Houses pages to Character pages, using data that we take from the `currentLord` and `swornMembers` fields.

Lastly, and more of a long shot, we could perhaps search for another API that would allow us to retrieve images related to the Houses or Characters. We could add these to our NextJS APIs, which would mean that there is a minimal impact on the frontend, as the extra requests are performed on the server.
