/*To Check the name charcters number */
function fname_counter(){
var finput = document.getElementById("first_name");           
var fcounter = document.getElementById("fcounter");
var fmaxLength = finput.getAttribute("maxlength");

finput.onkeyup = ()=>{
    fcounter.innerText= fmaxLength-finput.value.length;
}
}

/*To Check the middle initial charcters number */

function mname_counter(){
    var minput = document.getElementById("middle_initial");           
    var mcounter = document.getElementById("mcounter");
    var mmaxLength = minput.getAttribute("maxlength");
    
    minput.onkeyup = ()=>{
        mcounter.innerText= mmaxLength-minput.value.length;
    }
    }

/*To Check the last name charcters number */
function lname_counter(){
    var linput = document.getElementById("last_name");           
    var lcounter = document.getElementById("lcounter");
    var lmaxLength = linput.getAttribute("maxlength");
    
    linput.onkeyup = ()=>{
        lcounter.innerText= lmaxLength-linput.value.length;
    }
    }

/*To Check the city charcters number */
function city_counter(){
    var cinput = document.getElementById("city");           
    var ccounter = document.getElementById("ccounter");
    var cmaxLength = cinput.getAttribute("maxlength");
    
    cinput.onkeyup = ()=>{
        ccounter.innerText= cmaxLength-cinput.value.length;
    }
    }

/*To Check the email charcters number */
function email_counter(){
    var einput = document.getElementById("email");           
    var ecounter = document.getElementById("EMcounter");
    var emaxLength = einput.getAttribute("maxlength");
    
    einput.onkeyup = ()=>{
        ecounter.innerText= emaxLength-einput.value.length;
    }
    }

/*To Check the username charcters number */
function usr_counter(){
    var usrinput = document.getElementById("username");           
    var usrcounter = document.getElementById("usrcounter");
    var usrmaxLength = usrinput.getAttribute("maxlength");
    
    usrinput.onkeyup = ()=>{
        usrcounter.innerText= usrmaxLength-usrinput.value.length;
    }
    }

/*To Check the password charcters number */
function pass_counter(){
    var passinput = document.getElementById("password");           
    var passcounter = document.getElementById("passcounter");
    var passmaxLength = passinput.getAttribute("maxlength");
    
    passinput.onkeyup = ()=>{
        passcounter.innerText= passmaxLength-passinput.value.length;
    }
    }

/*To Check the repeat password charcters number */
function reppass_counter(){
    var reppassinput = document.getElementById("repeatpassword");           
    var reppasscounter = document.getElementById("reppasscounter");
    var reppassmaxLength = reppassinput.getAttribute("maxlength");
    
    reppassinput.onkeyup = ()=>{
        reppasscounter.innerText= reppassmaxLength-reppassinput.value.length;
    }
    }


/*To make zip code value bettwen 5 and 10*/
function chk_zip_length(){
    var zip=document.getElementById("zip");

    if (zip.value != "") {

        if (zip.value.length < 5 || zip.value.length > 10 ) {
            window.alert("Please enter Value between 5 and 10 numbers in Zip !");
            zip.focus();
            return false;
        }
    }
}
/*To check zip code pattern*/  /*modifffffffffffffffffffffffffffffffy*/ 
function chk_zip_pattern(){
    var zip_pattern=document.getElementById("zip");

    if (zip_pattern.value != "") {
        var zippattern = /^\d{5}(-\d{4})?$/;
        if (zip_pattern.value.match(zippattern)) {
            if (zip_pattern.value.length < 5 || zip_pattern.value.length > 10 ) {
                alert("You have entered an invalid zip code!");
                zip_pattern.focus();
                return false;
            }
            else {
                return true;
            }
        }
    }
}

/*To check email pattern*/  /*modifffffffffffffffffffffffffffffffy*/ 
function chk_email(){
    var email=document.getElementById("email");

    if (email.value != "") {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.value.match(mailformat)) {
            if (email.value.length <= 6) {
                alert("You have entered an invalid email address!");
                email.focus();
                return false;
            }
            else {
                return true;
            }

        }
        else {
            alert("You have entered an invalid email address!");
            email.focus();
            return false;
        }
    }
}

   
/*Check password and repeat password fields*/
function chk_pass(){
    var password=document.getElementById("password");
    var repeatpassword=document.getElementById("repeatpassword");
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
    
/*Check comments charcter and only show 100 charcter*/
function comment_counter(){
    var commentinput = document.getElementById("comments");           
    var commentcounter = document.getElementById("commentcounter");
    
    commentinput.onkeyup = ()=>{
        commentcounter.innerText= 100-commentinput.value.length;
        if (commentcounter.innerText < 0){
            commentcounter.style.color="red";
        }
        else{
            commentcounter.style.color="black";

        }
    }
    }

/*Check comments charcter and only show 100 charcter*/
function chk_comments(){        
    var comments=document.getElementById("comments");

    if (comments.value != "") {
        var comments_len = comments.value.length;
        if (comments_len > 100) {
            var string = comments.value;
            var trimmedString = string.substring(0, 100);
            alert("Too much data in the comments! We well Take " + trimmedString);
            comments.value = trimmedString;
            comments.focus();
        return false;
        }   
    }   
}

/*To check when hit submit button*/
function ValidateForm() {
chk_zip_length();
chk_zip_pattern();
chk_email();
chk_pass();
chk_comments();
}

/*To reset the form*/

function reset_fctn() {
    document.getElementById("theform").reset();
    }

