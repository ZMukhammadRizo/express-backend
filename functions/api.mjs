import express from 'express'
import serverless from 'serverless-http'

const app = express()
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to my API service')
})

router.get('/about', (req, res) => {
    res.json({
        "name": 'Mukha',
        "hobby": {
            "1": "Basketball",
            "2": "Programming",
            "3": "Gaming"
        }
    })
})

app.use('/', router)

export const handler = serverless(app)