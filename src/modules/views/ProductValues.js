import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import curvylines from '../../public/static/themes/onepirate/productCurvyLines.png';
import laser from '../../public/static/images/newlaser.png'
import shirt from '../../public/static/images/theshirt.png'
import sign from '../../public/static/images/finalsign.png'

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <div id='about'>
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: '#F8F0E3' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src={curvylines.src}
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"epi
                src={laser.src}
                alt="laser"
                sx={{ height: 65 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Laser Engraving
              </Typography>
              <Typography variant="h5">
                {
                  'Laser engraved signs are one of the most reliable ways to display and share information.'
                }

                {
                  ' Whether it\'s instructions, warnings, or advertisements, laser engraving ensures words stay intact and legible for a long time.'
                 
                  
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={shirt.src}
                alt="graph"
                sx={{ height: 65 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Apparel
              </Typography>
              <Typography variant="h5">
                {
                  'Sublimated apparel is the newest and most stylish way to show off your individual style!'
                }

                {' Using a special process, we are able to turn any design into a vibrant print that lasts.'
}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={sign.src}
                alt="clock"
                sx={{ height: 65 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Signs
              </Typography>
              <Typography variant="h5">
                {'Laser cut signs are a unique way to make your business stand out! '}
                {'These beautiful, one-of-a-kind custom signs command attention and give passersby an unforgettable impression.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  );
}

export default ProductValues;
