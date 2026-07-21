/****************************************************
 * INVITACIÓN BAUTIZO EMILIANO
 ****************************************************/

const CONFIG = {

    nombreNino: "Emiliano",

    invitado: "Jaime",

    fecha: "Próximamente",

    hora: "",

    lugar: "",

    urlScript: "https://script.google.com/macros/s/AKfycbzhWfHh2_2qLEAgzcTn88XIAEzVWvNBsTTdwwrsEfFKrJ-OozQjRHbXvhxz3HdN3Pprew/exec"

};


/****************************************************
 * PANTALLAS
 ****************************************************/

const paginas = [

{

titulo:"✝️",

texto:
`
<h2>Hola ${CONFIG.invitado}</h2>

<p>

Tengo una pregunta muy especial para ti.

</p>
`

},

{

titulo:"👶",

texto:
`
<h2>${CONFIG.nombreNino}</h2>

<p>

Muy pronto recibiré el Sacramento del Bautizo.

</p>
`

},

{

titulo:"🕊️",

texto:
`
<p>

Dios pone personas especiales en nuestro camino
para guiarnos y acompañarnos.

</p>
`

},

{

titulo:"💙",

texto:
`
<p>

Por eso quiero hacerte una pregunta muy importante.

</p>
`

}

];


let paso = 0;


/****************************************************
 * MOSTRAR PANTALLAS
 ****************************************************/

function mostrarPantalla(){

    let html = "";

    if(paso < paginas.length){

        html = `

        <div class="cross">

            ${paginas[paso].titulo}

        </div>

        ${paginas[paso].texto}

        <br><br>

        <button class="primary" onclick="siguiente()">

            Continuar

        </button>

        `;

    }

    else{

        html = `

        <div class="cross">

            ✝️

        </div>

        <h1>

            ¿Quieres ser mi padrino?

        </h1>

        <br>

        <h2>

            ${CONFIG.nombreNino}

        </h2>

        <br>

        <button
            class="primary"
            onclick="aceptar()">

            💙 Sí, acepto

        </button>

        <br>

        <button
            class="secondary"
            onclick="rechazar()">

            🤍 No puedo aceptar

        </button>

        `;

    }

    document.getElementById("card").innerHTML = html;

}


/****************************************************
 * SIGUIENTE
 ****************************************************/

function siguiente(){

    paso++;

    mostrarPantalla();

}

/****************************************************
 * RESPUESTA SI
 ****************************************************/

function aceptar(){

    enviarRespuesta(

        CONFIG.invitado,

        "ACEPTÓ SER PADRINO 💙"

    );

    document.getElementById("card").innerHTML = `

        <div class="cross">✝️</div>

        <h1>

            ¡Gracias!

        </h1>

        <br>

        <h2>

            ${CONFIG.invitado}

        </h2>

        <br>

        <p>

            Me llena de alegría que hayas aceptado
            ser mi padrino de Bautizo.

        </p>

        <br>

        <h2>

            👶 ${CONFIG.nombreNino}

        </h2>

        <br>

        <p>

            Muy pronto recibirás la fecha y la hora
            de la ceremonia.

        </p>

        <br>

        <h2>

            Dios bendiga tu vida.

        </h2>

    `;

}


/****************************************************
 * RESPUESTA NO
 ****************************************************/

function rechazar(){

    enviarRespuesta(

        CONFIG.invitado,

        "NO PUDO ACEPTAR 🤍"

    );

    document.getElementById("card").innerHTML = `

        <div class="cross">✝️</div>

        <h1>

            Gracias

        </h1>

        <br>

        <p>

            Comprendo tu decisión.

        </p>

        <br>

        <p>

            Gracias por responder mi invitación.

        </p>

        <br>

        <h2>

            Dios te bendiga.

        </h2>

    `;

}


/****************************************************
 * ENVIAR A GOOGLE
 ****************************************************/

function enviarRespuesta(persona,respuesta){

    fetch(CONFIG.urlScript,{

        method:"POST",

        mode:"no-cors",

        headers:{

            "Content-Type":"application/json"

        },

        body: JSON.stringify({

    nombre: persona,

    respuesta: respuesta

        })

    });

}


/****************************************************
 * PALOMAS
 ****************************************************/

setInterval(function(){

    const p=document.createElement("div");

    p.className="dove";

    p.innerHTML="🕊️";

    p.style.top=(10+Math.random()*70)+"vh";

    p.style.animationDuration=(8+Math.random()*6)+"s";

    document.body.appendChild(p);

    setTimeout(function(){

        p.remove();

    },15000);

},3500);


/****************************************************
 * DESTELLOS
 ****************************************************/

setInterval(function(){

    const s=document.createElement("div");

    s.className="spark";

    s.innerHTML="✨";

    s.style.left=(Math.random()*100)+"vw";

    s.style.top="-20px";

    s.style.animationDuration=(3+Math.random()*3)+"s";

    document.body.appendChild(s);

    setTimeout(function(){

        s.remove();

    },6000);

},500);


/****************************************************
 * INICIAR
 ****************************************************/

mostrarPantalla();


