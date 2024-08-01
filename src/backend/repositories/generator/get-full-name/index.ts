import faker from '@/backend/lib/faker';
import type { PersonGender } from '@/backend/entities/person/types';

interface Props {
  gender: PersonGender;
}

const getFullName = (props: Props) => {
  const { gender = 'male' } = props;

  // faker.person.fullName() often returns duplicated first name
  // e.g "Joko Joko Santoso" instead of "Joko Santoso"
  // so we have to use the manual way to create full name
  return `${faker.person.firstName(gender)} ${faker.person.lastName(gender)}`;
};

export default getFullName;