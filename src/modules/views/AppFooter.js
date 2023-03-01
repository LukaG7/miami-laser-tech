import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href='/'>
        MiamiLaserTech
      </Link>{' '}
      2023
      {/* {new Date().getFullYear()} */}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  color: 'white',
  alignItems: 'center',
  backgroundColor: '#0e92d6',
  mr: 1,
  '&:hover': {
    bgcolor: '#1b78be',
  },
};

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: '#F8F0E3' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              {/* <Grid item sx={{ display: 'flex' }}>
                <Box component="a" target="_blank" href="https://www.facebook.com/anaisrox" sx={iconStyle}>
                  <img
                    src="/static/themes/onepirate/appFooterFacebook.png"
                    alt="Facebook"
                  />
                </Box>
                <Box component="a" target="_blank" href="https://twitter.com/MUI_hq" sx={iconStyle}>
                  <img
                    src="/static/themes/onepirate/appFooterTwitter.png"
                    alt="Twitter"         
                  />
                </Box>
              </Grid> */}
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
