import React from 'react';
import {getInitialsOfTwoStrings} from '../../helpers/GlobalHelper';
const profImgURL = "https://storage.googleapis.com/hrispublicbucket/";

const ProfileConso = (props) => {
    const IMG_URL = profImgURL + props.params.employeeCode + '/' + props.params.bucketCode + '/PROFILE/' + props.params.img;
    const IMGE_PRFILE = props.params.img && props.params.img.constructor === String ? <img src={IMG_URL} /> : <span id='initial-text'>{getInitialsOfTwoStrings(props.params.firstName, props.params.lastName)}</span>;
    let NAME = '';
    NAME = props.params.firstName && props.params.firstName.constructor === String ? props.params.firstName : NAME;
    NAME = props.params.lastName && props.params.lastName.constructor === String ? `${NAME} ${props.params.lastName}` : NAME;
    NAME = NAME.trim();

    return (
        <React.Fragment>
            {
                props && props.params && props.params.type && props.params.type == "talent-directory" ? (
                    <div className="profile-item">
                        <div className="thumb"id="thumb-pic">{IMGE_PRFILE}</div>
                        <div className="profile-item-name">
                        { NAME ? <h6 id='name-text'>{NAME} {props.params.employeeNumber ? '('+props.params.employeeNumber+')' : ''}</h6> : '' }
                        {
                            props.params.job && props.params.job.constructor === String ?
                                <label id='job-text'>{props.params.job}</label> :
                                null
                        }
                        {
                            props.params.siteName && props.params.siteName.constructor === String ?
                                <span id='company-text'>{props.params.siteName}</span>
                                :
                                null
                        }
                        </div>
                    </div>
                ) : <div className="profile-item">
                        <div className="thumb"id="thumb-pic" data-testid="thumbnail">{IMGE_PRFILE}</div>
                        <div className="profile-item-name">
                        {
                            NAME ? <h6 id='name-text'>{NAME}</h6> : '-'
                        }
                        {
                            props.params.job && props.params.job.constructor === String ?
                                <label id='job-text'>{props.params.job}</label> :
                                null
                        }
                        {
                            props.params.department && props.params.department.constructor === String ?
                                <span id='department-text'>{props.params.department}</span>
                                :
                                null
                        }
                        {
                            props.params.company && props.params.company.constructor === String ?
                                <span id='company-text'>{props.params.company}</span>
                                :
                                null
                        }
                        {
                            props.params.timestamp && props.params.timestamp.constructor === String ?
                                <span id='timestamp-text'>{props.params.timestamp}</span>
                                :
                                null
                        }
                        {
                            props.params.personalEmail && props.params.personalEmail.constructor === String ?
                                <span id='personalEmail-text'>{props.params.personalEmail}</span>
                                :
                                null
                        }
                        {
                            props.params.updatedAt && props.params.updatedAt.constructor === String ?
                                <span id='updatedAt-text'>{props.params.updatedAt}</span>
                                :
                                null
                        }
                        </div>
                    </div>
            }
        </React.Fragment>
    );
}

export default ProfileConso;
