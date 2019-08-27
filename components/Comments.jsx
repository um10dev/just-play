import React, { Component } from "react";
import Blog from "./Blog";
import { connect } from "react-redux";
import CommentsTemplate from "../components/CommentsTemplate";
import {
  addCommentCall,
  updateCommentCall,
  getCommentsCall,
  deleteCommentCall
} from "../state/comments/commentsActions";

class Comments extends Component {
  state = {
    comments: {
      commentText: ""
    },
    updatedComment: {
      commentText: "",
      id: 0
    }
  };

  componentDidMount() {
    this.props.getCommentsCall();
  }

  mapComments = (comment, index) => (
    <CommentsTemplate
      index={index}
      key={comment.id}
      comment={comment}
      state={this.state}
      inLineEditChange={this.inLineEditChange}
      Update={this.onUpdate}
      Delete={this.onDelete}
    />
  );

  onSubmit = () => {
    this.props
      .addCommentCall(this.state.comments)
      .then(() => this.props.getCommentsCall());
    this.setState(() => {
      return {
        comments: { commentText: "" }
      };
    });
  };

  onUpdate = () => {
    this.props.updateCommentCall(this.state.updatedComment);
  };

  onDelete = comment => {
    this.props.deleteCommentCall(comment.id);
  };

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(() => {
      return {
        comments: {
          [name]: value
        }
      };
    });
  };

  inLineEditChange = (value, id) => {
    this.setState(() => {
      return {
        updatedComment: {
          commentText: value,
          id: id
        }
      };
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2>Leave Me A Comment!</h2>
            <hr />
            <div>
              <textarea
                type="text"
                name="commentText"
                rows="2"
                className="form-control"
                value={this.state.comments.commentText}
                onChange={this.handleChange}
              />
              <button
                type="submit"
                className="btn btn-info float-right play"
                onClick={this.onSubmit}
              >
                Submit
              </button>
            </div>
            <br />
            <br />
            <h4>Comments</h4>
            <div className="row">
              {this.props.comments.map(this.mapComments)}
            </div>
          </div>
          <div className="col-md-4">
            <Blog />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

const mapDispatchToProps = {
  addCommentCall,
  updateCommentCall,
  getCommentsCall,
  deleteCommentCall
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
