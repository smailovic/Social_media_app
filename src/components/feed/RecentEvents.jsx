import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import BrushIcon from "@mui/icons-material/Brush";

export default function RecentEvents() {
  return (
    <div className="p-1  my-2  bg-white rounded border-black">
      <div className="d-flex justify-content-between">
        <div className="">Recent events</div>
        <div className="">
          <a href="./">See All</a>
        </div>
      </div>
      <hr />
      <div className="p-1">
        <div className="bg-light p-1 rounded mb-3">
          <div className="d-flex ">
            <div className="my-auto mx-1">
              <SchoolIcon style={{ color: "orange" }} />
            </div>
            <div className="mx-2">
              <div className="">Graduation ceremony</div>
              <div className="">
                <small>Lorem ipsum dolor sit amet consectetur </small>
              </div>
            </div>
          </div>{" "}
          <hr />
          <div className="d-flex justify-content-between">
            <div className="">seen</div>
            <div className="">
              <small>profile icons</small>
            </div>
          </div>
        </div>
        <div className="bg-light p-1 rounded mb-3">
          <div className="d-flex ">
            <div className="mx-1 my-auto">
              <BrushIcon />
            </div>
            <div className="mx-2">
              <div className="">Design Ideas</div>
              <div className="">
                <small>Lorem ipsum dolor sit amet consectetur </small>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <div className="">seen</div>
            <div className="">
              <small>profil icons</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
