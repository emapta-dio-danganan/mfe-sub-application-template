import React from "react";
import Card from "../../components/card/Card";
import FileViewer from "empower-file-viewer";

const DragDropDiv = () => {
  const CONFIG_FILE_VIEWER = {
    file: {
      path : 'sample.pdf', //public path
      type : 'pdf',
    },
    watermark: "EMPOWER",
  };

  try {
    return (
      <div className={"v2-main v2-main-lists"}>
        <div className="v2-content">
          <div className="row">
            <div className="col-8 page-content card-sticky-belt">
              <Card hideMenuBar={true}>
                <div className="card-page">
                  <h3>Empower File Viewer</h3>

                  <FileViewer {...CONFIG_FILE_VIEWER} />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in rendering file viewer", error);
    return <h4>Something went wrong.</h4>;
  }
};

export default DragDropDiv;
