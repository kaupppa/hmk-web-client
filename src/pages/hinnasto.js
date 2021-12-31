import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Helmet } from "react-helmet";
import PageLayout from '../components/pageLayout';
import Peruutus from '../components/peruutus';
import Hinnat from '../components/hinnat';
import Ajanvaraus from '../components/ajanvaraus';
import ThemeBuilder from "../gatsby-theme-material-ui-top-layout/themeBuilder"
import get from '../service/palvelu';
import getInfo from '../service/Info-service';

export default function Hinnasto() {
  const theme = ThemeBuilder('#b2dfdb', '#eeeeee')
  const hinnat = get()
  const info = getInfo()
  const title = "Hinnasto - Hieroja Minna Kauppinen"
  const description = 'Hinnat alkaen ' + hinnat[0].hinta + '€ - ' + hinnat[0].kesto + 'min. Ajanvaraus numerosta ' + info.puh + '.'

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
        <PageLayout pathName="/hinnasto">
          <Hinnat />
          <Peruutus />
          <Ajanvaraus />
        </PageLayout>
      </ThemeProvider>
    </div>
  );
}
