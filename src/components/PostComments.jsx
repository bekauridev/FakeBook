import React, { useState } from "react";
import styles from "./PostComments.module.css";
import useFetch from "../hooks/useFetch";
import ErrorMessage from "./UI/ErrorMessage";

const Comments = ({ postId }) => {
  const [newComment, setNewComment] = useState("");

  // Fetch post comments
  const { data, isLoading, error } = useFetch(
    `https://dummyjson.com/posts/${postId}/comments`
  );
  console.log(data);
  // const handleAddComment = () => {
  //   if (newComment.trim()) {
  //     const newCommentObj = {
  //       id: data.comments.length + 1,
  //       user: {
  //         id: 1, // Replace with the actual logged-in user ID
  //         username: "currentUser", // Replace with the actual logged-in username
  //         fullName: "Current User", // Replace with the actual logged-in user's full name
  //       },
  //       body: newComment,
  //       postId,
  //       likes: 0,
  //     };
  //     setComments([...data.comments, newCommentObj]);
  //     setNewComment("");
  //   }
  // };

  if (isLoading) {
    return (
      <div className={styles.commentsContainer}>
        <h4>Loading comments...</h4>
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!data || !data.comments || data.comments.length === 0) {
    return (
      <div className={styles.commentsContainer}>
        <h4>There are no comments</h4>
      </div>
    );
  }

  return (
    <div className={styles.commentsContainer}>
      {data.comments.map((comment) => (
        <div key={comment.id} className={styles.comment}>
          <div className={styles.commentHeader}>
            <h4 className={styles.commentUserName}>{comment.user.fullName}</h4>
            <span className={styles.commentDate}>{new Date().toLocaleDateString()}</span>
          </div>
          <p className={styles.commentText}>{comment.body}</p>
        </div>
      ))}
      <div className={styles.newComment}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className={styles.newCommentInput}
        />
        {/* <button onClick={handleAddComment} className={styles.addCommentButton}>
          Post
        </button> */}
      </div>
    </div>
  );
};

export default Comments;
