import React from "react";
import EditableLabel from "react-inline-editing";

function CommentsTemplate(props) {
  const handleInLineChange = value => {
    props.inLineEditChange(value, props.comment.id);
  };

  const commentDataForUpdate = () => {
    props.Update(props.comment);
  };

  const commentDataForDelete = () => {
    props.Delete(props.comment);
  };

  return (
    <div className="col-xl-12 col-sm-12">
      <div>
        <EditableLabel
          text={props.comment.commentText}
          inputWidth="200px"
          inputHeight="25px"
          inputMaxLength={50}
          name="commentText"
          value={props.state.comments.commentText}
          onFocusOut={handleInLineChange}
        />
        <div className="buttonsOnProfile" align="center">
          <button
            type="button"
            value={props.comment.id}
            id={props.comment.id}
            className="btn btn-danger btn-sm float-right play"
            onClick={commentDataForDelete}
          >
            Delete
          </button>
          <button
            type="button"
            value={props.comment.id}
            id={props.comment.id}
            className="btn btn-primary btn-sm float-right play"
            onClick={commentDataForUpdate}
          >
            Update
          </button>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}

export default CommentsTemplate;
