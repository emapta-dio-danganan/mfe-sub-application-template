import React, { useState, useEffect, Fragment, PureComponent } from "react";
import renderHtml from 'html-react-parser';


class Information extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            listRow: this.props.listRow,
            rowAnchorEl: null,
            items: this.props.item,
            hide: this.props.hide,
            title: this.props.title,
        }

    }

    showRowDetails(e, idx) {
        e.preventDefault();
        let { rowAnchorEl } = this.state;
        if (rowAnchorEl === idx) {
            this.setState({
                rowAnchorEl: null
            })
        } else {
            this.setState({
                rowAnchorEl: idx
            })
        }
    }



    render() {
        let { rowAnchorEl, listRow, items, hide, title } = this.state;
        return (
            <React.Fragment>
                <div className="popover popover-i">

                    {
                        typeof this.props.desc != 'undefined' && this.props.desc ? (
                            <div className="popover-i-content">
                                <div className="popover-i-title">
                                    <h6>{title}</h6>
                                    <div className="popover-i-close" onClick={hide}></div>
                                </div>
                                <div>{typeof items != 'undefined' && items ? renderHtml(items) : ''}
                                </div>
                            </div>
                        ) : (
                                <div className="popover-i-content">
                                    <div className="popover-i-title">
                                        <h6>{title}</h6>
                                        <div className="popover-i-close" onClick={hide}></div>
                                    </div>
                                    {listRow ? (
                                        listRow.length >= 1 ? (
                                            listRow.map((item, key) => (

                                                <React.Fragment key={key}>
                                                    <div className="popover-i-category" onClick={(event) => this.showRowDetails(event, key)}>
                                                        <div>
                                                            <h6>{item}</h6>
                                                        </div>

                                                        {
                                                            rowAnchorEl === key ? (<img src="/images/icons/icon-arrowup-gray.svg" alt="" />) : (<img src="/images/icons/icon-arrowdown-gray.svg" alt="" />)
                                                        }
                                                    </div>
                                                    {
                                                        rowAnchorEl === key ? (
                                                            <div className="popover-i-details">
                                                                {item == 'COMPANY POLICY' ? (
                                                                    typeof items != 'undefined' && typeof items.companyPolicy != 'undefined' && items.companyPolicy ? renderHtml(items.companyPolicy) : '') :
                                                                    (item == 'SYSTEM POLICY' ? (typeof items != 'undefined' && typeof items.systemPolicy != 'undefined' && items.systemPolicy ? renderHtml(items.systemPolicy) : '') :
                                                                        (typeof items != 'undefined' && typeof items.instruction != 'undefined' && items.instruction ? renderHtml(items.instruction) : '')
                                                                    )
                                                                }
                                                            </div>
                                                        ) : null
                                                    }
                                                </React.Fragment>
                                            )

                                            )
                                        ) : null
                                    ) : null


                                    }
                                </div>
                            )
                    }
                </div>
            </React.Fragment>
        )
    }

}

export default Information;
