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

export const deleteJob = job => dispatch => {
  dispatch({
    type: "DELETE_JOB",
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

export const addWindow = (jobNumber, window) => ({
  type: "ADD_WINDOW",
  payload: { jobNumber: jobNumber, window: window }
});

export const deleteWindow = (jobNumber, windowIndex) => dispatch => {
  dispatch({
    type: "DELETE_WINDOW",
    payload: { jobNumber: jobNumber, windowIndex: windowIndex }
  });
};

export const updateWindow = state => dispatch => {
  dispatch({
    type: "UPDATE_WINDOW",
    payload: {
      jobNumber: state.jobNumber,
      windowIndex: state.index,
      window: {
        width: state.width,
        height: state.height,
        quantity: state.quantity
      }
    }
  });
};
