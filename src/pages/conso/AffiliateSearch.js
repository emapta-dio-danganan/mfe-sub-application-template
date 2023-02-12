import React from "react";
import Card from "../../components/card/Card";
import AffiliateSearch from "empower-affiliate-search";

const AFFILIATE_OPTIONS = [
  {
    label: "Fruit Name",
    value: "fruit_name",
    type: "string",
  },
  {
    label: "Status",
    value: "fruit_status",
    type: "multiple",
    categoryOptions: [
      {
        label: "Fresh",
        value: "fresh",
      },
      {
        label: "Rotten",
        value: "rotten",
      },
    ],
  },
];

const AffiliateSearchContainer = () => {
  const getAffiliateValue = (value) => {
    console.log("getAffiliateValue Function: ", value);
  };
  try {
    return (
      <div className={"v2-main v2-main-lists"}>
        <div className="v2-content">
          <div className="row">
            <div className="col-12">
              <h4>Affiliate Search (npm install empower-affiliate-search)</h4>
              <br />
              <br />
              <Card hideMenuBar={true}>
                <div className="card-page">
                  <AffiliateSearch
                    options={AFFILIATE_OPTIONS}
                    getValue={(value) => getAffiliateValue(value)}
                    placeholder="Sample placeholder"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in rendering affiliate search", error);
    return <h4>Something went wrong.</h4>;
  }
};

export default AffiliateSearchContainer;
