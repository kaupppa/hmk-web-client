import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Helmet } from "react-helmet";
import PageLayout from '../components/pageLayout';
import Julkinen from '../components/julkinen';
import Parkki from '../components/parkki';
import Kartta from '../components/kartta';
import Tuleminen from '../components/tuleminen';
import ThemeBuilder from "../gatsby-theme-material-ui-top-layout/themeBuilder"
import getInfo from '../service/Info-service';

export default function Saapuminen() {
  const theme = ThemeBuilder('#ffe0b2', '#eeeeee')
  const title = "Saapuminen - Hieroja Minna Kauppinen"
  const info = getInfo()
  const description = "Hyvien kulkuyhteyksien varrella, bussilla, metrolla tai autolla, osoite " + info.katuosoite + ", " + info.kaupunki

  return (
    <div>
      <Helmet htmlAttributes={{ lang: 'fi' }} >
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="geo.placename" content={info.kaupunki} />
        <meta name="geo.position" content={info.coord.lat + ';' + info.coord.lon} />
        <meta name="ICBM" content={info.coord.lat + ', ' + info.coord.lon} />
        <meta name="keywords" content="klassinen hieronta, hieroja, hieronta, lauttasaari" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <PageLayout pathName="/saapuminen">
          <Tuleminen />
          <Julkinen />
          <Parkki />
          <Kartta />
        </PageLayout>
      </ThemeProvider>
    </div>
  );
}
