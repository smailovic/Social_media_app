import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PublicIcon from "@mui/icons-material/Public";

export default function Follow() {
  return (
    <div className="p-2    rounded bg-white">
      <div className="d-flex justify-content-between">
        <div className="">You might like</div>
        <div className="">
          <a href="./">See All</a>
        </div>
      </div>
      <hr />
      <div className=" container">
        <div className="col-md-4  d-flex">
          <img
            className="img-fluid rounded-circle"
            src="assets/profilevector.jpg"
            alt=""
          />
          <div className="mx-3  ">
            <div className="">name1name2</div>
            <small className="text-muted">work and stuff</small>
          </div>
        </div>
        <div className="d-flex justify-content-center my-1">
          <span className="mx-1">
            <PublicIcon />
          </span>
          <span className="mx-1">
            <FacebookOutlinedIcon />
          </span>
          <span className="mx-1">
            <TwitterIcon />
          </span>
          <span className="mx-1">
            <InstagramIcon />
          </span>
        </div>
        <div className="d-flex justify-content-around">
          <button className="bg-light rounded border-0">Ignore</button>
          <button className="bg-primary rounded border-0">Follow</button>
        </div>
      </div>
    </div>
  );
}
