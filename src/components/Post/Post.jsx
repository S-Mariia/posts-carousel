import {
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Button,
  CardMedia,
} from '@mui/material';
import { getDefaultPoster } from 'shared/helpers/getDefaultPoster';
import {
  StyledCardMedia,
  Title,
  StyledCard,
  StyledCardContent,
} from './Post.styled';

const Post = ({ item, showComments }) => {
  const { id, title, body } = item;
  return (
    <Grid item style={{ flex: '1' }}>
      <StyledCard>
        <StyledCardMedia image={getDefaultPoster(id)} title={title}>
          <Title variant="h2">{title}</Title>
        </StyledCardMedia>
        <StyledCardContent>
          <Typography variant={body}>{body}</Typography>
        </StyledCardContent>
        <CardActions>
          <Button className="CheckButton" onClick={showComments}>
            Show comments
          </Button>
        </CardActions>
      </StyledCard>
    </Grid>
  );
};
export default Post;
