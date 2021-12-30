import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import NavBar from './navbar';

const PageLayout = ({ pathName, children }) => {

    return (
        <div>
            <CssBaseline />
            <NavBar pathName={pathName} />
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                flexWrap: { xs: 'nowrap', md: 'wrap' },
                justifyContent: { xs: 'stretch', md: 'flex-start', lg: 'space-evenly' },
                alignItems: { xs: 'flex-start;', md: 'center' },
                alignContent: { xs: 'flex-start;', lg: 'center' },
                gap: { xs: '8px 8px', md: '16px 16px', lg: '64px 64px' },
                margin: { xs: '8px', md: '16px', lg: '32px' }
            }}>
                {children}
            </Box>
        </div>
    );
};
export default PageLayout;
