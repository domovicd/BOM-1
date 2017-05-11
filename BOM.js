function prikaz() {
    if (document.getElementById("width").checked){
        document.getElementById("prvi").innerHTML=window.innerWidth

    }
    if (document.getElementById("height").checked){
        document.getElementById("drugi").innerHTML=window.innerHeight

    }
    if (document.getElementById("lol").checked){
        document.getElementById("treci").innerHTML=screen.availHeight

    }
    if (document.getElementById("sol").checked){
        document.getElementById("cet").innerHTML=screen.availWidth

    }
    if (document.getElementById("bol").checked){
        document.getElementById("pet").innerHTML=screen.colorDepth

    }
    if (document.getElementById("gol").checked){
        document.getElementById("ses").innerHTML=window.screen.pixelDepth

    }
}

function otvori() {
    prozor=window.open("https://www.google.hr",height=100,window=100)
    
}
function zatvori() {
    prozor.close()
}



var pol={
    lokacija: window.location.href,
    lok:window.location.hostname,
    lo:window.location.pathname,
    l:window.location.protocol
}

function objekt() {
    for(i in pol){
        document.getElementById("sedam").innerHTML += pol[i];
    }
}




