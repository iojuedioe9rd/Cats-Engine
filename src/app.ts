import TSE from "./engine";
import "./scss/styles.scss";

/* Creates a new instance of the engine */ 
var e = new TSE.Engine();


window.onload = function() {
    e.start();
    console.log(e)
}
    


