import React, { useContext, useEffect, useState } from "react";
import useOwner from "../../hooks/useOwner";
import { AuthContext } from "../../providers/AuthProvider";
import Logout from "../Logout/Logout";

const DashboardUser = () => {
  const { user } = useContext(AuthContext);
  const [isOwner] = useOwner();
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    fetch(`https://house-hunter-backend-caxj15ubr-sranik28.vercel.app/profile/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserProfile(data);
      });
  }, [user]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* sun icon */}
          {/* <svg
            className="swap-on fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg> */}

          {/* moon icon */}
          {/* <svg
            className="swap-off fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg> */}
        </label>
        <Logout />
      </div>

      <div className="my-8 text-center">
        <img
          src={userProfile?.photo ? userProfile?.photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRZ2LKnnbxuvK6x0Sl7JXCKNFeHutaglqYUTagKR10NI4gy4B4rw_nVxiF9g8tHG3wM8&usqp=CAU"}
          alt=""
          className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
        />
        <h5 className="hidden mt-4 text-xl font-semibold  lg:block">
          {userProfile && userProfile?.name}
        </h5>
        {isOwner ? (
          <p className="text-lg text-orange-500">House Owner</p>
        ) : (
          <p className="text-lg text-indigo-500">House Renter</p>
        )}
      </div>
    </div>
  );
};

export default DashboardUser;
