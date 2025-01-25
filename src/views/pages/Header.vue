<template>
<div class="wrap">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-12 col-md d-flex align-items-center">
                <p class="mb-0 phone"><span class="mailus">Phone no:</span> <a href="#">078000000</a> or <span class="mailus">email us:</span> <a href="#">cybertrusts@gmail.com </a></p>
            </div>
            <div class="col-12 col-md d-flex justify-content-md-end">
                <div class="social-media">
                    <p class="mb-0 d-flex">
                        <a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"><i class="sr-only">Facebook</i></span></a>
                        <a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"><i class="sr-only">Twitter</i></span></a>
                        <a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"><i class="sr-only">Instagram</i></span></a>
                        <a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-dribbble"><i class="sr-only">Dribbble</i></span></a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container">
        <router-link to="/" class="navbar-brand"><img src="frontend/images/logo.png" alt="" class="logo">Cyber<span> Trust</span></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active"><router-link to="/" class="nav-link">Home</router-link></li>
                <li class="nav-item "><router-link to="Services" class="nav-link">Services</router-link></li>
                <li class="nav-item"><router-link to="About" class="nav-link">About</router-link></li>
                <li class="nav-item"><router-link to="Careers" class="nav-link">Careers</router-link></li>
                <li class="nav-item"><router-link to="Blog" class="nav-link">Blog</router-link></li>
                <li class="nav-item"><router-link to="Contact" class="nav-link">Contact us</router-link></li>

            </ul>
        </div>
    </div>
</nav>

</template>

<script> 

export default {
    name:'Header',
    }   
</script>

<style lang="scss" scoped>

</style>