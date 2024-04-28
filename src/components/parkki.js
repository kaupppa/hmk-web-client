import * as React from 'react';
import { Button, CardContent, CardActions, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import DirectionsCarFilledSharpIcon from '@mui/icons-material/DirectionsCarFilledSharp';
import MyCard from "./MyCard"

export default function Parkki() {
  const url = 'https://www.google.fi/maps/dir//Lauttasaarentie+37,+00200+Helsinki';
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
            <DirectionsCarFilledSharpIcon color="success" fontSize="large" />
            <Typography variant="h2" sx={{
              marginLeft: '4px'
                }}>
            Omalla autolla
            </Typography>
        </Box>
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
