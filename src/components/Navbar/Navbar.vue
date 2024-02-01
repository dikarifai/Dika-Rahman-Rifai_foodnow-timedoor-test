<script></script>

<template>
  <header class="navbar-wrapper">
    <div class="logo-wrapper">
      <img
        alt="Foodnow Logo"
        class="logo-foodnow"
        src="@/assets/img/logo.svg"
      />
    </div>

    <nav class="router-wrapper">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/">Order</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/about">Blog</RouterLink>
      <RouterLink to="/about">Contact Us</RouterLink>
    </nav>

    <div class="auth-button-wrapper">
      <a class="nav-auth">Login</a>
      <a class="nav-auth active">Register</a>
    </div>
    <h1 class="title">Pizza order</h1>
  </header>
</template>

<style src="./NavbarStyle.scss" scoped></style>
