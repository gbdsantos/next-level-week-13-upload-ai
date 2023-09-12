import fastify, { } from 'fastify'
import { prisma } from './lib/prisma'

const app = fastify()

app.get('/', (request, response) => {
  response.code(200).send('🚀 HTTP Server Running!')
})

app.get('/prompts', async () => {
  const prompts = await prisma.prompt.findMany()

  return prompts
})

app.listen({
  port:3333,
}).then(() => {
  console.log('🚀 HTTP Server Running!');
})
