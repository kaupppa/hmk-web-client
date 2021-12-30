import * as React from 'react';
import { Avatar, Box, Button, CardContent, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import getInfo from '../service/Info-service';
import MyAvatar from "../images/khl-logo.png"
import MyCard from "./MyCard"

export default function Esittely() {
  const info = getInfo()
  return (
    <MyCard >
      <CardContent sx={{
        maxWidth: "600px"
      }} >
        <Box sx={{
          marginBottom: "16px"
        }}>
          <Typography variant="h1">
            {info.nimi}
          </Typography>
        </Box>
        <Box>
          <Typography>
            Olen valmistunut hierojaksi vuonna 1993 ja olen siitä lähtien toiminut hierojana omalla toiminimellä. Teen klassista hierontaa ja intialaista päähierontaa. Toimipisteeni sijaitsee Lauttasaaressa keskeisellä paikalla, hyvien kulkuyhteyksien varrella.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" sx={{
            marginTop: "16px"
          }}>
            Tervetuloa!
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Avatar alt="Logo" src={MyAvatar} sx={{ width: 64, height: 64, marginRight: "16px" }} />
        <Button href="https://www.khl.fi" size="large" color="primary" variant="contained">
          Koulutettujen Hierojien Liitto
        </Button>
      </CardActions>
    </MyCard >
  );
}
