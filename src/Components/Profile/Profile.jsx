import React from "react";
import { useAuth } from "../../Contexts/AuthContext.js";

function Profile() {
  const { logout } = useAuth();
  return (
    <div>
      <div>
        <button
          onClick={logout()}
          className="bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-black"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Profile;
