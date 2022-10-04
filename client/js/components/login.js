// function renderLogin() {
//   document.querySelector('#page').innerHTML = `
//   <section class ="login">
//         <form onSubmit="login(event)" class="mx-auto mt-4" style="width: 300px;">
//             <h3 class="text-center">Login</h3>
//             <div class="form-group">
//                 <span class= "required">*</span><label>Email</label>
//                 <input type="email" class="form-control" name="email" required>
//             </div>
//             <div class="form-group">
//                 <span class= "required">*</span><label>Password</label>
//                 <input type="password" class="form-control" name="password" required>
//             </div>
//         <button type="submit" class="btn btn-light border-secondary">Login</button>
//     </form>
// </section>
//   `
// }

// function logIn(event) {
//   event.preventDefault()
//   const form = event.target

//   const data = Object.fromEntries(new FormData(form))
//   // console.log(data)
  
//   fetch('/api/sessions', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)
//   })
//     .then(res => res.json())
//     .then(res => {
//       if (res.error) {
//         renderLogin()
//         renderError(res.error)
//       } else {
//         const userName = res
//         // console.log(userName)
//         state.loggedInUserName = userName
//         renderRestaurantList()
//       }
//     })
// }

// function renderError(errorMessage) {
//   const page = document.querySelector('#page')
//   page.innerHTML =
//     `<h2 style='color: red;'>${errorMessage}</h2>` +
//     page.innerHTML
// }

