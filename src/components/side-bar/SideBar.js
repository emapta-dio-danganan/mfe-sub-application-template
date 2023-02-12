// Imports
import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  let { isOpen, pages } = { ...props };
  let [childrenArray, setChildrenArray] = useState([]);

  /**
   * getActiveLink
   * Set class as active state when the link on menu is same as the url path
   */
  let getActiveLink = (link) => {
    if (link && link === window.location.pathname) {
      return "is-active";
    } else {
      return "";
    }
  };

  /**
   * showPageChildren
   * Add and remove menu id on the array for displaying children of each menu
   */
  let showPageChildren = (event, page) => {
    if (childrenArray.includes(page)) {
      childrenArray = childrenArray.filter((item) => item !== page);
      setChildrenArray(childrenArray);
    } else {
      childrenArray.push(page);
      setChildrenArray(childrenArray);
    }
  };

  return (
    <Fragment>
      <div className={`side-nav ${isOpen ? "" : "is-open"}`}>
        <ul className="side-nav-links">
          <li key={`to-0`}>
            <Link key={`sub-app-conso`} to={"/sub-app-conso"}>
              <div className="side-nav-icon"></div>
              <span>Sample Conso</span>
            </Link>
          </li>
          <li key={`to-1`}>
            <Link key={`sub-app-container`} to={"/sub-app-container"}>
              <div className="side-nav-icon"></div>
              <span>Container</span>
            </Link>
          </li>
          <li key={`to-2`}>
            <Link key={`sub-app-other-pages`} to={"/sub-app-inputs"}>
              <div className="side-nav-icon"></div>
              <span>Inputs</span>
            </Link>
          </li>
          <li key={`to-3`}>
            <Link key={`sub-app-display`} to={"/sub-app-display"}>
              <div className="side-nav-icon"></div>
              <span>Display</span>
            </Link>
          </li>
          <li key={`to-4`}>
            <Link key={`sub-app-drag-drop-div`} to={"/sub-app-drag-drop-div"}>
              <div className="side-nav-icon"></div>
              <span>Drag and Drop Container</span>
            </Link>
          </li>

          <li key={`to-5`}>
            <Link key={`sub-app-drag-drop-file`} to={"/sub-app-drag-drop-file"}>
              <div className="side-nav-icon"></div>
              <span>File Drag and Drop</span>
            </Link>
          </li>

          <li key={`to-6`}>
            <Link key={`sub-app-fileviewer`} to={"/sub-app-fileviewer"}>
              <div className="side-nav-icon"></div>
              <span>File Viewer</span>
            </Link>
          </li>

          <li key={`to-7`}>
            <Link
              key={`sub-app-affiliate-search`}
              to={"/sub-app-affiliate-search"}
            >
              <div className="side-nav-icon"></div>
              <span>Affiliate Search</span>
            </Link>
          </li>

          <li key={`to-8`}>
            <Link key={`sub-app-profile-image`} to={"/sub-app-profile-image"}>
              <div className="side-nav-icon"></div>
              <span>Profile Image</span>
            </Link>
          </li>

          <li key={`to-9`}>
            <Link key={`sub-app-calendar`} to={"/sub-app-calendar"}>
              <div className="side-nav-icon"></div>
              <span>Calendar</span>
            </Link>
          </li>

          <li key={`to-10`}>
            <Link key={`sub-app-wysiwyg`} to={"/sub-app-wysiwyg"}>
              <div className="side-nav-icon"></div>
              <span>Wysiwyg Editor</span>
            </Link>
          </li>

          <li key={`to-11`}>
            <Link key={`sub-app-category-menu`} to={"/sub-app-category-menu"}>
              <div className="side-nav-icon"></div>
              <span>Category Menu</span>
            </Link>
          </li>

          <li key={`to-12`}>
            <Link key={`client-management`} to={"/client-management"}>
              <div className="side-nav-icon"></div>
              <span>Client Management</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`side-overlay ${isOpen ? "" : "is-open"}`}></div>
    </Fragment>
  );
};

export default SideBar;
