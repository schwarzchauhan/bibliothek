const fs = require('fs')
const FILE_PATH = './stats.json'


module.exports = {
    // read json object from file
    readStats : function () {
        let result = {}
        try {
            result = JSON.parse(fs.readFileSync(FILE_PATH))
        } catch (err) {
            console.error(err)
        }
        return result
    },
    
    // dump json object to file
    dumpStats : function (stats) {
        try {
            fs.writeFileSync(FILE_PATH, JSON.stringify(stats), { flag: 'w+' })
        } catch (err) {
            console.error(err)
        }
    }
}