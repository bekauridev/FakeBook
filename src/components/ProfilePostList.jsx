import styles from "./ProfilePostList.module.css";
import useFetch from "../hooks/useFetch";
import useQueryParams from "../hooks/useQueryParams";
import ErrorMessage from "./UI/ErrorMessage";
import Spinner from "./UI/Spinner";
import ProfilePost from "./ProfilePost";

function ProfilePostList() {
  const id = useQueryParams("id");

  const {
    data: userPostData,
    isLoading,
    error,
  } = useFetch(`https://dummyjson.com/posts/user/${id}`);
  console.log(error);

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className={styles.postsContainer}>
      {isLoading && <Spinner color="#f3f3f3" />}

      {!isLoading &&
        !error &&
        userPostData &&
        userPostData?.posts?.map((postData) => (
          <ProfilePost key={postData.id} posts={postData} />
        ))}
      {!isLoading && !error && userPostData?.posts.length === 0 && (
        <h1 style={{ textAlign: "center" }}>There are no posts</h1>
      )}
    </div>
  );
}

export default ProfilePostList;
