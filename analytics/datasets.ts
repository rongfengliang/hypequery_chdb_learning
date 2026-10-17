import { dataset, dimension, measure } from '@hypequery/datasets';

const exampleUsers = dataset('example_events', {
  source: 'users',
  timeKey: 'created_at',
  dimensions: {
    id: dimension.number(),
    name: dimension.string(),
    email: dimension.string(),
  },
  measures: {
    userCount: measure.count('name', { label: 'User Count' }),
  },
});

export const datasets = {
  exampleUsers,
};
