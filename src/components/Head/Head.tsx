import Head from "next/head";
import { useRouter } from "next/router";

import { data } from "./Head.data";

type RouteType = "/" | "/prihlasky";

export const HeadComponent = () => {
  const router = useRouter();

  const currentRoute = router.asPath;

  const currentRouteMetaDesc =
    data[currentRoute as RouteType]?.description ?? data.default.description;

  return (
    <Head>
      <title> Příměšťák Brno | Kometa </title>
      <link rel="icon" href="/icons/logo-tabory.svg" />
      <meta name="author" content="Pavel Zapletal & Barbora Novakova" />
      <meta name="keywords" content={currentRouteMetaDesc} />
      <link
        rel="canonical"
        href={`https://www.primestak-brno.cz${currentRoute}`}
      />
      <meta
        name="google-site-verification"
        content="KV7BmFAqyUFzPz1ft0TFad03jyyUR8o0b-1CvI4FmGs"
      />
      <meta name="description" content={currentRouteMetaDesc} />
      <meta
        name="keywords"
        content="plavání Lužánky, bazén Lužánky, bazén za Lužánkami, výuka plavání v Brně, plavání Brno, plavecké kurzy brno, plavání brno, plavání pro děti, plavání s dětmi"
      />
    </Head>
  );
};
