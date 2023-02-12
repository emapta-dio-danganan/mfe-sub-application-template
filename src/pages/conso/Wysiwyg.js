import React from "react";
import Card from "../../components/card/Card";
import Wysiwyg from "empower-wysiwyg";

const CONFIG_WYSIWYG = {
  label: "Label Text",
  apiKey: "kog90a8b1gtjldv3fexg08i3clzexrdm3vmhbv30alslcvd9",
  maxImgSize: 2,
  totalMaxImgSize: 2,
  customFileSizeError: "Exceeded the 2mb limit per image",
  maxTemplateSize: 2,
};

const WysiwygContainer = () => {
  const onChangeHandler = (template) => {
    console.log("onChangedHandler Function: ", template);
  };

  const onErrorHandler = (error) => {
    console.error("onErrorHandler Function: ", error);
  };

  try {
    return (
      <div className={"v2-main v2-main-lists"}>
        <div className="v2-content">
          <div className="row">
            <div className="col-12">
              <h4>Wysiwyg Editor (npm install empower-wysiwyg)</h4>
              <br />
              <br />
              <Card hideMenuBar={true}>
                <div className="card-page">
                  <Wysiwyg
                    {...CONFIG_WYSIWYG}
                    onChange={(template) => onChangeHandler(template)}
                    onError={(error) => onErrorHandler(error)}
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in rendering wysiwyg", error);
    return <h4>Something went wrong.</h4>;
  }
};

export default WysiwygContainer;
