const f=document.getElementById("form");
const name= document.getElementById("name");
const mobile=document.getElementById("mobile");
const email= document.getElementById("email");
const occupation= document.getElementById("occupation");
const country= document.getElementById("country");
const state=document.getElementsByClassName("state");
const address=document.getElementById("address");

f.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("aman");
    checkInputs();
});

function checkInputs(){
    const nameValue=name.value.trim();
    const mobileValue=mobile.value.trim();
    const emailValue=email.value.trim();
    const occupationValue=occupation.value.trim();
    const countryValue=ccountry.value.trim();
    const stateValue=state.value.trim();
    const addressValue=address.value.trim();
    
    if(nameValue===""){
        setErrorFor(name, "Name can not be blank");
    } else{
        setSuccessFor(name);
    }
    if(emailValue===""){
        setErrorFor(email, "Email cannot be blank");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Not a valid Eamil");
    }else{
        setSuccessFor(email);
    }

    if(mobileValue===""){
        setErrorFor(mobile, "this field cannot be blank");
    }else {
        setSuccessFor(mobile);
    }

    if(occupationValue===""){
        setErrorFor(occupation, "this field cannot be blank")
    }else{
        setSuccessFor(occupation)
    }
    if(stateValue===""){
        setErrorFor(state, "this field cannot be blank");
    }else {
        setSuccessFor(state);
    }
    if(countryValue===""){
        setErrorFor(country, "this field cannot be blank");
    }else {
        setSuccessFor(country);
    }
}

const setErrorFor=(input, message) => {
    const formControl= input.parentElement;
    formControl.className= "form-control success";
};

const isEmail=(email)=>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
}