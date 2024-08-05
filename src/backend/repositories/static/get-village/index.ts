import data from "./data";
import type { Village } from "./type";

class VillageSingleton {
  private static instance: VillageSingleton;
  private list: Village[];
  private length: number;

  // Private constructor to prevent direct instantiation
  private constructor() {
    this.list = data;
    this.length = data.length;
  }

  // Static method to get the singleton instance
  public static getInstance() {
    if (!VillageSingleton.instance) {
      VillageSingleton.instance = new VillageSingleton();
    }
    return VillageSingleton.instance;
  }

  public getList() {
    return this.list;
  }
  public getById(id: number) {
    return this.list.find((village) => village.id === id);
  }
  public getByDistrictId(id: number) {
    return this.list.filter((village) => village.kecamatan_id === id);
  }
  public getRandom() {
    const randomIndex = Math.floor(Math.random() * this.length);
    return this.list[randomIndex];
  }
  public getRandomByDistrictId(id: number) {
    const _list = this.list.filter((village) => village.kecamatan_id === id);
    const randomIndex = Math.floor(Math.random() * _list.length);
    return _list[randomIndex];
  }
}

const villageInstance = VillageSingleton.getInstance();

export default villageInstance;
