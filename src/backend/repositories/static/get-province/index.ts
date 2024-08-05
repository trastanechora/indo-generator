import data from "./data";
import type { Province } from "./type";

class ProvinceSingleton {
  private static instance: ProvinceSingleton;
  private list: Province[];

  // Private constructor to prevent direct instantiation
  private constructor() {
    this.list = data;
  }

  // Static method to get the singleton instance
  public static getInstance() {
    if (!ProvinceSingleton.instance) {
      ProvinceSingleton.instance = new ProvinceSingleton();
    }
    return ProvinceSingleton.instance;
  }

  public getList() {
    return this.list;
  }
  public getRandom() {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }
  public getById(id: number) {
    return this.list.find((province) => province.id === id);
  }
}

const provinceInstance = ProvinceSingleton.getInstance();

export default provinceInstance;
