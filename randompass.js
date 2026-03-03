const btnE1 = document.querySelector(".btn")
const inputE1 = document.getElementById("input")
btnE1.addEventListener("click",()=>{
    createPassword();
})

function createPassword(){
    const chars = "1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm!@#$%^&*()_+{}?[]"
    const passwordLength =14;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length)
        password += chars.substring(randomNum,randomNum+1);
        
    }
    inputE1.value = password;
}