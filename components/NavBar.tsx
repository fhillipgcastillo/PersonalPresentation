import React from 'react'
import { AppBar, Container, Toolbar, Typography, Button, Box } from '@mui/material';
import { scroller } from "react-scroll";


export type PageNavItems = {
  title: string;
  link?: string;
  placeholder?: string;
  scrollTo?: string;
}

interface Props {
  pageNavItems?: PageNavItems[];
};

const NavBar = ({ pageNavItems }: Props) => {
  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -260,
    })
  };

  return (
    <AppBar component="nav" sx={(theme) => ({ backgroundColor: theme.palette.primary.main })}>
      <Container maxWidth="lg">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: 'block', sm: 'none' }, color: "#fff" }}
            >
              FC
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }} href="/">
              Home
            </Button>
            {pageNavItems.map((item, idx) => (
              <Button
                key={`menu-item-${idx}`}
                sx={{ color: '#fff' }}
                href={!item.scrollTo && item.link || null}
                onClick={item.scrollTo && (() => (scrollTo(item.scrollTo)))}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
