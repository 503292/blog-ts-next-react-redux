import { Type } from './postsActions';

const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_POST:
      return payload;

    default:
      return state;
  }
};

export default postsReducer;
