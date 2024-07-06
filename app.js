const checkstatus =document.querySelector("h5");
const addfriendbtn = document.querySelector("#Add");
let check = 0;

addfriendbtn.addEventListener("click",function() {
    if (check == 0) {
        checkstatus.innerHTML ="Friends"
        checkstatus.style.color= "green"
        check = 1
        addfriendbtn.innerHTML="Remove Friend"    
    }else{
        checkstatus.innerHTML ="Stranger"
        checkstatus.style.color= "red"
        check = 0;
        addfriendbtn.innerHTML="Add Friend"
    }
})