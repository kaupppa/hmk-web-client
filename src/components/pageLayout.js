import * as React from 'react';
import { Box, CssBaseline } from '@mui/material';
import NavBar from './navbar';

const PageLayout = ({ pathName, children }) => {

    return (
        <Box sx={{
            minHeight: '50vh'
        }}>
            <CssBaseline />
            <NavBar pathName={pathName} />
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                flexWrap: { xs: 'nowrap', md: 'wrap' },
                justifyContent: { xs: 'stretch', md: 'flex-start', lg: 'space-evenly' },
                alignItems: { xs: 'flex-start;', md: 'center' },
                alignContent: { xs: 'flex-start;', lg: 'center' },
                gap: { xs: '4px 4px', sm: '8px 8px', md: '16px 16px', lg: '64px 64px' },
                margin: { xs: '4px', sm: '8px', md: '16px', lg: '32px' },
                maxWidth: '1600px',
                minHeight: '50%'
            }}>
                {children}
            </Box>
        </Box>
    );
};
export default PageLayout;
