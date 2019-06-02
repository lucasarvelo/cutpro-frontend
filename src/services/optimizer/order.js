import Window from "./window";

class Order {
  constructor(job) {
    this.jobNumber = job.jobNumber;
    this.clientNumber = job.clientNumber;
    this.windows = job.windows
      .map((window, index) => {
        const windows = [];
        for (var i = 1; i <= window.quantity; i++) {
          windows.push(
            new Window(
              job.jobNumber,
              window.width,
              window.height,
              index + 1 + "-" + i,
              window.type
            )
          );
        }
        return windows;
      })
      .flat();
  }
}

export default Order;
