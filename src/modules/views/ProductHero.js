import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import Image from 'next/image';
import logo from 'public/static/images/logopng.png'

// const backgroundImage = <Image src={}/>;

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        // backgroundImage: `url(${logo.src})`,
        backgroundColor: '#FAF9F6',
        backgroundPosition: 'center'
      }}
    >
      <Typography color="black" align="center" variant="h3">
        Proffesional Engravings
      </Typography>
      <Typography
        color="black"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        A signage and apparel company that offers affordable, high-quality products. We
        use the latest laser technology to create signs and apparel for all needs.  
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
