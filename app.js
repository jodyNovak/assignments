let express = require(`express`);
let app = express();


const {animals} = require("./animals.json");
console.log({animals})
let pages = [`home`,`about`,`animals`]

app.set(`port` , process.env.PORT || 8080);

let server = app.listen(app.settings.port, () => {
    console.log(`Server Is Ready On PORT: `,app.settings.port);
    
});