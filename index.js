import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import itemRoutes from './routes/itemRoutes.js'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080

app.get('/', (_req, res) => {
    res.send(
        'This is a homePage for Lendaroo, please make a request!!'
    )
});

app.use('/api', itemRoutes);

app.listen(PORT, () => {
    console.log('App is running on port ', PORT)
})
