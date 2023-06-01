import styled from '@emotion/styled';
import { Typography, CardMedia, Card, CardContent } from '@mui/material';

export const StyledCard = styled(Card)`
  height: 470px;

  display: flex;
  flex-direction: column;
`;

export const StyledCardMedia = styled(CardMedia)`
  position: relative;
  /* height: 300px; */
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

export const StyledCardContent = styled(CardContent)``;
