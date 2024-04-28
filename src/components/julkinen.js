import * as React from 'react';
import { Button, CardContent, CardActions, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import getInfo from '../service/Info-service';
import DirectionsTransitSharpIcon from '@mui/icons-material/DirectionsTransitSharp';
import MyCard from "./MyCard"

export default function Julkinen() {
  const info = getInfo()
  const url = encodeURI('https://reittiopas.hsl.fi')
  return (
    <MyCard >
      <CardContent>
      <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'center',
                alignContent: 'flex-start',
                marginBottom: '16px'
            }}>
            <DirectionsTransitSharpIcon color="success" fontSize="large" />
            <Typography variant="h2" sx={{
              marginLeft: '4px'
                }}>
            Bussi tai metro
            </Typography>
        </Box>
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
