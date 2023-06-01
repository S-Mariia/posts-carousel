import { useEffect } from 'react';

import { selectPosts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from 'redux/operations';

import Item from './Item/Item';

import Carousel from 'react-material-ui-carousel';

const PostsCarousel = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Carousel autoPlay={false} animation="slide">
      {posts.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default PostsCarousel;
