function showPass(icon){
    const input = icon.previousElementSibling;
    if (input.getAttribute("type") == "password") {
        input.setAttribute("type","text");
        icon.classList.remove('la-eye');
        icon.classList.add('la-eye-slash');
    }
    else{
        input.setAttribute("type","password");
        icon.classList.add('la-eye');
        icon.classList.remove('la-eye-slash');
    }
}