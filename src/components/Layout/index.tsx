import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Box>
      {children}
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
