import React from "react";
import banner from "../assets/img_header.jpg";
import donation from "../assets/img_jireh_cross_gcash.jpg";
import "../app.css";

export default () => (
  <div style={{ textAlign: "center" }}>
    <img className="banner" src={banner} alt="Banner" />
    <h1 className="description">
      "We build creative experiences and inventive solutions for web and
      mobile."
    </h1>
    <img src={donation} alt="Gcash donation" />
  </div>
);
