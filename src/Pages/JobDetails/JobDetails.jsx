import React, { use } from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const {
    _id,
    company_logo,
    company,
    title,
    location,
    jobType,
    category,
    description,
    requirements,
    salaryRange,
  } = useLoaderData();

  return (
    <div className="h-[70vh] flex items-center justify-center flex-col">
      <h2>Job details of: {company}</h2>
      <p>cat : {category}</p>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
