import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Save your Medical Records on a decentralized platform and take back your medical identity today"
          />
          <meta property="og:site_name" content="medibank.io" />
          <meta
            property="og:description"
            content="Save your Medical Records on a decentralized platform and take back your medical identity today."
          />
          <meta property="og:title" content="MediBank" />
          <meta name="twitter:card" content="MediBank" />
          <meta name="twitter:title" content="MediBank" />
          <meta
            name="twitter:description"
            content="Save your Medical Records on a decentralized platform and take back your medical identity today."
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
