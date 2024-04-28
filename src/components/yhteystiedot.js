import * as React from 'react';
import { CardContent, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import getInfo from '../service/Info-service';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import MyCard from "./MyCard"

export default function Yhteystiedot() {
  const info = getInfo()

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
            <ContactMailSharpIcon color="success" fontSize="large" />
            <Typography variant="h2" sx={{
              marginLeft: '4px'
                }}>
            Yhteystiedot
            </Typography>
        </Box>
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