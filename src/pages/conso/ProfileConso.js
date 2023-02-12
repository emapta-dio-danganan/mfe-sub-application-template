import React, { useState } from "react";
import Card from "../../components/card/Card";
import {
  ProfileImage,
  ProfileDetails,
  ImageCropper,
} from "empower-profile-image";

const CONFIG_IMAGE = {
  size: "lg",
  url: "",
  placeholder: "IN",
  element1: "Firstname Lastname",
  element2: "Reporting Job",
  element3: "Reporting Department",
};

const CONFIG_DETAILS = {
  size: "lg",
  url: "",
  placeholder: "IN",
  first_name: "first_name",
  last_name: "last_name",
  job: "position title",
  department: "department name",
  site: "site",
  employeNumber: "employeNumber",
  tenure: {
    year: "2021",
    month: "Aug",
  },
  reportingTo: {
    url: "",
    placeholder: "IN",
    first_name: "Reporting Firstname",
    last_name: "Reporting Lastname",
    job: "Reporting Job",
  },
};

const ProfileImagePage = () => {
  const [crop, setCrop] = useState({});

  const imageCropperHandler = (value) => {
    setCrop(value);
  };

  try {
    return (
      <div className={"v2-main v2-main-lists"}>
        <div className="v2-content">
          <div className="row">
            <div className="col-12">
              <h4>Empower Profile Image (npm install empower-profile-image)</h4>
              <br />
              <br />
              <Card hideMenuBar={true}>
                <div className="card-page">
                  <div>
                    <h5>Profile Image Component</h5>
                    <br />
                    <ProfileImage config={CONFIG_IMAGE} />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    <h5>Profile Details Component</h5>
                    <br />
                    <ProfileDetails config={CONFIG_DETAILS} />
                  </div>
                  <br />
                  <br />
                  <br />

                  <div>
                    <h5>Image Cropper Component</h5>
                    <br />
                    <ImageCropper
                      uploadAction={(value) => imageCropperHandler(value)}
                      uploadResult={true}
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
    console.error("Error in rendering profile image", error);
    return <h4>Something went wrong.</h4>;
  }
};

export default ProfileImagePage;
