/* eslint-disable @typescript-eslint/ban-types */
import React, { type ReactElement } from 'react';
import { Box, IconButton } from '@mui/material';
import {
  LinkedIn,
  GitHub,
  WhatsApp,
  Email,
  Telegram,
  Phone
} from '@mui/icons-material';

const Socials: React.FC = () => {
  const socials: Array<{
    Icon: ReactElement
    link: string
  }> = [
    {
      Icon: <LinkedIn
        sx={{
          color: 'white'
        }}
      />,
      link: ''
    },
    {
      Icon: <GitHub
        sx={{
          color: 'white'
        }}
      />,
      link: ''
    },
    {
      Icon: <WhatsApp
        sx={{
          color: 'white'
        }}
      />,
      link: ''
    },
    {
      Icon: <Email
        sx={{
          color: 'white'
        }}
      />,
      link: ''
    },
    {
      Icon: <Telegram
        sx={{
          color: 'white'
        }}
      />,
      link: ''
    },
    {
      Icon: <Phone
        sx={{
          color: 'white'
        }}
      />,
      link: ''
    }
  ];
  return (
    <Box
      zIndex="99999"
      width="100%"
      top="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      {
        socials.map((social, key) => {
          return (
            <Box key={key} marginX="15px">
              <IconButton
                aria-label="Dandi's social media"
                sx={{
                  borderRadius: '8px',
                  padding: '1px',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                {social.Icon}
              </IconButton>
            </Box>
          );
        })
      }
    </Box>
  );
};

export default Socials;
