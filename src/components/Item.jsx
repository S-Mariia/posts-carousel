import { useState } from 'react';

import { useSelector } from 'react-redux';
import { selectComments } from 'redux/selectors';

import { toast } from 'react-hot-toast';

import { Card, CardContent, Grid } from '@mui/material';

import CommentsSection from 'components/CommentsSection';
import Post from 'components/Post/Post';

const Item = ({ item }) => {
  const [commentsShown, setCommentsShown] = useState(false);
  const comments = useSelector(selectComments);

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
          {commentsShown && comments.length > 0 && (
            <CommentsSection id={item.id} />
          )}
          {commentsShown &&
            comments.length === 0 &&
            toast("This post don't have any comments yet", {
              icon: '❕',
              style: {
                borderRadius: '10px',
                background: 'darkred',
                color: '#fff',
              },
            })}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Item;
