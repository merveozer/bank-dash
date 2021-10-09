import React from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.css"


export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle"> Gelir </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> $2,415 </span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub"> Geçen ay </span>
      </div>
      
      <div className="featuredItem">
        <span className="featuredTitle"> Gider </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> $2,985 </span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub"> Geçen ay </span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle"> Satışlar </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> $2,985 </span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub"> Geçen ay </span>
      </div>

    </div>
  );
}
