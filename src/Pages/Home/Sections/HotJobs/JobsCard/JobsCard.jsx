import { desc } from "motion/react-client";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
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
  } = job;
  return (
    <div>
      <div className="card bg-base-100 mt-3  shadow-sm">
        <div className="card-body">
          <div className="flex items-center gap-5">
            <div>
              <figure>
                <img src={company_logo} alt={title} className="w-12" />
              </figure>
            </div>
            <div>
              <h2 className="">{company}</h2>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> {location}
              </p>
            </div>
          </div>
          <p className="text-stone-500 -mb-1">
            Salary : {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency}
          </p>
          <p>{description}</p>
          <div className="card-actions">
            {requirements.map((res, index) => (
              <div
                key={index}
                className="badge badge-outline badge-sm p-2.5 xl:p-3 bg-violet-500 text-white"
              >
                {res}
              </div>
            ))}
            <div className="card-actions justify-end">
              <Link to={`/jobs/${_id}`} className="btn btn-primary btn-xs">
                Show Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
