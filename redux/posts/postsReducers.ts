import { Type } from './postsActions';
type PostReducerType = {
  type: string;
  payload: any;
};

const postsReducer = (state = [], { type, payload }: PostReducerType): any => {
  switch (type) {
    case Type.GET_POSTS:
      return payload;
    case Type.ADD_POST:
      return payload;
    case Type.UPDATE_POST:
      return state.map(el => (el.id === payload.id ? { ...payload.data } : el));
    case Type.DELETE_POST:
      return state.filter((el: any) => el.id !== payload);

    default:
      return state;
  }
};

export default postsReducer;
