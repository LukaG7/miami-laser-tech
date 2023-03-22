import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import Image from 'next/image';
import logo from '../../public/static/images/option3.jpg'
import { Link } from 'react-scroll';

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
      <Typography color="white" align="center" variant="h2">
        Engrave Everything!
      </Typography>
      <Typography
        color="white"
        align="center"
        variant="h4"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Personalized products and engraving services for lasting memories. 
      </Typography>
      <Link
        activeClass='active'
        color="inherit"
        variant="h6"
        underline="none"
        to="gallery"
        spy={true}
        smooth={true}
        offset={2}
        duration={500}
        target="_blank"
      >
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
      </Link>
    </ProductHeroLayout>
  );
}
