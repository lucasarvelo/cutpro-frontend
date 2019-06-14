import Part from "./part";

class Window {
  constructor(jobNumber, width, height, windowNumber, windowType) {
    this.width = width;
    this.height = height;
    this.windowNumber = windowNumber;
    this.windowType = windowType;
    this.jobNumber = jobNumber;
    this.parts = [
      new Part(this.jobNumber, windowNumber, this.width, "Head"),
      new Part(this.jobNumber, windowNumber, this.width, "Sill"),
      new Part(this.jobNumber, windowNumber, this.height, "Jamb"),
      new Part(this.jobNumber, windowNumber, this.height, "Jamb")
    ];
  }
}

export default Window;
