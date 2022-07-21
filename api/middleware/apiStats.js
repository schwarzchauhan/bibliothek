const {readStats, dumpStats} = require('../service/apiStats');

exports.apiCount = (req, res, next) => {
    
    // https://stackoverflow.com/questions/58204192/nodejs-express-catch-the-sent-status-code-in-the-response
    // to avoid 304 status
    res.setHeader('Last-Modified', (new Date()).toUTCString());

    res.on('finish', () => {
        const stats = readStats()
        const event = `${req.method} ${req.originalUrl} ${res.statusCode}`
        stats[event] = stats[event] ? stats[event] + 1 : 1
        dumpStats(stats)
    })
    next()
 }