import React, { Component, Fragment } from "react";
import { Link, useHistory } from 'react-router-dom';

// import AnnouncementPopover from "../../../pages/Talent/Announcement/AnnouncenmentPopover";
// import ClockInClockOut from "./components/ClockInClockOut";
// import Notification from "./Notification";
// import Announcement from "./Announcement";

import { axiosRoutes,defaultHeaders, serverTime } from '../../helpers/GlobalHelper';


// Redux
// import { store } from '../../redux-store/Store';
// import { connect } from "react-redux";

// import ProfileMenu from './ProfileMenu';
// import KnowledgeCenter from '../../../components/Header/components/KnowledgeCenter';
// import { Popover } from "@material-ui/core";


import { SVG_USER, SVG_ARROW_DOWN, SVG_LOGO_EMPOWER } from '../../assets/Asset';

// import jwtDecode from 'jwt-decode';
// import jwtEncode from 'jwt-encode';

/**
* reduxStore
* Allow access on the redux store
*/
// const reduxStore = () => {
//     return store.getState();
// }
// store.subscribe(reduxStore);



/**
* AppMenu
* Function that will render the role dropdown
*/

const AppMenu = props => { 
    let cview = props.defaultView.toLowerCase();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElParentNode, setAnchorElParentNode] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [selectedView, setSelectedView] = React.useState(cview);

    const history = useHistory();
    const isMenuOpen = Boolean(anchorEl);

    function handleProfileMenuOpen(event) {
        event.preventDefault();
        setAnchorEl(event.currentTarget);
        setAnchorElParentNode(event.currentTarget.parentNode);
    }

    function handleMobileMenuClose() {
        setMobileMoreAnchorEl(null);
    }

    function handleMenuClose() {
        setAnchorEl(null);
        handleMobileMenuClose();
    }

    function handleMobileMenuOpen(event) {
        setMobileMoreAnchorEl(event.currentTarget);
    }

    // /**
    // * localOnClick
    // * Function that is triggered upon selecting a role on the dropdown
    // */
    // async function localOnClick(event, action, value) {
        
    //     event.preventDefault();

    //     setSelectedView(value);
        
    //     let decryptedUserToken = JSON.parse(jwtDecode(props._tkn, process.env.APP_KEY));
    //     if(decryptedUserToken && decryptedUserToken.user_type){
    //         decryptedUserToken.user_type = value;

    //         let updatedUserToken = jwtEncode(JSON.stringify(decryptedUserToken), process.env.APP_KEY);

    //         localStorage.setItem("_tkn", updatedUserToken);

    //         if(props.acl && props.acl[value] && 
    //             props.acl[value].menus && 
    //             props.acl[value].menus.sidebar && 
    //             props.acl[value].menus.sidebar.pages
    //         ){
    //             let permissionFlag = false;
    //             let pageArr = Object.values(props.acl[value].menus.sidebar.pages);
    //             let redirectionLink;
    //             pageArr.map((item,idx)=>{
    //                 let breadcrumbs;

    //                 //check if there are submenus
    //                 if(item.children){
    //                     if(typeof item.children === 'object'){
    //                         Object.keys(item.children).map((itm)=>{
    //                             if(item.children[itm].link){
    //                                 if((window.location.pathname.includes(item.children[itm].link) || window.location.pathname == item.children[itm].link) && item.children[itm].link !== "/" && item.children[itm].link !== ""){
    //                                     permissionFlag = true;
    //                                     redirectionLink = item.children[itm].link;
    //                                 }
    //                             }
    //                         });
    //                     }
    //                 }else{
    //                     breadcrumbs = item.link.split("/"); //checking the 1st breadcrumbs;

    //                     if(breadcrumbs[1]){

    //                         // console.log(breadcrumbs[1]);

    //                         //checking if its shop and rewards channel, it would be a different behaviour

    //                         if(breadcrumbs[1] == "shop-and-rewards" && window.location.pathname.includes("/channel/shop-and-rewards/")){
    //                             permissionFlag = true;
    //                             redirectionLink = "/channel/shop-and-rewards/ALL/1";
    //                         }else{
    //                             if(window.location.pathname.includes(breadcrumbs[1]) && item.link !== "/" && item.link !== ""){
    //                                 permissionFlag = true;
    //                                 redirectionLink = item.link;
    //                             }
    //                         }
    //                     }   
    //                 }
                    
    //             });



    //             if(permissionFlag){
    //                 //dont kick
    //                 history.push(redirectionLink)
    //                 // setTimeout(function () {
    //                 //     window.location.href = redirectionLink;
    //                 // }, 500);
    //             }else{
    //                 // kick to dashboard
    //                 if (value.toUpperCase() == 'ADMIN'){
    //                     // history.push('/admin');
    //                     // window.location.href = "/admin";
    //                     setTimeout(function () {
    //                         // window.location.href = "/admin";
    //                         history.push('/admin');
    //                     }, 50);
    //                 } else {
    //                     // history.push('/')
    //                     setTimeout(function () {
    //                         // window.location.href = "/";
    //                         history.push('/')
    //                     }, 50);
    //                 }
    //             }
    //         }

    //     }else{
    //         console.error("CHANGE_VIEW error", response);
    //     }

    //     // let params = {
    //     //     tkn: props._tkn,
    //     //     roles: JSON.stringify(props.roles),
    //     //     view: value,
    //     // }

    //     // const response = await axiosRoutes('get', `${NODE_API}/user/change-view`, null, {params: params});
    //     // let { success, content } = { ...response };

    //     // if(success){
    //     //     if(content && content.updatedUserToken){
    //     //         // props.saveToken(content.updatedUserToken);
    //     //         localStorage.setItem("_tkn", content.updatedUserToken);
    //     //     }

            

    //     // }else{
    //     //     console.error("CHANGE_VIEW error", response);
    //     // }


    //     //updating the value of view in the redux
    //     props.changeView(value);

    //     setAnchorEl(null);
    //     // setAnchorElParentNode(null);
    //     // handleMobileMenuClose();
    // }

    const menuId = "primary-search-account-menu";

    /**
    * renderMenu
    * Function that displays all the roles from the redux via dropdown
    */

    // const renderMenu = (
    //     <Fragment>
    //         <Popover
    //             container={anchorElParentNode}
    //             id={menuId}
    //             open={isMenuOpen}
    //             anchorEl={anchorEl}
    //             onClose={handleMenuClose}
    //             anchorOrigin={{
    //                 vertical: 'bottom',
    //                 horizontal: 'left',
    //             }}
    //             keepMounted
    //             transformOrigin={{
    //                 vertical: 'top',
    //                 horizontal: 'left',
    //             }}
    //         >
    //             <div className="popover popover-list">
    //                 {
    //                     props.roles.map((view, index) =>
    //                         <Link
    //                             to="#"
    //                             key={index}
    //                             onClick={event => localOnClick(event, "views", view.value)}
    //                             className={selectedView.toUpperCase() == view.value.toUpperCase() ? "is-active" : ""}
    //                         >
    //                         {
    //                             view.label == "TALENT" ? "Employee" :
    //                                 (view.label == "CLIENT" ? 'Manager' :
    //                                     (view.label == "HR_CLIENT" ? 'HR-Client' :
    //                                         (view.label == "HR_ADMIN" ? 'HR-Admin' :
    //                                         view.label)))
    //                         }
    //                         </Link>   
    //                     )}
    //             </div>
    //         </Popover>

    //     </Fragment>
    // );

    // return (
    //     <Fragment>
    //         <Link to="#" className={`${isMenuOpen ? 'is-active' : ''}`}
    //             onClick={handleProfileMenuOpen}
    //         >
    //             <div>
    //             {
    //                 (selectedView == "staff" || selectedView == "STAFF") ||
    //                     (selectedView == "TALENT" || selectedView == "talent") ?
    //                     "employee"
    //                     :
    //                     (
    //                         selectedView == "client" || selectedView == "CLIENT" ?
    //                             "manager" :
    //                             (
    //                                 (selectedView == "hr_client" || selectedView == "HR_CLIENT") ?
    //                                     "hr-client" :
    //                                     (selectedView == "hr_admin" || selectedView == "HR_ADMIN") ?
    //                                         "hr-admin" :
    //                                         selectedView
    //                             )
    //                     )
    //             }
    //             </div>
    //             {SVG_USER}
    //             <span>{SVG_ARROW_DOWN}</span>
    //         </Link>
    //         {renderMenu}
    //     </Fragment>
    // );
};

/**
* Header
* Render the topbar menu
*/
const Header = props => {

    let systemViews = [
        {
            id: "Talent"
        },
        {
            id: "Client"
        },
        {
            id: "HR"
        }
    ]

    const [recorder, setRecorder] = React.useState(false);
    const [topToggle, setTopToggle] = React.useState(null);

    const isToggleOpen = Boolean(topToggle);


    function handleRecorder(value) {
        setRecorder(value);
    }

    function localOnClickMenu(event, action) {
        event.preventDefault();
        props.onClickHeader(event, action);
        setTopToggle(!isToggleOpen);
    }

    //checking ACL
    let topBarAcl = false;
    let topBarAclDetails;

    // if(props._acl[props._view.toUpperCase()] && props._acl[props._view.toUpperCase()].menus && props._acl[props._view.toUpperCase()].menus.top_menu){
    //     topBarAcl = true;
    //     topBarAclDetails = props._acl[props._view.toUpperCase()].menus.top_menu;
    // }
    

    return (
        <Fragment>
            <div className="top-nav-wrap">
                <div className="top-nav">
                    <div className="top-left">
                        {
                            // window.location.pathname !== '/home' ? (
                            <div className={isToggleOpen ? "top-toggle is-active" : "top-toggle"} onClick={event => localOnClickMenu(event, 'sidebar')}><div></div></div>
                            // ) : null
                        }
                        {/* <div className="top-logo">
                            <a href="/" >
                                {SVG_LOGO_EMPOWER}
                            </a>
                        </div>
                        <div className="top-roles">
                            <AppMenu
                                changeView={props.persistChangeUserView}
                                saveToken={props.saveToken}
                                systemUsers={systemViews}
                                onClickViews={props.onClickViews}
                                roles={props._roles}
                                defaultView={props._view}
                                userInfo={props._userInfo}
                                acl={props._acl}
                                _tkn={props._tkn}
                            />
                        </div> */}
                    </div>

                    
                </div>
            </div>
        </Fragment>
    )
}

// const mapStateToProps = state => {

//     return {
//         _acl: state.acl.systems,
//         _view: state.userInformation.view,
//         _roles: state.acl.roles,
//         _userInfo: state.userInformation,
//         _tkn: state.user.user._tkn,
//         _userInformation: state.userInformation,
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         persistChangeUserView: data => dispatch({
//             type: "PERSIST_CHANGE_USER_VIEW",
//             data: data,
//             reducer: 'user-info'
//         }),
//         saveToken: data => dispatch({ 
//             type: "SAVE_TOKEN", 
//             data: data 
//         }),
//     };
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Header);

export default Header
