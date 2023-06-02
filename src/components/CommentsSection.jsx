import { useSelector } from 'react-redux';
import { selectComments } from 'redux/selectors';

import { Grid } from '@mui/material';

import Comment from './Comment';

const CommentsSection = () => {
  const comments = useSelector(selectComments);

  return (
    <Grid item style={{ flexBasis: '330px', height: 570, overflow: 'scroll' }}>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Grid>
  );
};

export default CommentsSection;
