const initialState = {
  bladeThickness: 0.125,
  marginError: 0.25,
  materialTypes: ["Low Profile", "Casement", "Double Hung", "Fix Casement"]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "UPDATE_BLADE_THICKNESS":
      return { ...state, bladeThickness: payload.bladeThickness };
    case "UPDATE_MARGIN_ERROR":
      return { ...state, marginError: payload.marginError };
    case "UPDATE_MATERIAL_TYPE":
      return {
        ...state,
        materialTypes: [payload.materialTypes]
      };
    default:
      return state;
  }
};
