export const homeLogoutHTML = `
    <div>
          <div>You are logged in</div>
          <a href="/auth/logout">Logout</a>
    </div>
  `;

export const homeLoginHTML = `
    <div>
          <div>You are not logged in</div>
          <a href="/auth/login">Log in</a>
    </div>
  `;

export const loginFormHTML = `
    <form method="POST">
      <div>
          <label>Email</label>
          <input name="email" type="email"/>
      </div>
      <div>
          <label>Password</label>
          <input name="password" type="password"/>
      </div>
      <button>Submit</button>
    </form>
  `;
