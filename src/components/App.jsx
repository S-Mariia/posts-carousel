import { Container } from '@mui/material';
import { Toaster } from 'react-hot-toast';

import Carousel from './Carousel';

export const App = () => {
  return (
    <>
      <Toaster />
      <Container sx={{ paddingTop: 5 }}>
        <Carousel />
      </Container>
    </>
  );
};
