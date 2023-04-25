/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MyApps from '@components/MyApps';
import Footer from '@components/Footer';
import Socials from './components/Socials';
import Description from './components/Description';

const Home: React.FC = () => {
  const [isOpenMyApps, setIsOpenMyApps] = useState<boolean>(false);

  const onClickMyApps = (): void => {
    setIsOpenMyApps(!isOpenMyApps);
  };

  return (
    <Box id="home">
      <Box height="100%" width="100%" position="relative">
        <Box
          height="100vh"
          sx={{
            backgroundImage: "url('/home_bg.jpg')",
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
            filter: 'blur(8px)'
          }}
        >
        </Box>
        <Box
          position="absolute"
          top="0"
          height="100vh"
          width="100%"
          color="white"
          sx={{
            background: 'rgba(0,0,0,0.8)'
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="start"
            height="100%"
            flexDirection="column"
          >
            <Box height="40px" />
            <Socials />
            <Box height="80px" />
            <Description />
          </Box>
        </Box>
        <MyApps isOpen={isOpenMyApps} />
      </Box>
      <Footer onClickMyApps={onClickMyApps} />
    </Box>
  );
};

export default Home;
