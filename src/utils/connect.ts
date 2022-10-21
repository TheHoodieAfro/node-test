import mongoose from "mongoose";
import debug from "debug";

const debuglog: debug.IDebugger = debug('app')

async function connect() {
    const dburi: string = process.env.DBURL || ''

    try {
        await mongoose.connect(dburi)
        debuglog('Connected')
    } catch (error: any) {
        debuglog('Could not connect to DB')
        debuglog(error)

        process.exit(1)
    }
}

export default connect