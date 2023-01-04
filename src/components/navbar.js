import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Button } from 'gatsby-theme-material-ui';

const NavButton = ({ to, title, pathName }) => {
  const disabled = pathName === to;

  return (
    <Button to={to} key={to} size="large" variant="contained" disabled={disabled}>
      <Typography variant="button">
        {title}
      </Typography>
    </Button>
  )
}

const NavBar = ({ pathName }) => {

  return (
    <div>
      <AppBar position="sticky"  >
        <Toolbar sx={{
          gap: { xs: '4px 4px', sm: '8px 8px', md: '16px 16px', lg: '32px 32px' }
        }}>
          <NavButton to="/" title="Etusivu" pathName={pathName} />
          <NavButton to="/hinnasto" title="Hinnasto" pathName={pathName} />
          <NavButton to="/saapuminen" title="Saapuminen" pathName={pathName} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
