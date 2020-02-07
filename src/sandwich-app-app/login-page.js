import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/iron-ajax/iron-ajax.js';

/**
 * @customElement
 * @polymer
 */
class LoginPage extends PolymerElement {
  static get template() {
    return html`
      <style>
     

        main{
          border:2px solid black;
          border-radius:5px;
          width:400px;
          height:250px;
          align-self:center;
        }
        iron-form{
          padding:20px;
        }
        paper-button{
          margin-top:20px;
        }
        #container{
          display:flex;
          justify-content:center;
          margin-top:13%;
          background-image:url("../../images/login.jpeg");
        }
      </style>
      <div id="container">
      <main>
      <iron-form id="register">
      <form>
      <paper-input id="mobile" required name="mobileNo" allowed-pattern=[0-9] label="Enter Mobile Number" minlength="10" maxlength="10"> </paper-input>
      <paper-input id="password" required name="password" type="password" label="Enter Password"></paper-input>
      <paper-button raised on-click="_handleLogin">Login</paper-button>
        </form>
        </iron-form>
      </main>
      </div>
      <iron-ajax id="ajax" on-response="_handleLogin" on-error="_handleError" content-type="application/json" handle-as="json"></iron-ajax>
   
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'login-page'
      }
    };
  }
  _handleLogin() {

    if (this.$.register.validate()) {
      let loginObj = { phoneNumber: this.$.mobile.value, password: this.$.password.value };
      // this._makeAjaxCall('#', 'post', loginObj)
    }
  }
  _handleError() {
    alert('Mobile Number or Password is incorrect');
  }
  _handleResponse() {
    let userData = event.detail.response;
    sessionStorage.setItem('userDetails', 'userData');
  }
  // _makeAjaxCall(url, method, postObj, action) {
  //   const ajax = this.$.ajax;
  //   ajax.method = method;
  //   ajax.url = url;
  //   ajax.body = postObj ? JSON.stringify(postObj) : undefined;
  //   ajax.generateRequest();
  // }
}

window.customElements.define('login-page', LoginPage);
