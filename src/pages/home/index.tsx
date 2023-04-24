import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from '@components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Typography variant='h3' >Dandi Wijaya Website</Typography>
      </Box>
    </Layout>
  );
};

export default Home;
