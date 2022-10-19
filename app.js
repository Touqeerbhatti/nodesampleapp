
const bodyParser = require("body-parser");
var express=require('express');
var PORT=8080;

const app=express();

const users=[
    {
        id:1,
        name:'touqeer'
    },
    {
        id:2,
        name:'Ahmed'
    },
    {
        id:3,
        name:'Bhatti'
    }
]

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var router=express.Router();

router.get('/',(req,res)=>
{
    res.send("HELLOW WORLD APP !")
})

router.get("/users", (req,res)=>{
    res.json({
        status:'success',
        users,
    });
});


app.use(router);

app.listen(PORT,()=>
{
    console.log('SERVER IS AT PORT' ,PORT)
})





