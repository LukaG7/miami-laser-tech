import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import corvette from 'public/static/images/corvette.jpg'
import baby from 'public/static/images/baby.png'
import cheese from 'public/static/images/cheese.jpg'
import cuttingboard from 'public/static/images/cuttingboard.jpg'
import glass from 'public/static/images/glass.jpg'
import leathbox from 'public/static/images/leathbox.jpg'
import leather from 'public/static/images/leather.jpg'
import sign from 'public/static/images/sign.png'
import savethedate from 'public/static/images/savethedate.jpg'
import { Link } from 'react-scroll';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: leather.src,
    title: 'Leather',
    width: '40%',
  },
  {
    url: cheese.src,
    title: 'Cheese Board',
    width: '20%',
  },
  {
    url: corvette.src,
    title: 'Corvette',
    width: '40%',
  },
  {
    url: leathbox.src,
    title: 'LeatherBox',
    width: '38%',
  },
  {
    url: glass.src,
    title: 'Glass',
    width: '38%',
  },
  {
    url: baby.src,
    title: 'Baby',
    width: '24%',
  },
  {
    url: cuttingboard.src,
    title: 'Cutting Board',
    width: '40%',
  },
  {
    url: savethedate.src,
    title: 'Save the Date',
    width: '20%',
  },
  {
    url: sign.src,
    title: 'Signs',
    width: '40%',
  },
];

export default function ProductCategories() {
  return (
    <Container id="gallery" component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" align="center" component="h2">
      Possibilities Are Endless
      </Typography>
      <Link
              to='order'
              spy={true}
              smooth={true}
              offset={2}
              duration={500}
            >
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            >
              {/* <Image 
                src={image.url}
              /> */}
            </Box>
            

            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
          
        ))}
       
      </Box>
      </Link>
    </Container>
  );
}
