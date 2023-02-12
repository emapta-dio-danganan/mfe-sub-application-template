import React, { useState } from "react";
import { MenuBar, Modal } from "empower-container";
import { Card } from "empower-display";
import { SVG_USER, SVG_ADD_WHITE } from "../../assets/Asset";

const ContainerPage = () => {
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

  const getContentMenuBarActions = (action, data) => {
    try {
      switch (action) {
        case "button":
          if (data === "create-form") {
            console.log("getContentMenuBarActions Function: ", action, data);
          }
          if (data == "modal") {
            modalConfig.show = true;
            setModalConfig({ ...modalConfig });
          }
          break;
        case "check":
          console.log("getContentMenuBarActions Function: ", action, data);
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
      setContentMenuBar({ ...contentMenuBar });
    } catch (error) {
      console.error("Error in getContentMenuBarActions()", error);
    }
  };

  try {
    return (
      <div className={"v2-main v2-main-lists"}>
        <div className="v2-content">
          <div className="row">
            <div className="col-12">
              <h4>Container (npm install empower-container)</h4>
              <br />
              <br />
              <Card hideMenuBar={true}>
                <div className="card-page">
                  <div>
                    <h5>Menubar</h5>
                    <br />
                    <MenuBar
                        config={{ ...contentMenuBar.config }}
                        button={{ ...contentMenuBar.button }}
                        pagination={{ ...contentMenuBar.pagination }}
                        mainButton={{ ...contentMenuBar.mainButton }}
                        check={{ ...contentMenuBar.check }}
                        getActions={(action, data) =>
                        getContentMenuBarActions(action, data)
                        }
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <div>
                    <h5>Modal</h5>
                    <br />
                    <button onClick={() => getContentMenuBarActions("button", "modal")}> Display Modal</button>
                    <Modal
                        {...modalConfig}
                        getActions={(action, data) =>
                        getContentMenuBarActions(action, data)
                        }
                    >
                        <p>Sample text</p>
                    </Modal>
                  </div>
                  <br />
                  <br />
                  <br />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in rendering category menu", error);
    return <h5>Something went wrong.</h5>;
  }
};

export default ContainerPage;
