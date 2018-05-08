"use strict";
$(document).ready(() => {

//Create the click function to show the form when table is clicked
const availableTable = $(".available");
availableTable.click(function(){
    $(".form-container").show(); 
    //If changed to arrow function, you would need to use event.target in order to us "this"
    //Removes class of available and changes it to reserved
    $(this).removeClass("available").addClass("reserved"); 
});


// //I was trying to make it so the form did not pop up for a reserved table
// //but this did not work
// const reservedTable = $(".reserved");
// reservedTable.click(function(){
//     $(".form-container").display(none);  
// });


//When you hit "save" the form goes away
const save = $("#save");
save.click(function(){
    $(".form-container").hide(); 
}); 

//The form must exit when you click the "x" icon without submitting the form
const exitForm = $(".exitbtn");
exitForm.click(function(){
    $(".form-container").hide(); 
});




}); 



