import fastify, { } from 'fastify'

import { getAllPromptsRoute } from './routes/get-all-prompts'

const app = fastify()

app.get('/', (request, response) => {
  response.code(200).send('🚀 HTTP Server Running!')
})

app.register(getAllPromptsRoute)

app.listen({
  port:3333,
}).then(() => {
  console.log('🚀 HTTP Server Running!');
})
