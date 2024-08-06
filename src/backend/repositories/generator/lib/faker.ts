import { faker } from "@faker-js/faker/locale/id_ID";

class FakerSingleton {
  public faker;
  private static instance: FakerSingleton;
  private constructor() {
    this.faker = faker;
  }

  public static getInstance = () => {
    if (!FakerSingleton.instance) {
      FakerSingleton.instance = new FakerSingleton();
    }
    return FakerSingleton.instance;
  };
}

const fakerInstance = FakerSingleton.getInstance();

export default fakerInstance.faker;
