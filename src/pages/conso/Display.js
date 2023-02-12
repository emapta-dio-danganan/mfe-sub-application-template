import React, { useState } from "react";
import { SVG_BADGE_APPROVE, SVG_BADGE_PENDING } from "../../assets/Asset";
import {
  Alert,
  Badge,
  Chip,
  Card,
  RelatedActivities,
  NavTab,
  Info,
  Accordion,
  SnackBar,
  MediaThumbnail,
  Button,
  Tooltip,
} from "empower-display";

const CONFIG_INFO_SINGLE = {
  title: "Info Title",
  info: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
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

const CONFIG_CHIP = {
  removeIcon: true,
  label: "Chip Label",
  id: "chipID",
  disabled: false,
};

const CONFIG_ALERT_BATCH = {
  show: true,
  actionable: true,
  status: "warning", // "success", "info", "critical", "warning"
  title: "Sample Alert Title",
  message: [
    {
      title: "Sample warning message",
      message: ["Sample message 1", "Sample Message 2"],
    },
  ],
  label: "optional Label",
  batch: 5, //limit before see more
  actions: [
    {
      label: "Submit",
      isDisabled: false,
    },
    {
      label: "Cancel",
      isDisabled: false,
    },
  ],
};

const CONFIG_ALERT_DROPDOWN = {
  show: true,
  actionable: true,
  status: "success",
  title: "Sample Alert Title",
  message: ["Sample  Message Here"],
  buttons: [
    {
      label: "Start Editing",
      icon: (
        <img src="https://storage.googleapis.com/empower-production-assets/images/icons/icon-arrowdown-white.svg" />
      ),
      iconPlacement: "right", // left, right
      class: "", // this is optional
      withDropDown: true,
      actions: [
        {
          label: "As Public Template",
          action: "as_public",
          isDisabled: true,
          tooltip: {
            delay: 400, // default 400
            direction: "right", //top, right, bottom, left
            content: "This is the content for tooltip",
          },
        },
        {
          label: "As Assigned Template",
          action: "as_assigned",
          isDisabled: false,
          tooltip: {
            delay: 400, // default 400
            direction: "right", //top, right, bottom, left
            content: "This is the content for tooltip",
          },
        },
      ],
    },
    {
      label: "Choose Another Template",
      icon: (
        <img src="https://storage.googleapis.com/empower-production-assets/images/icons/icon-arrowdown-white.svg" />
      ),
      iconPlacement: "right", // left, right
      class: "outline", // this is optional
      withDropDown: false, //set to "true" if you want to add dropdown and replace "action" with array "actions"
      action: "another_template",
    },
  ],
};

const CONFIG_BUTTON_DROPDOWN = {
  show: true,
  actionable: true,
  status: "success",
  title: "Sample Alert Title",
  message: ["Sample  Message Here"],
  label: "Start Editing",
  icon: (
    <img src="https://storage.googleapis.com/empower-production-assets/images/icons/icon-arrowdown-white.svg" />
  ),
  iconPlacement: "right", // left, right
  class: "outline",
  actions: [
    {
      label: "As Public Template",
      action: "as_public",
      isDisabled: false,
      tooltip: {
        delay: 400, // default 400
        direction: "right", //top, right, bottom, left
        content: "This is the content for tooltip",
      },
    },
    {
      label: "As Assigned Template",
      action: "as_assigned",
      isDisabled: false,
      tooltip: {
        delay: 400, // default 400
        direction: "right", //top, right, bottom, left
        content: "This is the content for tooltip",
      },
    },
  ],
  withDropDown: true,
};

const CONFIG_TOOLTIP_TOP = {
  delay: 600, // default 400
  direction: "top", //top, right, bottom, left
  content: "This is the content for tooltip",
};

const CONFIG_TOOLTIP_RIGHT = {
  delay: 600, // default 400
  direction: "right", //top, right, bottom, left
  content: "This is the content for tooltip",
};

const CONFIG_BADGE = {
  currentStat: "APPROVED",
  historyStat: ["PENDING", "REQUEST_STATUS_WARNING", "REQUEST_STATUS_CRITICAL"],
};

const MEDIA_THUMB_PROPS = {
  title: "Test title",
  data: [
    {
      filename: "123.mp4",
      type: "mp4",
      id: "1",
    },
    {
      filename: "testimage.jpg",
      type: "jpg",
      thumbnailPath:
        "https://upload.wikimedia.org/wikipedia/commons/e/ee/Sample_abc.jpg",
      id: "2",
    },
    {
      filename: "testimage2.png",
      type: "png",
      id: "3",
    },
    {
      filename: "audio.mp3",
      type: "mp3",
      id: "4",
    },
    {
      filename: "docu.docx",
      type: "docx",
      id: "5",
    },
    {
      filename: "testpdf.pdf",
      type: "pdf",
      id: "6",
    },
  ],
};

const ACTIVITIES = [
  {
    badge: SVG_BADGE_APPROVE,
    status: "approved",
    desc: "Desc 1",
    date: "date here",
  },
  {
    badge: SVG_BADGE_PENDING,
    status: "Pending",
    desc: "Desc 2",
    date: "date here",
  },
];

const Display = () => {
  let [accordion, setAccordion] = useState([
    {
      title: "Title 1",
      subText: "Subtext Title 1",
      checked: true,
      show: true,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "Title 2",
      subText: "Subtext Title 2",
      checked: false,
      show: false,
      content: "TEST",
    },
  ]);

  let [showSnackbar, setShowSnackbar] = useState(false);

  const CONFIG_ALERT = {
    show: true,
    actionable: true,
    status: "success", // "success", "info", "critical", "warning"
    title: "Sample Alert Title",
    message: ["Sample  Message Here"],
    label: "optional Label",
    actions: [
      {
        label: "Submit",
        clicked: (event) => getActions(event, "submit-alert"),
        isDisabled: false,
      },
      {
        label: "Cancel",
        clicked: (event) => getActions(event, "cancel-alert"),
        isDisabled: false,
      },
    ],
  };

  let [configTab, setConfigTab] = useState({
    tabs: [
      { label: "On Time", value: "ON_TIME", status: "ON_TIME" },
      { label: "Tardy", value: "TARDY", status: "TARDY" },
      { label: "On Leave", value: "ON_LEAVE", status: null },
      { label: "Not in Office", value: "NOT_IN_OFFICE", status: "" },
    ],
    selected: "ON_TIME",
  });

  const getActions = (value, data) => {
    switch (data) {
      case "accordion":
        accordion.map((a, i) => {
          if (i === value.id) {
            return (a = value.details);
          }
        });
        setAccordion([...accordion]);
        break;
      case "tab":
        configTab.selected = value;
        setConfigTab({ ...configTab });
        break;
      default:
        console.log("getActions Function: ", value, data);
        break;
    }
  };

  try {
    return (
      <div className={"v2-main v2-main-lists"}>
        <div className="v2-content">
          <div className="row">
            <div className="col-12">
              <h4>Display (npm install empower-display)</h4>
              <br />
              <br />
              <Card hideMenuBar={true}>
                <div className="card-page">
                  <div>
                    <h5>Info Single</h5>
                    <br />
                    <Info
                      config={CONFIG_INFO_SINGLE}
                      onChange={(e) => getActions(e, "info")}
                    />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    <h5>Info Multiple</h5>
                    <br />
                    <Info
                      config={CONFIG_INFO_MULTIPLE}
                      onChange={(e) => getActions(e, "info")}
                    />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    <h5>Alert Standard</h5>
                    <br />
                    <Alert config={CONFIG_ALERT} />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    <h5>Alert Batch</h5>
                    <br />
                    <Alert config={CONFIG_ALERT_BATCH} />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    <h5>Alert with Dropdown</h5>
                    <br />
                    <Alert
                      config={{ ...CONFIG_ALERT_DROPDOWN }}
                      onChange={(action, data) => getActions(action, data)}
                    />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    <h5>Button with Dropdown</h5>
                    <br />
                    <Button
                      config={{ ...CONFIG_BUTTON_DROPDOWN }}
                      onChange={(action, data) => getActions(action, data)}
                    />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    <h5>Tooltip</h5>
                    <br />
                    <Tooltip {...CONFIG_TOOLTIP_TOP}>
                      TOP
                      <span
                        className="example-emoji "
                        role="img"
                        aria-label="cowboy emoji "
                      >
                        &nbsp;🤠
                      </span>
                    </Tooltip>
                    <br />

                    <Tooltip {...CONFIG_TOOLTIP_RIGHT}>
                      RIGHT
                      <span
                        className="example-emoji "
                        role="img"
                        aria-label="cowboy emoji "
                      >
                        &nbsp;🤠
                      </span>
                    </Tooltip>
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    <h5>Chip</h5>
                    <br />
                    <Chip config={CONFIG_CHIP} />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    <h5>Badge</h5>
                    <br />
                    <Badge config={CONFIG_BADGE} />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    <h5>Related Activities</h5>
                    <br />
                    <RelatedActivities activities={ACTIVITIES} />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    <h5>Nav Tab</h5>
                    <br />
                    <NavTab
                      config={configTab}
                      onChange={(e) => getActions(e, "tab")}
                    />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    <h5>Accordion</h5>
                    <br />
                    <Accordion
                      config={accordion}
                      onChange={(data) => getActions(data, "accordion")}
                    />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    <h5>Media Thumbnail</h5>
                    <br />
                    <MediaThumbnail
                      {...MEDIA_THUMB_PROPS}
                      getActions={(val) => getActions(val, "mediaThumb")}
                    />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    <h5>Snackbar</h5>
                    <br />
                    <SnackBar
                      duration={2}
                      show={showSnackbar}
                      onHide={(val) => setShowSnackbar(val)}
                      icon={SVG_BADGE_PENDING}
                    >
                      <span>Dynamic Snackbar Content Here</span>
                    </SnackBar>
                    <button onClick={() => setShowSnackbar(true)}>
                      Show Snackbar
                    </button>
                  </div>
                  <br />
                  <br />
                  <br />
                </div>
              </Card>
              <br />
              <br />
              <Card>
                <div>
                  <h5>Card Sample</h5>
                  <br />
                  <p>Sample Details</p>
                </div>
              </Card>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in rendering display", error);
    return <h5>Something went wrong.</h5>;
  }
};

export default Display;
