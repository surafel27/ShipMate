const express = require("express")
const cors = require("cors")
const config = require("./config/main.config.js");
const app = express();
const cookieParser = require("cookie-parser");
const serverPort = config.server.port;
const senderRoute = require("./routes/senderRoute.js");
const travellerRoute = require("./routes/travellerRoute.js");
const packageRoute = require("./routes/packageRoute.js");
const verificationRoute = require("./routes/verificationRoute.js");

app.use((req, res, next)=> {
    res.setHeader("Access-Control-Allow-Credentials", true)
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   //res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next()
});

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

//Routes
app.use('/api/sender', senderRoute);
app.use('/api/traveller', travellerRoute);
app.use('/api/package', packageRoute);
app.use('/api/mobile', verificationRoute);


app.listen(serverPort, () =>{
    console.log(`server is running on port: ${ serverPort }`);
});


