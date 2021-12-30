import * as React from 'react';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import getInfo from '../service/Info-service';
import MyAvatar from "../images/puhelin.png"
import MyCardHeader from "./myCardHeader"
import MyCard from "./MyCard"

export default function Ajanvaraus() {
  const info = getInfo()
  return (
    <MyCard >
      <CardContent>
        <MyCardHeader alt="Puhelin" src={MyAvatar} title="Ajanvaraus" />
        <Typography>
          Ajanvaraus numerosta {info.puh}
        </Typography>
      </CardContent>
    </MyCard>
  );
}
