const { Client } = require("pg")
// const dotenv = require("dotenv")
// dotenv.config()
 
const connectDb = async () => {
    try {
        const client = new Client({
            user: "default" ,
            host: "ep-wandering-sunset-318962-pooler.us-east-1.postgres.vercel-storage.com" ,
            database: "verceldb",
            password: "g7MAFozCHy1a" ,
            port: 5432,
            ssl: true
        })
 
        await client.connect()
        const res = await client.query('SELECT * FROM public.test')
        console.log(res.rows)
        await client.end()
    } catch (error) {
        console.log(error)
    }
}
 
connectDb()