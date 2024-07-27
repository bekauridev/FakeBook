// v1

import React, { useState } from "react";
import Comments from "./PostComments";
import styles from "./ProfilePost.module.css";

const ProfilePost = ({ posts }) => {
  const [showComments, setShowComments] = useState(false);

  const { id, title, body, reactions, tags, userId, views } = posts;

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className={styles.postsContainer}>
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <img
            className={styles.postProfilePic}
            src="/src/assets/profile-pic.webp"
            alt="Profile"
          />
          <div>
            <h3 className={styles.postUserName}>User {userId}</h3>
          </div>
        </div>
        <div className={styles.postContent}>
          <h4 className={styles.postTitle}>{title}</h4>
          <p className={styles.postBody}>{body}</p>
        </div>
        <div className={styles.postFooter}>
          <div className={styles.reactions}>
            <div className={styles.likes}>
              <div className={styles.likesIcon}>
                <img src="/src/assets/like.png" alt="post_like_icon" />
              </div>
              <span className={styles.likesNum}>{reactions.likes}</span>
            </div>
          </div>
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <button key={index} className={styles.tag}>
                #{tag}
              </button>
            ))}
          </div>
          <div className={styles.views}>👁️ {views} views</div>
          <button className={styles.commentsButton} onClick={toggleComments}>
            {showComments ? "Hide Comments" : "Show Comments"}
          </button>
        </div>
        {showComments && <Comments postId={id} />}
      </div>
    </div>
  );
};

export default ProfilePost;

// import React, { useState } from "react";
// import Comments from "./PostComments";
// import styles from "./ProfilePost.module.css";

// const ProfilePost = ({ posts }) => {
//   const [showComments, setShowComments] = useState(false);

//   const { id, title, body, reactions, tags, userId, views } = posts;

//   const toggleComments = () => {
//     setShowComments(!showComments);
//   };

//   return (
//     <div className={styles.postsContainer}>
//       <div key={id} className={styles.post}>
//         <div className={styles.postHeader}>
//           <img
//             className={styles.postProfilePic}
//             src="/src/assets/profile-pic.webp"
//             alt="Profile"
//           />
//           <div>
//             <h3 className={styles.postUserName}>User {userId}</h3>
//             {/* <p className={styles.postDate}>June 10, 2024</p> */}
//           </div>
//         </div>
//         <div className={styles.postContent}>
//           <h4 className={styles.postTitle}>{title}</h4>
//           <p className={styles.postBody}>{body}</p>
//         </div>
//         <div className={styles.postFooter}>
//           <div className={styles.reactions}>
//             <span className={styles.likes}>👍 {reactions.likes}</span>
//             <span className={styles.dislikes}>👎 {reactions.dislikes}</span>
//             <button className={styles.commentsButton} onClick={toggleComments}>
//               💬 {showComments ? "Hide Comments" : "Show Comments"}
//             </button>
//           </div>
//           <div className={styles.tags}>
//             {tags.map((tag, index) => (
//               <span key={index} className={styles.tag}>
//                 #{tag}
//               </span>
//             ))}
//           </div>
//           <div className={styles.views}>👁️ {views} views</div>
//         </div>
//         {showComments && <Comments postId={id} />}
//       </div>
//     </div>
//   );
// };

// export default ProfilePost;
