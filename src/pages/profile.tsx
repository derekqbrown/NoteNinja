import { useOutletContext } from "react-router-dom";

function ProfilePage() {
  const { user } = useOutletContext();
  return (
    <div>
      <h1>Dashboard</h1>
      {user && (
        <div>
          <p>Welcome, {user.username}!</p>
          <p>Your email: {user.email}</p>
          <p>User ID: {user.userId}</p>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;