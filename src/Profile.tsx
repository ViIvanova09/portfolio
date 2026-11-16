import { useEffect, useState } from "react";
import "./Profile.css";
import profileImage from "./assets/profile-photo.jpeg";

type ProfileData = {
  id: number;
  name: string;
  role: string;
  bio: string;
};
export default function Profile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await fetch("/api/profile");
        if (!response.ok) {
          throw new Error("Failed to load");
        }
        const data = await response.json();
        setProfile(data);
      } catch {
        setError("Failed to load profile");
      }
    };
    loadProfile();
  }, []);
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <div className="profile">
      <img src={profileImage} alt="Viktoria" className="profile__photo" />
      <h2 className="profile__name">{profile.name}</h2>
      <p className="profile__role">{profile.role}</p>
      <p className="profile__bio">{profile.bio}</p>
    </div>
  );
}
