import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import logo from '../images/logopng.png'
const backgroundImage =
logo;

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h3">
        Proffesional Engravings
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Lorem ipsum
      </Typography>
      <Button
        // color="secondary"
        variant="contained"
        size="large"
        component="a"
        sx={{ minWidth: 200 }}
      >
        Shop Now
        {/* make this button scroll down to next section */}
      </Button>
    </ProductHeroLayout>
  );
}
