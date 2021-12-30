import * as React from 'react';
import { Button, CardContent, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import getInfo from '../service/Info-service';
import MyAvatar from "../images/bussi.png"
import MyCardHeader from "./myCardHeader"
import MyCard from "./MyCard"

export default function Julkinen() {
  const info = getInfo()
  const url = encodeURI('http://www.reittiopas.fi/fi/?to=' + info.katuosoite + ',' + info.kaupunki)
  return (
    <MyCard >
      <CardContent>
        <MyCardHeader alt="Bussi" src={MyAvatar} title="Bussi tai metro" />
        <Typography>
          Toimipisteeni sijaitsee Lauttasaaressa keskeisellä paikalla, hyvien kulkuyhteyksien varrella.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={url} size="large" color="primary" variant="contained">
          Reittiopas
        </Button>
      </CardActions>
    </MyCard>
  );
}
