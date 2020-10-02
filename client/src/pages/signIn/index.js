import React from "react";

function singin() {
  return (
    <div>
      <main className="container main-content">
        <h3>Sign In/Up</h3>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a
            className="dropdown-item btn light-blue darken-1 button"
            id="signIn"
            href="#"
          >
            Sign in
          </a>
          <a
            className="dropdown-item btn light-blue darken-1 button"
            id="signUp"
            href="#"
          >
            Sign up
          </a>
        </div>
      </main>
    </div>
  );
}
export default singin;
