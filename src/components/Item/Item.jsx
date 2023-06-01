import { useState } from 'react';
import { fetchComments } from 'shared/servises/api';
import { Card, CardContent, Grid, Typography, Button } from '@mui/material';
import Comments from 'components/Comments';
import Post from 'components/Post/Post';

const Item = ({ item }) => {
  const [comments, setComments] = useState([]);

  const showComments = async () => {
    try {
      const response = await fetchComments(item.id);
      setComments(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card variant="outlined" style={{ height: 500 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Post item={item} showComments={showComments} />
          {comments.length > 0 && <Comments comments={comments} />}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Item;
