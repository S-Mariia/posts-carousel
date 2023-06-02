import { useEffect } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { selectPosts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from 'redux/operations';

import Item from './Item';

import Carousel from 'react-material-ui-carousel';

const PostsCarousel = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Carousel
      autoPlay={false}
      animation="slide"
      IndicatorIcon={<FiberManualRecordIcon />}
      indicatorIconButtonProps={{
        style: {
          padding: '8px',
          width: '23px',
          height: '23px',
        },
      }}
      navButtonsProps={{
        style: {
          padding: '14px',
        },
      }}
    >
      {posts.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
};

export default PostsCarousel;
