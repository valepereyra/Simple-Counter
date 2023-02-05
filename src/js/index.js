//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/Counter.jsx";

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;

setInterval(function() {
    num1++;

    ReactDOM.render( <
        Counter numero1 = {
            num1
        }
        numero2 = {
            num2
        }
        numero3 = {
            num3
        }
        numero4 = {
            num4
        }
        numero5 = {
            num5
        }
        />,
        document.querySelector("#app")
    );

    if (num1 >= 9) {
        num1 = -1;
        num2++;
    }

    if (num2 >= 9) {
        num2 = 0;
        num3++;
    }

    if (num3 >= 9) {
        num3 = 0;
        num4++;
    }

    if (num4 >= 9) {
        num4 = 0;
        num5++;
    }
}, 1000);