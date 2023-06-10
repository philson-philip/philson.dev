import { ThemeProvider } from "next-themes";
import MainLayout from "layouts/main";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import "styles/app.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = (
    `https://philson.dev` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem={true}>
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          />
        </Head>
        <DefaultSeo
          title="Hi, I'm Philson Philip!"
          description="I'm a designer turned front-end engineer with a passion for creating visually stunning and interactive web experiences."
          canonical={canonicalUrl}
          openGraph={{
            site_name: "Hi, I'm Philson Philip!",
            title: "Hi, I'm Philson Philip!",
            description:
              "I'm a designer turned front-end engineer with a passion for creating visually stunning and interactive web experiences.",
          }}
        />

        {process.env.NODE_ENV == "production" ? (
          // Analytics Script
          <Script
            src="https://api.pirsch.io/pirsch.js"
            id="pirschjs"
            data-code={process.env.NEXT_PUBLIC_PIRSCH_KEY}
            strategy="afterInteractive"
          />
        ) : (
          ""
        )}

        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
