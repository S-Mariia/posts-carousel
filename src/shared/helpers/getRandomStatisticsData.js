export const getRandomStatistics = () => {
  return [
    { day: 'Monday', views: Math.floor(Math.random() * 130) + 30 },
    { day: 'Tuesday', views: Math.floor(Math.random() * 130) + 50 },
    { day: 'Wednesday', views: Math.floor(Math.random() * 130) + 30 },
    { day: 'Thursday', views: Math.floor(Math.random() * 130) + 40 },
    { day: 'Friday', views: Math.floor(Math.random() * 130) + 30 },
    { day: 'Saturday', views: Math.floor(Math.random() * 130) + 60 },
    { day: 'Sunday', views: Math.floor(Math.random() * 130) + 30 },
  ];
};
