const initialState = {
  jobs: [
    {
      jobNumber: 123456,
      clientNumber: 123456,
      clientName: "Scott Tolisky",
      formChecked: true,
      windows: [
        {
          width: 20.5,
          height: 50,
          quantity: 1,
          type: "Low Profile"
        },
        {
          width: 45.25,
          height: 25.313,
          quantity: 2,
          type: "Fix Casement"
        },
        {
          width: 45.225,
          height: 46.312,
          quantity: 3,
          type: "Casement"
        },
        {
          width: 23.5,
          height: 62,
          quantity: 4,
          type: "Double Hung"
        }
      ]
    },
    {
      jobNumber: 1234,
      clientNumber: 1234,
      clientName: "Web Boss",
      formChecked: true,
      windows: []
    },
    {
      jobNumber: 4567895,
      clientNumber: 4568754,
      clientName: "Lucas Arvelo",
      formChecked: true,
      windows: []
    }
  ],
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "UPDATE_JOB":
      return {
        ...state,
        jobs: state.jobs
          .filter(job => job.jobNumber !== payload.id)
          .push(payload)
      };
    case "ADD_JOB":
      return { ...state, jobs: [...state.jobs, payload] };
    case "DELETE_JOB":
      return {
        ...state,
        jobs: state.jobs.filter(job => job.jobNumber !== payload.jobNumber)
      };
    case "ADD_WINDOW":
      return {
        ...state,
        jobs: state.jobs.map(job => {
          if (job.jobNumber === payload.jobNumber) {
            return { ...job, windows: [...job.windows, payload.window] };
          }
          return job;
        })
      };
    case "UPDATE_WINDOW":
      return {
        ...state,
        jobs: state.jobs.map(job => {
          if (job.jobNumber === payload.jobNumber) {
            return {
              ...job,
              windows: job.windows.map((window, index) => {
                if (index === payload.windowIndex) {
                  return payload.window;
                }
                return window;
              })
            };
          }
          return job;
        })
      };

    case "DELETE_WINDOW":
      return {
        ...state,
        jobs: state.jobs.map(job => {
          if (job.jobNumber === payload.jobNumber) {
            return {
              ...job,
              windows: job.windows.filter(
                (window, index) => index !== payload.windowIndex
              )
            };
          }
          return job;
        })
      };

    case "FETCH_JOBS_BEGIN":
      return { ...state, loading: true };
    case "FETCH_JOBS_SUCCESS":
      return { ...state, loading: false, jobs: payload };
    case "FECH_JOBS_FAILURE":
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
