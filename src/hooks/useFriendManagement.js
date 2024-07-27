// hooks/useFriendManagement.js
import { useState, useEffect } from "react";
import { insert, select, remove } from "../utils/hepers/storage";
import { v4 as uuidv4 } from "uuid";
const useFriendManagement = (userId, loggedInUserId) => {
  const [isFriend, setIsFriend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const friendsData = select("friends") || [];
    const friend = friendsData.find(
      (friend) => +friend.userId === userId && +friend.loggedInUserId === loggedInUserId
    );
    setIsFriend(!!friend);
  }, [userId, loggedInUserId]);

  console.log(isFriend);
  const handleAddFriend = () => {
    setIsLoading(true);
    const newFriend = {
      id: uuidv4(),
      loggedInUserId: String(loggedInUserId),
      userId: String(userId),
    };
    insert("friends", newFriend);
    setIsFriend(true);
    setIsLoading(false);
  };

  const handleDeleteFriend = () => {
    setIsLoading(true);
    const friendsData = select("friends") || [];
    const friend = friendsData.find(
      (friend) => +friend.userId === userId && +friend.loggedInUserId === loggedInUserId
    );
    console.log(friend);
    if (friend) {
      remove("friends", friend.id);
      setIsFriend(false);
    }
    setIsLoading(false);
  };

  return {
    isFriend,
    isLoading,
    handleAddFriend,
    handleDeleteFriend,
  };
};

export default useFriendManagement;
