import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }
  
render(){
    return html`
    <head>
    <title>Edit users: </title>
    </head>

    <body>
    <form onsubmit="javascript: return false;" id="userFrom" method="POST">
       <div>
        <label for="email"> Email address: </label>
        <input id="uname" name="uname">
       </div>

      <div>
        <label for="firstName"> First Name: </label>
        <input  id="firstName" name="firstName">
      </div>

      <div>
        <label for="lastName">L ast Name: </label>
        <input id="lastName" name="lastName">
      </div>

      <div>
        <label for="oldpwd"> Old Password: </label>
        <input type="password"  id="oldpwd" name="oldpwd">
      </div>

      <div>
        <label for="newpwd"> New Password: </label>
        <input type="password"  id="pwd" name="pwd">
      </div>
   </form>
   </body>
}

  updateUser(e) {
    const dataForm = new FormData(e.target.form);
    fetch('api/updateUser.php'{
     method: 'POST',
     body: dataForm
    }     
  }  
}
customElements.define('edit-user', EditUser);
