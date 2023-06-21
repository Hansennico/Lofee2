const Wrapper = document.querySelector("Wrapper"), 
      signup = document.querySelector(".signup-link"), 
      login = document.querySelector(".login-link"), 

// signupHeader = document.querySelector(".Signup header")
// loginHeader = document.querySelector(".Login header")

// loginHeader.addEventListener("click", () => {
//     Wrapper.classList.add("active");
// })

// signupHeader.addEventListener("click", () => {
//     Wrapper.classList.remove("active");
// })

signup.addEventListener("click", ( ) => {
    Wrapper.classList.add("active")
})
login.addEventListener("click", ( ) => {
    Wrapper.classList.remove("active")
})