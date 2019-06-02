import Material from "./material";

class CuttingList {
  constructor(material, options) {
    this.materialType = material.name;
    this.materialLength = material.materialLength;
    this.materials = [new Material(material.name, material.materialLength)];
    this.marginError = options.marginError;
    this.bladeThickness = options.bladeThickness;
  }

  addParts = parts => {
    parts.forEach(part => {
      let partAdded = this.materials.some(material =>
        material.addPart(part, this.marginError + this.bladeThickness)
      );

      //if not material left, add new material and part to the cutting list
      if (!partAdded) {
        this.materials.push(
          new Material(this.materialType, this.materialLength)
        );

        this.materials[this.materials.length - 1].addPart(
          part,
          this.marginError + this.bladeThickness
        );
      }
    });
  };
}

export default CuttingList;
