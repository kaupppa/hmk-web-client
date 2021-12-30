import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Helmet } from "react-helmet";
import ThemeBuilder from "../gatsby-theme-material-ui-top-layout/themeBuilder"
import PageLayout from '../components/pageLayout';
import Aukioloaika from '../components/aukioloaika';
import Esittely from '../components/esittely';
import Ajanvaraus from '../components/ajanvaraus';
import Yhteystiedot from '../components/yhteystiedot';
import Kehut from '../components/kehut';
import getInfo from '../service/Info-service';

export default function Etusivu() {
  const theme = ThemeBuilder('#c5e1a5', '#eeeeee')
  const title = "Hieroja Minna Kauppinen"
  const description = "Klassista hierontaa ja intialaista päähierontaa lauttasaaressa. Ajanvaraus numerosta 050 5477 811"
  const info = getInfo()
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "image": [
      "https://www.hieroja-minnakauppinen.fi/images/toimisto.jpg"
    ],
    "name": info.nimi,
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": info.katuosoite,
      "addressLocality": info.kaupunki,
      "postalCode": info.postiosoite,
      "addressCountry": info.maa
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": info.coord.lat,
      "longitude": info.coord.lon
    },
    "url": info.web,
    "telephone": info.puhLong,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": info.puhLong,
        "contactType": "reservations",
        "availableLanguage": ["Finnish", "English"]
      }
    ]
  };
  const ldJJson = JSON.stringify(structuredData, null, 2)

  return (
    <div>
      <Helmet htmlAttributes={{ lang: 'fi' }} >
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="geo.placename" content={info.kaupunki} />
        <meta name="geo.position" content={info.coord.lat + ';' + info.coord.lon} />
        <meta name="ICBM" content={info.coord.lat + ', ' + info.coord.lon} />
        <meta name="keywords" content="klassinen hieronta, hieroja, hieronta, lauttasaari" />
        <script type="application/ld+json">
          {ldJJson}
        </script>
      </Helmet>
      <ThemeProvider theme={theme}>
        <PageLayout pathName="/">
          <Esittely />
          <Kehut />
          <Ajanvaraus />
          <Aukioloaika />
          <Yhteystiedot />
        </PageLayout>
      </ThemeProvider>
    </div>
  );
}
