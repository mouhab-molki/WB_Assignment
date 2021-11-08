/*function formValidation() {
    var first_name = document.forms["registration"][""];
    var middle_initial = document.forms["registration"]["middle_initial"];
    var last_name = document.forms["registration"]["last_name"];
    var city = document.forms["registration"]["city"];
    var state = document.forms["registration"]["state"];
    var country = document.forms["registration"]["country"];
    var zip = document.forms["registration"]["zip"];
    var email = document.forms["registration"]["Email"];
    var user_name = document.forms["registration"]["username"];
    var password = document.forms["registration"][""];
    var repeat_password = document.forms["registration"][""];
    var comments = document.forms["registration"]["Comments"];
}*/

/*Check Name if it was bettwen 0 and 30 character and it is not have number*/
/*function chkName(){
    var Name= document.getElementByName("first_name");
        if (Name.value==""){
            alert("You did not enter your name");
            Name.focus();
            Name.select();
        return false;
    }
        else
        return true;
    }
*/


/*Check password and repeat password fields*/
function ValidateForm() {
/*Declare the variables*/
var name=document.getElementById("first_name");
var middle_initial = document.getElementById("middle_initial");       
var last_name = document.getElementById("last_name");        
var city = document.getElementById("city");           
var state = document.getElementById("state");           
var country = document.getElementById("country");           
var zip = document.getElementById("zip");            
var email = document.getElementById("Email");          
var user_name = document.getElementById("username");
var password=document.getElementById("password");
var repeatpassword=document.getElementById("repeatpassword");

name.addEventListener("name", checkCodeLenght)


        if (password.value==""){
            alert("You did not enter a password");
            password.focus();
            return false;
        }
        if (password.value != repeatpassword.value) {
            alert("The two passwords are not the same");
            repeatpassword.focus();
            repeatpassword.select();
            return false;
        }   
        else
            return true;
        }

/*reset the form */
function reset_fctn() {
    document.getElementById("theform").reset();
    }