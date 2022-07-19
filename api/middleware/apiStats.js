const {readStats, dumpStats} = require('../service/apiStats');

exports.apiCount = (req, res, next) => {
    res.on('finish', () => {
        const stats = readStats()
        const event = `${req.method} ${req.originalUrl} ${res.statusCode}`
        stats[event] = stats[event] ? stats[event] + 1 : 1
        dumpStats(stats)
    })
    next()
 }