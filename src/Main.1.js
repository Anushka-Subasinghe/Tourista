import React from "react";
import logo from "./images/Logo.png";
import map from "./images/Map.png";
import cal from "./images/cal.png";
import Popular from "./images/Popular.png";
import gallery from "./images/Gallery.png";
import review from "./images/Review.png";
import footer from "./images/Footer.png";
import aaaa from "./images/CTA.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./actions/authActions";
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export function Main() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());

    // Reload the page
    window.location.reload();
  };

  return (
    <div className="main">
      <div className="sections1">
        <div className="secrow1">
          <img src={logo} alt="Logo" />
          <div className="rownm0">
            <div className="rownm">Destinations</div>
            <div className="rownm">Gallery</div>
            <div className="rownm">Bookings</div>
            <div className="rownm">Contact</div>
          </div>
          <div className="rownm1">
            {isAuthenticated ? (
              <>
                <div onClick={handleAvatarClick}>
                  <Avatar src="avatar.jpg" alt="User Avatar" />
                </div>
                {isDropdownOpen && (
                  <div className="dropdown-content-column">
                    <div>{user.username}</div>
                    <div>{user.email}</div>
                    <Button onClick={handleLogout}>Logout</Button>
                  </div> )}
              </>
            ) : (
              <>
                {/* Signin and Signup links */}
                <Link to="signin" className="rownm" style={{ textDecoration: "none" }}>
                  Login
                </Link>
                <div className="signup">
                  <Link to="signup" className="rownm" style={{ textDecoration: "none" }}>
                    Sign Up
                  </Link>
                </div>
              </>
            )}
            <div className="rownm">EN</div>
          </div>
        </div>
        <div className="secrow2">
          <div className="rownm2">
            JOURNEY TO
            <br /> EXPLORE WORLD
          </div>
          <div className="rownm3">Travel, enjoy and live a new and full life</div>
          <div className="rownm4">
            {/* Conditionally render Link based on authentication state */}
            {isAuthenticated ? (
              <Link to="/trip-planning" className="rownm" style={{ textDecoration: "none" }}>
                Plan Your Trip
              </Link>
            ) : (
              <Link to="/signin" className="rownm" style={{ textDecoration: "none" }}>
                Plan Your Trip
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="sections2">
        <div className="sec2in">
          Explore
          <div className="sec3in">
            <div className="sec3in1">
              <div className="sec3in11">
                Explore all corners of
                <br /> the world with us.
              </div>
              <div className="sec3in12">
                <div className="sec3in13"></div>
              </div>
            </div>
            <div className="sec3in2">
              <div className="sec3in21">
                <div className="sec3in211">Check - In Date</div>
              </div>
              <div className="sec3in22">
                <div className="sec3in212">Check - Out Date</div>
              </div>
            </div>
          </div>
          <img src={map} width="100%" />
        </div>
      </div>
      <div className="sections3">
        <div className="sections4">
          <div className="sec2in">
            <img src={cal} width="100%" />
          </div>
        </div>
      </div>
      <div className="sections3">
        <div className="sections5">
          <div className="sec2in">
            <img src={Popular} width="100%" />
          </div>
        </div>
      </div>
      <div className="sections3">
        <div className="sections6">
          <div className="sec2in">
            <img src={gallery} width="100%" />
          </div>
        </div>
      </div>
      <div className="sections3">
        <div className="sections7">
          <div className="sec2in">
            <img src={review} width="100%" />
          </div>
        </div>
      </div>
      <div className="sections3">
        <div className="sections8">
          <div className="sec2in">
            <img src={aaaa} width="100%" />
          </div>
        </div>
      </div>
      <div className="sections3">
        <div className="sections9">
          <div className="sec2in">
            <img src={footer} width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}
