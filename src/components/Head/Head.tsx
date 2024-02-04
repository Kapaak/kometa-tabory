import Head from 'next/head';
import { useRouter } from 'next/router';

import { data } from './Head.data';

type RouteType = '/' | '/prihlasky';

export const HeadComponent = () => {
  const router = useRouter();

  const currentRoute = router.pathname;

  const routeMetaData = data[currentRoute] ?? data.default;

  return (
    <Head>
      <title>{routeMetaData.title}</title>
      <link rel="icon" href="/icons/logo-tabory.svg" />
      <link rel="canonical" href="https://www.primestak-brno.cz/" />
      <meta name="title" content={routeMetaData.title} />
      <meta name="author" content="Pavel Zapletal & Barbora Novakova" />
      <meta name="keywords" content={routeMetaData.keywords} />
      <meta name="description" content={routeMetaData.description} />
      <meta
        name="google-site-verification"
        content="KV7BmFAqyUFzPz1ft0TFad03jyyUR8o0b-1CvI4FmGs"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.primestak-brno.cz/" />
      <meta property="og:title" content={routeMetaData.title} />
      <meta property="og:description" content={routeMetaData.description} />
      <meta property="og:image" content="/images/social-media-card.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.primestak-brno.cz/" />
      <meta property="twitter:title" content={routeMetaData.title} />
      <meta
        property="twitter:description"
        content={routeMetaData.description}
      />
      <meta property="twitter:image" content="/images/social-media-card.jpg" />
    </Head>
  );
};
