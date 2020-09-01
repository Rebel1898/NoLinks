var boton = document.getElementsByTagName("button");
for (k = 0; k < boton.length; k++) {
    boton[k].disabled = true;
    boton[k].style = "pointer-events: none;";
}

var input = document.getElementsByTagName("input");
for (k = 0; k < input.length; k++) {
    input[k].disabled = true;
    input[k].style = "pointer-events: none;";
}

var dival = document.getElementsByTagName("div")
for (k = 0; k < dival.length; k++) {
    dival[k].style = "pointer-events: none;";
}

document.getElementsByTagName("html")[0].style = "pointer-events:none";
document.getElementsByTagName("html")[0].style = "overflow:visible";

function changeenlaces(x) {
    var enlaces = x.getElementsByTagName("a");
    var count = enlaces.length - 1;
    if (count > -1) {
        for (i = count; i > -1; i--) {
            var texto = enlaces[i].innerText;           
            var kinder = enlaces[i].children;
            var control = false;
            var parentElement = enlaces[i].parentElement;
            var parentCSS = window.getComputedStyle(parentElement, null);
            enlaces[i].style = parentCSS;
            for (j = 0; j < kinder.length; j++) {
                if (kinder[j].tagName == "H1" || kinder[j].tagName == "H2" || kinder[j].tagName == "H3" || kinder[j].tagName == "H4"|| kinder[j].tagName == "I") {
                    childrenCSS = window.getComputedStyle(kinder[j])
                    enlaces[i].style = childrenCSS;
                    control = true;
                    break;
                 }
                else { }
            }
            var theCSSprop = window.getComputedStyle(enlaces[i], null).getPropertyValue("background-image");
            if (theCSSprop != "none") { control = true; enlaces[i].style = "pointer-events: none;" }

            for (j = 0; j < kinder.length; j++) {
                if (kinder[j].tagName == "IMG") {
                    enlaces[i].style = "pointer-events: none;"
                    control = true;
                }
                else {
                }
            }
            if (control == false) { 
                // enlaces[i].outerHTML = texto;
                var nodotexto = document.createTextNode(texto);
                enlaces[i].parentNode.replaceChild(nodotexto, enlaces[i]);
            }
            else { enlaces[i].style = "pointer-events:none;" }

        }
    }
    else { }
}
changeenlaces(document);

frameList = window.frames; 
for (var i = 0; i < frames.length; i++) {
    frameList[i].document.body.style += "pointer-events:none";
    frameList[i].document.getElementsByTagName("html")[0].style = "overflow:visible";
    changeenlaces(frames[i].document)
}

var imarcos = document.getElementsByTagName("iframe")
for (k = 0; k < imarcos.length; k++) {
    if (iframe.src)
        try {
            if (iframe.contentWindow.document.getElementsByTagName("video") > 0) {
                imarcos[k].style = "pointer-events: none;";
                frameList[i].document.getElementsByTagName("html")[0].style = "overflow:visible";
            }
        }
        catch{
            imarcos[k].style = "pointer-events: none;";
        }
}