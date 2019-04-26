const initialState = {
  jobs: [
    {
      jobNumber: 123456,
      clientNumber: 123456,
      clientName: "ddsd",
      formChecked: true,
      windows: [
        {
          width: 2.256,
          height: 12.256,
          quantity: "4"
        },
        {
          width: 2.256,
          height: 12.256,
          quantity: "4"
        },
        {
          width: 2.256,
          height: 12.256,
          quantity: "4"
        },
        {
          width: 2.256,
          height: 12.256,
          quantity: "4"
        }
      ]
    },
    {
      jobNumber: 1234,
      clientNumber: 1234,
      clientName: "hello",
      formChecked: true,
      windows: []
    },
    {
      jobNumber: 4567895,
      clientNumber: 4568754,
      clientName: "Paco",
      formChecked: true,
      windows: []
    }
  ],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_JOB":
      return {
        ...state,
        jobs: state.jobs
          .filter(job => job.jobNumber !== action.payload.id)
          .push(action.payload)
      };
    case "ADD_JOB":
      return { ...state, jobs: [...state.jobs, action.payload] };
    case "DELETE_JOB":
      return {
        ...state,
        jobs: state.jobs.filter(
          job => job.jobNumber !== action.payload.jobNumber
        )
      };
    case "ADD_WINDOW":
      return {
        ...state,
        jobs: state.jobs.map(job => {
          if (job.jobNumber === action.payload.jobNumber) {
            return { ...job, windows: [...job.windows, action.payload.window] };
          }
          return job;
        })
      };
    case "UPDATE_WINDOW":
      return {
        ...state,
        jobs: state.jobs.map(job => {
          if (job.jobNumber === action.payload.jobNumber) {
            return {
              ...job,
              windows: job.windows.map((window, index) => {
                if (index === action.payload.windowIndex) {
                  return action.payload.window;
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
          if (job.jobNumber === action.payload.jobNumber) {
            return {
              ...job,
              windows: job.windows.filter(
                (window, index) => index !== action.payload.windowIndex
              )
            };
          }
          return job;
        })
      };
    case "FETCH_JOBS_BEGIN":
      return { ...state, loading: true };
    case "FETCH_JOBS_SUCCESS":
      return { ...state, loading: false, jobs: action.payload };
    case "FECH_JOBS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
