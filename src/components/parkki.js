import * as React from 'react';
import { Button, CardContent, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import MyAvatar from "../images/auto.png"
import MyCardHeader from "./myCardHeader"
import MyCard from "./MyCard"

export default function Parkki() {
  const url = 'https://www.google.fi/maps/dir//Lauttasaarentie+37,+00200+Helsinki';
  return (
    <MyCard >
      <CardContent>
        <MyCardHeader alt="Auto" src={MyAvatar} title="Omalla autolla" />
        <Typography>
          Liikehuoneiston edessä on yksi asiakasparkkipaikka
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={url} size="large" color="primary" variant="contained">
          Google maps
        </Button>
      </CardActions>
    </MyCard>
  );
}
