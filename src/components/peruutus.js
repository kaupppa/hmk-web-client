import * as React from 'react';
import { CardContent, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import MyCard from "./MyCard"
import WarningSharpIcon from '@mui/icons-material/WarningSharp';

export default function Peruutus() {
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
            <WarningSharpIcon color="warning" fontSize="large" />
            <Typography variant="h2" sx={{
              marginLeft: '4px'
                }}>
            Esteen sattuessa muistathan perua aikasi
            </Typography>
        </Box>
        <Typography>
          Perumattomasta ajasta veloitetaan normaalihinta
        </Typography>
      </CardContent>
    </MyCard>
  );
}
