import * as React from 'react';
import { useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';
import { Link } from 'react-scroll';
import curvylines from '../../public/static/themes/onepirate/productCurvyLines.png';
import icon1 from '../../public/static/themes/onepirate/productHowItWorks1.svg'
import icon2 from '../../public/static/themes/onepirate/productHowItWorks2.svg'
import icon3 from '../../public/static/themes/onepirate/productHowItWorks3.svg'

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: '#0e92d6',
  fontWeight: 'medium',
};
 
const image = {
  height: 55,
  my: 4,
  color: '#0e92d6'
};

// const ref = useRef(null);

//   const handleClick = () => {
//     ref.current?.scrollIntoView({behavior: 'smooth'});
//   };

function ProductHowItWorks() {
  return (
    <div id='order'>
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: '#F8F0E3', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src={curvylines.src}
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" component="h2" sx={{ mb: 14 }}>
          How to Order
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src={icon1.src}
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Send me a message!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src={icon2.src}
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Discuss pricing.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src={icon3.src}
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {'Stay in touch through emails! '}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
          <Link
            activeClass='active'
            color="inherit"
            variant="h6"
            underline="none"
            to="email"
            spy={true}
            smooth={true}
            offset={2}
            duration={500}
            target="_blank"
          >
            <Button
              size="large"
              variant="contained"
              component="a"
              target='_blank'
              // onClick={handleClick}
              sx={{ mt: 8, bgcolor:'#0e92d6', 
              '&:hover': {
                  bgcolor: '#1b78be',
              }, }}
            >
            Order Now
          </Button>
        </Link>
      </Container>
    </Box>
    </div>
  );
}

export default ProductHowItWorks;
