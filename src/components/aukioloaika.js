import * as React from 'react';
import { CardContent, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import ScheduleSharpIcon from '@mui/icons-material/ScheduleSharp';
import MyCard from "./MyCard"

export default function Aukioloaika() {
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
            <ScheduleSharpIcon color="success" fontSize="large" />
            <Typography variant="h2" sx={{
              marginLeft: '4px'
                }}>
            Aukioloajat
            </Typography>
        </Box>
        <Typography>
          Avoinna arkisin sopimuksen mukaan
        </Typography>
      </CardContent>
    </MyCard>
  );
}
