const express = require("express")
const cors = require("cors")
const config = require("./config/main.config.js");
const app = express();
const cookieParser = require("cookie-parser");
const serverPort = config.server.port;
const senderRoute = require("./routes/senderRoute.js");
const travellerRoute = require("./routes/travellerRoute.js");
const packageRoute = require("./routes/packageRoute.js");

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use('/api/sender', senderRoute);
app.use('/api/traveller', travellerRoute);
app.use('/api/package', packageRoute);


app.listen(serverPort, () =>{
    console.log(`server is running on port: ${ serverPort }`);
});


