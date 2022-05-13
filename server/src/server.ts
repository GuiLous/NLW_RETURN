import express from 'express';
import cors from 'cors';
import { routes } from './routes';
var bodyParser = require('body-parser');

const app = express();


// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));

// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('Server started on port 3333');
})
