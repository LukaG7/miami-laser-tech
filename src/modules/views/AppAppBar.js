import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { height } from '@mui/system';
import logo from 'public/static/images/logopng.png'
import Image from 'next/image';

// const rightLink = {
//   fontSize: 16,
//   color: 'common.white',
//   ml: 3,
// };

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" color="">
        <Toolbar sx={{ justifyContent: 'flex-start',  }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="black"
            href='/'
            sx={{ fontSize: 24, justifyContent: 'flex-start' }}
          >
            <Image 
            src={logo}
            width={90}
            sx={{
              display: "flex",
              justifyContent: "left",
              
            }}
            />
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
