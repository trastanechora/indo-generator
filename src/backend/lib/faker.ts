import { faker } from '@faker-js/faker/locale/id_ID';

declare const globalThis: {
  fakerGlobal: FakerSingleton['faker'];
} & typeof global;

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

const main = () => {
  const faker = globalThis.fakerGlobal ?? FakerSingleton.getInstance().faker;
  return faker;
};

export default main();

if (process.env.NODE_ENV !== 'production') globalThis.fakerGlobal = main();