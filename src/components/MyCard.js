import React from 'react';
import { Card } from '@mui/material';

const MyCard = ({ children }) => {
    return (
        <React.Fragment>
            <Card sx={{
                width: { xs: '100%', md: 'inherit' },
                maxWidth: { xs: 'inherit', md: '500px', lg: '800px' },
            }}>
                {children}
            </Card>
        </React.Fragment>
    );
};
export default MyCard;
