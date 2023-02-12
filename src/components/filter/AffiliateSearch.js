import InputSelectionHandler from '../input/InputSelectionHandler';
import React, { Component, Fragment } from 'react';

class AffiliateSearch extends Component {
    constructor(props) {
        super(props);

        this.FILTER_COMPANY = [];
        this.FILTER_DEPARTMENT = [];

        this.state = {
            formElement: {
                affiliateInput: {
                    id: 'affiliateInput',
                    type: 'affiliate-textSelect',
                    value: '',
                    placeholder: 'Click to view the search options',
                    disabled: this.props.disabled ? this.props.disabled : false,
                    options: this.props.options && this.props.options.constructor === Array ? this.props.options : [],
                },
            },
            defaultOption: this.props.options && this.props.options.constructor === Array ? this.props.options : [],
            affiliateJson: [],
        }
    }

    componentDidMount(){
        if(this.props.defaultValue){
            this.setState({
                affiliateJson:this.props.defaultValue,
            },()=>{
                this.formatUserDefinedFilter(this.props.defaultValue);
            });
        }
    }

    componentDidUpdate(prevProps) {
        let { defaultOption, formElement } = { ...this.state };

        if(this.props.options && prevProps.options && JSON.stringify(this.props.options) !== JSON.stringify(prevProps.options)){
            formElement.affiliateInput.options = this.props.options && this.props.options.constructor === Array ? this.props.options : [];
            defaultOption = this.props.options && this.props.options.constructor === Array ? this.props.options : [];
            this.setState({ ...this.state, formElement, defaultOption});
        }

        //disabling the affiliate field
        if(this.props.disabled !== prevProps.disabled){
            formElement.affiliateInput.disabled = this.props.disabled;

            this.setState({
                formElement,
            });
        }

        if(this.props.clearFilter){
            if(this.props.clearFilter !== prevProps.clearFilter){
                this.removeAffiliate('all', "affiliateInput",'clear-with-defaultvalue')
            }
        }
    }

    removeAffiliate(idx, inputName, type=null) {
        let { affiliateJson, formElement, defaultOption } = { ...this.state };
        if (idx == "all") {
            affiliateJson = []; //clear the object
            formElement[inputName].placeholder = 'Click to view the search options';
        } else {
            if(!affiliateJson[idx].value){
                formElement[inputName].placeholder = 'Click to view the search options';
            }
            affiliateJson.splice(idx, 1);
        }

        this.formatUserDefinedFilter(affiliateJson);


        if (affiliateJson.length > 0) {
            let flag = false;
            if (affiliateJson[affiliateJson.length - 1].value == "") {
                defaultOption.map((opt) => {
                    if (opt.value == affiliateJson[affiliateJson.length - 1].category) {
                        if (opt.categoryOptions && opt.categoryOptions.length > 0) {
                            formElement[inputName].options = opt.categoryOptions
                            formElement[inputName].options = this.affiliateOptionChecker(inputName, affiliateJson[affiliateJson.length - 1].category, formElement[inputName].options);
                            flag = true;
                        } else {
                            //this means there are no options available
                            if (!flag) {
                                formElement[inputName].options = [];
                            }
                        }
                    } else {
                        if (!flag) {
                            formElement[inputName].options = [];
                        }
                    }
                });

            }else{
                formElement[inputName].options = defaultOption;
            }

        } else {
            //reset the options
            formElement[inputName].options = defaultOption;
        }



        this.setState({ ...this.state, affiliateJson, formElement },()=>{
            if(type && type == "clear-with-defaultvalue"){
                if(this.props.defaultValue){
                    this.setState({
                        affiliateJson:this.props.defaultValue,
                    },()=>{
                        this.formatUserDefinedFilter(this.props.defaultValue);
                    });
                }
            }
        });
    }

    affiliateOptionChecker(inputName, category, options) {
        let { affiliateJson } = { ...this.state };
        //check if the affiliateJson has currently have same value on the category
        affiliateJson.map((item, idx) => {
            if (item.category == category) {
                options.map((optionItem, optionIdx) => {
                    if (optionItem.value == item.value) {
                        options = options.filter(function (item) {
                            return item !== optionItem
                        })
                    }
                });
            }
        })

        return options;
    }

    searchEnterHandler(event, inputName) {
        //this is for the custom value
        let { formElement, affiliateJson, defaultOption } = { ...this.state };

        if (affiliateJson.length > 0 && affiliateJson[affiliateJson.length - 1].value == "") {
            affiliateJson[affiliateJson.length - 1].value = event;
            affiliateJson[affiliateJson.length - 1].valueLabel = event;
            formElement[inputName].options = defaultOption;
            formElement[inputName].placeholder = 'Click to view the search options';
            this.formatUserDefinedFilter(affiliateJson);

            formElement[inputName].value = "";

            this.setState({
                formElement: formElement,
                affiliateJson: affiliateJson,
            });

        } else {
            //commenting this out to avoid the free text on the category.

            if(defaultOption && defaultOption.length > 0){
                const FILTER_CATEGORY = defaultOption.filter(f => f.value === event);

                if(FILTER_CATEGORY.length == 0){
                    //it means that the custom value is not present on the category options
                    affiliateJson.push({
                        "categoryLabel": event,
                        "category": "customText",
                        "valueLabel": "",
                        "value": event,
                        "type": "string",
                    }); 

                    this.formatUserDefinedFilter(affiliateJson);
                }
            }

            

            formElement[inputName].value = "";

            this.setState({
                affiliateJson,
                formElement,
            });
        }
    }

    affiliateBlurHandler(event, inputName) {
        //this is for the custom value
        let { formElement, affiliateJson, defaultOption } = { ...this.state };

        if (event && !event.value) {
            if (affiliateJson.length > 0 && affiliateJson[affiliateJson.length - 1].value == "") {
                affiliateJson[affiliateJson.length - 1].value = event;
                affiliateJson[affiliateJson.length - 1].valueLabel = event;

                formElement[inputName].options = defaultOption;

                this.formatUserDefinedFilter(affiliateJson);

            } else {
                affiliateJson.push({
                    "categoryLabel": event,
                    "category": event,
                    "valueLabel": "",
                    "value": "",
                });
            }

            formElement[inputName].value = "";

            this.setState({
                formElement: formElement,
                affiliateJson: affiliateJson,
            });
        }
    }

    affiliateChangeHandler(event, inputName) {

        let { formElement, affiliateJson, defaultOption } = { ...this.state };
        formElement[inputName].value = event;

        if(this.props.type && this.props.type == "single"){
            //check if there is already 1 category-value selected, if it has 1, reset to empty
            if(affiliateJson && affiliateJson.constructor == Array && affiliateJson.length > 0 && affiliateJson[0].value != ""){
                affiliateJson = [];
            }
        }

        if (event) {
            switch (event.constructor) {
                case String:
                    // formElement[inputName].options = defaultOption;
                    this.setState({ formElement: formElement });
                    break;


                case Object:
                    // //check if its a custom value, dont put it yet on the
                    if (event.value && event.label) {
                        let prevJson = affiliateJson[affiliateJson.length - 1];
                        //check if the affiliateJson last object doesnt have value
                        if (affiliateJson.length > 0 && prevJson.value == "") {
                            // Check if category exists
                            const FILTER_CATEGORY = defaultOption.filter(f => f.value === prevJson.category);

                            if (FILTER_CATEGORY.length > 0) {
                                prevJson.value = event.value;
                                prevJson.valueLabel = event.label;
                                affiliateJson[affiliateJson.length - 1] = prevJson;
                                formElement[inputName].placeholder = 'Click to view the search options';

                                //update the values and format it before sending the values on the parent source
                                this.formatUserDefinedFilter(affiliateJson);
                            } else {
                                
                                // const FIELD_TYPE = defaultOption.filter(f => f.value === event.value);
                                // affiliateJson[affiliateJson.length - 1] = {
                                //     "categoryLabel": event.label,
                                //     "category": event.value,
                                //     "valueLabel": "",
                                //     "value": "",
                                //     "type": FIELD_TYPE.length > 0 ? FIELD_TYPE[0].type : "",
                                // };
                                // formElement[inputName].placeholder = 'Click to view the search options'; //EP032EV2-US028_TC-001-SC-009-0538
                                
                                const FIELD_TYPE = defaultOption.filter(f => f.value === event.value);
                                affiliateJson.push({
                                    "categoryLabel": event.label,
                                    "category": event.value,
                                    "valueLabel": "",
                                    "value": "",
                                    "type": FIELD_TYPE.length > 0 ? FIELD_TYPE[0].type : "",
                                });
                                formElement[inputName].placeholder = 'Enter ' + event.label;
                            }
                        } else {
                            const FIELD_TYPE = defaultOption.filter(f => f.value === event.value);

                            affiliateJson.push({
                                "categoryLabel": event.label,
                                "category": event.value,
                                "valueLabel": "",
                                "value": "",
                                "type": FIELD_TYPE.length > 0 ? FIELD_TYPE[0].type : "",
                            });
                            formElement[inputName].placeholder = 'Enter ' + event.label;
                        }

                        this.setState({
                            formElement: formElement,
                            affiliateJson: affiliateJson,
                        }, () => {
                            if (affiliateJson.length > 0) {
                                //check if the affiliateJson last object doesnt have value
                                if (affiliateJson[affiliateJson.length - 1].value == "" && affiliateJson[affiliateJson.length - 1].type !== 'string') {
                                    //changing the options to be related on the last category selected

                                    let flag = false;
                                    defaultOption.map((opt) => {
                                        if (opt.value == affiliateJson[affiliateJson.length - 1].category) {
                                            if (opt.categoryOptions && opt.categoryOptions.length > 0) {
                                                formElement[inputName].options = opt.categoryOptions
                                                formElement[inputName].options = this.affiliateOptionChecker(inputName, affiliateJson[affiliateJson.length - 1].category, formElement[inputName].options);
                                                flag = true;
                                            } else {
                                                //this means there are no options available
                                                if (!flag) {
                                                    formElement[inputName].options = [];
                                                }
                                            }
                                        } else {
                                            if (!flag) {
                                                formElement[inputName].options = [];
                                            }
                                        }
                                    });
                                } else if (affiliateJson[affiliateJson.length - 1].value == "" && affiliateJson[affiliateJson.length - 1].type == 'string') {

                                    formElement[inputName].options = [];
                                } else {

                                    formElement[inputName].options = defaultOption;
                                }
                                this.setState({ formElement: formElement, });
                            }
                        });
                    }

                    break;
            }
        } else {
            formElement[inputName].value = '';
            // formElement[inputName].options = defaultOption;
            this.setState({ ...this.state, formElement: formElement });
        }

    }

    formatUserDefinedFilter(data) {

        let userDefinedFilter = {};

        if (data && data.length > 0) {
            data.map((item) => {
                switch (item.type) {
                    case 'string':

                        if (userDefinedFilter['AND'] == undefined) {
                            userDefinedFilter['AND'] = {};
                        }



                        switch (item.category) {
                            // case 'company_details_name':
                            //     if (userDefinedFilter.AND[item.category] == undefined) {
                            //         userDefinedFilter.AND[item.category] = [];
                            //     }
                            //     userDefinedFilter.AND[item.category].push(item.value);

                            //     break;
                            default:
                                if (userDefinedFilter.AND[item.category] == undefined) {
                                    userDefinedFilter.AND[item.category] = {};
                                }
                                userDefinedFilter.AND[item.category] = '|' + item.value + '|';
                                break;
                        }
                        break;
                    case 'option':
                    case 'multiple':
                        if (userDefinedFilter['OR'] == undefined) {
                            userDefinedFilter['OR'] = {};
                        }
                        if (userDefinedFilter.OR[item.category] == undefined) {
                            userDefinedFilter.OR[item.category] = [];
                        }
                        if (item.value !== "") {
                            userDefinedFilter.OR[item.category].push(item.value);
                        }

                        break;
                }

            });

            this.props.getValue(userDefinedFilter);
        } else {
            this.props.getValue(null);
        }
    }


    render() {
        let { formElement, affiliateJson } = { ...this.state };
        let selectType = "category";
        if(affiliateJson.length > 0){
            //checking the last affiliate selected
            if(affiliateJson[affiliateJson.length - 1] && affiliateJson[affiliateJson.length - 1].value == ""){
                selectType = "value";
            }
        }
        return (
            <Fragment>
                <div className="field e-field" data-testid="affiliate-search">
                    <InputSelectionHandler
                        {...formElement.affiliateInput}
                        onChanged={val => this.affiliateChangeHandler(val, "affiliateInput")}
                        keyPressed={event => this.searchEnterHandler(event, "affiliateInput")}
                        affiliateSelected={affiliateJson}
                        selectType={selectType}
                        onRemoveAffiliate={(event) => this.removeAffiliate(event, "affiliateInput")}
                        disableTextInput={this.props.disableTextInput}
                        hideOptionsEmptyMessage={this.props.hideOptionsEmptyMessage}
                    />
                </div>
            </Fragment>
        );
    }
}


export default AffiliateSearch;
