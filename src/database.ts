import * as knexPkg from 'knex'
const setupKnex = knexPkg.default

export const knex = setupKnex({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
})
