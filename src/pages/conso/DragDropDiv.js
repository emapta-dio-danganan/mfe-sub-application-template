import React from "react";
import Card from "../../components/card/Card";
import DragDropContainer from "empower-drag-drop-container";

const DragDropDiv = () => {
  const getComponentOrder = (value) => {
    console.log("getComponentOrder Function: ", value);
  };

  try {
    return (
      <div className={"v2-main v2-main-lists"}>
        <div className="v2-content">
          <div className="row">
            <div className="col-12 page-content">
              <h4>
                Drag and Drop Container (npm install
                empower-drag-drop-container)
              </h4>
              <br />
              <br />
              <Card hideMenuBar={true}>
                <div className="card-page">
                  <br />
                  <DragDropContainer
                    id="component-collection"
                    savedOrder={
                      "component-collection-item-2,component-collection-item-0,component-collection-item-3,component-collection-item-1"
                    }
                    getOrder={(value) => getComponentOrder(value)}
                  >
                    <div id="test-1">
                      <h1>test title</h1>
                      <p>test</p>
                    </div>
                    <div id="test-2">Component 2</div>
                    <div id="test-3">Component 3</div>
                    <div id="test-4">Component 4</div>
                  </DragDropContainer>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in rendering drag and drop", error);
    return <h4>Something went wrong.</h4>;
  }
};

export default DragDropDiv;
