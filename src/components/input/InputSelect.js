import React, { useState, Fragment } from "react";
import { SVG_CALENDAR_GRAY, SVG_ARROW_DOWN, SVG_CLOSE_GRAY } from '../../assets/Asset';

const Popover = props => { 
	return (
		<Fragment>
			{
				props.open &&
				<Fragment>
					<div className="e-overlay" onClick={props.onClose}>
					</div>
					<div className="e-popover" style={props.origin !== undefined && props.origin == "right" ? { right: 200 + 'px' } : { left: 0 + 'px' }}>
						{props.children}
					</div>
				</Fragment>
			}
		</Fragment>
	)
}

const Dropdown = props => {
	let { disabled, options, type, onChanged, value, placeholder, id, onBlurred, affiliateSelected, selectType, disableTextInput, hideOptionsEmptyMessage } = { ...props };

	// React Hook
	let [dropdownPopover, setDropdownPopover] = useState(null);
	let [optionsArray, setOptionsArray] = useState(options ? options : []);
	let [selectTemporaryValue, setSelectTemporaryValue] = useState("");

	// Dropdown Config Variable
	let dropdownClass = disabled && disabled.constructor === Boolean ? 'e-input input-disabled' : 'e-input';
	let selectedValue = value && value.constructor === String && value !== "" ? (
		getSelectInputValue(value)
	) : value && value.constructor === Array && value.length > 0 ? (
		getSelectInputValue(value) 
	) : '';

	/**
	* popoverRequestHandler
	* hide and show the options popover
	* @param {*} e - event
	* @param {*} action - it can be either on-focus or on-blur
	*/
	function popoverRequestHandler(e, action) {
		if (action === 'on-focus') {
			type === 'text-select' || type === 'affiliate-textSelect' ? setOptionsArray(options) : filterOptions(selectedValue, value);
			
			if(affiliateSelected && affiliateSelected.constructor === Array && affiliateSelected.length > 0 && affiliateSelected[affiliateSelected.length - 1].type == 'string' && !affiliateSelected[affiliateSelected.length - 1].value){
				setDropdownPopover(null)
			}else{
				setDropdownPopover(e.currentTarget);
			}
			// if(affiliateSelected){
			// 	const currLength = affiliateSelected.length - 1;
			// 	if(affiliateSelected.length==0){
			// 		setDropdownPopover(e.currentTarget)
			// 	}else{
			// 		if(affiliateSelected[currLength].type !=='string'){
			// 			setDropdownPopover(e.currentTarget);
					
			// 		}else if(affiliateSelected[currLength].type =='string' && affiliateSelected[currLength].value !=='' ){
			// 			setDropdownPopover(e.currentTarget);
			// 		}
			// 	}
			// }
			// setDropdownPopover(e.currentTarget);
		} else {
			setDropdownPopover(null);
			setSelectTemporaryValue("");
		}
	}

	/**
	* optionSelectionHandler
	* manipulate the selected options
	* @param {*} e - event
	* @param {*} opt - selected option from the list
	* return Object/Array - the selected manipulated values from the list
	*/
	function optionSelectionHandler(e, opt) {
		if (type && type === 'text-select') {
			popoverRequestHandler(e, 'on-blur');
			return onChanged ? onChanged(opt.value) : false;
		} else if (type && type === 'affiliate-textSelect') {
			popoverRequestHandler(e, 'on-blur');
			let value = {
				"label": opt.label,
				"value": opt.value,
			}
			if (onBlurred) {
				onBlurred(value);
			}
			return onChanged ? onChanged(value) : false;
		} else if (type && type === 'multi-select') {
			let valueCopy = selectedOptions([...value]);
			if (opt === 'select-all') {
				let notSelectedOptions = [];
				if (optionsArray.constructor === Array) {
					notSelectedOptions = optionsArray.filter(item => {
						return valueCopy.indexOf(item) < 0;
					});
					if (notSelectedOptions.length > 0) {
						valueCopy = [...valueCopy, ...notSelectedOptions];
					} else {
						valueCopy = optionsArray.filter(item => {
							return valueCopy.indexOf(item) < -1;
						});
					}
				} else if (optionsArray.constructor === Object) {
					let mergeOptions = [];
					Object.values(optionsArray).map(optval => {
						mergeOptions = [...mergeOptions, ...optval.options]
					});
					notSelectedOptions = mergeOptions.filter(item => {
						return valueCopy.indexOf(item) < 0;
					});
					if (notSelectedOptions.length > 0) {
						valueCopy = [...valueCopy, ...notSelectedOptions];
					} else {
						valueCopy = mergeOptions.filter(item => {
							return valueCopy.indexOf(item) < -1;
						});
					}
				}
			} else {
				let optIdx = valueCopy.indexOf(opt);
				if (optIdx >= 0) {
					valueCopy.splice(optIdx, 1);
				} else {
					valueCopy = [...valueCopy, opt];
				}
			}
			valueCopy = valueCopy.map(item => {
				return item.value;
			});
			filterOptions(selectTemporaryValue, valueCopy);
			return onChanged ? onChanged(valueCopy) : false;
		}
	}

	/**
	* inputChangedHandler
	* get the current value from the input text field
	* @param {*} e - event which will be used to get the changed value
	*/
	function inputChangedHandler(e) {
		
		if(e.target.value==''){
			setOptionsArray(options);
			
		}
		if (props.onChanged) {
			setSelectTemporaryValue(e.target.value);
			filterOptions(e.target.value, value);
			return props.onChanged(e.target.value);
		} else {
			console.error("No onChanged property");
		}
	}

	/**
  * onKeypressHandler
  * get the current value from the input field
  * @param {*} event - event which will be used to get the changed value
  */
	function onKeypressHandler(event) {
		if (event.key === 'Enter') {
			if (props.keyPressed) {
				if(!disableTextInput){
					// if(affiliateSelected && affiliateSelected.length > 0 && affiliateSelected[affiliateSelected.length - 1].value == ""){
						popoverRequestHandler(event, 'on-blur');
						let el = document.querySelector( ':focus' );
						if( el ) el.blur();
					// }
					return props.keyPressed(event.target.value);
				}
			}
		}
	}

	function onBlurHandler(e) {
		if (props.onBlurred) {
			setSelectTemporaryValue(e.target.value);
			filterOptions(e.target.value, value);
			return props.onBlurred(event.target.value);
		}
	}

	/**
	* getSelectInputValue
	* manipulate the selected multiple values into string
	* @param {*} val - multi-select selected value
	* return String - the converted string from multi-select array values
	*/
	function getSelectInputValue(val) {
		if (type === 'multi-select') {
			let selectedLabels = selectedOptions(val);
			if (val.length < 6) {
				selectedLabels = selectedLabels.map(item => {
					return item.label
				})
			} else {
				selectedLabels = [val.length + ' Selected Item'];
			}
			return selectedLabels.join(', ');
		} else if (type === 'text-select' || type === 'affiliate-textSelect') {
			let optArray = selectedOptions(val);
			return optArray.length > 0 ? optArray[0].label : val.toString();
		}
	}

	/**
	* selectedOptions
	* get the selected options from the values given
	* @param {*} val - values selected
	* return String - converted values into string
	*/
	function selectedOptions(val) {
		var selectedOptionValue = "";
		if (options.constructor === Array) {
			selectedOptionValue = options.filter(item => {
				return (val.constructor === Array && val.indexOf(item.value) > -1) || item.value === val;
			});
		} else if (options.constructor === Object) {
			let mergeOptions = [];
			Object.values(options).map(optval => {
				mergeOptions = [...mergeOptions, ...optval.options]
			});
			selectedOptionValue = mergeOptions.filter(item => {
				return (val.constructor === Array && val.indexOf(item.value) > -1) || item.value === val;
			});
		}
		return selectedOptionValue;
	}

	/**
	* filterOptions (for multi-select only)
	* filter the options to search specific values
	* @param {*} search - type value from the input text field
	* @param {*} values - selected values of multi-select
	*/
	function filterOptions(search, values) {
		if (type === 'multi-select') {
			if (optionsArray && optionsArray.constructor === Array) {
				let selectedOptionsVariable = selectedOptions(values);
				optionsArray = options.filter(item => {
					return values.indexOf(item.value) < 0 && item.label.toLowerCase().search(search.toLowerCase()) > -1;
				});
				values = selectedOptionsVariable.filter(item => {
					return item.label.toLowerCase().search(search.toLowerCase()) > -1;
				})
				setOptionsArray([...values, ...optionsArray]);
			} else if (optionsArray && optionsArray.constructor === Object) {
				let optionsArrayCopy = {};
				let selectedOptionsVariable = selectedOptions(values);
				if (selectedOptionsVariable.length > 0) {
					selectedOptionsVariable = selectedOptionsVariable.filter(item => {
						return item.label.toLowerCase().search(search.toLowerCase()) > -1;
					})
					if (selectedOptionsVariable.length > 0) {
						optionsArrayCopy['selected-values'] = { label: 'Selected', options: selectedOptionsVariable }
					}
				}
				Object.keys(options).map(optgroup => {
					let filterOptionsArray = [];
					if (options[optgroup].label.toLowerCase().search(search.toLowerCase()) > -1) {
						filterOptionsArray = options[optgroup].options.filter(item => {
							return values.indexOf(item.value) < 0;
						});
					} else {
						filterOptionsArray = options[optgroup].options.filter(item => {
							return values.indexOf(item.value) < 0 && item.label.toLowerCase().search(search.toLowerCase()) > -1;
						});
					}
					if (filterOptionsArray.length > 0) {
						optionsArrayCopy[optgroup] = { label: options[optgroup].label, options: filterOptionsArray };
					}
				});
				setOptionsArray(optionsArrayCopy);
			}
		} else {
			// if (optionsArray && optionsArray.constructor === Array && optionsArray.length > 0) { //remove the optionsarray length checker as it causes issues on bt-889
			if (optionsArray && optionsArray.constructor === Array) {
				optionsArray = options.filter(item => {
					if(item.label){
						return item.label.toLowerCase().search(search.toLowerCase()) > -1;
					}
				});
				setOptionsArray([...optionsArray]);
			} else if (optionsArray && optionsArray.constructor === Object) {
				let optionsArrayCopy = {};
				Object.keys(options).map(optgroup => {
					if (options[optgroup].label.toLowerCase().search(search.toLowerCase()) > -1) {
						optionsArrayCopy[optgroup] = { ...options[optgroup] };
					} else {
						let filterOptionsArray = options[optgroup].options.filter(item => {
							return item.label.toLowerCase().search(search.toLowerCase()) > -1;
						});
						if (filterOptionsArray.length > 0) {
							optionsArrayCopy[optgroup] = { label: options[optgroup].label, options: filterOptionsArray };
						}
					}
				});
				setOptionsArray(optionsArrayCopy);
			}
		}
	}

	/**
	* handleCheckedOptions
	* determine if the item from the options were selected
	* @param {*} opt - item from the options
	* return Boolean - selected/not
	*/
	function handleCheckedOptions(opt) {
		if (opt === 'select-all') {
			var notSelectedOptions = null;
			if (optionsArray.constructor === Array) {
				notSelectedOptions = optionsArray.filter(item => {
					return value.indexOf(item.value) < 0;
				});
			} else if (optionsArray.constructor === Object) {
				let mergeOptions = [];
				Object.values(optionsArray).map(optval => {
					mergeOptions = [...mergeOptions, ...optval.options]
				});
				notSelectedOptions = mergeOptions.filter(item => {
					return value.indexOf(item.value) < 0;
				});
			}
			return notSelectedOptions && notSelectedOptions.length === 0 ? true : false;
		} else {
			return value && value.constructor === Array && value.filter(val => (opt.value === val)).length > 0 ? true : false;
		}
	}

	function removeAffiliate(e, idx) {
		props.onRemoveAffiliate(idx);
	}

	placeholder = placeholder && placeholder.constructor === String ? placeholder : '';

	return (
		<Fragment>
			<div className={dropdownClass + ' input-affiliate'} data-testid={id && id.constructor === String ? id : 'select-default-id'} id={id && id.constructor === String ? id : 'select-default-id'}>
				{
					type === 'text-select' || type === 'affiliate-textSelect' ? (
						<Fragment>
							<div className="multi-select">
								<div className="multi-value">
									{
										props.affiliateSelected ? (
											props.affiliateSelected.map((item, idx) => (
												<div className="value-container" key={idx}>
													{
														item.categoryLabel !== "" && item.valueLabel !== "" ? (
															<div className="chip">
																<span className="category">{item.categoryLabel}</span>
																<span className="value">{item.valueLabel}</span>
																{
																	props.disabled && props.disabled == true ? (
																		null
																	) : <a className="close" href="#" onClick={event => removeAffiliate(event, idx)}>
																			<img src="/images/icons/icon-close-graydark.svg" />
																		</a>
																}
															</div>
														) : <div className="chip">
																<span className="category">{item.categoryLabel}</span>
																{
																	props.disabled && props.disabled == true ? (
																		null
																	) : <a className="close" href="#" onClick={event => removeAffiliate(event, idx)}>
																			<img src="/images/icons/icon-close-graydark.svg" />
																		</a>
																}
															</div>
													}
												</div>
											))
										) : null
									}
								</div>
								<input className="input-field"
									type="text"
									onFocus={event => popoverRequestHandler(event, 'on-focus')}
									onClick={event => popoverRequestHandler(event, 'on-focus')}
									onChange={event => inputChangedHandler(event)}
									onKeyPress={event => onKeypressHandler(event)}
									onBlur={event => onBlurHandler(event)}
									placeholder={placeholder}
									value={selectedValue}
									disabled={disabled && disabled.constructor === Boolean ? disabled : false}
								/>
							</div>
						</Fragment>
					) : (
							<input
								type="text"
								onClick={event => popoverRequestHandler(event, 'on-focus')}
								placeholder={placeholder}
								value={value && value.length > 0 ? selectedValue : ""}
								disabled={disabled && disabled.constructor === Boolean ? disabled : false}
								readOnly />
						)

				}
				{
					type !== 'affiliate-textSelect' ? (
						<div className="e-input-icon">
							{SVG_ARROW_DOWN}
						</div>
					) : <div className="e-input-icon" onClick={event => removeAffiliate(event, "all")}>
							{SVG_CLOSE_GRAY}
						</div>
				}
			</div>
			<Popover id="input-select-popover" className={Boolean(dropdownPopover) ? 'open-popover' : ''} open={Boolean(dropdownPopover)} onClose={event => popoverRequestHandler(event, 'on-blur')}>
				<div className="e-select">
					{
						type === 'multi-select' ? (
							<div className="e-select-search">
								<input
									type="text"
									onFocus={event => popoverRequestHandler(event, 'on-focus')}
									onChange={event => inputChangedHandler(event)}
									placeholder={"Search"}
									value={selectTemporaryValue}
									disabled={disabled ? disabled : false} />
							</div>
						) : null
					}
					{
						optionsArray && optionsArray.constructor === Array && optionsArray.length > 0 ? (
							// Default array display of options
							<Fragment>
								{
									type === 'text-select' || type === 'affiliate-textSelect' ? (
										<ul>
											{
												optionsArray.map((opt, idx) => (
													<li key={idx} onClick={event => optionSelectionHandler(event, opt)}>
														{opt.label}
													</li>
												))
											}
										</ul>
									) : type === 'multi-select' ? (
										<Fragment>
											<div className="e-select-all">
												{
													optionsArray.length > 1 ? (
														<div key='select-all' onClick={event => optionSelectionHandler(event, 'select-all')}>
															<input type="checkbox" checked={handleCheckedOptions('select-all')} id='select-all' readOnly />
															<span>Select All</span>
														</div>
													) : null
												}
											</div>
											<div className="e-select-checklist">
												{
													optionsArray.map((opt, idx) => (
														<div key={idx} onClick={event => optionSelectionHandler(event, opt)}>
															<input type="checkbox" checked={handleCheckedOptions(opt)} id={opt.value} readOnly />
															<span>{opt.label}</span>
														</div>
													))
												}
											</div>
										</Fragment>
									) : <center>No options</center>
								}
							</Fragment>
						) : optionsArray && optionsArray.constructor === Object && Object.keys(optionsArray).length > 0 ? (
							// Display of options when grouped (*its only applicable on select type)
							<Fragment>
								{
									type === 'text-select' || type === 'affiliate-textSelect' ? (
										Object.keys(optionsArray).map(id => (
											<ul key={id} label={optionsArray[id].label ? optionsArray[id].label : 'Invalid Group Label'}>
												{
													optionsArray[id].options && optionsArray[id].options.constructor === Array && optionsArray[id].options.length > 0 ? (
														optionsArray[id].options.map((opt, idx) => (
															<li key={idx} onClick={event => optionSelectionHandler(event, opt)}>
																{opt.label}
															</li>
														))
													) : null
												}
											</ul>
										))
									) : type === 'multi-select' ? (
										<Fragment>
											<div className="e-select-all">
												{
													Object.keys(optionsArray).length > 1 || (
														Object.keys(optionsArray).length === 1 && optionsArray[Object.keys(optionsArray)[0]].options && optionsArray[Object.keys(optionsArray)[0]].options.constructor === Array && optionsArray[Object.keys(optionsArray)[0]].options.length > 1) ? (
															<div key='select-all' onClick={event => optionSelectionHandler(event, 'select-all')}>
																<input type="checkbox" checked={handleCheckedOptions('select-all')} id='select-all' readOnly />
																<span>Select All</span>
															</div>
														) : null
												}
											</div>
											{
												Object.keys(optionsArray).map(id => (
													<Fragment key={id}>
														<div className="e-select-checklist">
															{
																id !== 'selected-values' ? (
																	<ul label={optionsArray[id].label ? optionsArray[id].label : 'Invalid Group Label'} />
																) : null
															}
															{
																optionsArray[id].options && optionsArray[id].options.constructor === Array && optionsArray[id].options.length > 0 ? (
																	optionsArray[id].options.map((opt, idx) => (
																		<div key={idx} onClick={event => optionSelectionHandler(event, opt)}>
																			<input type="checkbox" checked={handleCheckedOptions(opt)} id={opt.value} readOnly />
																			<span>{opt.label}</span>
																		</div>
																	))
																) : <center>No options</center>
															}
														</div>
													</Fragment>
												))
											}
										</Fragment>
									) : <center>No options</center>
								}
							</Fragment>
						) : <div className="e-noresult">
							{
								type === 'affiliate-textSelect' && selectType && selectType == "category" && !hideOptionsEmptyMessage ? (
									<p>
										By default, you are searching for <b>Employee First name or Employee Last name or Employee ID</b>.
									</p>
								) : "No options"
							}
							</div>
					}
				</div>
			</Popover>
		</Fragment>
	);
}

export default Dropdown;
