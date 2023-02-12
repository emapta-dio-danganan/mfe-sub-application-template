import React, { useState } from "react";
import {
  InputSelectionHandler,
  SelectWithLinks,
  SelectWithProfile,
} from "empower-inputs";
import { Card } from "empower-display";

const Conso = () => {
  let [formElement, setFormElement] = useState({
    sampleInput: {
      id: "sampleInput",
      type: "text",
      value: "",
      placeholder: "Input text",
      maxLength: 10,
      readOnly: false,
      disabled: false,
    },
    sampleInputNumeric: {
      id: "sampleInputNumeric",
      type: "number",
      value: "",
      placeholder: "Input number",
      maxLength: 10,
      readOnly: false,
      disabled: false,
    },
    sampleTextarea: {
      id: "sampleTextarea",
      type: "textarea",
      value: "",
      maxLength: 100,
      placeholder: "Input text",
      disabled: false,
    },
    sampleTextareaSpecial: {
      id: "sampleTextarea",
      type: "textarea",
      value: "",
      maxLength: 100,
      placeholder: "Input text",
      disabled: false,
    },
    sampleSelect: {
      id: "sampleSelect",
      type: "select",
      placeholder: "Please select option",
      value: "",
      disabled: false,
      options: [
        {
          label: "Option 1",
          value: "opt-1", // string optional
        },
        {
          label: "Option 2",
          value: "opt-2", // string optional
        },
        {
          label: "Option 3",
          value: "opt-3", // string optional
        },
        {
          label: "Option 4",
          value: "opt-4", // string optional
        },
      ],
    },
    sampleSelectGroupOption: {
      id: "sampleSelectGroupOption",
      type: "select",
      placeholder: "Please select option",
      value: "",
      disabled: false,
      options: {
        "sample-group-1": {
          label: "Sample Group 1",
          options: [
            {
              label: "Option 1",
              value: "option-1",
            },
            {
              label: "Option 2",
              value: "option-2",
            },
          ],
        },
        "sample-group-2": {
          label: "Sample Group 2",
          options: [
            {
              label: "Option 3",
              value: "option-3",
            },
            {
              label: "Option 4",
              value: "option-4",
            },
          ],
        },
        "sample-group-3": {
          label: "Sample Group 2",
          options: [
            {
              label: "Option 5",
              value: "option-5",
            },
            {
              label: "Option 6",
              value: "option-6",
            },
          ],
        },
      },
    },
    sampleMultiSelect: {
      id: "sampleMultiSelect",
      type: "multi-select",
      placeholder: "Please select multiple option",
      value: [],
      disabled: false,
      options: [
        {
          label: "Option 1",
          value: "opt-1",
          disabled: true, // string optional
        },
        {
          label: "Option 2",
          value: "opt-2", // string optional
        },
        {
          label: "Option 3",
          value: "opt-3", // string optional
        },
        {
          label: "Option 4",
          value: "opt-4", // string optional
        },
      ],
    },
    sampleMultiSelectGroupOption: {
      id: "sampleMultiSelectGroupOption",
      type: "multi-select",
      placeholder: "Please select multiple option",
      value: [],
      disabled: false,
      options: {
        "sample-group-1": {
          label: "Sample Group 1",
          options: [
            {
              label: "Option 1",
              value: "option-1",
            },
            {
              label: "Option 2",
              value: "option-2",
            },
          ],
        },
        "sample-group-2": {
          label: "Sample Group 2",
          options: [
            {
              label: "Option 3",
              value: "option-3",
            },
            {
              label: "Option 4",
              value: "option-4",
            },
          ],
        },
        "sample-group-3": {
          label: "Sample Group 2",
          options: [
            {
              label: "Option 5",
              value: "option-5",
            },
            {
              label: "Option 6",
              value: "option-6",
            },
          ],
        },
      },
    },
    sampleToggleButton: {
      id: "sampleToggleButton",
      type: "toggle-button",
      placeholder: "Please select option",
      value: "",
      disabled: false,
      required: true,
      options: [
        {
          label: "Yes",
          value: "yes",
        },
        {
          label: "No",
          value: "no",
        },
      ],
    },
    sampleCheckbox: {
      id: "sampleCheckbox",
      type: "checkbox",
      label: "Sample label",
      value: false,
      disabled: false,
    },
    sampleDatepickerSingle: {
      id: "sampleDatepickerSingle",
      type: "datepicker",
      placeholder: "Select date",
      value: null,
      disabled: false,
      disabledDates: ["2020-07-22", "2020-07-23", "2020-07-24"],
      disabledDays: ["Sun", "Sat"],
    },
    sampleDatepickerMultiple: {
      id: "sampleDatepickerMultiple",
      type: "datepicker",
      placeholder: "Select date",
      value: null,
      multiple: true,
      disabled: false,
      minDate: "2020-07-06",
    },
    sampleFile: {
      id: "sampleFile",
      type: "file",
      selected: [],
      accept: ".png,.pdf",
      disabled: false,
    },
    sampleFileMultiple: {
      id: "sampleFileMultiple",
      type: "file",
      selected: [],
      accept: ".png,.pdf",
      disabled: false,
      multiple: true,
    },
    sampleCurrency: {
      id: "salary",
      type: "currency",
      currency: "PHP",
      value: "",
      placeholder: "-",
      maxLength: 100,
      readOnly: false,
      disabled: false,
    },

    sampleHours: {
      id: "sampleHours",
      type: "hours",
      maxHours: "23",
      value: "",
      placeholder: "-",

      readOnly: false,
      disabled: false,
    },
    sampleMinutes: {
      id: "sampleMinutes",
      type: "minutes",
      maxMins: "59",
      value: "",
      placeholder: "-",
      readOnly: false,
      disabled: false,
    },
    sampleHourMin: {
      id: "sampleHourMin",
      type: "hours-mins",
      maxHours: "23",
      maxMins: "59",
      value: "",
      placeholder: "-",
      readOnly: false,
      disabled: false,
    },
    sampleDatetime: {
      id: "datetime",
      type: "datetime",
      maxHours: "23",
      maxMins: "59",
      value: "",
      placeholder: "-",
      readOnly: false,
      disabled: false,
    },
    sampleRadio: {
      id: "sampleRadio",
      type: "radio",
      value: "",
      readOnly: false,
      disabled: false,
      options: [
        {
          id: "op1",
          label: (
            <>
              <h3>TEST</h3>
              <span>span test</span>
            </>
          ),
          value: "part-time",
          disabled: false,
        },
        {
          id: "op2",
          label: "Full-Time",
          value: "full-time",
          disabled: false,
        },
      ],
    },
    sampleSelectWithLinks: {
      id: "link",
      type: "multi-select",
      options: [
        {
          category: "Csa",
          label: "Sample 1 Links",
          link: "/sample-1",
          value: "sample-1",
        },
        {
          category: "Csa",
          label: "Sample 2 Links",
          link: "/sample-2",
          value: "sample-2",
        },
        {
          category: "Csa",
          label: "Sample 3 Links",
          link: "/sample-3",
          value: "sample-3",
        },
      ],
      placeholder: "Search for deals",
      label: "Sample Select With Links",
      value: [],
      disabled: false,
      required: true,
      isMultiple: false,
    },
    sampleSelectWithProfile: {
      id: "selectTalent",
      type: "multi-select",
      options: [
        {
          employee_code: "8WzFa_veynqMfD9h",
          employee_bucket_code: "BCKT-00001",
          employee_name: "Annie Ruth Suficiencia",
          employee_profile_pic:
            "r8gbRpma2erKC0VZmhrsK8ko5TnDlLWZUOgOYM0DSOMz2BhoUXvdcTOB9KeIxTrj.jpg",
          employee_position: "QA Analyst",
          employee_email: "annie.suficiencia@empowerteams.io",
        },
        {
          employee_code: "20-0520",
          employee_bucket_code: "BCKT-00001",
          employee_name: "Claro Abelardo Lagman",
          employee_profile_pic:
            "DLyv4BQMrGeNYLHWueWGjSe3mHXXlhT7mzYa9tzJgJ45BMdy04D5qwhOVk1hzoUd.jpeg",
          employee_position: "Experience Manager",
          employee_email: "claro.lagman@empowerteams.io",
        },
        {
          employee_code: "9shB7xW6Mm_tCFvP",
          employee_bucket_code: "BCKT-00001",
          employee_name: "Cristopher John Barraba",
          employee_profile_pic:
            "MfYggj5oHGckWp9xo52X63PimoqZXYe2LfnMHWif5hq7hXtRXOiLMcjnHZafcbmk.jpg",
          employee_position: "QA Analyst",
          employee_email: "cristopher.barraba@empowerteams.io",
        },
        {
          employee_code: "19-1244",
          employee_bucket_code: "BCKT-00001",
          employee_name: "Crystal Joy Mena",
          employee_profile_pic:
            "FBeHzK52TQrxgaJejCOFobiqvEOHAFc3Slz4Czx8b9nPjljvQRhAWIMNM3zdBuKp.jpg",
          employee_position: "Sr. Business Analyst",
          employee_email: "crystal.mena@empowerteams.io",
        },
      ],
      placeholder: "Select employee",
      label: "Sample Select With Profile",
      value: [],
      disabled: false,
      required: true,
      isMultiple: false,
      customClass: "sample",
      hideClearIcon: false,
      isEmployeeSelection: false,
    },
  });

  const inputChangedHandler = (val, key, i) => {
    switch (key) {
      case "sampleCheckbox":
        formElement[key].value = val.target.checked;
        break;
      case "sampleRadio":
        formElement[key].value = val.target.value;
        break;
      case "sampleMultiSelect":
        formElement[key].value = val.selected;
        break;
      case "sampleFile":
      case "sampleFileMultiple":
        formElement[key].selected = val.selected;
        break;
      case "sampleDatetime":
        formElement[key].value = val;
        break;
      case "sampleSelectWithProfile":
      case "sampleSelectWithLinks":
        formElement[key].value = val;
        break;
      default:
        formElement[key].value = val.target.value;
        break;
    }
    setFormElement({ ...formElement, formElement });
  };

  try {
    return (
      <div className="v2-main v2-main-lists">
        <div className="v2-content">
          <div className="row">
            <div className="col-12">
              <h4>Inputs (npm install empower-inputs)</h4>
              <br />
              <br />
              <Card hideMenuBar={true}>
                <div className="card-page">
                  <div className="col-12">
                    <label>INPUT STRING</label>
                    <InputSelectionHandler
                      config={formElement.sampleInput}
                      allowedChar={{
                        alphabet: true,
                        numeric: false,
                        space: false,
                        allowedSymbols: ["&"],
                      }}
                      onChanged={(e) => inputChangedHandler(e, "sampleInput")}
                    />
                  </div>
                  <div className="col-12">
                    <label>INPUT INTEGER</label>
                    <InputSelectionHandler
                      config={formElement.sampleInputNumeric}
                      customClass="integer-custom-class em-input"
                      onChanged={(e) =>
                        inputChangedHandler(e, "sampleInputNumeric")
                      }
                    />
                  </div>
                  <div className="col-12">
                    <label>TEXTAREA CHARACTER ONLY</label>
                    <InputSelectionHandler
                      config={formElement.sampleTextarea}
                      customClass="textarea-character-only-custom-class"
                      onChanged={(e) =>
                        inputChangedHandler(e, "sampleTextarea")
                      }
                      allowedChar={{
                        alphabet: true,
                        numeric: false,
                        space: true,
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <label>TEXTAREA ALLOW SPECIAL CHAR</label>
                    <InputSelectionHandler
                      config={formElement.sampleTextareaSpecial}
                      customClass="textarea-allow-special-custom-class"
                      onChanged={(e) =>
                        inputChangedHandler(e, "sampleTextareaSpecial")
                      }
                      allowedChar={{
                        alphabet: true,
                        numeric: true,
                        space: true,
                        allowedSymbols: ["&.,"],
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <label>DATEPICKER SINGLE</label>
                    <InputSelectionHandler
                      config={formElement.sampleDatepickerSingle}
                      customClass="datepicker-single-custom-class"
                      onChanged={(e) =>
                        inputChangedHandler(e, "sampleDatepickerSingle")
                      }
                    />
                  </div>
                  <div className="col-12">
                    <label>DATEPICKER MULTIPLE</label>
                    <InputSelectionHandler
                      config={formElement.sampleDatepickerMultiple}
                      customClass="datepicker-multiple-custom-class"
                      onChanged={(e) =>
                        inputChangedHandler(e, "sampleDatepickerMultiple")
                      }
                    />
                  </div>
                  <div className="col-12">
                    <label>HOURS</label>
                    <InputSelectionHandler
                      config={formElement.sampleHours}
                      onChanged={(e) => inputChangedHandler(e, "sampleHours")}
                    />
                  </div>
                  <div className="col-12">
                    <label>MINUTES</label>
                    <InputSelectionHandler
                      config={formElement.sampleMinutes}
                      onChanged={(e) => inputChangedHandler(e, "sampleMinutes")}
                    />
                  </div>
                  <div className="col-12">
                    <label>HOURS-MINS</label>
                    <InputSelectionHandler
                      config={formElement.sampleHourMin}
                      onChanged={(e) => inputChangedHandler(e, "sampleHourMin")}
                    />
                  </div>
                  <div className="col-12">
                    <label>DATETIME</label>
                    <InputSelectionHandler
                      config={formElement.sampleDatetime}
                      onChanged={(e) =>
                        inputChangedHandler(e, "sampleDatetime")
                      }
                    />
                  </div>
                  <div className="col-12">
                    <label>SELECT</label>
                    <InputSelectionHandler
                      config={formElement.sampleSelect}
                      onChanged={(e) => inputChangedHandler(e, "sampleSelect")}
                    />
                  </div>
                  <div className="col-12">
                    <label>SELECT GROUP OPTIONS</label>
                    <InputSelectionHandler
                      config={formElement.sampleSelectGroupOption}
                      onChanged={(e) =>
                        inputChangedHandler(e, "sampleSelectGroupOption")
                      }
                    />
                  </div>
                  <div className="col-12">
                    <label>MULTI-SELECT</label>
                    <InputSelectionHandler
                      config={formElement.sampleMultiSelect}
                      customClass="multi-select-custom-class"
                      onChanged={(e) =>
                        inputChangedHandler(e, "sampleMultiSelect")
                      }
                    />
                  </div>
                  <div className="col-12">
                    <label>MULTI-SELECT GROUP OPTIONS</label>
                    <InputSelectionHandler
                      config={formElement.sampleMultiSelectGroupOption}
                      customClass="multi-select-group-options-custom-class"
                      onChanged={(e) =>
                        inputChangedHandler(e, "sampleMultiSelectGroupOption")
                      }
                    />
                  </div>
                  <div className="col-12">
                    <label>TOGGLE BUTTON</label>
                    <InputSelectionHandler
                      config={formElement.sampleToggleButton}
                      customClass="toggle-button-custom-class"
                      onChanged={(e) =>
                        inputChangedHandler(e, "sampleToggleButton")
                      }
                    />
                  </div>
                  <div className="col-12">
                    <label>CHECKBOX BUTTON</label>
                    <InputSelectionHandler
                      config={formElement.sampleCheckbox}
                      customClass="checkbox-custom-class"
                      onChanged={(e) =>
                        inputChangedHandler(e, "sampleCheckbox")
                      }
                    />
                  </div>
                  <div className="col-12">
                    <label>FILE SINGLE</label>
                    <InputSelectionHandler
                      config={formElement.sampleFile}
                      customClass="file-custom-class"
                      hasChips={true}
                      onChanged={(e) => inputChangedHandler(e, "sampleFile")}
                    />
                  </div>
                  <div className="col-12">
                    <label>FILE MULTIPLE</label>
                    <InputSelectionHandler
                      config={formElement.sampleFileMultiple}
                      customClass="file-custom-class"
                      hasChips={true}
                      onChanged={(e) =>
                        inputChangedHandler(e, "sampleFileMultiple")
                      }
                    />
                  </div>

                  <div className="col-12">
                    <label>CURRENCY</label>
                    <InputSelectionHandler
                      config={formElement.sampleCurrency}
                      customClass="toggle-custom-class"
                      onChanged={(e) =>
                        inputChangedHandler(e, "sampleCurrency")
                      }
                    />
                  </div>

                  <div className="col-12">
                    <SelectWithLinks
                      config={formElement.sampleSelectWithLinks}
                      onChanged={(e) =>
                        inputChangedHandler(e, "sampleSelectWithLinks")
                      }
                    />
                  </div>

                  <div className="col-12">
                    <SelectWithProfile
                      config={formElement.sampleSelectWithProfile}
                      onChanged={(e) =>
                        inputChangedHandler(e, "sampleSelectWithProfile")
                      }
                    />
                  </div>

                  <div className="col-12">
                    <h4>RADIO</h4>
                    <InputSelectionHandler
                      config={formElement.sampleRadio}
                      onChanged={(e) => inputChangedHandler(e, "sampleRadio")}
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in rendering inputs", error);
    return <h5>Something went wrong.</h5>;
  }
};

export default Conso;
