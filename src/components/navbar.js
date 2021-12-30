import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Button } from 'gatsby-theme-material-ui';

const NavButton = ({ to, title, pathName }) => {
  const disabled = pathName === to;

  return (
    <Button to={to} key={to} size="large" variant="contained" disabled={disabled} sx={{
      marginRight: '24px'
    }} >
      <Typography variant="button">
        {title}
      </Typography>
    </Button>
  )
}

const NavBar = ({ pathName }) => {

  return (
    <div>
      <AppBar position="sticky" sx={{
        flexGrow: 1
      }} >
        <Container maxWidth="xl">
          <Toolbar>
            <Box sx={{
              flexGrow: 1,
              display: 'flex'
            }}>
              <NavButton to="/" title="Etusivu" pathName={pathName} />
              <NavButton to="/hinnasto" title="Hinnasto" pathName={pathName} />
              <NavButton to="/saapuminen" title="Saapuminen" pathName={pathName} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
