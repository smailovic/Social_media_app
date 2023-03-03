import React from 'react';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExploreIcon from '@mui/icons-material/Explore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function sidebar() {
  return (
    <div className="scroll  bg-white  ">
      <div className="rounded px-4">
        <div className="my-2 ">
          <span className="">
            <DynamicFeedIcon />
          </span>{' '}
          Feed
        </div>
        <div className="my-4 ">
          <span>
            <PeopleRoundedIcon />
          </span>{' '}
          My community
        </div>
        <div className="my-4 ">
          <span>
            <ChatIcon />
          </span>{' '}
          messages
        </div>
        <div className="my-4 ">
          <span>
            <NotificationsNoneIcon />
          </span>{' '}
          notifications
        </div>
        <div className="my-4 ">
          <span>
            <ExploreIcon />
          </span>{' '}
          explore
        </div>
        <div className="my-4 ">
          <span>
            <AccountCircleIcon />
          </span>{' '}
          profile
        </div>
        <div className="my-4 ">
          <span>
            <SettingsIcon />
          </span>{' '}
          settings
        </div>
        <div className="my-4 ">
          <span>
            <LogoutIcon />
          </span>{' '}
          Logout
        </div>
      </div>
    </div>
  );
}
