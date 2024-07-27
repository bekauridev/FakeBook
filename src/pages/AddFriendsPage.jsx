import styles from "./AddFriendsPage.module.css";
import UserList from "../components/UsersList";
function AddFriendsPage() {
  return (
    <>
      <h1 className={styles.friendSuggestionTittle}>Friend Suggestions</h1>
      <UserList />
    </>
  );
}

export default AddFriendsPage;
