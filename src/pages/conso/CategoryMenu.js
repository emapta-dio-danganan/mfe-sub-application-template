import React, { useState } from "react";
import CategoryMenu from "empower-category-menu";
import { SVG_LEAVES } from "../../assets/Asset";
import { Card } from "empower-display";

const CategoryMenuPage = () => {
  let [categoryMenu, setCategoryMenu] = useState({
    title: "Test Menu",
    data: [
      {
        label: "Menu 1",
        action: "menu-1",
        status: "standard",
        icon: SVG_LEAVES,
        subData: [
          {
            label: "Menu 1 Sub Menu 1",
            action: "menu-1-sub-menu-1",
            status: "in-progress",
            icon: SVG_LEAVES,
          },
          {
            label: "Menu 1 Sub Menu 2",
            action: "menu-1-sub-menu-2",
            status: "in-progress",
            icon: SVG_LEAVES,
          },
        ],
      },
      {
        label: "Menu 2",
        action: "menu-2",
        status: "locked",
        icon: SVG_LEAVES,
      },
      {
        label: "Menu 3",
        action: "menu-3",
        status: "completed",
        icon: SVG_LEAVES,
      },
      {
        label: "Menu 4",
        action: "menu-4",
        status: "standard",
        icon: SVG_LEAVES,
      },

      {
        label: "Menu 5",
        action: "menu-5",
        status: "pending",
        icon: SVG_LEAVES,
      },
    ],
    selected: "menu-1-sub-menu-1",
    inner: true,
    loaded: true,
  });

  const getActions = (action, data) => {
    try {
      switch (action) {
        case "category-menu":
          categoryMenu.selected = data;
          setCategoryMenu({ ...categoryMenu });
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error in getActions()", error);
    }
  };

  try {
    return (
      <div className={"v2-main v2-main-lists"}>
        <div className="v2-content">
          <div className="row">
            <div className="col-12">
              <h4>Category Menu (npm install empower-category-menu)</h4>
              <br />
              <br />
              <Card hideMenuBar={true}>
                <div className="card-page">
                  <CategoryMenu
                    {...categoryMenu}
                    preSelected={"menu-1-sub-menu-1"}
                    getActions={(action, value) => getActions(action, value)}
                  />
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

export default CategoryMenuPage;
