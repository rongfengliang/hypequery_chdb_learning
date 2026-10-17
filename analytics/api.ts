import { createAPI } from '@hypequery/serve';
import type { InferApiType } from '@hypequery/serve';
import { db } from './client.js';
import { datasets } from './datasets.js';

export const api = createAPI({
  queryBuilder: db,
  datasets,
});

export type ApiDefinition = InferApiType<typeof api>;
