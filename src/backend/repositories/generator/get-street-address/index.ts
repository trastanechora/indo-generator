import faker from '@/backend/lib/faker';

const getStreetAddress = () => {
  return faker.location.streetAddress();
};

export default getStreetAddress;