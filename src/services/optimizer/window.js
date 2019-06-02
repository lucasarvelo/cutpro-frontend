import Part from "./part";

class Window {
  constructor(jobNumber, width, height, windowNumber, windowType) {
    this.width = width;
    this.height = height;
    this.windowNumber = windowNumber;
    this.windowType = windowType;
    this.jobNumber = jobNumber;
    this.parts = [
      new Part(this.jobNumber, 1, this.width, "Head"),
      new Part(this.jobNumber, 2, this.width, "Sill"),
      new Part(this.jobNumber, 3, this.height, "Jamb"),
      new Part(this.jobNumber, 4, this.height, "Jamb")
    ];
  }
}

export default Window;
