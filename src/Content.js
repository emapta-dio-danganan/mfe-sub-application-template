import React, { useEffect, useRef, useState } from "react";
import { Router } from "react-router-dom";
import _ from "lodash";
import { connect } from "react-redux";
import { NODE_API, WEB, AUTH_API } from "./constants/UrlConfigs";
import {
  axiosRoutes,
  extractUrlParams,
  defaultHeaders,
} from "./helpers/GlobalHelper";

import Sidebar from "./components/side-bar/SideBar";
import Header from "./components/header/Header";
import SubContent from "./SubContent";

const Content = (props) => {
  const {
    history,
    containerReduxStore,
    saveAclData,
    saveAuthorizationToken,
    saveUserInformation,
    persistSaveAuthorizationToken,
    persistSaveUserInformation,
    _authentication,
    _userInformation,
  } = { ...props };

  const PREV_CONTAINER_STORE = useRef(null);

  const [showTempSidebar, setShowTempSidebar] = useState(true);

  useEffect(() => {
    //UPDATE THE STORE ONLY WHEN THE CONTAINER STORE CHANGE
    if (!_.isEqual(PREV_CONTAINER_STORE.current, containerReduxStore)) {
      PREV_CONTAINER_STORE.current = containerReduxStore;

      containerReduxStore && syncContainerStoreToLocal();
      !containerReduxStore && verifyAuthentication() && appendV2Styles();
    }
  }, [containerReduxStore]);

  const appendV2Styles = () => {
    document.getElementById("app-body").classList.add("v2");
    document.getElementById("main").classList.add("main");
  };

  const syncContainerStoreToLocal = () => {
    try {
      const { acl, authentication, userInformation } =
        PREV_CONTAINER_STORE.current;
      saveAclData(acl);
      saveAuthorizationToken(authentication);
      saveUserInformation(userInformation);
    } catch (error) {
      console.error("Content: Error in syncContainerStoreToLocal()");
      console.error(error);
    }
  };

  const verifyAuthentication = async () => {
    try {
      const urlParams = extractUrlParams(window.location.search);

      //VALIDATE AUTH ID
      if (urlParams.authID) {
        try {
          let params = {
            authID: urlParams.authID,
          };
          const response = await axiosRoutes(
            "get",
            `${NODE_API}/auth/get-auth-data`,
            null,
            { params: params }
          );
          let { success, content } = response;
          if (success) {
            const { authorizationTokens, userInfo } = content;

            persistSaveAuthorizationToken(authorizationTokens);
            persistSaveUserInformation(userInfo);

            window.history.pushState(null, null, WEB);
          } else {
            window.location.href = AUTH_API + WEB;
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        //CHECK THE REDUX PERSIST FOR EXSISTING AUTH BEFORE REDIRECTING TO LOGIN AGAIN
        if (_authentication && !_authentication.accessToken) {
          window.location.href = AUTH_API + WEB;
        } else {
          getEmployeeAcl();
        }
      }
    } catch (error) {
      console.error("Content: Error in verifyAuthentication()");
      console.error(error);
    }
  };

  const getEmployeeAcl = async () => {
    try {
      let headers = {
        headers: {
          ...defaultHeaders({ ..._authentication }, { ..._userInformation })
            .headers,
        },
      };
      let params = {
        employeeCode: _userInformation.profile.employeeCode,
        bucketCode: _userInformation.profile.bucketCode,
        view: _userInformation.view,
      };

      const response = await axiosRoutes(
        "get",
        `${NODE_API}/user/get-employee-acl`,
        headers,
        { params: params }
      );

      let { success, content, error } = { ...response };

      if (success) {
        saveAclData({ roles: content.roles, systems: content.systems });
      } else {
        console.error(
          "Unable to fetch employee acl",
          JSON.stringify(error ? error : "")
        );
      }
    } catch (error) {
      console.error("Content: Error in getEmployeeAcl");
      console.error(error);
    }
  };

  const toogleShowSidebar = (event, action) => {
    event?.preventDefault && event.preventDefault();
    if (action == "sidebar") {
      setShowTempSidebar(!showTempSidebar);
    }
  };

  try {
    return (
      <>
        <Router history={history}>
          {!containerReduxStore ? (
            <>
              <Header
                onClickHeader={(event) => toogleShowSidebar(event, "sidebar")}
                showSidebar={showTempSidebar}
              />
              <Sidebar isOpen={showTempSidebar} />
            </>
          ) : null}
          <SubContent />
        </Router>
      </>
    );
  } catch (error) {
    console.error("There is a problem rendering the Content page");
    return <h4>Content Page Error</h4>;
  }
};

const mapStateToProps = (state) => {
  return {
    _acl: state.acl,
    _authentication: state.authentication,
    _userInformation: state.userInformation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeToken: () => dispatch({ type: "LOGOUT_USER" }),
    saveAclData: (data) =>
      dispatch({ type: "SAVE_ACL_DATA", data: data, reducer: "user-acl" }),
    saveAuthorizationToken: (data) =>
      dispatch({
        type: "SAVE_AUTHORIZATION_TOKENS",
        data: data,
        reducer: "authorization",
      }),
    saveUserInformation: (data) =>
      dispatch({
        type: "SAVE_USER_INFORMATION",
        data: data,
        reducer: "user-info",
      }),
    //WITH PERSIST
    persistSaveAuthorizationToken: (data) =>
      dispatch({
        type: "PERSIST_SAVE_AUTHORIZATION_TOKENS",
        data: data,
        reducer: "authorization",
      }),
    persistSaveUserInformation: (data) =>
      dispatch({
        type: "PERSIST_SAVE_USER_INFORMATION",
        data: data,
        reducer: "user-info",
      }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
