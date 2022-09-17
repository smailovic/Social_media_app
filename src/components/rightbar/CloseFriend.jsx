import React from "react";

export default function CloseFriend({ user }) {
  return (
    <div className="">
      <div className=" d-flex justify-content-between align-items-center bg-sucess p-2">
        <img
          className=" img-fluid border border-black w-25 rounded-circle"
          src="assets/profilevector.jpg"
          alt=""
        />
        <span className="mx-1">{user.username}</span>
        <span className="mx-1">
          {" "}
          <small className="text-muted">{user.time} min</small>
        </span>
      </div>
    </div>
  );
}
