import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import Image from 'next/image';
import logo from 'public/static/images/option3.jpg'

// const backgroundImage = <Image src={}/>;

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${logo.src})`,
        backgroundColor: '#FAF9F6',
        backgroundPosition: 'center'
      }}
    >
      <Typography color="white" align="center" variant="h4">
        Engrave Everything!
      </Typography>
      <Typography
        color="white"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Personalized products and engraving services for lasting memories. 
      </Typography>
      <Button
        // color="secondary"
        variant="contained"
        size="large"
        component="a"
        sx={{ minWidth: 200, bgcolor:'#0e92d6',
        '&:hover': {
          bgcolor: '#1b78be',
        }, }}
      >
        Shop Now
        {/* make this button scroll down to next section */}
      </Button>
    </ProductHeroLayout>
  );
}
