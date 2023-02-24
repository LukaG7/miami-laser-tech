import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { height } from '@mui/system';
import logo from 'public/static/images/mlpnglogo.png'
import Image from 'next/image';
import '../../styles/Home.module.css'

// const rightLink = {
//   fontSize: 16,
//   color: 'common.white',
//   ml: 3,
// };

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" color="" className='appbardiv'>
        <Toolbar sx={{ justifyContent: 'flex-start',  }}>
          <Box sx={{ flex: -100 }} />
          <Link
            className='linktag'
            variant="h6"
            underline="none"
            color="black"
            href='/'
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
              color="inherit"
              variant="h6"
              underline="none"
              href=""
              target="_blank"
            >
              {'About'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href=""
              target="_blank"
            >
              {'Gallery'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href=""
              target="_blank"
            >
              {'Order'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
