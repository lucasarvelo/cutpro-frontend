import Order from "./order";
import CuttingList from "./cuttingList";

class Optimizer {
  constructor(jobs, options) {
    this.options = options;
    this.materialTypes = options.materialTypes;
    this.jobs = jobs;
    this.orders = this.jobs.map(job => new Order(job));
    this.partsList = this.materialTypes.map(materialType => {
      return { type: materialType.name, parts: [] };
    });
    this.cuttingLists = this.materialTypes.map(material => {
      return new CuttingList(material, this.options);
    });
  }

  optimize = () => {
    const parts = this.getParts();
    //generate a CuttingList for every type of material

    parts.forEach(partList => {
      //find cutting list for this part type
      const cuttingList = this.cuttingLists.find(
        cuttingList => cuttingList.materialType === partList.type
      );
      //add parts to cutting list
      cuttingList.addParts(partList.parts);
    });

    return { orders: this.orders, cuttingList: this.cuttingLists };
  };

  getParts = () => {
    //generate a list of parts for every type of window in the orders
    this.orders.forEach(order => {
      order.windows.forEach(window => {
        const list = this.partsList.find(
          list => list.type === window.windowType
        );
        window.parts.forEach(part => {
          list.parts.push(part);
        });
      });
    });

    //short parts lists from long parts to short parts make easy to process the parts when optimize
    return this.partsList.map(list => {
      list.parts.sort(
        (a, b) => parseFloat(b.partLength) - parseFloat(a.partLength)
      );
      return list;
    });
  };
}

export default Optimizer;
