let express = require(`express`);
let app = express();
let path = require(`path`);
app.set(`view engine`,`ejs`);
app.use(express.static(`public`));


const {animals} = require("./animals.json");

let params = ""
let pages = ["home","about","animals"];


app.get(`/`,(req,res) => {
    res.render(`index`,{animals,params})
    
 })

app.get(`/:page`,(req,res) => {
    let params = req.params.page;
    res.render(`index`,{animals,pages,params})
    
});

 app.get(`/`,(req,res) => {
    res.redirect(301 ,"home.html");
 });

app.get(`*`,(req,res,next) => {
    let error = new Error();
    error.message = "could not find page";
    error.status = 404;
    next(error);
});

app.use((error,req,res,next) => {
    
});


app.set(`port`,process.env.PORT || 8080);

let server = app.listen(app.settings.port,() => {
    console.log(`server Ready on PorT`, app.settings.port);
});