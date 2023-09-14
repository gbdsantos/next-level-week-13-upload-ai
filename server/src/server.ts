import fastify from 'fastify'
import { fastifyCors } from '@fastify/cors'

import { createTranscriptionRoute } from './routes/create-transcription'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { generateAICompletionRoute } from './routes/generate-ai-completion'

const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})

app.get('/', (req, reply) => {
  reply.status(200).send('🚀 HTTP Server Running!')
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
  port:3333,
}).then(() => {
  console.log('🚀 HTTP Server Running!');
})