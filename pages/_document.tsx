import { DefaultTags } from '../ui/DefaultTags';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <DefaultTags />
      </Head>
      <body className="h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
