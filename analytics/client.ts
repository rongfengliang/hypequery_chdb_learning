import { createQueryBuilder } from '@hypequery/clickhouse';
import { Session } from 'chdb';
import {
  createDatasetClient,
} from '@hypequery/datasets';
import { datasets } from './datasets.js';
import { chdbAdapter } from 'chdb/hypequery';
import type { IntrospectedSchema } from './schema.js';

// Embedded ClickHouse — data persists in ./analytics.chdb
export const session = new Session("./analytics.chdb");

export const db = createQueryBuilder<IntrospectedSchema>({
  adapter: chdbAdapter({ session }),
});

const analytics = createDatasetClient({ queryBuilder: db });

const byName= await analytics.execute(datasets.exampleUsers, {
  dimensions: ['name'],
  measures: ['userCount'],
  filters: [],
  limit: 10,
});

console.log("By Name:", byName);