import React from "react";
import Card from "../../components/card/Card";
import FileDragAndDrop from "empower-drag-and-drop-file";

const CONFIG_FILE_DRAG_AND_DROP = {
  title: "Title Text",
  allowedFormats: ["pdf", "png", "jpg", "mp3", "pptx"],
  label: "Drag and drop files here, or browse",
  subLabel: "Supports .mp4, .mov, .mkv",
  maxSize: 10,
};

const FileDragAndDropContainer = () => {
  const getValue = (value) => {
    console.log("getValue Function: ", value);
  };
  try {
    return (
      <div className={"v2-main v2-main-lists"}>
        <div className="v2-content">
          <div className="row">
            <div className="col-12">
              <h4>
                File Drag and Drop (npm install empower-drag-and-drop-file)
              </h4>
              <br />
              <br />
              <Card hideMenuBar={true}>
                <div className="card-page">
                  <FileDragAndDrop
                    {...CONFIG_FILE_DRAG_AND_DROP}
                    onChanged={(value) => getValue(value)}
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in rendering file drag and drop", error);
    return <h4>Something went wrong.</h4>;
  }
};

export default FileDragAndDropContainer;
