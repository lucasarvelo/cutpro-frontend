class Material {
  constructor(type, materialLength, options) {
    this.type = type;
    this.materialLength = materialLength;
    this.materialLeft = materialLength;
    this.materialWaste = 0;
    this.parts = [];
  }

  addPart = (part, materialWaste) => {
    const necessaryMaterial = part.partLength + materialWaste;

    if (necessaryMaterial < this.materialLeft) {
      this.materialLeft -= necessaryMaterial;
      this.materialWaste += materialWaste;
      this.parts.push(part);
      return true;
    } else {
      return false;
    }
  };
}

export default Material;
