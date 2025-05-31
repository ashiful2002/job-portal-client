import React, { Suspense } from "react";
import ApplicationStat from "./Sections/ApplicationStats/ApplicationStat";
import ApplicationList from "./Sections/ApplicationsList/ApplicationList";
import Loading from "../../Components/Loading/Loading";
import useAuth from "../../Hooks/useAuth";
import { MyApplicationsPromise } from "../../Apis/MyApplicationsPromise";

const MyApplications = () => {
  const { user } = useAuth();

  return (
    <>
      <div>MyApplications</div>
      <ApplicationStat />
      <Suspense fallback={<Loading />}>
        <ApplicationList
          MyApplicationsPromise={MyApplicationsPromise(user.email)}
        />
      </Suspense>
    </>
  );
};

export default MyApplications;
