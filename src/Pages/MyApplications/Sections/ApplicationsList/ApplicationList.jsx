import React, { use } from "react";
import ApplicationTableRow from "../../Components/ApplicationTableRow";

const ApplicationList = ({ MyApplicationsPromise }) => {
  const applications = use(MyApplicationsPromise);
  console.log(applications);

  return (
    <div>
      <h2>Applied for {applications.length}</h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="shadow">
              <tr className="">
                <th className="">Applicant Email</th>
                <th>Applie for</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application, index) => (
                <ApplicationTableRow
                  key={application._id}
                  application={application}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationList;
