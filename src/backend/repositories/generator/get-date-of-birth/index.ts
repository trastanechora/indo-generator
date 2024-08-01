import faker from '@/backend/lib/faker';

interface Props {
  max?: number;
  min?: number;
}

const formatDate = (date: Date) => date.toLocaleDateString('id-ID');

const getBirthDateMode = (min?: number, max?: number) => {
  if (max && max < 200) return 'age';
  if (min && min < 200) return 'age';
  
  return 'year';
}

const getDateOfBirth = (props: Props) => {
  const { max, min } = props;

  return formatDate(faker.date.birthdate({
    max,
    min,
    mode: getBirthDateMode(max, min)
  }));
};

export default getDateOfBirth;