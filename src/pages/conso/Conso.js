import React, { useCallback, useState } from "react";
import {
  SVG_REQUEST_BLUE,
  SVG_USER,
  SVG_ADD_WHITE,
  SVG_DONE,
} from "../../assets/Asset";
import AffiliateSearch from "../../components/filter/AffiliateSearch";
import Card from "../../components/card/Card";
import ProfileConso from "../../components/profile/ProfileConso";
import {
  getInitialsOfTwoStrings,
  datetimeFormatter,
} from "../../helpers/GlobalHelper";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { MenuBar, Modal } from "empower-container";
import { InputSelectionHandler } from "empower-inputs";
import SidebarFilter from "empower-sidebar-filter";

const SAMPLE_PROPS = {
  statusOptions: [
    {
      value: "all-templates",
      label: "All templates",
    },
    {
      value: "active",
      label: "Active",
    },
    {
      value: "deactivated",
      label: "Deactivated",
    },
  ],
  preSelectedStatus: "active",
  dateFiltering: true,
  preSelectedDate: "2022-04-03",
  categoryOptions: [
    {
      label: "Category 1",
      value: "categ-1", // string optional
    },
    {
      label: "Category 2",
      value: "categ-2", // string optional
    },
    {
      label: "Category 3",
      value: "categ-3", // string optional
    },
    {
      label: "Category 4",
      value: "categ-4", // string optional
    },
  ],
  preSelectedCategory: "categ-2",
  preSelectedSort: "asc",
};

const CONFIG_INFO_MULTIPLE = {
  title: "Info Title",
  info: {
    infoDetails: {
      companyPolicy:
        "<p><strong>Certifying Daily Time Records (DTR) </strong></p>\n<p>All Employees are expected to certify all DTRs covering a pay period as true, correct, accurate and final that will serve as basis to compute their pay.</p>\n<p><strong>Failure</strong> to certify DTRs shall result to an Auto-Certification at the end of the pay cutoff. Uncertified DTRs will be deemed true, correct, accurate and final, except for Absences incurred on the day of the cutoff itself, either on the 10th or 26th of the month.</p>\n<p>For these absences, either of the following will apply:</p>\n<p>1. The employee is given until the 12th or the 27th to amend the DTR and seek approval;</p>\n<p>2. The Timekeeping &amp; Benefits department will verify the details of the absence incurred and amend the DTR appropriately.</p>\n<p>The Company has two (2) pay cutoff periods:</p>\n<p>1. Payroll for the 15th -- 26th of the previous month to the 10th of the current month 2. Payroll for the 30th -- 11th to the 25th of the current month.</p>\n<p><strong>Clock In</strong></p>\n<p>When an employee clocks into work, the Company&rsquo;s online system shall provide the applicable status:</p>\n<p><strong> ON TIME</strong> - Clock In before the start of shift and/ or before the grace period (if any) ends</p>\n<p>TARDY - Clock In within the first four (4) hours after the shift has started</p>\n<p>ABSENT (1ST HALF and TARDY) - Clock In beyond the first four (4) hours after the shift has started will be tagged as Tardy. The first four (4) hours after the shift has started will be tagged as Absent - 1st Half.</p>\n<p><strong> Tardiness</strong></p>\n<p>1. Failure to come ON TIME six (6) times or accumulation of at least 60 minutes of TARDINESS (whichever comes first) within the 11th of the current month to the 10th of the following month, shall constitute an offense of TARDINESS.</p>\n<p>Employees are expected to time in upon arriving at their respective office. However, due to unforeseen circumstances preventing the employee to timely Clock In within the Company&rsquo;s online system, employees are allowed to amend their Clock In time, subject to the approval of their respective Department Head / Immediate Superior. Amendments to Clock In within the Company&rsquo;s online system can be done on or before the payroll cutoff.</p>\n<p>2. Employee reporting to work after the official start of the assigned work shift and, if any, after the grace period. Applicable only to Time-bounded Work Shifts.</p>\n<p>Tardiness computed in payroll is equivalent to length of time computed as the difference between the clock in time and the grace period. If no Grace Period allowed, it will be the difference between the clock in time and the start of the shift.</p>\n<p>Example:</p>\n<p>Start Time - 6:00 AM</p>\n<p>Grace Period - 6:10 AM (10 minutes from the start of the shift)</p>\n<p>Clock In - 6:15 AM</p>\n<p>Tardiness = 5 minutes (time in excess of the end of the Grace Period)</p>\n<p>Computed Tardiness will be the basis of payroll deductions.</p>\n<p><strong>Clock Out</strong></p>\n<p>When an employee clocks out of work, the Company&rsquo;s online system shall provide the applicable status:</p>\n<p><strong> SHIFT ENDED</strong> - Clock out on or beyond the end of shift will be tagged as Shift Ended</p>\n<p><strong>UNDERTIME</strong> - Clock out before the expected end of shift will tag the talent as Undertime</p>\n<p><strong>ABSENT (2ND HALF and Undertime)</strong> - Clock out within the first four (4) hours after the shift has started will be tagged as Undertime. The last four (4) hours before the shift ends will be tagged as Absent - 2nd Half.</p>\n<p><strong> Undertime </strong></p>\n<p>An employee leaving work earlier than the required end of a Work Shift. Undertime computed in payroll is equivalent to length of time computed as the difference between the end of shift and the clock out time.</p>\n<p>Example:</p>\n<p>End Time - 3:00 PM</p>\n<p>Clock In - 2:55 PM</p>\n<p>Undertime = 5 minutes (time out short of the end of the Grace Period)</p>\n<p>Computed Undertime will be the basis of payroll deductions.</p>",
      systemPolicy:
        "<p><strong>Certify </strong></p>\n<p>1. Certification of DTR can only be done<strong> within the cutoff. </strong></p>\n<p>2. You cannot certify an <strong>incomplete DTR, current day</strong> and <strong>an ongoing shift. </strong></p>\n<p>3. Failure to certify DTRs shall result to an Auto-Certification at the end of the pay cutoff.</p>\n<p><strong>What you can do:</strong></p>\n<p>1. If with time logged (whether complete or incomplete), allows <strong>DTR amendment</strong> or <strong>Certify</strong>.</p>\n<p>2. If registered Absent, allows DTR amendment, File a Leave or Certify.</p>\n<p><strong>Amendment can be done in the following ways: </strong></p>\n<p>1. Time Recorder - Previous Shift</p>\n<p>2. Requests - File Request / DTR amendment</p>\n<p>3. Express Button - Amendment</p>\n<p><strong>Filing of leave can be done in the following ways:</strong></p>\n<p>1. Time Recorder - Previous Shift</p>\n<p>2. Requests - File Request / File Leave</p>\n<p>3. Express Button - File Leave</p>\n<p><strong>Amend DTR</strong></p>\n<p>1. You cannot amend an<strong> Ongoing / Current Shift.</strong> Filing of DTR amendment is allowed the next day after you have Clocked In.</p>\n<p>2. Amendments are disallowed by the end of the cutoff (10th or 25th).</p>\n<p>3. You are expected to amend your DTR within <strong>twenty-four (24) hours upon return to work</strong> in the succeeding Work Shift.</p>\n<p>4. You can only adjust your CLOCK IN DATE one (1) day prior your Chosen Work Date.</p>\n<p><strong>E.g</strong></p>\n<p>Work Date: November 08, 2019 - 12:00am to 09:00am</p>\n<p>Clock in Date: November 07, 2019 Clock In Time:11:00pm</p>\n<p>Clock out Date: November 08, 2019 Clock out Time:09:00am</p>\n<p>5. You can only adjust your CLOCK OUT DATE one (1) day after your Chosen Work Date.</p>\n<p><strong>E.g</strong></p>\n<p>Work Date: November 08, 2019 - 8:00am to 05:00pm</p>\n<p>Clock in Date: November 08, 2019 Clock In Time:08:00am</p>\n<p>Clock out Date: November 09, 2019 Clock out Time:02:00am</p>\n<p>6. DTR amendment request can be canceled / edited provided the request is still pending.</p>\n<p>7. DTR amendment requests that have already passed or requests that have already been denied cannot be canceled.</p>\n<p>8. DTRs that have been previously certified <strong>CANNOT</strong> be amended.</p>\n<p><strong> File Leave </strong></p>\n<p>1. Filing of Sick / Emergency Leave is allowed the next day after you have Clocked In.</p>\n<p>2. You cannot file a backdated Vacation Leave.</p>\n<p>3. You cannot file a future - dated Sick / Emergency Leave.</p>\n<p>4. The employee is expected to file a Sick or Emergency Leave within the Company online system within <strong>twenty-four (24) hours upon return to work</strong> in the succeeding Work Shift.</p>\n<p>5. Leave request can be edited provided the request is still pending.</p>\n<p>6. Approved leave request can be canceled before the effectivity date.</p>\n<p>7. Reporting to work on a day with a pre-approved SIL.</p>\n<p>- Will cancel the leave</p>\n<p>- Credit back the approved SIL to the Leave balance</p>\n<p>- Record the DTR for the day</p>",
      instruction:
        "<p><strong>What you can do:</strong></p>\n<p>1. If with time logged (whether complete or incomplete), allows DTR amendment or Certify.</p>\n<p>2. If without time logged, allows DTR Amemdment.</p>\n<p>3. If registered Absent, allows DTR amendment, File a Leave or Certify.</p>\n<p><strong>Amendment can be done in the following ways:</strong></p>\n<p>1. Time Recorder - Previous Shift</p>\n<p>2. Requests - File Request / DTR amendment</p>\n<p>3. Express Button - Amendment</p>\n<p><strong>Filing of leave can be done in the following ways:</strong></p>\n<p>1. Time Recorder - Previous Shift</p>\n<p>2. Requests - File Request / File Leave</p>\n<p>3. Express Button - File Leave</p>",
    },
    listRow: ["COMPANY POLICY", "SYSTEM POLICY", "INSTRUCTION"],
    loaded: false,
    cardIconDesc: false,
  },
};

const EMPLOYEE_LIST = [
  {
    id: "EM-1",
    employeeProfile: {
      employeeCode: "234342",
      bucketCode: "123222",
      img: null,
      initials: getInitialsOfTwoStrings("Isko", "Munista"),
      job: "Backend Developer",
      firstName: "Eva",
      lastName: "Hourig",
    },
    company: "EMAPTA",
    startDate: "12/12/2022",
    requestor: "Mahlah Milica",
    status: "Done",
    date: "12/12/2022 7:00:00+00",
  },
  {
    id: "EM-2",
    employeeProfile: {
      employeeCode: "234342",
      bucketCode: "123222",
      img: null,
      initials: getInitialsOfTwoStrings("Isko", "Munista"),
      job: "Frontend Developer",
      firstName: "Viktorya",
      lastName: "Poridge",
    },
    company: "EMAPTA",
    startDate: "12/12/2022",
    requestor: "Satomi Katarina",
    status: "Done",
    date: "12/12/2022 7:00:00+00",
  },
  {
    id: "EM-3",
    employeeProfile: {
      employeeCode: "234342",
      bucketCode: "123222",
      img: null,
      initials: getInitialsOfTwoStrings("Isko", "Munista"),
      job: "Systems Admin",
      firstName: "Friderik",
      lastName: "Jannike",
    },
    company: "Mcdonalds",
    startDate: "12/12/2022",
    requestor: "Karrie Isidora ",
    status: "Done",
    date: "12/12/2022 7:00:00+00",
  },
  {
    id: "EM-4",
    employeeProfile: {
      employeeCode: "234342",
      bucketCode: "123222",
      img: null,
      initials: getInitialsOfTwoStrings("Isko", "Munista"),
      job: "Systems Admin",
      firstName: "Andżelika",
      lastName: "Grover",
    },
    company: "Mcdonalds",
    startDate: "12/12/2022",
    requestor: "Minke Kreios",
    status: "Done",
    date: "12/12/2022 7:00:00+00",
  },
];

const PAGE_MENUBAR = {
  config: {
    isWidget: false,
    withTalent: true,
    iconType: ["standard"],
    showInfo: true,
    title: "Conso",
    icon: SVG_REQUEST_BLUE,
  },
  info: {
    infoDetails: {
      item1: "<p><strong>Title 1</strong></p>\n<p>Test description 1</p>",
      item2: "<p><strong>Title 2</strong></p>\n<p>Test description 2</p>",
      instruction: null,
    },
    listRow: ["Item 1", "Item 2"],
  },
};

const Conso = (props) => {
  let [contentMenuBar, setContentMenuBar] = useState({
    config: {
      show: true,
      isWidget: false,
      withTalent: true,
      icon: SVG_USER,
      iconType: ["check"],
      showInfo: false,
      title: (
        <div>
          <h4>Menubar Title in HTML Element</h4>
          <span>Menubar subtext</span>
        </div>
      ),
    },
    check: {
      disabled: false,
      selected: 0,
      total: 0,
      selectedItems: [],
    },
    mainButton: {
      show: true,
      label: "Create an Action",
      icon: SVG_ADD_WHITE,
      actions: [
        {
          label: "Action 1",
          action: "action1", // string optional
          icon: SVG_ADD_WHITE,
        },
      ],
    },
    button: {
      show: true,
      actions: [
        {
          show: true,
          label: "Create Form",
          action: "create-form", // string optional
          icon: SVG_ADD_WHITE,
        },
        {
          show: true,
          label: "Opens a modal",
          action: "modal", // string optional
          icon: SVG_ADD_WHITE,
        },
      ],
    },
    undoButton: {
      show: false,
      isFooter: true,
      actions: [
        {
          class: "button disabled",
          show: true,
          label: "Submit",
          action: "submit",
          icon: SVG_ADD_WHITE,
          timer: 3,
          disabled: true,
        },
        {
          show: true,
          label: "Undo Request",
          action: "undo-request",
          icon: SVG_ADD_WHITE,
        },
      ],
    },
    pagination: {
      show: true,
      hideSummary: false,
      counter: 0,
      perPage: 10,
      page: 1,
      total: 0,
    },
    buttonFooter: {
      show: true,
      actions: [
        {
          class: "button",
          label: "Submit",
          action: "footer-submit", // string optional
          icon: SVG_ADD_WHITE,
          show: true,
        },
      ],
    },
  });

  let [modalConfig, setModalConfig] = useState({
    show: false,
    config: {
      show: true,
      isWidget: false,
      withTalent: true,
      icon: SVG_USER,
      iconType: ["standard", "close"],
      showInfo: false,
      title: "MODAL",
    },
    button: {
      show: true,
      actions: [
        {
          show: true,
          label: "Sample button",
          action: "modal-action", // string optional
          icon: SVG_ADD_WHITE,
        },
      ],
    },
    pagination: {
      show: true,
      hideSummary: false,
      counter: 0,
      perPage: 10,
      page: 1,
      total: 0,
    },
  });

  let [formElement, setFormElement] = useState({
    inputCheckbox: {
      type: "checkbox",
      value: false,
      disabled: false,
    },
  });

  let [selectedItems, setSelectedItems] = useState([]);

  const displayEmployees = useCallback(() => {
    try {
      let list = [];
      EMPLOYEE_LIST.forEach((employee, idx) => {
        list.push(
          <div className="card-list-item" key={idx}>
            <InputSelectionHandler
              config={{
                type: "checkbox",
                value: selectedItems.includes(employee.id) ? true : false,
                disabled: false,
                id: employee.id,
              }}
              onChanged={(val) =>
                inputChangedHandler(
                  val,
                  employee.id,
                  formElement.inputCheckbox.type
                )
              }
            />
            <a onClick={() => props.history.push(`/sub-app/other-pages`)}>
              {props._userInformation.view == "TALENT" ? null : (
                <React.Fragment>
                  <ProfileConso params={employee.employeeProfile} />
                </React.Fragment>
              )}

              <div className="card-list-details">
                <p>{employee.company || "-"}</p>
                <span>
                  {datetimeFormatter(employee.startDate, "date") || "-"}
                </span>
                <span>{employee.requestor || "-"}</span>
                <span>{employee.status || "-"}</span>
                <span>
                  {datetimeFormatter(employee.date, "datetime-no-day") || "-"}
                </span>
                <div className="card-list-badges">{SVG_DONE}</div>
              </div>
            </a>
          </div>
        );
      });

      return list;
    } catch (error) {
      console.error("Error in displayEmployees()", error);
    }
  }, [EMPLOYEE_LIST]);

  const inputChangedHandler = (val, id, type) => {
    switch (type) {
      case "checkbox":
        if (val.target.checked === true) {
          selectedItems.push(id);
        } else {
          // selectedItems = selectedItems.filter(item => item !== id);
          var index = selectedItems.indexOf(id);
          if (index !== -1) {
            selectedItems.splice(index, 1);
          }
        }
        contentMenuBar.check.selected = selectedItems.length;
        setFormElement({ ...formElement });
        setContentMenuBar({ ...contentMenuBar });
        setSelectedItems(selectedItems);
        break;
    }
  };

  const getContentMenuBarActions = (action, data) => {
    try {
      switch (action) {
        case "button":
          if (data === "create-form") {
            props.history.push(`/sub-app/other-pages`);
          }
          if (data == "modal") {
            modalConfig.show = true;
            setModalConfig({ ...modalConfig });
          }
          break;
        case "check":
          contentMenuBar.check.total = EMPLOYEE_LIST.length;
          if (data == "all") {
            contentMenuBar.check.selected = EMPLOYEE_LIST.length;
            selectedItems = EMPLOYEE_LIST.map(res => {
              return res.id;
            });
          } else if (data == "none") {
            selectedItems = [];
            contentMenuBar.check.selected = 0;
          }
          break;
        case "icon":
          if (data == "close") {
            modalConfig.show = false;
          }
          setModalConfig({ ...modalConfig });
          break;
        default:
          break;
      }
      setSelectedItems([...selectedItems]);
      setFormElement({ ...formElement });
      setContentMenuBar({ ...contentMenuBar });
    } catch (error) {
      console.error("Error in getContentMenuBarActions()", error);
    }
  };

  const getValue = (val, component) => {
    console.log("getValue function: ", val, component);
  };

  try {
    return (
      <div className={"v2-main v2-main-lists"}>
        <div className="v2-content">
          <div className="row">
            <div className="col-12 page-title">
              <MenuBar
                config={{ ...PAGE_MENUBAR.config }}
                info={CONFIG_INFO_MULTIPLE.info}
              />
            </div>
            <div className="page-content card-sticky-belt">
              <Card hideMenuBar={true}>
                <div className="card-page">
                  <MenuBar
                    config={{ ...contentMenuBar.config }}
                    button={{ ...contentMenuBar.button }}
                    pagination={{ ...contentMenuBar.pagination }}
                    mainButton={{ ...contentMenuBar.mainButton }}
                    check={{ ...contentMenuBar.check }}
                    getActions={(action, data) =>
                      getContentMenuBarActions(action, data)
                    }
                  >
                    <div className="card-affiliate-search">
                      <AffiliateSearch
                        options={[]}
                        getValue={(value) => getValue(value, "affiliate")}
                      />
                    </div>
                    <div className="card-list client-conso-list client-contact">
                      {displayEmployees()}
                    </div>
                  </MenuBar>
                  <Modal
                    {...modalConfig}
                    getActions={(action, data) =>
                      getContentMenuBarActions(action, data)
                    }
                  >
                    <p>Sample text</p>
                  </Modal>
                </div>
              </Card>
            </div>
          </div>
          <div className="sample-div"></div>
        </div>
        <div className="v2-side">
          <SidebarFilter
            {...SAMPLE_PROPS}
            // getValue={val => getValue(val, 'sidebar')}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in rendering sample conso", error);
    return <h4>Something went wrong.</h4>;
  }
};

const mapStateToProps = (state) => {
  return {
    _userInformation: state.userInformation,
    _acl: state.acl,
  };
};

export default withRouter(connect(mapStateToProps, null)(Conso));
