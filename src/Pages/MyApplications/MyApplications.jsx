import React from "react";
import ApplicationStat from "./Sections/ApplicationStats/ApplicationStat";
import ApplicationList from "./Sections/ApplicationsList/ApplicationList";

const MyApplications = () => {
  return (
    <>
      <div>MyApplications</div>
      <ApplicationStat />
      <ApplicationList />
    </>
  );
};

export default MyApplications;
