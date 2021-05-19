var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// mongoose.connect('localhost:27017/shopping')
mongoose.connect('mongodb://localhost:27017/shopping', {
    //useMongoClient: true,
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

var products = [
new Product({
    imagePath:'https://n9e5v4d8.ssl.hwcdn.net/images/longlanding/warframe-metacard.png' , // {{!-- ใส่รูปตรงนี้นะ --}}
    title:'WarFarm' ,
    description:'Farm like your last Day',
    price:10000000
}),
new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/2/25/War_Thunder_PSN_Cover_Art_2015_Playstation_4.png' , //{{!-- ใส่รูปตรงนี้นะ --}}
    title:'War Thunder' ,
    description:'Very Balaced Game like noone',
    price:9999999
})
];
var done = 0;
for(var i = 0; i < products.length;i++)
{
    products[i].save(function(err,result){
        done++;
        if(done === products.length)
        {
            exit();
        }        
    });
}
function exit()
{
    mongoose.disconnect();
}

