import "../css/main.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{Component.headerTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <div className="flex flex-col items-center p-4 py-8 space-y-6 md:space-y-10 md:p-8">
        <header className="flex items-center justify-center w-full">
          <div className="container sm:px-0 max-w-8xl">
            <h1 className="text-2xl font-bold leading-none text-white md:text-4xl">
              Popular Movies
            </h1>
          </div>
        </header>

        <main>
          <Component {...pageProps} />
        </main>

        <footer>
          <div className="inline-flex items-center justify-center space-x-2">
            <div className="text-sm text-gray-500 md:text-base">Powered by</div>
            <div>
              <a href="https://www.themoviedb.org" target="_blank">
                <img src="/tmdb.svg" className="h-3" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
