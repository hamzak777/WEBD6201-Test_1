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

    //Part 1 variables
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
        //  Part 1
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
        // code retrived from:  https://www.w3schools.com/jsref/prop_style_visibility.asp
        document.getElementById("firstParagraph").style.visibility = "hidden";

        //Part 2
        //  a, b, c
        largeButton.addEventListener("click", function(){
            //  When the button is clicked toggle between Button text that reads “Hide Details” and “Learn More”
            //  When the button reads “Hide Details” the paragraph should be visible. When the button
            //  reads “Learn More” the paragraph should be hidden
            if(firstParagraph.style.visibility == "hidden"){
                largeButton.innerHTML = " Hide Details";    //  toogle text
                firstParagraph.style.visibility = "visible" //  toogle visibility
            }
            else if(firstParagraph.style.visibility == "visible"){
                largeButton.innerHTML = " Learn More";      //  toogle text
                firstParagraph.style.visibility = "hidden"  //  toogle visibility
            }
         });

        

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

