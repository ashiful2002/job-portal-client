import React from "react";

const ApplicationTableRow = ({ application, index }) => {
  const { applicant, github, linkedIn, resume, company, company_logo, title } =
    application;
  // console.log(application);

  return (
    <div>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className=" h-12 w-12">
                <img src={company_logo} alt={company} />
                {index + 1}
              </div>
            </div>
            <div>
              <div className="font-bold">{company}</div>
              <div className="text-sm opacity-50">{applicant}</div>
              <div className="text-sm opacity-50">
                Applied for: <br /> {title}
              </div>
            </div>
          </div>
        </td>
        <td className=" mb-2 rounded-xl shadow">
          <span className="badge badge-ghost badge-sm">Github :</span>
          <a
            className="underline text-primary"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {github}
          </a>
          <br />
          <span className="badge badge-ghost badge-sm mt-3">
            linkedIn :
          </span>{" "}
          <a
            className="underline text-primary"
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkedIn}
          </a>
          <span className="badge badge-ghost badge-sm">Resume :</span>
          <a
            className="underline text-primary"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            {resume}
          </a>
          <br />
        </td>
      </tr>
    </div>
  );
};

export default ApplicationTableRow;
