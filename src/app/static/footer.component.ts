import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer-bs ">
  <div class="row">
    <div class="col-md-3 footer-brand animated fadeInLeft">
        <h2>Logo</h2>
      <p>By using this website, you agree to our <a href="#">terms & conditions</a></p>
          <p>© 2019, All rights reserved</p>
      </div>
    <div class="col-md-4 footer-nav animated fadeInUp">
        <div class="col-md-4">
              <ul class="list">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contacts</a></li>
                  <li><a href="#">Terms & Condition</a></li>
                  <li><a href="#">Privacy Policy</a></li>
              </ul>
          </div>
      </div>
    <div class="col-md-2 footer-social animated fadeInDown">
        <h4>Follow Us</h4>
        <ul>
            <li><a href="https://www.facebook.com/abiola.deji" target="_blank">Facebook</a></li>
            <li><a href="https://twitter.com/deji_abiola" target="_blank">Twitter</a></li>
            <li><a href="https://www.instagram.com/deji_abiola/?hl=en" target="_blank">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/adedeji-abiola-077072108/" target="_blank">Linkedin</a></li>
          </ul>
      </div>
    <div class="col-md-3 footer-ns animated fadeInRight">
        <h4>Newsletter</h4>
          <p>Subscribe to our newsletter and be the first to know about new movies.</p>
          <div>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Email..">
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button">Submit</button>
                </span>
              </div>
           </div>
      </div>
  </div>
</footer>
  `,
  styles: [`
    .footer-bs {
      background-color: #3c3d41;
      padding: 60px 40px;
      color: rgba(255,255,255,1.00);
      margin-bottom: 20px;
      border-bottom-right-radius: 6px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 6px;
      position: relative;
      left: 0;
      bottom: 0;
      width: 100%;
      margin-bottom: 0px;
    }
    .footer-bs .footer-brand, .footer-bs .footer-nav, .footer-bs .footer-social, .footer-bs .footer-ns { padding:10px 25px; }
    .footer-bs .footer-nav, .footer-bs .footer-social, .footer-bs .footer-ns { border-color: transparent; }
    .footer-bs .footer-brand h2 { margin:0px 0px 10px; }
    .footer-bs .footer-brand p { font-size:12px; color:rgba(255,255,255,0.70); }

    .footer-bs .footer-nav ul.pages { list-style:none; padding:0px; }
    .footer-bs .footer-nav ul.pages li { padding:5px 0px;}
    .footer-bs .footer-nav ul.pages a { color:rgba(255,255,255,1.00); font-weight:bold; text-transform:uppercase; }
    .footer-bs .footer-nav ul.pages a:hover { color:rgba(255,255,255,0.80); text-decoration:none; }
    .footer-bs .footer-nav h4 {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom:10px;
    }

    .footer-bs .footer-nav ul.list { list-style:none; padding:0px; }
    .footer-bs .footer-nav ul.list li { padding:5px 0px;}
    .footer-bs .footer-nav ul.list a { color:rgba(255,255,255,0.80); }
    .footer-bs .footer-nav ul.list a:hover { color:rgba(255,255,255,0.60); text-decoration:none; }

    .footer-bs .footer-social ul { list-style:none; padding:0px; }
    .footer-bs .footer-social h4 {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 3px;
    }
    .footer-bs .footer-social li { padding:5px 4px;}
    .footer-bs .footer-social a { color:rgba(255,255,255,1.00);}
    .footer-bs .footer-social a:hover { color:rgba(255,255,255,0.80); text-decoration:none; }

    .footer-bs .footer-ns h4 {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom:10px;
    }
    button {
      background-color: black;
      color: white;
    }
    .footer-bs .footer-ns p { font-size:12px; color:rgba(255,255,255,0.70); }

    @media (min-width: 768px) {
      .footer-bs .footer-nav, .footer-bs .footer-social, .footer-bs .footer-ns { border-left:solid 1px rgba(255,255,255,0.10); }
      .footer-bs {
        margin-right: 0;
      }
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
