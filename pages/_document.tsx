import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="REAGAN AND GOOD FRIENDS CHARITY IN UGANDA."
          />
          <meta property="og:site_name" content="medibank.io" />
          <meta
            property="og:description"
            content="REAGAN AND GOOD FRIENDS CHARITY IN UGANDA."
          />
          <meta property="og:title" content="REAGAN AND GOOD FRIENDS CHARITY IN UGANDA." />
          <meta name="twitter:card" content="REAGAN AND GOOD FRIENDS CHARITY IN UGANDA." />
          <meta name="twitter:title" content="REAGAN AND GOOD FRIENDS CHARITY IN UGANDA." />
          <meta
            name="twitter:description"
            content="REAGAN AND GOOD FRIENDS CHARITY IN UGANDA."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
