import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-hot-toast';

import {
  CardActions,
  CardContent,
  Grid,
  Typography,
  Button,
} from '@mui/material';
import { getDefaultPoster } from 'shared/helpers/getDefaultPoster';

import { getComments } from 'redux/operations';

import AddPostForm from 'components/AddPostForm/AddPostForm';
import Statistics from 'components/Statistics/Statistics';

import { getRandomStatistics } from 'shared/helpers/getRandomStatisticsData';

import {
  StyledCardMedia,
  Title,
  StyledCard,
  StyledModal,
  StyledBox,
} from './Post.styled';

const Post = ({ item, commentsShown, setCommentsShown }) => {
  const { id, title, body } = item;

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStatisticsOpen, setIsStatisticsOpen] = useState(false);

  const randStatistics = useMemo(() => getRandomStatistics(), []);
  const showComments = () => {
    dispatch(getComments(id))
      .then(({ payload }) => {
        if (payload.length === 0) {
          toast("This post don't have any comments yet", {
            icon: '❕',
            style: {
              borderRadius: '10px',
              background: 'darkred',
              color: '#fff',
            },
          });
          throw new Error("This post don't have any comments yet");
        }
      })
      .then(() => {
        setCommentsShown(true);
      })
      .catch(e => console.log(e));
  };

  return (
    <Grid item style={{ flex: '1' }}>
      <StyledCard>
        <StyledCardMedia image={getDefaultPoster(id)} title={title}>
          <Title variant="h2" noWrap={false}>
            {title}
          </Title>
        </StyledCardMedia>
        <CardContent>
          <Typography variant={body}>{body}</Typography>
        </CardContent>
        <CardActions>
          <Grid container justifyContent="space-between">
            <Grid item>
              {commentsShown ? (
                <Button onClick={() => setCommentsShown(false)}>
                  Hide comments
                </Button>
              ) : (
                <Button onClick={showComments}>Show comments</Button>
              )}

              <Button onClick={() => setIsStatisticsOpen(true)}>
                Show statistics
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={() => setIsModalOpen(true)}>Add own post</Button>
            </Grid>
          </Grid>
        </CardActions>
      </StyledCard>

      <StyledModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <StyledBox>
          <AddPostForm setIsModalOpen={setIsModalOpen} />
        </StyledBox>
      </StyledModal>

      <StyledModal
        open={isStatisticsOpen}
        onClose={() => setIsStatisticsOpen(false)}
      >
        <StyledBox>
          <Statistics randStatistics={randStatistics} />
        </StyledBox>
      </StyledModal>
    </Grid>
  );
};
export default Post;
