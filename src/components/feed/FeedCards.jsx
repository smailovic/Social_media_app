import React from "react";
import Follow from "./Follow";
import RecentEvents from "./RecentEvents";
import Birthdays from "./Birthdays";

export default function FeedCards() {
  return (
    <div className="mb-4 mt-2">
      {/*  changed the follow card to a component*/}
      <Follow />
      {/* same for the events */}
      <RecentEvents />
      {/* changing the birthdays card to a component */}
      <Birthdays />
      {/*  */}
      {/*  */}
      <div className="p-2  my-2  rounded border-black">
        <div className="d-flex justify-content-between">
          <div className="">You might like</div>
          <div className="">
            <a href="./">See All</a>
          </div>
        </div>
        <hr />
        <div className="p-4">whatever</div>
      </div>
      {/*  */}
      {/*  */}
      <div className="p-2 border my-2  rounded border-black">
        <div className="d-flex justify-content-between">
          <div className="border">You might like</div>
          <div className="">
            <a href="./">See All</a>
          </div>
        </div>
        <hr />
        <div className="p-4">whatever</div>
      </div>
      {/*  */}
    </div>
  );
}
