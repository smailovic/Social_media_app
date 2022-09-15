import React from "react";

export default function Rightbar() {
  return (
    <div className="bg-white position-sticky">
      <div className="">
        <input
          className=" mx-4 rounded"
          type="text"
          placeholder="Search friends"
        />
      </div>
      <div className="container mt-2 d-flex justify-content-between">
        <div className="">
          <div>
            <img
              className=" img-fluid border border-black w-75 rounded-circle"
              src="assets/profilevector.jpg"
              alt=""
            />
          </div>
          <p className="text-muted text-center ">Smael</p>
        </div>
        <div className="">
          <div>
            <img
              className=" img-fluid border border-black w-75 rounded-circle"
              src="assets/profilevector.jpg"
              alt=""
            />
          </div>
          <p className="text-muted text-center "> Alex</p>
        </div>
        <div className="">
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
        <div className="">
          <div className=" bg-sucess p-2">
            <img
              className=" img-fluid border border-black w-25 rounded-circle"
              src="assets/profilevector.jpg"
              alt=""
            />
            <span className="mx-1">full name 2 </span>
            <span className="mx-1">
              {" "}
              <small>xx min</small>
            </span>
          </div>
          <div className=" bg-sucess p-2">
            <img
              className=" img-fluid border border-black w-25 rounded-circle"
              src="assets/profile.jpg"
              alt=""
            />
            <span className="mx-1">full name 1 </span>
            <span className="mx-1">
              {" "}
              <small>xx min</small>
            </span>
          </div>
          <div className=" bg-sucess p-2">
            <img
              className=" img-fluid border border-black w-25 rounded-circle"
              src="assets/profilevector.jpg"
              alt=""
            />
            <span className="mx-1">full name 3 </span>
            <span className="mx-1">
              {" "}
              <small>xx min</small>
            </span>
          </div>
          <div className=" bg-sucess p-2">
            <img
              className=" img-fluid border border-black w-25 rounded-circle"
              src="assets/profile.jpg"
              alt=""
            />
            <span className="mx-1">full name 4 </span>
            <span className="mx-1">
              {" "}
              <small>xx min</small>
            </span>
          </div>
          <div className=" bg-sucess p-2">
            <img
              className=" img-fluid border border-black w-25 rounded-circle"
              src="assets/profilevector.jpg"
              alt=""
            />
            <span className="mx-1">full name 5 </span>
            <span className="mx-1">
              {" "}
              <small>xx min</small>
            </span>
          </div>
          <div className=" bg-sucess p-2">
            <img
              className=" img-fluid border border-black w-25 rounded-circle"
              src="assets/profilevector.jpg"
              alt=""
            />
            <span className="mx-1">full name 6 </span>
            <span className="mx-1">
              {" "}
              <small>xx min</small>
            </span>
          </div>
          <div className=" bg-sucess p-2">
            <img
              className=" img-fluid border border-black w-25 rounded-circle"
              src="assets/profilevector.jpg"
              alt=""
            />
            <span className="mx-1">full name 7 </span>
            <span className="mx-1">
              {" "}
              <small>xx min</small>
            </span>
          </div>
          <div className=" bg-sucess p-2">
            <img
              className=" img-fluid border border-black w-25 rounded-circle"
              src="assets/profilevector.jpg"
              alt=""
            />
            <span className="mx-1">full name 8 </span>
            <span className="mx-1">
              {" "}
              <small>xx min</small>
            </span>
          </div>
          <div className=" bg-sucess p-2">
            <img
              className=" img-fluid border border-black w-25 rounded-circle"
              src="assets/profilevector.jpg"
              alt=""
            />
            <span className="mx-1">full name 9 </span>
            <span className="mx-1">
              {" "}
              <small>xx min</small>
            </span>
          </div>
          <div className=" bg-sucess p-2">
            <img
              className=" img-fluid border border-black w-25 rounded-circle"
              src="assets/profilevector.jpg"
              alt=""
            />
            <span className="mx-1">full name 10</span>{" "}
            <span className="mx-1">
              {" "}
              <small>xx min</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
