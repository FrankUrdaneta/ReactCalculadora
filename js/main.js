const app =document.getElementById('typewriter');

const typewriter= new Typewriter(app,{
    loop: true, /*Aca le indicamos que siga ejecutandose */
    delay: 95 /*Es la velocidad cn la que queremos que se escriba */
});

typewriter
.typeString('Ciudad de las Campanas')
.pauseFor(200)
.start();