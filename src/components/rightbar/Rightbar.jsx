import React from "react";
import "./rightbar.css";
import CloseFriend from "./CloseFriend";
import { Users } from "../../DummyData";

export default function Rightbar() {
  return (
    <div className="scroll bg-white  ">
      <div className=" my-2">
        <input
          className=" mx-4  rounded w-75 form-control form-control-sm"
          type="text"
          placeholder="Search friends"
        />
      </div>
      <div className="container mt-2 d-flex justify-content-between">
        <div className="">
          <div className="text-center ">
            <img
              className=" img-fluid border border-black w-75 rounded-circle"
              src="assets/profilevector.jpg"
              alt=""
            />
            <p className="text-muted text-center  ">Smael</p>
          </div>
        </div>
        <div className="text-center">
          <div>
            <img
              className=" img-fluid border border-black w-75 rounded-circle"
              src="assets/profilevector.jpg"
              alt=""
            />
          </div>
          <p className="text-muted text-center"> Alex</p>
        </div>
        <div className="text-center">
          <div>
            <img
              className=" img-fluid border border-black w-75 rounded-circle"
              src="assets/profilevector.jpg"
              alt=""
            />
          </div>
          <p className="text-muted  text-center">Bobby</p>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between">
          <h5>Friends</h5>
          <h5>...</h5>
        </div>
      </div>
      <div className="">
        {Users.map((u) => (
          <CloseFriend key={u.id} user={u}/>
        ))}
      </div>
    </div>
  );
}
