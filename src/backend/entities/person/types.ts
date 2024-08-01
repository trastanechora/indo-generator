export type PersonGender = 'male' | 'female';
export type PersonGenderInput = PersonGender | 'random';

export interface Person {
    id: string;
    name: string;
    gender: PersonGender
    address: string;
    dob: string;
}

export type People = Person[];
