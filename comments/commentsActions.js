import * as commentService from "../../services/commentService";
import logger from "sabio-debug";

const _logger = logger.extend("redux:reducers:actions");

export const TYPES = {
  COMMENT_ADD: "COMMENT_ADD",
  COMMENT_UPDATE: "COMMENT_UPDATE",
  COMMENT_RECEIVE: "COMMENT_RECEIVE",
  COMMENT_DELETE: "COMMENT_DELETE"
};

export function addComment(comment) {
  _logger(comment);
  return {
    type: TYPES.COMMENT_ADD,
    payload: comment
  };
}

export function updateComment(comment) {
  return {
    type: TYPES.COMMENT_UPDATE,
    payload: comment
  };
}

export function receiveComments(comments) {
  return {
    type: TYPES.COMMENT_RECEIVE,
    payload: comments
  };
}

export function deleteComment(id) {
  return {
    type: TYPES.COMMENT_DELETE,
    payload: id
  };
}

export function addCommentCall(comment) {
  _logger("service call fn initiated");
  return dispatch => {
    return commentService
      .addComment(comment)
      .then(() => dispatch(addComment(comment)));
  };
}

export function updateCommentCall(comment) {
  _logger("service call fn initiated");
  return dispatch => {
    return commentService
      .updateComment(comment)
      .then(() => dispatch(updateComment(comment)));
  };
}

export function getCommentsCall() {
  _logger("service call fn initiated");
  return dispatch => {
    return commentService
      .getComments()
      .then(comments => dispatch(receiveComments(comments.data.items)));
  };
}

export function deleteCommentCall(id) {
  _logger("service call fn initiated");
  return dispatch => {
    return commentService
      .deleteComment(id)
      .then(() => dispatch(deleteComment(id)));
  };
}
