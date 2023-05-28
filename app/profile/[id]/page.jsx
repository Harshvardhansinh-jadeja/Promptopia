"use client";
import Profile from "@components/Profile";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

const UserProfile = ({params}) => {
  const [userPosts, setUserPosts] = useState([]);

  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();
      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, []);

  return (
    <section className="w-full">
      <Profile
        name={userName}
        desc={`welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
        data={userPosts}
      />
    </section>
  );
};

export default UserProfile;
