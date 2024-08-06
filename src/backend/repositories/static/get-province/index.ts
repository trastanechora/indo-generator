import SingletonFactory from "@/backend/repositories/static/lib/singleton-factory";

import data from "./data";
import type { Province } from "./type";

class ProvinceSingleton extends SingletonFactory<Province> {
  private constructor(item: Province[]) {
    super(item);
  }

  // Public static method to get the singleton instance from class
  public static getInstance(item: Province[]) {
    if (!ProvinceSingleton.instance) {
      ProvinceSingleton.instance = new ProvinceSingleton(item);
    }
    return ProvinceSingleton.instance as ProvinceSingleton;
  }
}

const provinceInstance = ProvinceSingleton.getInstance(data);

export default provinceInstance;
