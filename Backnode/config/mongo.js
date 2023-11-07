import mongoose from "mongoose"

const mongo = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {  })

        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(`Conexion alojada en: ${url} `)
    } catch (error) {
        console.log(`error: ${error.message}`)
        process.exit(1)
    }
}

export default mongo