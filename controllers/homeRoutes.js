const router = require('express').Router();

router.get('/', async (req, res)=>{
    try{
        res.render('work');
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get('/about', async (req, res)=>{
    try {
        res.render('about');
    } catch (err){
        res.status(500).json(err);
    }
});


module.exports= router;