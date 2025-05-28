import React, { use, useEffect, useState } from "react";
import JobsCard from "./JobsCard/JobsCard";
import { div } from "motion/react-client";

const HotJobs = () => {
  const [jobs, setjobs] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setjobs(data);
      });
  }, []);
  return (
    <div className="bg-gray-200 ">
      <h1 className="text-4xl font-bold py-5 capitalize text-center">
        Hot jobs for the day
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 px-2 ">
        {jobs && jobs.map((job) => <JobsCard job={job} key={job._id} />)}
      </div>
    </div>
  );
};

export default HotJobs;
