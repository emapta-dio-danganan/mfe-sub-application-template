import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";

const SubAppConso = lazy(() => import("./pages/conso/Conso"));
const SubAppDisplay = lazy(() => import("./pages/conso/Display"));
const SubAppDragDropContainer = lazy(() => import("./pages/conso/DragDropDiv"));
const SubAppFileViewer = lazy(() => import("./pages/conso/FileViewer"));
const SubAppAffiliateSearch = lazy(() =>
  import("./pages/conso/AffiliateSearch")
);
const SubAppCalendar = lazy(() => import("./pages/conso/Calendar"));
const SubAppWysiwyg = lazy(() => import("./pages/conso/Wysiwyg"));
const SubFileDragAndDrop = lazy(() => import("./pages/conso/FileDragNDrop"));
const ClientManagementConso = lazy(() =>
  import("./pages/client-management/Conso")
);
const ClientManagementCreateCompany = lazy(() =>
  import("./pages/client-management/CreateCompany")
);
const SubAppInputs = lazy(() => import("./pages/forms/Conso"));
const SubAppProfileImage = lazy(() => import("./pages/conso/ProfileConso.js"));
const SubAppCategoryMenu = lazy(() => import("./pages/conso/CategoryMenu"));
const SubAppContainer = lazy(() => import("./pages/conso/Container"));

const SubPages = () => (
  <div id="main">
    <Suspense fallback={"Loading..."}>
      <Switch>
        <Route exact path="/" render={() => <SubAppConso />} />
        <Route exact path="/sub-app" render={() => <ClientManagementConso />} />
        <Route exact path="/sub-app-conso" render={() => <SubAppConso />} />
        <Route
          exact
          path="/sub-app-container"
          render={() => <SubAppContainer />}
        />
        <Route exact path="/sub-app-inputs" render={() => <SubAppInputs />} />
        <Route exact path="/sub-app-display" render={() => <SubAppDisplay />} />
        <Route
          exact
          path="/sub-app-drag-drop-div"
          render={() => <SubAppDragDropContainer />}
        />
        <Route
          exact
          path="/sub-app-drag-drop-file"
          render={() => <SubFileDragAndDrop />}
        />

        <Route
          exact
          path="/sub-app-fileviewer"
          render={() => <SubAppFileViewer />}
        />

        <Route
          exact
          path="/sub-app-profile-image"
          render={() => <SubAppProfileImage />}
        />

        <Route
          exact
          path="/sub-app-affiliate-search"
          render={() => <SubAppAffiliateSearch />}
        />

        <Route
          exact
          path="/sub-app-calendar"
          render={() => <SubAppCalendar />}
        />

        <Route
          exact
          path="/sub-app-category-menu"
          render={() => <SubAppCategoryMenu />}
        />

        <Route exact path="/sub-app-wysiwyg" render={() => <SubAppWysiwyg />} />

        <Route
          exact
          path="/sub-app/client-management"
          render={() => <ClientManagementConso />}
        />
        <Route
          exact
          path="/sub-app/client-management/create-company"
          render={() => <ClientManagementCreateCompany />}
        />
      </Switch>
    </Suspense>
  </div>
);

const SubContent = (props) => {
  useEffect(() => {
    document.getElementById("app-body").classList.add("v2");
    return function cleanup() {
      document.getElementById("app-body").classList.remove("v2");
    };
  }, []);

  return <SubPages {...props} view={props._userInformation.view} />;
};

const mapStateToProps = (state) => {
  return {
    _userInformation: state.userInformation,
    _acl: state.acl,
  };
};

export default withRouter(connect(mapStateToProps, null)(SubContent));
