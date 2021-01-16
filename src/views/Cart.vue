<template>
 <main>
 <section class="section">
 <div class="container">
 <div class="box">
 <h1 class="title has-text-centered">
 Your Cart
 </h1>
 <hr>
 <div class="box" v-for="product in cart" :key="product._id">
 <article class="media cart-item">
 <div class="media-left">
 <figure class="image cart-image is-128x128">
 <img :src="product.metadata.image.imgix_url" alt="">
 </figure>
 </div>
 <div class="media-content">
 <div class="content">
 <h2 class="is-size-4 has-text-weight-bold">{{ product.title }}</h2>
 <p class="is-size-5">
 ${{product.metadata.price}} x {{ product.count }}
 </p>
 <button class="button is-outlined is-danger is-small is-rounded" @click="removeItem(product)">Remove Item</button>
 </div>
 </div>
 <div class="media-right">
 <div class="content">
 <h2 class="is-size-4 has-text-weight-bold">$ {{ product.metadata.price * product.count }}</h2>
 </div>
 </div>
 </article>
 </div>
 <hr v-if="cartTotal">
 <h1 class="title has-text-centered" v-if="cartTotal"> Total : ${{ totalCost }}</h1>
 <button class="button is-medium is-fullwidth is-outlined is-rounded is-link checkout-button" :class="{'is-loading': submitted}" @click="checkout" v-if="cartTotal">Checkout</button>
 <div class="box has-text-centered" v-if="!cartTotal">
 <article class="emptyCart">
 <h1 class="title">Cart is empty</h1>
 </article>
 </div>
 </div>
 </div>
 </section>
 </main>
</template>
<script>
export default {
}
</script>
<style scoped>
.box, .back-to-shopping {
 box-shadow: none;
 max-width: 720px;
 margin: 0 auto;
}
.back-to-shopping {
 display: block;
 margin-bottom: 10px;
}
.cart-image img{
 height: 100px;
 width: auto;
 margin: 0 auto;
}
.cart-image {
 background: #eee;
 display: flex;
 align-items: center;
}
.cart-item {
 max-width: 400px;
 margin: 0 auto;
}
.checkout-button {
 margin: 0 auto;
 display: block;
}
button {
 margin: 0 auto;
}
@media screen and (max-width: 500px) {
 .media-left {
 display: none;
 }
}
</style>
