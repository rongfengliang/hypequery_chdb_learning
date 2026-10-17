import { publishToCloud } from '@hypequery/datasets';
import { datasets } from './datasets.js';

export const cloud = publishToCloud({
  datasets,
  access: { roles: [], scopes: [] },
});
