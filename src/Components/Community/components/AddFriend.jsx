import React, { useState } from "react";
import { useContact } from "../../../Contexts/ContactsProvider.js";
import { useAuth } from "../../../Contexts/AuthContext.js";

function AddFriend() {
  const [friendEmailAddress, setFriendEmailAddress] = useState([]);
  const { addFriend } = useContact();
  const { currentUser } = useAuth();

  const addNewFriend = (user_id, friendEmail) => {
    addFriend(user_id, friendEmail);
  };

  const handleEmailInput = (e) => {
    e.preventDefault();
    setFriendEmailAddress(e.target.value);
  };

  return (
    <div>
      <label htmlFor="my-modal-6" className="btn">
        Add Friend
      </label>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Add New Friend!</h3>
          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              <span className="label-text">Search By Email Address</span>
            </label>
            <div className="flex flex-row space-x-4 mx-auto w-full">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
                name="friendEmail"
                onChange={handleEmailInput}
              />
              <button className="bg-[#00df9a] w-full rounded-md font-medium  text-black">
                SEARCH
              </button>
            </div>
          </div>
          <label
            onClick={() => {
              addNewFriend(currentUser.uid, friendEmailAddress);
            }}
            htmlFor="my-modal-6"
            className="mt-5 btn bg-[#00df9a] w-full rounded-md font-medium  text-black"
          >
            Add Friend
          </label>
        </div>
      </div>
    </div>
  );
}

export default AddFriend;
