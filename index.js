let signupBox=document.getElementById('signUp')
let closeBtn=document.getElementById('close')
function show(){
    signupBox.style.display='block'
}

closeBtn.addEventListener('click',function(){
    signupBox.style.display='none'
})