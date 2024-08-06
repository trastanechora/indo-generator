import SingletonFactory from "@/backend/repositories/static/lib/singleton-factory";

import data from "./data";
import type { District } from "./type";

class DistrictSingleton extends SingletonFactory<District> {
  private constructor(item: District[]) {
    super(item);
  }

  // Public static method to get the singleton instance from class
  public static getInstance(item: District[]) {
    if (!DistrictSingleton.instance) {
      DistrictSingleton.instance = new DistrictSingleton(item);
    }
    return DistrictSingleton.instance as DistrictSingleton;
  }

  // Public methods to be exposed from instance
  public getByRegencyId(id: number) {
    return this.list.filter((village) => village.kabupaten_id === id);
  }
  public getRandomByRegencyId(id: number) {
    const _list = this.list.filter((village) => village.kabupaten_id === id);
    const randomIndex = Math.floor(Math.random() * _list.length);
    return _list[randomIndex];
  }
}

const districtInstance = DistrictSingleton.getInstance(data);

export default districtInstance;
