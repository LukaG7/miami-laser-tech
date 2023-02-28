import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-scroll';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { height } from '@mui/system';
import logo from 'public/static/images/mlpnglogo.png'
import Image from 'next/image';
import '../../styles/Home.module.css'
import { Button } from '@mui/material';

// const rightLink = {
//   fontSize: 16,
//   color: 'common.white',
//   ml: 3,
// };

function AppAppBar() {
  return (
    <div id='top'>
      <AppBar position="fixed" color="" className='appbardiv'>
        <Toolbar sx={{ justifyContent: 'flex-start',  }}>
          <Box sx={{ flex: -100 }} />
          <Link
            to='top'
            className='linktag'
            variant="h6"
            underline="none"
            color="black"
            spy={true}
            smooth={true}
            offset={2}
            duration={500}
            href=""
            sx={{ fontSize: 24, justifyContent: 'flex-start' }}
          >
            <Image 
            className='appbar-logo'
            src={logo}
            alt='logo'
            width={40}
            sx={{
              display: "flex", justifyContent: "flex-end",
            }}
            />
          </Link>

          <Box 
          sx={{ flex: 1, display: "flex", justifyContent: "flex-end", flexDirection: "row"}}
          >

            <Link
              activeClass='active'
              color="inherit"
              variant="h6"
              underline="none"
              to="about"
              spy={true}
              smooth={true}
              offset={2}
              duration={500}
              target="_blank"
            >
              <Button>
                About
              </Button> 
            </Link>
 
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
              <Button>
                Gallery
              </Button> 
            </Link>

            <Link
              activeClass='active'
              color="inherit"
              variant="h6"
              underline="none"
              to="order"
              spy={true}
              smooth={true}
              offset={2}
              duration={500}
              target="_blank"
            >
              <Button>
                Order
              </Button> 
            </Link>
          
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
