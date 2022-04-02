import Auth from "./auth.js";
import { makeRequest, Errors } from "./authHelpers.js";

let loginButton = document.getElementById("loginBtn")
loginButton.addEventListener("click", loginClickEventHandler);

let errorsClass = new Errors("errors")
let auth = new Auth(errorsClass)

function loginClickEventHandler() {
    auth.login( postLoginActions);
}
function postLoginActions() {
    try{
        let userPanel = document.getElementById("user_panel")
        userPanel.innerHTML = `Welcome ${auth.user.firstname}`
        let posts = makeRequest("posts","GET", null, auth.token)
        posts.then((data)=> {
            let listElement = document.getElementById("list")
            listElement.innerHTML = ""
            data.forEach(post => {
                let itemElement = document.createElement("div")
                itemElement.innerHTML = `
<div class="itemElement card">
    <div class="cardheader">
       ${post.title}
    </div>
    <div class="cardBody">
        ${post.content}
    </div>
</div>`
                listElement.appendChild(itemElement)
            });
        })
        .catch((error)=>{
            errorsClass.showError(error)
        })

    } catch (error) {
        // if there were any errors display them
        errorsClass.showError(error)
    }
}