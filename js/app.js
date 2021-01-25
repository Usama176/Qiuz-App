function submitForm(e) {
    // Now to stop the browser defaut behavier 
    e.preventDefault();
    // Now instead of using getElementById
    let uName = document.forms["mainForm"]["userName"];
    // For storing user name in session storage
    sessionStorage.setItem("Name", uName.value);
    // Now for moving on to the next page 
    // We are not using form action method b/c this is qiuz
    // The method below will change the page but we can still go back to the login page
    // window.location.href = "quiz.html";
    // This method is similar to above but it is the best practice
    // window.location.assign("quiz.html");
    // Now we want that the user can not go to the login page so
    window.location.replace("quiz.html");
};