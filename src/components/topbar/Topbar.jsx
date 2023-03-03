import React from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import { AiOutlineNotification } from 'react-icons/ai';
import { RiSearchLine } from 'react-icons/ri';

export default function Topbar(props) {
  console.log('logout topbar');
  console.log(props.logout);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <span className="ms-2 fw-bold">Smapp</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <form className="d-flex col-md-5">
            <div className="input-group d-flex align-items-center">
              <span className="bg-transparent  mx-2 border-0">
                <RiSearchLine />
              </span>
              <input
                className="form-control  border my-auto
                 rounded-0"
                type="search"
                placeholder="Search for posts, pictures, or videos"
                aria-label="Search"
              />
            </div>
          </form>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn  text-primary me-2">
            <AiOutlineNotification className="me-2" />
          </button>
          <div className="dropdown">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Layt Yagami
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button className="dropdown-item" type="button">
                  Profile
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Settings
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button
                  onClick={props.logout}
                  className="dropdown-item"
                  type="button"
                >
                  <BiLogOutCircle className="me-2" />
                </button>
              </li>
            </ul>
          </div>
          <img
            className="rounded-circle ms-2"
            src="assets/profile.jpg"
            alt="Profile"
            width="40"
            height="40"
          />
        </div>
      </div>
    </nav>
  );
}
