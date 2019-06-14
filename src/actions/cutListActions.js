import { getId } from "../services/idGenerator/idGenerator";

export const addCuttingList = data => dispatch => {
  const id = getId();
  const windowsTotal = data.orders
    .map(order => order.windows.length)
    .reduce((windowsTotal, orderTotal) => windowsTotal + orderTotal);

  dispatch({
    type: "ADD_CUTTING_LIST",
    payload: {
      poNumber: id,
      ordersTotal: data.orders.length,
      windowsTotal: windowsTotal,
      dateCreation: new Date().toLocaleDateString("en-US"),
      options: {
        marginError: data.cuttingList[0].marginError,
        bladeThickness: data.cuttingList[0].bladeThickness
      },
      cuttingList: data.cuttingList
    }
  });
};

export const removeCuttingList = poNumber => dispatch => {
  dispatch({
    type: "REMOVE_CUTTING_LIST",
    payload: { poNumber: Number(poNumber) }
  });
};

export const cutPart = payload => dispatch => {
  dispatch({
    type: "CUT_PART",
    payload: payload
  });
};
