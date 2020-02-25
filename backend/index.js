import express from 'express';
import routes from './routes/ipRoutes';

const bodyParser = require('body-parser');
const path = require('path');
const NodeCouchDb = require('node-couchdb');
const MemcacheNode = require('node-couchdb-plugin-memcached');
const couch = new NodeCouchDb();
const cors = require('cors');
const couchWithMemcache = new NodeCouchDb({
    cache: new MemcacheNode
});

const couchAuth = new NodeCouchDb({
    auth: {
        user: 'fwUser',
        pass: 'fwPassword12345!'
    }
});

const dbName = 'flexwhere'
const viewUrl = '_design/all_ip/_view/all';

couch.listDatabases().then(dbs => {
   console.log(dbs)
});

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(cors());

routes(app);

// CouchDb
app.get('/', (req, res) => {
    couch.get(dbName, viewUrl).then(
        function(data, headers, status){
            res.render('index', {
                flexwhere:data.data.rows
            });
        },
        function(err){
            res.send(err);
        }
    );
});

app.post('/ip/add', function (req, res){
    const ip = req.body.name;

    couch.uniqid().then(function(ids){
        const id = ids[0];

        couch.insert('flexwhere',{
            _id: id,
            ip: ip
        }).then(
            function(data, headers, status){
                res.redirect('/')
            },
            function(err){
                res.send(err);
            }
        )

    });
})

app.listen(PORT, () => 
    console.log(`FlexWhere API is running on port ${PORT}`)
);

