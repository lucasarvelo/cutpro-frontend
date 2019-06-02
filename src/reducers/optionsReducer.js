const initialState = {
  bladeThickness: 0.125,
  marginError: 4.0,
  materialTypes: [
    { name: "Low Profile", materialLength: 190 },
    { name: "Casement", materialLength: 195 },
    { name: "Double Hung", materialLength: 185 },
    { name: "Fix Casement", materialLength: 190 }
  ]
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
        materialTypes: [...payload.materialTypes]
      };
    default:
      return state;
  }
};
