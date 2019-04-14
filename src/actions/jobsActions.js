export const addJob = job => dispatch => {
  dispatch({
    type: "ADD_JOB",
    payload: job
  });
};

export const updateJob = job => dispatch => {
  dispatch({
    type: "UPDATE_JOB",
    payload: job
  });
};

export const removeJob = job => dispatch => {
  dispatch({
    type: "REMOVE_JOB",
    payload: job
  });
};

export const fetchJobsBegin = () => ({
  type: "FETCH_JOBS_BEGIN"
});

export const fetchJobsSuccess = jobs => ({
  type: "FETCH_JOBS_SUCCESS",
  payload: jobs
});

export const fetchJobsFailure = error => ({
  type: "FETCH_JOBS_FAILURE",
  payload: error
});
