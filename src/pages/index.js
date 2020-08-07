import Link from "next/link";
import useSWR from "swr";
import { LazyLoadImage } from "react-lazy-load-image-component";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const getStaticProps = async () => {
  const baseUrl = process.env.API_BASE_URL;
  const apiKey = process.env.API_KEY;

  return {
    props: {
      baseUrl,
      apiKey,
    },
  };
};

export const getImagePath = (size, path) => {
  return `https://image.tmdb.org/t/p/${size}/${path}`;
};

export default function Home({ baseUrl, apiKey }) {
  let { data } = useSWR(`${baseUrl}/movie/popular?api_key=${apiKey}`, fetcher);

  if (!data) return <p className="p-4">Loading...</p>;

  return (
    <div className="container mx-auto max-w-8xl">
      <div className="grid grid-cols-2 gap-6 md:gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {[...data.results].map((movie, index) => {
          return (
            <Link key={index} href="#">
              <a>
                <figure className="flex max-w-sm overflow-hidden transition duration-300 transform rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-1 focus:shadow-2xl focus:-translate-y-1">
                  <LazyLoadImage
                    effect="blur"
                    src={getImagePath("original", movie.poster_path)}
                    alt={movie.title}
                    className="object-cover w-full"
                  />
                </figure>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

Home.headerTitle = "Popular Movies";
