import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { NODE_API } from "../../constants/UrlConfigs";
import { axiosRoutes } from "../../helpers/GlobalHelper";

const LazyDivBackground = props => {
    let placeholder = props.placeholder ? props.placeholder : "/images/img-emapta-placeholder.png";
    const [imageSrc, setImageSrc] = useState(placeholder)
    //check if the thumbnail is filename or path, if its a path, then there should be no axios call
    let path = props.thumbnail.includes("/");
    if(!path){
        useEffect(async () => {
            let params = {
                attachment: props.thumbnail,
                employee_code: props.employee_code ? props.employee_code : props._user.user.info.employee_code,
                bucket_code: props.bucket_code ? props.bucket_code : props._user.user.info.bucket_code,
                folder: "ANNOUNCEMENT"
            }
            const response = await axiosRoutes('get', `${NODE_API}/utils/get-attachment`, null, { params: params });
            let { success, src, error } = response;
            if (success) {
                setImageSrc(src);
            }
        })
    }
    return <div style={{ backgroundImage: `url("${imageSrc}")` }} />
}

const mapStateToProps = state => {
    return {
        _view: state.user.view,
        _tkn: state.user.user._tkn,
        _user: state.user,
        _userInfo: state.userInformation,
    };
};


export default connect(mapStateToProps, null)(LazyDivBackground)