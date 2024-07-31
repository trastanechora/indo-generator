export interface Person {
    id: string;
    name: string;
    gender: 'male' | 'female';
    address: string;
    dob: string;
}

export type People = Person[];