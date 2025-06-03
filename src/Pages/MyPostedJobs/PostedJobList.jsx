import React, { use } from "react";
import { Link } from "react-router";

const PostedJobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  return (
    <div>
      <div>
        <h2 className="text-3xl">Jobs created by you: {jobs.length}</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th> Job Title</th>
                <th>Company</th>
                <th>Location</th>
                <th>Count</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {jobs.map((job, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  {console.log(job.application_count)}
                  <td>{job.location}</td>
                  <td>{job.application_count}</td>
                  <td>
                    <Link className="btn btn-xs" to={`/application/${job._id}`}>
                      View Applications
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>{" "}
    </div>
  );
};

export default PostedJobList;
