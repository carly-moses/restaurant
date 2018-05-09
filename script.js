"use strict";
$(document).ready(() => {

let table; 
let tableNum; 
let tableName;
let people;
let reserveInfo; 
        //Create the on function to show the form when table is clicked
$(".available").on("click", (event) => {
    $(".form-container").fadeIn(1000);
    table = $(event.target); 
    //****trying to create a variable to access the table number for the form 
    // tableNum = $(event.target).val(); //returns undefined
    // console.log (tableNum); //console logs correctly
});

        //Add table number reservation on the form
        //******WORK IN PROGRESS*********/
$("h2").append(`<p>Table Number: ${tableNum}</p>`);


        //If Table is open hover color green & grab cursor
$(".available").mouseenter((event) => {
    $(event.target).css("backgroundColor", "green"); 
    $(event.target).css("cursor", "grab"); 
});
$(".available").mouseleave((event) => {
    $(event.target).css("backgroundColor", "#CCC"); 
});
    
        //When you hit save the form goes away & the table is reserved
$("#save").on("click", (event)=> {
    const availableTable = $(".available");
    $(".form-container").fadeOut(); 
            //Changes table from available to reserved. 
            //Used table variable declared in code previously
    table.removeClass("available").addClass("reserved");
            //Create two variables for pop up box
    tableName = $("#name").val(); //console log worked
    $("#name").val("");
    people = $("#number").val(); //console log worked
    $("#number").val(""); 
    $("#people").val(""); 


          //Add element to create the new box with name and number of people at table
    //Returning in console array....need to append properly
    reserveInfo = $("<div>");
    reserveInfo.text(`
        "<p>Name: ${tableName}</p>"
        "<p>Number of People: ${people}</p>" 
    `);
    console.log(reserveInfo); 
    reserveInfo.show(); 
    });


        //If the table is reserved hover color red & not available cursor
$(".table-container").on("mouseenter",".reserved",(event) => {
    $(event.target).css("backgroundColor","red"); 
    $(event.target).css("cursor", "not-allowed"); 
    reserveInfo.show(); 
    $(event.target).append(reserveInfo); 
});

    // Reserved table changes color, but only when mouseleave, work on making it 
    // after form is saved.
$(".table-container").on("mouseleave",".reserved",(event) => {
    $(event.target).css("backgroundColor", "#ADAAAA"); 
    $(event.target).css("color", "#CCC"); 
    reserveInfo.hide(); 
});

    //The form will not pop up if the table is reserved and someone clicks on the table
$(".table-container").on("click",".reserved",(event) => {
    $(".form-container").hide();  
}); 

        //The form must exit when you click the X button
$(".exitbtn").on("click", (event) => {
    $(".form-container").fadeOut(1000); 
});

}); 








//Code from Part 1 before using .on()
//Create the click function to show the form when table is clicked
// const availableTable = $(".available");
// availableTable.click(function(){
//     $(".form-container").show(); 
//     //If changed to arrow function, you would need to use event.target rather than this
//     //Removes class of available and changes it to reserved
//     $(this).removeClass("available").addClass("reserved"); 
// });


// //I was trying to make it so the form did not pop up for a reserved table
// //but this did not work
// const reservedTable = $(".reserved");
// reservedTable.click(function(){
//     $(".form-container").display(none);  
// });


// //When you hit "save" the form goes away
// const save = $("#save");
// save.click(function(){
//     $(".form-container").hide(); 
// }); 

// //The form must exit when you click the "x" icon without submitting the form
// const exitForm = $(".exitbtn");
// exitForm.click(function(){
//     $(".form-container").hide(); 
// })
// ;
