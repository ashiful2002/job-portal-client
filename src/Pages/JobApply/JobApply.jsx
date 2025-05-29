import { param } from "motion/react-client";
import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { user } = useAuth();
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
  // console.log("from log");
  const { id: jobId } = useParams();
  console.log({ _id, jobId });
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log({ linkedIn, github, resume });

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };
    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "congratulations!",
            text: "Your application has been submitted",
            icon: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    alert("fsdag fsa ag asdg d ");
  };
  return (
    <div>
      <h2 className="text-4xl text-center">
        Apply job for
        <Link className="underline text-primary" to={`/jobs/${jobId}`}>
          {title}
        </Link>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          {/* <legend className="fieldset-legend">Page details</legend> */}

          <label className="label">LinkedIn Link</label>
          <input
            name="linkedIn"
            type="url"
            className="input"
            placeholder="My Linked in url"
          />
          <label className="label">Github Link</label>
          <input
            name="github"
            type="url"
            className="input"
            placeholder="My github  url"
          />
          <label className="label">Resume Link</label>
          <input name="resume" type="url" className="input" placeholder="Resume" />
          <input
           
            type="submit"
            value="Apply"
            className="btn btn-primary"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
