import faker from "@/backend/repositories/generator/lib/faker";
import type {
  PersonGender,
  PersonGenderInput,
} from "@/backend/entities/person/types";

const getGender = (gender: PersonGenderInput) => {
  if (gender === "random") return faker.person.sex() as PersonGender;

  return gender as PersonGender;
};

export default getGender;
