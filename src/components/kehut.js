import * as React from 'react';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
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
                <StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon />
                <Typography>
                    -- Minnan aviomies
                </Typography>
            </CardContent>
        </MyCard>
    );
}
