import { TYPES } from "./commentsActions";

export const comments = (state = [], action) => {
  switch (action.type) {
    case TYPES.COMMENT_ADD: {
      return state.concat(action.payload);
    }
    case TYPES.COMMENT_UPDATE: {
      let newComments = [...state];
      let index = newComments.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        newComments[index].commentText = action.payload.commentText;
      }
      return newComments;
    }
    case TYPES.COMMENT_RECEIVE: {
      return [...action.payload];
    }
    case TYPES.COMMENT_DELETE: {
      return state.filter(item => item.id !== action.payload);
    }
    default:
      return state;
  }
};
