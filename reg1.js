/***********************************Counters******************************************/

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


/***********************************zip code checker******************************************/
/*To check zip code pattern and make sure zip code value bettwen 5 and 10*/

function chk_zip(){

    var pattern=/^\d{5}(\d{5})?/;
    var zipp=document.getElementById("zip");
    var check= pattern.test(zipp.value);

    if (check===false) {
        alert("Please enter Value between 5 and 10 numbers in Zip !");
        zipp.style.color="red";
        return false;
    }
    else if (check===true) {
        zipp.style.color="black";
        return true;
    }
}

/*To change zip code input color when its invaled*/

function chk_zip_color(){

    var pattern=/^\d{5}(\d{5})?/;
    var zipp=document.getElementById("zip");
    var check= pattern.test(zipp.value);

    if (check===false) {
        zipp.style.color="red";
        return false;
    }
    else if (check===true) {
        zipp.style.color="black";
        return true;
    }
}

 

/***********************************email checker******************************************/

/* To check email pattern and email */ 

function chk_email(){
    var pattern= /^[\w-\.]{6,}@([\w-]+)+\.[\w-]{2,4}/;
    var email=document.getElementById("email");
    var chekmail=pattern.test(email.value);

    if(chekmail===false){
        alert('You have entered an invalid email!');
        email.style.color="red";
        return false;
    }
    else if (chekmail===true) {
        email.style.color="black";
        return true;
    }
}

/*To change email input color when its invaled*/

function chk_email_color(){
    var pattern= /^[\w-\.]{6,}@([\w-]+)+\.[\w-]{2,4}/;
    var email=document.getElementById("email");
    var chekmail=pattern.test(email.value);

    if(chekmail===false){
        email.style.color="red";
        return false;
    }
    else if (chekmail===true) {
        email.style.color="black";
        return true;
    }
}

/***********************************password checker******************************************/
   
/*Check password and repeat password fields*/
function chk_pass(){
    var password=document.getElementById("password");
    var repeatpassword=document.getElementById("repeatpassword");

    if (password.value==""){
        alert('You can not make password empty');
        password.style.color="red";
        repeatpassword.style.color="red";
        password.focus();
        return false;
    }
    else if (password.value != repeatpassword.value) {
        alert('The two passwords are not the same');
        password.style.color="red";
        repeatpassword.style.color="red";
        repeatpassword.focus();
        repeatpassword.select();
        return false;
    }   
    else if (password.value == repeatpassword.value) {
        password.style.color="black";
        repeatpassword.style.color="black";
        return true;
    }
}
/*To change password and repassword input color when they're not match*/
function chk_pass_color(){
    var password=document.getElementById("password");
    var repeatpassword=document.getElementById("repeatpassword");

    if (password.value==""){
        password.style.color="red";
        repeatpassword.style.color="red";
        password.focus();
        return false;
    }
    else if (password.value != repeatpassword.value) {
        password.style.color="red";
        repeatpassword.style.color="red";
        repeatpassword.focus();
        repeatpassword.select();
        return false;
    }   
    else if (password.value == repeatpassword.value) {
        password.style.color="black";
        repeatpassword.style.color="black";
        return true;
    }
}

/***********************************comments checker******************************************/
    
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
            alert("Sorry you can not write more than 100 character! We will show only this: " + trimmedString);
            comments.value = trimmedString;
            comments.focus();
        return false;
        }   
    }   
}


/***********************************when press submit or rest******************************************/

/*To check when hit submit button*/
function ValidateForm() {
chk_zip();

chk_email();

chk_pass();

chk_comments();
}

/*To reset the form*/

function reset_fctn() {
    document.getElementById("theform").reset();
    }

