import React, { useEffect } from "react";
import User from "./User";
import styles from "./UsersList.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Loader from "./UI/Loader";
import ErrorMessage from "./UI/ErrorMessage";
import useFetch from "../hooks/useFetch";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";
import useQueryParams from "../hooks/useQueryParams";

function UsersList() {
  const { data: usersData, isLoading, error } = useFetch("https://dummyjson.com/users");
  const { user: loggedInUser } = useAuth();
  const id = useQueryParams("id");
  const navigate = useNavigate();

  console.log(loggedInUser.id);
  useEffect(() => {
    if (loggedInUser && loggedInUser.id !== Number(id)) {
      navigate(`/user/profile?id=${id}`);
    }
  }, [loggedInUser, id, navigate]);
  if (error) {
    return (
      <div>
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <div className={styles.usersListContainer}>
      <h2 className={styles.searchedNum}>find: {usersData?.total || 0}</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{}}
        modules={[Navigation]}
        className={styles.mySwiper}
      >
        {usersData?.users?.map((user) => (
          <SwiperSlide key={user.id}>
            <User user={user} />
          </SwiperSlide>
        ))}
        {isLoading && (
          <SwiperSlide>
            <Loader />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}

export default UsersList;
