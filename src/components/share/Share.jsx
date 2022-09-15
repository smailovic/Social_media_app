import React from "react";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

export default function Share() {
  return (
    <div className="mt-2 bg-white">
      <div className="border rounded">
        <div className="row mx-3 ">
          <div className="col-md-2 col-2 p-2">
            <img
              className="img-fluid rounded-circle"
              src="assets/profile.jpg"
              alt="shud be img"
            />
          </div>
          <div className=" my-auto col-9 ">
            <input
              className="rounded border-0 w-100"
              type="text"
              placeholder="Type something ..."
            />
          </div>
        </div>
        <div className="d-flex  p-1 ">
          <div className="flex-fill  text-center ">
            <span>
              <VideocamOutlinedIcon />
            </span>{" "}
            <small> Live Video</small>
          </div>
          <div className="flex-fill  text-center ">
            <span>
              <InsertPhotoOutlinedIcon />
            </span>{" "}
            <small>Photo/Video</small>
          </div>
          <div className="flex-fill  text-center ">
            <span>
              <SentimentSatisfiedOutlinedIcon />
            </span>{" "}
            <small>Feeling</small>
          </div>
          <div className="flex-fill ">
            <div className="bg-primary rounded  text-center ">Post</div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
