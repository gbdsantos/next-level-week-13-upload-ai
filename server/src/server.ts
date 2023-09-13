import fastify, { } from 'fastify'

import { createTranscriptionRoute } from './routes/create-transcription'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'

const app = fastify()

app.get('/', (request, response) => {
  response.status(200).send('🚀 HTTP Server Running!')
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)

app.listen({
  port:3333,
}).then(() => {
  console.log('🚀 HTTP Server Running!');
})
