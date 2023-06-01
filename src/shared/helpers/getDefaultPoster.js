import manWorkingImg from 'shared/images/man-working.jpg';
import gym from 'shared/images/gym.jpg';
import mountains from 'shared/images/mountains.jpg';
// import people from 'shared/images/people.jpeg';
import team from 'shared/images/team.jpg';
import workers from 'shared/images/workers.jpg';
import walkingPeople from 'shared/images/walking-people.jpg';

const defaultPosters = [
  manWorkingImg,
  mountains,
  team,
  workers,
  walkingPeople,
  gym,
];

export const getDefaultPoster = id => {
  return defaultPosters[id % 6];
};
