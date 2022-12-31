import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import SendIcon from "@mui/icons-material/Send";
import { Users } from "../../DummyData";

export default function Feed({ post }) {
  return (
    <div className="mt-3 bg-white  rounded">
      <div className=" d-flex justify-content-between">
        <div className="d-flex ">
          <div className="mx-2 col-md-2">
            <img
              className="my-2 rounded-circle img-fluid"
              src={Users.filter((u) => u.id === post.userId)[0].profilepic}
              alt="here imaage"
            />
          </div>
          <div className="mx-3 my-2">
            <div>{Users.filter((u) => u.id === post.userId)[0].username}</div>
            <div className="text-muted">9 sept 2022</div>
          </div>
        </div>
        <div className="mx-2">
          <div className="">
            <h4>...</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <img className="img-fluid rounded" src={post.photo} alt="" />
      </div>
      <div className="d-flex justify-content-between mx-2">
        <div className="">{post.like} likes </div>
        <div className="d-flex">
          <div className="mx-1">{post.comment} Comments</div>
          <div className="mx-1">17 Shares</div>
        </div>
      </div>
      <hr className="mx-2" />
      <div className="mx-1 d-flex justify-content-between">
        <div className="">
          <span>
            <FavoriteIcon style={{ color: "#ff1744" }} />
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
        <div className="mx-2 d-flex justify-content-between">
          <input
            className="rounded form-control form-control-sm"
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
