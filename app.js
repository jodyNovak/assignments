let express = require(`express`);
let app = express();
let path = require(`path`);
app.use(express.static(`public`));
app.set(`port`, process.env.PORT || 8080);


let html = [`/contact`, `/contact-us`];
let pages = [`/home`,`about`,`contact`,];


let coWorkers = ['Loki',`Clowy`,`Tinker`,`Dewey`,`mathew`,`tyler`,`lee-vi`,`Boris`,`yogi`,`kory`];


let friends = {
    lisa: {
        type:`girlfriend`,
        description:`loves gameing out and cats`
    },
    sarephine: {
        type:`roomMate`,
        description: `likes doing art with her fluffy cat`
    },
    rachel: {
        type: `roomMate`,
        description:`sleeps alot kind of unknowen =)`
    },
    Dennis: {
        type:`GamerFriend`,
        description: `Loves gameing out all day `
    }
}




app.get(`/`,(req,res) => {
    res.send(`Hello Express World! (0.o)`);
});


//  app.get(`/about`,(req,res) => {
//     res.sendFile(path.join(__dirname,`public/pages`,`about.html`));
//  });
 
 
//  app.get(html,(req,res) => {
//      res.sendFile(path.join(__dirname, `public/pages`,`contact.html`))
//  })
 
 app.get(`/home`,(req,res) => {
     res.status(301).redirect(`/pages/index.html`);
 })
 
 
 app.get(`/pages/:type`,(req,res) => {
     let charName = req.params.type;
     if(charName == `friends`){
         res.send(friends);
     }else if(charName == `coworkers`){
         res.send(coWorkers);
     }else {
            res.status(404).sendFile(path.join(__dirname, `public/pages`, `404.html`));
     }
 });
 
 app.get(`/*`, (req,res) => {
    res.status(404).sendFile(path.join(__dirname, `public/pages`, `404.html`))

     
 })
 
 


let server = app.listen(app.settings.port, () =>{
    console.log(`Server Ready On Port`, app.settings.port);
});