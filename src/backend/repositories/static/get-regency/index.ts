import data from "./data";
import type { Regency } from "./type";

class RegencySingleton {
  private static instance: RegencySingleton;
  private list: Regency[];

  // Private constructor to prevent direct instantiation
  private constructor() {
    this.list = data;
  }

  // Static method to get the singleton instance
  public static getInstance() {
    if (!RegencySingleton.instance) {
      RegencySingleton.instance = new RegencySingleton();
    }
    return RegencySingleton.instance;
  }

  public getList() {
    return this.list;
  }
  public getById(id: number) {
    return this.list.find((regency) => regency.id === id);
  }
  public getByProvinceId(id: number) {
    return this.list.filter((regency) => regency.provinsi_id === id);
  }
  public getRandom() {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }
  public getRandomByProvinceId(id: number) {
    const _list = this.list.filter((regency) => regency.provinsi_id === id);
    const randomIndex = Math.floor(Math.random() * _list.length);
    return _list[randomIndex];
  }
}

const regencyInstance = RegencySingleton.getInstance();

export default regencyInstance;
