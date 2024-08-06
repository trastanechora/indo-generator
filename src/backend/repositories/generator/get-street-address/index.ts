import faker from "@/backend/repositories/generator/lib/faker";

const getStreetAddress = () => {
  return faker.location.streetAddress();
};

export default getStreetAddress;
