import React from 'react';

export default function Login() {
    return (
    <>
        <body>
          <div class="container">
            <div class="row">
              <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                  <div class="card-body">
                    <h5 class="card-title text-center">Login</h5>
                    <form class="form-signin">
                      <div class="form-label-group">
                        <label for="inputEmail">Email</label>
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus></input>
                      </div>
                      <div class="form-label-group">
                        <label for="inputPassword">Password</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
                      </div>
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="checkbox" class="custom-control-input" id="customCheck1"></input>
                        <br></br>
                        <label class="custom-control-label" for="customCheck1">Remember password</label>
                      </div>
                      <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
    </>
    );
}