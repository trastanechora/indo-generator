import SingletonFactory from "@/backend/repositories/static/lib/singleton-factory";

import data from "./data";
import type { Regency } from "./type";

class RegencySingleton extends SingletonFactory<Regency> {
  private constructor(item: Regency[]) {
    super(item);
  }

  // Public static method to get the singleton instance from class
  public static getInstance(item: Regency[]) {
    if (!RegencySingleton.instance) {
      RegencySingleton.instance = new RegencySingleton(item);
    }
    return RegencySingleton.instance as RegencySingleton;
  }

  // Public methods to be exposed from instance
  public getByProvinceId(id: number) {
    return this.list.filter((regency) => regency.provinsi_id === id);
  }
  public getRandomByProvinceId(id: number) {
    const _list = this.list.filter((regency) => regency.provinsi_id === id);
    const randomIndex = Math.floor(Math.random() * _list.length);
    return _list[randomIndex];
  }
}

const regencyInstance = RegencySingleton.getInstance(data);

export default regencyInstance;
