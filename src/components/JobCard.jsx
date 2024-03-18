import React, { useState } from "react";
import jobData from "../utils/data.json";
import JobDetails from "../pages/JobDetails";

const JobCard = (props) => {
  const [jobAds, setJobs] = useState(jobData);
  const [showModal, setShowModal] = useState(undefined);
  const handleShow = (id) => {
    setShowModal(id);
    console.log(showModal);
  };
  const handleClose = (id) => {
    if (id === showModal) {
      setShowModal(undefined);
    }
  };

  let calcDuration = (date) => {
    const currentDate = new Date();
    const createdDate = new Date(date);
    // console.log(currentDate);
    const duration = Math.floor(
      (currentDate - createdDate) / (1000 * 60 * 60 * 24)
    );
    // console.log(duration);
    return duration;
  };

  //   console.log(props.data);
  return (
    <main id="card-list" className="px-8 py-8 bg-gray-100 text-gray-800">
      <section className="mx-auto max-w-screen-lg flex justify-center my-12">
        {/* cards container */}
        <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
          {/* card */}
          {props.data.map((job) => (
            <div
              onClick={() => handleShow(job.id)}
              className="card rounded-xl bg-gray-100 p-6 bg-white shadow-lg hover:bg-indigo-100 min-w-[320px] lg:min-w-[400px]"
            >
              {/* start */}
              <div className="mb-1 flex items-center justify-between">
                <h3 className="text-gray-800 font-bold text-md sm:text-lg md:text-xl">
                  {" "}
                  {job.title}
                </h3>
                <span
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-gray-300 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                  </svg>

                </span>
              </div>
              <p className="text-gray-700 font-medium my-1 sm:text-base md:text-lg">
              {job.company.display_name}
              </p>

              <p className="text-gray-500 font-medium my-1">
              {job.location.display_name}
              </p>

              <p className="text-gray-600 rounded-lg font-bold bg-gray-100 inline-block py-1 px-2">
              £{job.salary_min}-£{job.salary_max}
              </p>

              <div className="mt-2 sm:flex sm:items-center sm:gap-2">

                <div className="flex items-center gap-1 text-gray-500 my-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5">
                    <path fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                      clipRule="evenodd" />
                  </svg>

                  <p className="text-sm">
                  {calcDuration(job.created)} days ago
                  </p>
                </div>
                <div className="flex items-center gap-1 text-gray-500 my-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5">
                    <path fillRule="evenodd"
                      d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd" />
                    <path
                      d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                  </svg>

                  <p className="text-sm">
                  {job.contract_time}
                  </p>
                </div>
              </div>

             {/* card modal */}
              {showModal === job.id ? (
                <div className="absolute top-0 xl:inset-x-0 2xl:inset-x-0 lg:inset-x-0 z-50 md:inset-x-0 sm:inset-x-0">
                  <JobDetails info={job} close={() => handleClose(job.id)} />
                </div>
              ) : null}
              {showModal === undefined ? null : null}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default JobCard;