class Part {
  constructor(jobNumber, partNumber, partLength, type) {
    this.partNumber = jobNumber + "-" + partNumber;
    this.partLength = partLength;
    this.type = type;
    this.isCut = false;
  }

  cut = () => {
    if (!this.isCut) {
      this.isCut = true;
    } else {
      return null;
    }
  };

  uncut = () => (this.isCut ? (this.isCut = false) : null);
}

export default Part;
