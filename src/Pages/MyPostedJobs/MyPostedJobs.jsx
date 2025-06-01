import React, { Suspense } from "react";
import useAuth from "../../Hooks/useAuth";
import PostedJobList from "./PostedJobList";
import { jobsCreatedByPromise } from "../../Apis/jobsApi";

const MyPostedJobs = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>My posted jobs: </h2>
      <Suspense>
        <PostedJobList
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></PostedJobList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
