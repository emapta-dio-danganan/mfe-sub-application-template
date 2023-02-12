import React, { Component } from 'react';
import SelectWithDisplay from './SelectWithDisplay';
import { SVG_TRASH_RED } from '../../assets/Asset';



class SelectWithLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formElement: {
                selectWithProfile: {
                    id: this.props.id,
                    type: 'multi-select',
                    options: this.props.options,
                    placeholder: this.props.placeholder,
                    value: this.props.value && this.props.value.constructor === Array ? this.props.value : [],
                    disabled: this.props.disabled,
                    required: this.props.required,
                    isMultiple: this.props.isMultiple ? true : false
                },
            },
            apiReturnOptions: this.props.options,
            options: []
        }


    }

    componentDidMount() {

        this.initializeOptions();

    }

    componentDidUpdate(prevProps) {

        if (JSON.stringify(this.props) !== JSON.stringify(prevProps)) {
            let { apiReturnOptions, formElement } = { ...this.state };
            if (prevProps.value !== this.props.value) {
                formElement.selectWithProfile.value = this.props.value;
            }
            if (prevProps.disabled !== this.props.disabled) {
                formElement.selectWithProfile.disabled = this.props.disabled;
            }
            if (prevProps.required !== this.props.required) {
                formElement.selectWithProfile.required = this.props.required;
            }
            if (prevProps.placeholder !== this.props.placeholder) {
                formElement.selectWithProfile.placeholder = this.props.placeholder;
            }
            apiReturnOptions = this.props.options;


            this.setState({ ...this.state, apiReturnOptions, formElement }, () => {
                this.initializeOptions();
            })
        }
    }

    initializeOptions() {
        let { apiReturnOptions, options } = { ...this.state }
        
        options = [];
        [...apiReturnOptions].map((info) => {

            options = [...options, {
                label: info.label,
                value: info.value
            }]
        });
        this.setState({ apiReturnOptions: apiReturnOptions, options: options })
    }

    removeDisplay(val) {
        let { formElement } = { ...this.state };
        let value = this.props.value && this.props.value.constructor === Array && this.props.value.length > 0 ? (
            this.props.value.filter(item => (item !== val))
        ) : [];
        formElement.selectWithProfile.value = value;
        this.setState({ ...this.state, formElement }, () => {
            this.props.onChanged(value);
        });
    }

    selectDisplay(value) {
        let { apiReturnOptions } = { ...this.state }



        if (apiReturnOptions && apiReturnOptions.constructor === Array && apiReturnOptions.length > 0) {
            let params = apiReturnOptions.find((info) => info.value === value);

            return (
                <div className="card-grid-col" id={value}>
                    <div className="card-grid-item">
                        <LinksConso params={params} onClick={(code) => this.removeDisplay(code)} disabled={this.props.disabled} />

                    </div>
                </div>
            )
        }
    }

    inputChangedHandler(val, formElementKey) {
        let { formElement } = { ...this.state };
        formElement[formElementKey].value = val;
        this.setState({ ...this.state, formElement }, () => {
            this.props.onChanged(val);
        });

    }

    render() {
        let { options, formElement } = { ...this.state }

        try {
            return (
                <div>
                    <SelectWithDisplay
                        {...formElement.selectWithProfile}
                        // options={options ? options : []}
                        onChanged={val => this.inputChangedHandler(val, "selectWithProfile")}
                    />
                    {
                        this.props.value && this.props.value.constructor === Array && this.props.value.length > 0 ? (
                            this.props.value.map((item, idx) => (
                                <React.Fragment key={idx}>
                                    {this.selectDisplay(item)}
                                </React.Fragment>
                            ))
                        ) : null
                    }
                </div>

            )
        } catch (error) {

        }

    }

}


export default SelectWithLinks;


const LinksConso = (props) => {

    return (
        <React.Fragment>
            <div className="link-item">

                {
                    props.params  && props.params.label && <div className="link-item-label">
                        <a href={props.params.link} target="_blank">{props.params.label}</a></div>
                        }
                {props.params  && props.params.value && <div className="link-item-number">{props.params.value}</div>}
                {props.params  &&  props.params.category && <div className="link-item-category">{props.params.category}</div>}

            </div>
            {
                !props.disabled ? (
                    <button className="button outline delete" onClick={() => props.onClick(props.params.value)}>{SVG_TRASH_RED}</button>
                ) : null
            }
        </React.Fragment>
    );
}



