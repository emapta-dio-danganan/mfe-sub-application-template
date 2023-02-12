import React from 'react';

const CompanyProfileConso = (props) => {
    let { img, legalName, tradeName, subDetails, companyCode } = {...props};
    
    const companyLogo = `https://storage.googleapis.com/apiv3-resources-public/${companyCode}/hris/company-resources/${img}`

    return (
        <React.Fragment>
        <div className="profile-item">
            <div className="thumb" id="thumb-pic" data-testid="company-img">{ img ? <img src={companyLogo} /> : ''}</div>
            <div className="profile-item-name">
            {
                legalName ? <h6 id='name-text' data-testid="legal-name">{legalName} { tradeName ? <span data-testid="trade-name">({tradeName})</span> : '' }</h6> : '-'
            }
            {
                subDetails && subDetails.constructor === Array && subDetails.length > 0 ? (
                    subDetails.map((item, idx) => (
                        <span key={`sub-details-${idx}`} data-testid={item.type}>{item.value}</span>
                    ))
                ) : null
            }
            </div>
        </div>
        </React.Fragment>
    );
}

export default CompanyProfileConso;
