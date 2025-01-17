import type {
  Person,
  PersonGenderInput,
} from "@/backend/entities/person/types";

import getFullName from "@/backend/repositories/generator/get-full-name";
import getDateOfBirth from "@/backend/repositories/generator/get-date-of-birth";
import getGender from "@/backend/repositories/generator/get-gender";

import getRandomAddress from "@/backend/usecases/create-random-address";

interface Props {
  maxAge?: number;
  minAge?: number;
  gender?: PersonGenderInput;
}

const getRandomPerson = (props: Props) => {
  const { maxAge, minAge, gender = "random" } = props;

  const processedGender = getGender(gender);
  const { address, addressCoding } = getRandomAddress({});
  const { dob, dobCoding } = getDateOfBirth({ max: maxAge, min: minAge });

  const person: Person = {
    id: addressCoding + dobCoding,
    name: getFullName({ gender: processedGender }),
    gender: processedGender,
    address: address,
    dob: dob,
  };

  return person;
};

export default getRandomPerson;
