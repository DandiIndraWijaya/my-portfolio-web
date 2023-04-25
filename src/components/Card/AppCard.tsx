import React from 'react';
import { Box } from '@mui/material';

const AppCard: React.FC = () => {
  return (
    <Box
      width="170px"
      borderRadius="15px"
      textAlign="center"
      height="185px"
      bgcolor="rgba(255,255,255, 0.1)"
    >
      <Box
        width="100%"
        height="105px"
        component="img"
        sx={{
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px'
        }}
        // eslint-disable-next-line max-len
        src="https://cdn-apac.onetrust.com/logos/5dff103c-2a09-4851-a961-b111ef81c289/9dc3dcac-20e2-4454-a403-d22799f10816/2b5c934c-e51b-4f63-b481-6d72ee93a050/Gojek_Logo_Horizontal.jpg"
      />
    </Box>
  );
};

export default AppCard;
