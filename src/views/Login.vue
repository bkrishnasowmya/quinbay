<template>
<div class="container">
<!-- <Navigation></Navigation> -->
 <form action="/action_page.php">
 <div class="row">
 <h1 class="main" style="text-align:center;"><center>LOGIN</center></h1>
 </div>
 <div id="inputs">
 <input type="text" name="username" placeholder="Username" id="username" required>
 <input type="password" name="password" placeholder="Password" required>
 <input type="submit" id="login" value="Login">
 </div>
 <router-link to='/register'><center><input type="submit" id="register" value="Register" ></center></router-link>
 </form>
 <h3 style="text-align:center;"> OR </h3>
 <a href="#" class="google btn">
 <i class="fa fa-google" style="text-align:center;">Login with Google+</i>
 </a>
</div>
</template>
<script>
// import Navigation from './components/Navigation.vue'
export default {
  name: 'Login'
}
</script>
<style>
.row {box-sizing: border-box}
.main{
 text-align: center;
 align-content: center;
 text-indent: 70px;
}
.container {
 margin: 40px;
 position: relative;
 border-radius: 2px;
 background-color: #f2f2f2;
 padding: 20px 0 30px 0;
 justify-content: center;
}
input,
.btn {
 width: 800px;
 padding: 8px;
 border: none;
 border-radius: 2px;
 margin: 3px 0;
 opacity: 0.85;
 display: inline-flex;
 font-size: 11px;
 line-height: 10px;
 text-align: center;
}
.btn {
 color: rgb(228, 176, 176);
 text-align: center;
}
.btn:hover {
 opacity: 1;
 background-color: #f38c7e;
}
#login {
 background-color: rgb(98, 203, 245);
 color: black;
 cursor: pointer;
 text-align: center;
}
#login,#register {
 background-color: #4392db;
 text-align: center;
}
#inputs {
  text-align: center;
}
</style>
