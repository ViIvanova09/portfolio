import { useEffect, useState } from "react";

type ProfileData = {
  id: number;
  name: string;
  role: string;
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
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.role}</p>
    </div>
  );
}
