import BaseLayout from "@/components/common/BaseLayout";
import { Html, Head, Main, NextScript } from "next/document";
import logo from "../../public/assets/images/magickalogo.jpeg"
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css"
        />
      </Head>
      <body>
        <BaseLayout>
          <Main />
          <NextScript />
        </BaseLayout>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js"
        ></script>
      </body>
    </Html>
  );
}
