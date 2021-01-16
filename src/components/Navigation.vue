<template>
  <div class="topnav">
  <!-- <div id="sample">
  <div  v-for="folder in category.folders" :key="folder.name">
  {{folder.name}}
      <div v-for="check in folder.checks" :key="check.name">
          {{check.name}}
      </div>
  </div> -->
  <div class="hello">
    <router-link to="/products">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/login"> Login</router-link>
    <div class="search-container">
    <form action="">
      <input type="text" placeholder="Search.." name="search">
      <button type="submit"><i>search</i></button>
      <div id="cart">
      <router-link class="btn btn-primary my-2 my-sm-0" to="/cart">
      <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png" width="50" alt /> </router-link>
      </div>
    </form>
    </div>
  </div>
  </div>
</template>
<style>
* {box-sizing: border-box;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.hello {
  overflow: hidden;
  background-color: #e9e9e9;
}

.hello a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.hello a:hover {
  background-color: #ddd;
  color: black;
}

.hello a.active {
  background-color: #2196F3;
  color: white;
}

/* .topnav .search-container {
  float: ;
} */

.hello input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.hello .search-container button {
  /* float: right;*/
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.hello.search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .hello .search-container {
    float: none;
  }
  .hello a, .hello input[type=text], .hello .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .hello input[type=text] {
  border: 1px solid #ccc;
  }
}
#cart{
  float: right;
}
.btn btn-default dropdown-toggle{
  float: left;
  padding-left: 0px;
  margin-left: 0px;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown:hover .dropbtn {background-color: #6bb6e9;}
dropdown-submenu {
  position: relative;
}
.dropdown-submenu .dropdown-menu {
  top: 0;
  left: 10px;
  margin-top: 10px
}
</style>
<script>
import $ from 'jquery'
export default {
  name: 'Navigation'
}
// Vue({
//   el: '#sample',
//   data: {
//     private: {
//       folders: [{
//         name: 'folder1',
//         checks: [
//           { name: 'check1.1' },
//           { name: 'check1.2' }
//         ]
//       },
//       {
//         name: 'folder2',
//         checks: [
//           { name: 'check2.1' },
//           { name: 'check2.2' }
//         ]
//       }
//       ]
//     }
//   }
// })
$(document).ready(function () {
  $('.dropdown-submenu a.test').on('click', function (e) {
    $(this).next('ul').toggle()
    e.stopPropagation()
    e.preventDefault()
  })
})
</script>
