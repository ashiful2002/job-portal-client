import React from "react";
import { useLoaderData } from "react-router";

const JobApply = () => {
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
  console.log("from log", title);

  return (
    <div>
      <h2 className="text-4xl">Apply job for {title}</h2>
    </div>
  );
};

export default JobApply;
