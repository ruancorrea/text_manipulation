import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useTextManipulation() {
    const [text, setText] = useState('');
    const [textsSaves, setTextsSaves] = useLocalStorage("texts", [])

    function UPPERCASE(text: string) {
        setText(text.toUpperCase())
    }

    function LOWERCASE(text: string){
        setText(text.toLowerCase())
    }
    
    function ONELPW(text: string) {
        var spaces = text.split(" ");
        var textResponse = ""
        for(var i=0; i<spaces.length;i++){
            textResponse += String(spaces[i][0]).toUpperCase() + spaces[i].substr(1) + " "
        }
        setText(textResponse)
    }

    function LBPW(text: string) {
        var spaces = text.split(" ");
        var textResponse = ""
        console.log(spaces)
        for(var i=0; i+1<spaces.length;i++){
            textResponse += spaces[i] + "\n"
        }
        textResponse += spaces[i]
        setText(textResponse)
    }

    function NOES(text: string) {
        var spaces = text.split(" ");
        var textResponse = ""
        for(var i=0; i+1<spaces.length;i++){
            if(spaces[i].length > 0){
                textResponse += spaces[i] + " "
            }
        }
        textResponse += spaces[i]
        setText(textResponse)
    }

    function NOSPACE(text: string) {
        var spaces = text.split(" ");
        var textResponse = ""
        console.log(spaces)
        for(var i=0; i<spaces.length;i++){
            textResponse += spaces[i]
        }
        setText(textResponse)
    }

    function NOEL(text: string) {
        var spaces = text.split("\n");
        var textResponse = ""
        for(var i=0; i+1<spaces.length;i++){
            if(spaces[i].length > 0){
                textResponse += spaces[i] + "\n"
            }
        }
        textResponse += spaces[i]
        setText(textResponse)
    }

    function WS(text: string) {
        var spaces = text.split("\n");
        var textResponse = ""
        for(var i=0; i+1<spaces.length;i++){
            if(spaces[i].length > 0){
                textResponse += spaces[i] + " "
            }
        }
        textResponse += spaces[i]
        setText(textResponse)
    }

    function LBPP(text: string) {
        var spaces = text
        var textResponse = ""
        for(var i=0; i<spaces.length;i++){
            if(spaces[i] == "." || spaces[i] == "?" || spaces[i] == "!"){
                while(spaces[i] == "." || spaces[i] == "?" || spaces[i] == "!" ){
                    textResponse += spaces[i];
                    i++;
                }
                textResponse += "\n";
            }
            if (i<spaces.length) textResponse += spaces[i];
        }
        setText(textResponse)
    }

    function ONELPP(text: string) {
        var spaces = text;
        var textResponse = spaces[0].toUpperCase()

        for(var i=1; i<spaces.length;i++){
            if(spaces[i] == "." || spaces[i] == "?" || spaces[i] == "!" || spaces[i] == " " || spaces[i] == "\n"){
                while(spaces[i] == "." || spaces[i] == "?" || spaces[i] == "!" || spaces[i] == " " || spaces[i] == "\n"){
                    textResponse += spaces[i];
                    i++;
                }
                console.log(spaces[i])
                if(i<spaces.length){
                    textResponse += spaces[i].toUpperCase();
                    i++;
                }
            }
            if (i<spaces.length) textResponse += spaces[i];
        }
        setText(textResponse)
    }

    function INVERTE(text: string){
        setText(text.split('').reverse().join(''))
    }

    function ERASE(){
        setText("")
    }

    const optionsManipulation = [{name: "UPPERCASE", function: UPPERCASE},
                       {name: "LOWERCASE", function: LOWERCASE},
                       {name: "1st LETTER PER WORD", function: ONELPW},
                       {name: "LINE BREAK PER WORD", function: LBPW},
                       {name: "INVERT TEXT", function: INVERTE},
                       {name: "NO EMPTY SPACE", function: NOES},
                       {name: "NO SPACE", function: NOSPACE},
                       {name: "WORD SPACING", function: WS},
                       {name: "NO EMPTY LINE", function: NOEL},
                       {name: "LINE BREAK PER PHRASE", function: LBPP},
                       {name: "1st LETTER PER PHRASE", function: ONELPP},
                       {name: "ERASE TEXT", function: ERASE},
                    ]

    return {
        text, 
        textsSaves,
        setTextsSaves,
        setText, 
        optionsManipulation
    }
}