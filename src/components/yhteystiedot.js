import * as React from 'react';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import getInfo from '../service/Info-service';
import MyAvatar from "../images/kirjekuori.png"
import MyCardHeader from "./myCardHeader"
import MyCard from "./MyCard"

export default function Yhteystiedot() {
  const info = getInfo()

  return (
    <MyCard >
      <CardContent>
        <MyCardHeader alt="Kirjekuori" src={MyAvatar} title="Yhteystiedot" />
        <Typography>
          {info.toiminimi}
        </Typography>
        <Typography>
          {info.henkiloNimi}
        </Typography>
        <Typography>
          Puh. {info.puh}
        </Typography>
        <Typography>
          {info.katuosoite}
        </Typography>
        <Typography>
          {info.postiosoite} {info.kaupunki}
        </Typography>
        <Typography>
          Y-tunnus {info.tunnus}
        </Typography>
      </CardContent>
    </MyCard>
  );
}