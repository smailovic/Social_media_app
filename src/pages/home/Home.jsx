import React from "react";
import Rightbar from "./../../components/rightbar/Rightbar";

import Sidebar from "./../../components/sidebar/Sidebar";
import Topbar from "./../../components/topbar/Topbar";
import Feed from "./../../components/feed/Feed";
import Share from "./../../components/share/Share";
import FeedCards from "../../components/feed/FeedCards";

export default function home() {
  return (
    <div>
      <Topbar />
      <div className="row mt-2 bg-light bg-gradient ">
        <div className=" col-2  ">
          <div className="">
            <Sidebar />
          </div>
        </div>

        <div className=" p-2 row col-10   mt-2">
          <div className=" row col-9 rounded">
            <div className="col-md-7">
              <Share />
              <Feed />
              <Feed />
              <Feed />
              <Feed />
              <Feed />
            </div>
            <div className="col-md-5">
              <FeedCards />
            </div>
          </div>
          <div className="col-3  ">
            {" "}
            <Rightbar />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
