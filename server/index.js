const app = require('./api')

const PORT = 8080

const init = () => {
    try {
        app.listen(PORT, ()=> console.log(`listening on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

init()

