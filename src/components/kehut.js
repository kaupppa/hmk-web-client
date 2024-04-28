import * as React from 'react';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import MyCard from "./MyCard"

export default function Kehut() {
    return (
        <MyCard >
            <CardContent>
                <Typography sx={{
                    fontStyle: "italic",
                    fontWeight: 600
                }}>
                    Paras hieroja ikinä!
                </Typography>
                <Typography sx={{
                    fontStyle: "italic"
                }}>
                    Viisi tähteä.
                </Typography>
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                <Typography>
                    -- Minnan aviomies
                </Typography>
            </CardContent>
        </MyCard>
    );
}
