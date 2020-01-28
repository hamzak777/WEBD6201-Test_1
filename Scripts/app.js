/*
    Student Name  : Hamza Khan
    StudentID     : 100709587
    Date Completed: 28/01/2019
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")

    //Part A variables
    let largeButton;
    let largeButtonParent;
    let H3;
    let firstParagraph;

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
        //  Part A
        //  a
        //  replace the Large Button text to Learn More
        largeButton = document.getElementById("largeButton");
        largeButton.innerHTML = " Learn More";
        //  b
        //  create an h3 element that contains your full name and student id
        //  in the following format Name: [Enter your name here] [Student ID].
        H3 = document.createElement('h3');
        H3.className = "h3";
        H3.textContent = "Name: Hamza Khan  100709587";

        largeButtonParent = largeButton.parentNode;
        largeButtonParent.insertBefore(H3, largeButton);
        //  c
        //  replace the text of the paragraph (with an id of firstParagraph)
        firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.innerHTML = " JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called Prototype that can be used to extend object properties and methods.";
        //  d
        //  hide the paragraph with an id of firstParagraph
        document.getElementById("firstParagraph").style.visibility = "hidden";
        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {

    }



    window.addEventListener("load", Start);
})(app || (app = {}));

