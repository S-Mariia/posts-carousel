import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;

  rect {
    transition: fill 250ms linear;
  }

  rect:hover {
    fill: #efd916;
    cursor: pointer;
  }
`;
