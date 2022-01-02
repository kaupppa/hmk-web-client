import * as React from 'react';
import { Box, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import MyCard from "./MyCard"

export default function Tuleminen() {
    return (
        <MyCard >
            <CardContent >
                <Box sx={{
                    marginBottom: '16px'
                }}>
                    <Typography variant="h1">
                        Saapuminen
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        Bussipysäkki on kohdalla, metro on lähellä ja parkkipaikka on edessä.
                    </Typography>
                </Box>
            </CardContent>
        </MyCard >
    );
}
