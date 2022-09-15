import React from "react";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SearchIcon from "@mui/icons-material/Search";

export default function Topbar() {
  return (
    <div className="sticky-top bg-white">
      <div className="d-flex align-items-center ">
        <div className=" p-2">
          <AccountBalanceIcon />
          Smapp
        </div>
        <div className="   justify-content-center d-flex align-items-center flex-grow-1">
          <div className="p-2 ">
            <SearchIcon />
          </div>
          <div className="col-md-5  p-2">
            {" "}
            <input
              className=" border-0 rounded w-100"
              type="text"
              placeholder="search for posts, picture or video"
            />
          </div>
        </div>

        <div className=" col-md-2 p-1 mx-2 ">
          <div>
            <span className="mx-2 p-2 text-warning">Layt yagami</span>
            <img
              className="img-fluid  w-25 rounded-circle"
              src="assets/profile.jpg"
              alt=" a pic was here"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
