function renderSignUp() {
  document.querySelector('#page').innerHTML = `
  <section class ="signup">
            <form onSubmit="signUp(event)" class="mx-auto mt-4" style="width: 300px;">
                <h3 class="text-center">Sign Up</h3>
                <div class="form-group">
                    <span class= 'required'>*</span><label>Username</label>
                    <input type="text" class="form-control" name="userName" required>
                </div>
                <div class="form-group">
                    <span class= "required">*</span><label>Email</label>
                    <input type="email" class="form-control" name="email" required>
                </div>
                <div class="form-group">
                    <span class= "required">*</span><label>Password</label>
                    <input type="password" class="form-control" name="password" required>
                </div>
                <div class="form-group">
                    <span class= "required">*</span><label>Comfirm Password</label>
                    <input type="password" class="form-control" name="confirmPassword" required>
                </div>
            <button type="submit" class="btn btn-light border-secondary">Sign Up</button>
        </form>
    </section>
  `
}

function signUp(event) {
  event.preventDefault()
  const form = event.target

  const data = Object.fromEntries(new FormData(form))
  // console.log(data)

  fetch('api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(userEmail => {
      console.log(userEmail)
      state.loggedInUserEmail = userEmail
      renderBakerList()
  })
}