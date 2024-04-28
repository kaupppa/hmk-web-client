import * as React from 'react';
import { CardContent, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import getInfo from '../service/Info-service';
import MyCard from "./MyCard"

export default function Ajanvaraus() {
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
            <PhoneSharpIcon color="success" fontSize="large" />
            <Typography variant="h2" sx={{
              marginLeft: '4px'
                }}>
            Ajanvaraus
            </Typography>
        </Box>
        <Typography>
          Ajanvaraus numerosta {info.puh}
        </Typography>
      </CardContent>
    </MyCard>
  );
}
