import React from 'react';
import { Box, IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';

interface Props {
  onClickMyApps: () => void
}

const Footer: React.FC<Props> = ({ onClickMyApps }: Props) => {
  return (
    <Box
      position="fixed"
      width="100%"
      bottom="0"
      sx={{
        background: 'rgba(0,0,0,0.5)'
      }}
      padding="4px 20px"
      borderTop="0.5px solid rgba(255,255,255,0.1)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* <Box flex="1 1 0">
        <Typography>1</Typography>
      </Box> */}
      <Box>
        <IconButton
          aria-label="Dandi's works button"
          onClick={onClickMyApps}
          sx={{
            borderRadius: '8px',
            padding: '1px',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)'
            }
          }}
        >
          <AppsIcon
            sx={{
              color: 'white',
              fontSize: '37px'
            }}
          />
        </IconButton>
      </Box>
      {/* <Box flex="1 1 0">
        <Typography>3</Typography>
      </Box> */}
    </Box>
  );
};

export default Footer;
