import * as React from 'react';
import { Box, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import MyCard from "./MyCard"

export default function Tuleminen() {
    return (
        <MyCard >
            <CardContent >
                <Box >
                    <Typography variant="h1">
                        Saapuminen
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        Tulet sitten julkisella tai omalla autolla niin helppo on tulla.
                    </Typography>
                </Box>
            </CardContent>
        </MyCard >
    );
}
