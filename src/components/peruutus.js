import * as React from 'react';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import MyAvatar from "../images/varoitus.png"
import MyCardHeader from "./myCardHeader"
import MyCard from "./MyCard"

export default function Peruutus() {
  return (
    <MyCard >
      <CardContent>
        <MyCardHeader alt="Huomio" src={MyAvatar} title="Esteen sattuessa muistathan perua aikasi" />
        <Typography>
          Perumattomasta ajasta veloitetaan normaalihinta
        </Typography>
      </CardContent>
    </MyCard>
  );
}
