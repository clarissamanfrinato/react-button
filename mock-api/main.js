const express=require('express')
const cors=require('cors')


async function main( )
{
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.post('/', (req, res) => {

        console.log('Hello')
        console.log(req.body)
        res.send('Hello World')} )
    app.listen(3002, ()=> {console.log('app running on 3002')})
}

main();