const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/kubo-front'));
// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/dist/kubo-front/index.html'));
// });
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/kubo-front/'}),
);
app.listen(process.env.PORT || 4200);

// const express = require('express');
// const app = express();

// app.use(express.static('./dist/'));

// app.get('/*', (req, res) => {
//   res.sendFile('index.html', { root: 'dist/' });
// });

// app.listen(process.env.PORT || 4200);