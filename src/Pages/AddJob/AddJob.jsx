import React from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddaJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    // process salary range
    const { min, max, salary, ...newJob } = data;
    newJob.salaryRange = { min, max, salary };

    // process requirements
    const requirementsArray = newJob.requirements
      .split(",")
      .map((res) => res.trim());
    newJob.requirements = requirementsArray;

    // process responsibilities
    const responsibilitiesArray = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());
    newJob.responsibilities = responsibilitiesArray;
    newJob.status = "active";
    console.log(newJob);

    // post job in databse
    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <h2>Add Job</h2>
      <form onSubmit={handleAddaJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Title</label>
          <input
            name="title"
            type="text"
            className="input"
            placeholder="Job title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="company name"
          />

          <label className="label">Location</label>
          <input
            name="location"
            type="text"
            className="input"
            placeholder="Company location"
          />
          <label className="label">Company Logo</label>
          <input
            type="text"
            name="companyLogo"
            className="input"
            placeholder="company Logo url"
          />
        </fieldset>
        {/* job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Type</legend>

          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="On-Site"
              value="On site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value="remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
              value="remote"
            />
          </div>
        </fieldset>
        {/* job category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            defaultValue="Job category"
            value="category"
            className="select"
          >
            <option disabled={true}>Job category</option>
            <option value="engineers">Engineers</option>
            <option value="marketing">Marketing</option>
            <option value="sales">sales</option>
          </select>
        </fieldset>
        {/* deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Dedline</legend>
          <input name="deadline" type="date" className="input" />
        </fieldset>
        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                name="minSalary"
                type="text"
                className="input"
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input
                name="maxSalary"
                type="text"
                className="input"
                placeholder="maximum salary"
              />
            </div>

            <div>
              <label className="label">Currency </label>
              <select
                defaultValue="Job category"
                value="currency"
                className="select"
              >
                <option disabled={true}>Select a currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>Euro</option>
                <option>Inr</option>
              </select>
            </div>
          </div>
        </fieldset>
        {/* job description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            name="description"
            className="textarea"
            placeholder="Job Description"
          ></textarea>
        </fieldset>
        {/* Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            name="requirements"
            className="textarea"
            placeholder="Job Requirements (separated By comma)"
          ></textarea>
        </fieldset>
        {/* Job responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job responsibilities</legend>
          <textarea
            name="responsibilities"
            className="textarea"
            placeholder="Job responsibilities (separated By comma)"
          ></textarea>
        </fieldset>

        {/* hr related info */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Hr related info</legend>

          <label className="label">Hr Name</label>
          <input
            name="hr_name"
            type="text"
            className="input"
            placeholder="Hr Name"
          />

          <label className="label">Hr Email</label>
          <input
            type="email"
            name="hr_email"
            className="input"
            placeholder="hr_email"
            defaultValue={user.email}
          />

          <input className="btn" type="submit" value="ADD Job" />
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
