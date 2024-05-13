import { normalize, schema } from 'normalizr';

const course = new schema.Entity('courses');
const coursesNormalizer = (data) => {
  const normalizedData = normalize(data, [course]);
  return normalizedData.entities.courses;
};

export default coursesNormalizer;