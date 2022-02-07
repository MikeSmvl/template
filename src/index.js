'use strict'

import express from 'express'

// Constants
const PORT = 8080

// App
const app = express()
app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})

// Export our app for testing purposes
export default app
