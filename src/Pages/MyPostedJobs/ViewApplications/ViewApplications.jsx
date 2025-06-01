import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { job_id } = useParams();
  const application = useLoaderData();
  //   console.log(application);
  const handleStatusChange = (e, application_id) => {
    // console.log(e.target.value, application);
    axios
      .patch(`http://localhost:3000/applications/${application_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {" "}
      {application.length} Applicationss for: {job_id}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No. </th>
              <th>Applicant</th>
              <th>Github</th>
              <th>linkedIn</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {application.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.applicant}</td>
                <td>{item.github}</td>
                <td>{item.linkedIn}</td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, item._id)}
                    defaultValue={item.status}
                    className="select"
                  >
                    <option disabled={true}>Application Status</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;

// applicant
// :
// "minimukto2002@gmail.com"
// github
// :
// "https://daisyui.com/components/fieldset/"
// jobId
// :
// "683b608e4bb4b83deb9641a4"
// linkedIn
// :
// "https://daisyui.com/components/fieldset/"
// resume
// :
// "https://github.com/ashiful2002?tab=repositories"
// _id
// :
// "683b61124bb4b83deb9641a6"
