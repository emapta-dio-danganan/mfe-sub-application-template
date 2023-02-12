import React, { useState, Fragment, useEffect } from "react";
import { SVG_BADGE_PENDING, SVG_BADGE_DONE, SVG_CLOSE_GRAY, SVG_BADGE_LOCKED, SVG_BADGE_COMPLETED } from '../../assets/Asset';


const CategoryMenu = props => {
    let { title, data, selected, inner, preSelected, loaded} = { ...props };
    let categoryMenuInner = inner && inner ==true ?  'category-menu-inner':  ''
    let [selectedData, setSelectedData] = useState(null);
    let [selectedMain, setSelectedMain] = useState(null);




    useEffect(() => {
        if (data && data.constructor === Array && data.length) {
            let filterSelectedData = data.filter(item => {
                if(item.subData && item.subData.constructor === Array && item.subData.length > 0){
                    let filteredSubData = item.subData.filter(subItem => (subItem.action === selected));
                    return filteredSubData.length > 0;
                } else {
                    return item.action === selected;
                }
            });
            if(filterSelectedData.length > 0 && selectedData === null){
                setSelectedData(filterSelectedData[0].action);
                setSelectedMain(filterSelectedData[0].action);
            }
            if(preSelected){
                setSelectedMain(preSelected)
            }
        } else {
            setSelectedData(null);
        }
    });

    let selectCategory = (e, category) => {
        if(e && e.preventDefault){
            e.preventDefault();
        }

        if(category.subData && category.subData.constructor === Array && category.subData.length > 0){
            setSelectedData(category.action)
        } else {
            setSelectedData(category.action);
            setSelectedMain(category.action);
            if(props.getActions){
                props.getActions('category-menu', category.action)
            } else {
                console.error("Cannot find getActions property.")
            }
        }
    }

    let selectSubCategory = (e, subCategory) => {
        if(e && e.preventDefault){
            e.preventDefault();
        }
        if (data && data.constructor === Array && data.length) {
            let filterSelectedData = data.filter(item => {
                if(item.subData && item.subData.constructor === Array && item.subData.length > 0){
                    let filteredSubData = item.subData.filter(subItem => (subItem.action === subCategory.action));
                    return filteredSubData.length > 0;
                } else {
                    return item.action === subCategory.action;
                }
            });
            setSelectedMain(filterSelectedData[0].action);
        }
        if(props.getActions){
            props.getActions('category-menu', subCategory.action)
        } else {
            console.error("Cannot find getActions property.")
        }
    }

    return (
        <div className={"card category-menu "+categoryMenuInner} data-testid="category-menu">

            {
                title && title.constructor === String ? (
                    <h6>{title}</h6>
                ) : null
            }
            {
                loaded ?
                data && data.constructor === Array && data.length > 0 ? (
                    <div className="category-list">
                        {
                            data.map((item, idx) => (
                                <div className="category-group"
                                    key={`category-${idx}`}
                                    {...(item.status !== 'locked' ? { onClick: event => selectCategory(event, item) } : { onClick: event => { event.preventDefault() } })}
                                >
                                    <div className={`main-category ${item.action === selectedMain || item.action === selected ? "selected" : ''}`}>
                                        <div className="icon">
                                            {
                                                item.status === 'in-progress' ? (
                                                    SVG_BADGE_PENDING
                                                ) : item.status === 'locked' ? (
                                                    SVG_BADGE_LOCKED
                                                ) : item.status === 'completed' ? (
                                                    SVG_BADGE_COMPLETED
                                                ) : item.status === 'standard' ? (
                                                    item.icon
                                                ) : SVG_BADGE_PENDING
                                            }
                                        </div>
                                        <span>{item.label}</span>
                                    </div>

                                    <div className="subcategory">
                                    {
                                        selectedData === item.action && item.subData && item.subData.constructor === Array && item.subData.length > 0 ? (
                                            item.subData.map((subItem, subIdx) => (
                                                <div className={`category-list-item ${subItem.action === selected ? "selected" : ''}`}
                                                    key={`sub-category-${subIdx}`}
                                                    {...(subItem.status !== 'locked' ? { onClick: event => selectSubCategory(event, subItem) } : { onClick: event => { event.preventDefault() } })}
                                                >
                                                    <div className="icon">
                                                        {
                                                            subItem.status === 'in-progress' ? (
                                                                SVG_BADGE_PENDING
                                                            ) : subItem.status === 'locked' ? (
                                                                SVG_BADGE_LOCKED
                                                            ) : subItem.status === 'completed' ? (
                                                                SVG_BADGE_COMPLETED
                                                            ) : subItem.status === 'standard' ? (
                                                                subItem.icon
                                                            ) : SVG_BADGE_PENDING
                                                        }
                                                    </div>
                                                    <span>{subItem.label}</span>
                                                </div>
                                            ))
                                        ) : null
                                    }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : <div>No data found.</div> :
                    <div className="l-category-menu l-shine-container">
                        <div className="l-shine"></div>
                        <div className="l-menu-item">
                            <span></span>
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                        </div>
                        <div className="l-menu-item">
                            <span></span>
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '80px' }}></span>
                            </div>
                        </div>
                        <div className="l-menu-item">
                            <span></span>
                            <div className="l-text">
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '20px' }}></span>
                            </div>
                        </div>
                        <div className="l-menu-item">
                            <span></span>
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                        </div>
                        <div className="l-menu-item">
                            <span></span>
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '80px' }}></span>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default CategoryMenu;
