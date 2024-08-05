import data from "./data";
import type { District } from "./type";

class DistrictSingleton {
  private static instance: DistrictSingleton;
  private list: District[];

  // Private constructor to prevent direct instantiation
  private constructor() {
    this.list = data;
  }

  // Static method to get the singleton instance
  public static getInstance() {
    if (!DistrictSingleton.instance) {
      DistrictSingleton.instance = new DistrictSingleton();
    }
    return DistrictSingleton.instance;
  }

  public getList() {
    return this.list;
  }
  public getById(id: number) {
    return this.list.find((district) => district.id === id);
  }
  public getByRegencyId(id: number) {
    return this.list.filter((village) => village.kabupaten_id === id);
  }
  public getRandom() {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }
  public getRandomByRegencyId(id: number) {
    const _list = this.list.filter((village) => village.kabupaten_id === id);
    const randomIndex = Math.floor(Math.random() * _list.length);
    return _list[randomIndex];
  }
}

const districtInstance = DistrictSingleton.getInstance();

export default districtInstance;
