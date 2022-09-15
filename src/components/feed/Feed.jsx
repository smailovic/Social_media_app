import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import SendIcon from "@mui/icons-material/Send";

export default function Feed() {
  return (
    <div className="mt-3 bg-white  rounded">
      <div className=" d-flex justify-content-between">
        <div className="d-flex ">
          <div className="mx-2 col-md-2">
            <img
              className="my-2 rounded-circle img-fluid"
              src="assets/profile.jpg"
              alt="here imaage"
            />
          </div>
          <div className="mx-3 my-2">
            <div>smael draoui</div>
            <div className="text-muted">9 sept 2022</div>
          </div>
        </div>
        <div className="mx-2">
          <h4>...</h4>
        </div>
      </div>
      <div className="container">
        <img
          className="img-fluid rounded"
          src="assets/friends_img.jpg"
          alt=""
        />
      </div>
      <div className="d-flex justify-content-between mx-2">
        <div className="">profil icons of likes</div>
        <div className="d-flex">
          <div className="mx-1">3 Comments</div>
          <div className="mx-1">17 Shares</div>
        </div>
      </div>
      <hr className="mx-2" />
      <div className="mx-1 d-flex justify-content-between">
        <div className="">
          <span>
            <FavoriteBorderIcon />
          </span>
          like
        </div>
        <div className="">
          <span>
            <CommentRoundedIcon />
          </span>
          comment
        </div>
        <div className="">
          <span>
            <ShareIcon />
          </span>
          Share
        </div>
      </div>
      <hr className="mx-2" />
      <div className="d-flex justify-content-between my-2">
        <div className="">profil</div>
        <div className="mx-2">
          <input
            className="rounded"
            placeholder="type something..."
            type="text"
          />
          <span>
            <GifBoxOutlinedIcon />
          </span>
          <span>
            <ImageOutlinedIcon />
          </span>
          <span>
            <SentimentSatisfiedOutlinedIcon />
          </span>
        </div>
        <div className="mx-2">
          <SendIcon />
        </div>
      </div>
    </div>
  );
}
