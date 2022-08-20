import {
    Router
} from 'express';
const router = Router()

router.get("/", (req, res) => {
    res.render('index.ejs',{title:'Urdaneta Portfolio'});
});//pasamos datos desde el backen al frontend

router.get('/contact', (req, res) => {
    res.render('contact.ejs',{title:'Contact Me'});
});

router.get('/about', (req, res) => {
    res.render('about.ejs',{title:'About Me'});
})

export default router //esto seria para poder incluirlo en los archisov que lo necesitemos