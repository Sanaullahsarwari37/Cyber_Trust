<template>
    <Header></Header>
   <section class="hero-wrap hero-wrap-2" style="background-image: url('frontend/images/bg_3.jpg');" data-stellar-background-ratio="0.5">
  <div class="overlay"></div>
  <div class="container">
    <div class="row no-gutters slider-text align-items-end justify-content-center">
      <div class="col-md-9 ftco-animate pb-5 text-center">
        <h1 class="mb-3 bread">Careers</h1>
        <p class="breadcrumbs"><span class="mr-2"><a href=""><router-link to="/">Home</router-link><i class="fa fa-chevron-right"></i></a></span> <span>Careers <i class="fa fa-chevron-right"></i></span></p>
      </div>
    </div>
  </div>
</section>
<Footer></Footer>
</template>
<script>
import Header from './Header.vue';
import Footer from '../Footer.vue';
export default {
    name:"About",
    components:{
        Header,
        Footer,
    }
}
</script>

<style lang="scss" scoped>

</style>