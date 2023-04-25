/* eslint-disable react/no-unescaped-entities */
import { Box, Divider, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { Me } from 'src/images/png';

const Description: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box
        textAlign="center"
        width={useMediaQuery('(max-width: 450px)')
          ? '85%'
          : '400px'}
      >
        <Typography
          fontSize="16px"
          fontWeight="500"
          letterSpacing="1.5px"
        >
        Hi, I'm App Developer based in Indonesia!
        </Typography>
        <Divider color='white' sx={{ marginY: '20px' }} />
        {/* Photo and professions */}
        <Box
          display="flex"
          alignItems="center"
          textAlign="left"
          flexDirection={useMediaQuery('(max-width: 450px)')
            ? 'column'
            : 'row'}
        >
          <Box flexGrow="1">
            <Box
              bgcolor="bgDark"
              paddingX="10px"
              paddingBottom="5px"
              borderRadius="10px"
              width="max-content"
            >
              <Typography
                fontSize="26px"
                fontWeight="500"
                letterSpacing="0.7px"
              >
            Dandi Indra Wijaya
              </Typography>
              <Typography>Digital Product Maker</Typography>
            </Box>
          </Box>
          <Box
            marginTop={useMediaQuery('(max-width: 450px)')
              ? '15px'
              : ''}
          >
            <Box
              borderRadius="50%"
              width="110px"
              height="110px"
              border="2px solid white"
            >
              <Box
                component="img"
                src={Me}
                width="100%"
                borderRadius="50%"
              />
            </Box>
          </Box>
        </Box>
        {/* End photo and professions */}
        <Divider color='white' sx={{ marginY: '20px' }} />
        <Typography
          fontSize="16px"
          fontWeight="500"
          textAlign="justify"
        >
        I'm a fullstack developer based in Semarang. Have a passion
        for programming, especially in software development. Besides
        that, I like to read novels. I'm also interested in things
        related to history such as films and books.
        </Typography>
      </Box>
    </Box>
  );
};

export default Description;
