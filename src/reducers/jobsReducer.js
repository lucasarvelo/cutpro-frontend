const initialState = { jobs: [], loading: false, error: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_JOB":
      return {
        ...state,
        jobs: state.jobs
          .filter(job => job.id !== action.payload.id)
          .push(action.payload)
      };
    case "ADD_JOB":
      return { ...state, jobs: [...state.jobs, action.payload] };
    case "REMOVE_JOB":
      return {
        ...state,
        jobs: state.jobs.filter(job => job.id !== action.payload)
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
