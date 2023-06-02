import { useState } from 'react';

import { Card, CardContent, Grid } from '@mui/material';

import CommentsSection from 'components/CommentsSection';
import Post from 'components/Post/Post';

const Item = ({ item }) => {
  const [commentsShown, setCommentsShown] = useState(false);

  return (
    <Card
      variant="outlined"
      style={{ height: 600, width: 1000, margin: '0 auto' }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Post
            item={item}
            commentsShown={commentsShown}
            setCommentsShown={setCommentsShown}
          />
          {commentsShown && <CommentsSection id={item.id} />}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Item;
