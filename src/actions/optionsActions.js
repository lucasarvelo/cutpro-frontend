export const updateBladeThickness = bladeThickness => ({
  type: "UPDATE_BLADE_THICKNESS",
  payload: { bladeThickness: bladeThickness }
});

export const updateMarginError = marginError => ({
  type: "UPDATE_MARGIN_ERROR",
  payload: { marginError: marginError }
});

export const updateMaterialTypes = materialTypes => ({
  type: "UPDATE_MATERIAL_TYPE",
  payload: { materialTypes: materialTypes }
});
