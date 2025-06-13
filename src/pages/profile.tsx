import { useOutletContext } from "react-router-dom";

function ProfilePage() {
  return (
    <div>
      <h1>Dashboard</h1>
      {user && (
        <div>
          <p>Welcome, dude!</p>
          <p>Your email: lmao</p>
          <p>User ID: 123LMAOSTREET</p>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;