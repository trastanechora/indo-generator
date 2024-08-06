import SingletonFactory from "@/backend/repositories/static/lib/singleton-factory";

import data from "./data";
import type { Village } from "./type";

class VillageSingleton extends SingletonFactory<Village> {
  private constructor(item: Village[]) {
    super(item);
  }

  // Public static method to get the singleton instance from class
  static getInstance(item: Village[]) {
    if (!VillageSingleton.instance) {
      VillageSingleton.instance = new VillageSingleton(item);
    }
    return VillageSingleton.instance as VillageSingleton;
  }

  // Public methods to be exposed from instance
  public getByDistrictId(id: number) {
    return this.list.filter((village) => village.kecamatan_id === id);
  }
  public getRandomByDistrictId(id: number) {
    const _list = this.list.filter((village) => village.kecamatan_id === id);
    const randomIndex = Math.floor(Math.random() * _list.length);
    return _list[randomIndex];
  }
}

const villageInstance = VillageSingleton.getInstance(data);

export default villageInstance;
