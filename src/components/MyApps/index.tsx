import React from 'react';
import { Box, Typography, Zoom, useMediaQuery } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import AppCard from '@components/Card/AppCard';

interface Props {
  isOpen: boolean
}

const MyApps: React.FC<Props> = ({ isOpen }: Props) => {
  return (
    <Zoom in={isOpen}>
      <Box
        position="absolute"
        bgcolor="bgDark"
        color="white"
        width="85%"
        borderRadius="8px"
        left='0'
        right='0'
        top='0'
        bottom='0'
        margin='auto'
        padding="20px 15px"
        maxHeight="500px"
        height="max-content"
      >
        <Box textAlign="center">
          <Typography fontSize="22px" letterSpacing="1.5px">Works</Typography>
        </Box>
        <Box height="10px" />
        {/* Search Input */}
        <Box
          id="search_my_apps"
          position="relative"
          margin="auto"
          width={
            useMediaQuery('(min-width: 600px)') ? '50%' : '90%'
          }
        >
          <Box
            position="absolute"
            color="white"
            top="6px"
            left="10px"
          >
            <SearchOutlined fontSize="medium"/>
          </Box>
          <Box
            component="input"
            type="text"
            width="100%"
            height="35px"
            borderRadius="40px"
            padding="0 40px"
            fontSize="14px"
            bgcolor="dark"
            placeholder='Search for apps'
            border="unset"
            color="white"
            sx={{
              '::placeholder': {
                color: 'gray',
                marginLeft: '10px'
              }
            }}
          />
        </Box>
        {/* End Search Input */}

        <Box
          sx={{
            overflowY: 'auto'
          }}
          maxHeight="350px"
          marginTop="15px"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_app, key) => {
                return (
                  <Box key={key} margin="15px">
                    <AppCard />
                  </Box>
                );
              })
            }
          </Box>
        </Box>

      </Box>
    </Zoom>
  );
};

export default MyApps;
