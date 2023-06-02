import styled from '@emotion/styled';
import { Typography, CardMedia, Card, Modal, Box } from '@mui/material';

export const StyledCard = styled(Card)`
  height: 570px;

  display: flex;
  flex-direction: column;
`;

export const StyledCardMedia = styled(CardMedia)`
  position: relative;

  flex-grow: 1;
  object-fit: cover;
`;

export const Title = styled(Typography)`
  text-overflow: ellipsis;
  text-transform: uppercase;

  position: absolute;
  bottom: 0;

  padding: 20px 15px;

  background-color: #000;
  color: #fff;
  opacity: 0.65;

  width: 100%;
  font-size: 24px;
  font-weight: 400;

  transition: 300ms;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledModal = styled(Modal)`
  .MuiBackdrop-root {
    background-color: rgba(43, 43, 43, 0.6);
    backdrop-filter: blur(10px);
  }
`;

export const StyledBox = styled(Box)`
  width: 450px;
  height: 500px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
  box-shadow: 7px 13px 14px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
`;
