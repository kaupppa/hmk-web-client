import * as React from 'react';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import MyAvatar from "../images/kello.png"
import MyCardHeader from "./myCardHeader"
import MyCard from "./MyCard"

export default function Aukioloaika() {
  return (
    <MyCard >
      <CardContent>
        <MyCardHeader alt="Kello" src={MyAvatar} title="Aukioloajat" />
        <Typography>
          Avoinna arkisin sopimuksen mukaan
        </Typography>
      </CardContent>
    </MyCard>
  );
}
