import React from "react";

function CurrentFriends() {
  return (
    <div className="">
      <div className="flex flex-rows-1 p-5 space-x-1 sm:space-x-4 md:space-x-4 lg:space-x-8 rounded-xl w-full mx-auto justify-center">
        <div className="avatar indicator w-">
          <div className="w-20 h-20 rounded-lg">
            <span className="indicator-item badge ">Milly</span>
            <img
              src="https://api.dicebear.com/5.x/identicon/svg?seed=Callum
"
            />
          </div>
        </div>
        <div className="avatar indicator">
          <div className="w-20 h-20 rounded-lg">
            <span className="indicator-item badge">Cal</span>

            <img
              src="https://api.dicebear.com/5.x/identicon/svg?seed=Milly
"
            />
          </div>
        </div>
        <div className="avatar indicator">
          <div className="w-20 h-20 rounded-lg">
            <span className="indicator-item badge badge">Josh</span>
            <img
              src="https://api.dicebear.com/5.x/identicon/svg?seed=Josh
"
            />
          </div>
        </div>
        <div className="avatar indicator">
          <div className="w-20 h-20 rounded-lg">
            <span className="indicator-item badge badge red">Ben</span>
            <img
              src="https://api.dicebear.com/5.x/identicon/svg?seed=Cal
"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentFriends;
