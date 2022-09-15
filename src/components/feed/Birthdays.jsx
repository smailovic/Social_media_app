import React from "react";
import CakeIcon from "@mui/icons-material/Cake";
import SendIcon from "@mui/icons-material/Send";

export default function Birthdays() {
  return (
    <div className="p-2  my-2  rounded bg-white">
      <div className="d-flex justify-content-between">
        <div className="border">Brithdays</div>
        <div className="">
          <a href="./">See All</a>
        </div>
      </div>
      <hr />
      <div className="p-2">
        <div className=" p-1 mb-3">
          <div className="d-flex ">
            <div className="my-auto col-md-3">
              <img
                className="rounded  img-fluid"
                src="assets/profilevector.jpg"
                alt=""
              />
            </div>
            <div className="p-1">
              <div className="">name name</div>
              <div className="text-muted">
                <small>Birthday today</small>
              </div>
            </div>
          </div>
          <div className="d-flex  ">
            <div className="col-xs-2 mx-1 ">
              <input
                type="text"
                placeholder="write on his inbox"
                className=" border-0 rounded "
              />
            </div>
            <div className="">
              <small>
                <SendIcon />
              </small>
            </div>
          </div>
        </div>
        <div className="d-flex ">
          <div className="my-auto ">
            <CakeIcon />
          </div>
          <div className=" mx-auto container">
            <div className="">Upcoming birthdays</div>
            <div className="text-muted">
              <small>See 12 others have upcoming birthdays</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
