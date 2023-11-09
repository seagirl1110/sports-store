<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="center-wrapper">
      <nav class="menu">
        <RouterLink to="/" class="menu__item">Главная</RouterLink>
        <RouterLink to="/catalog" class="menu__item">Каталог</RouterLink>
        <RouterLink to="/basket" class="menu__item">Корзина</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
.header {
  min-height: 100px;
  background-color: #e4edff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #b3baf2;
}
.menu {
  display: flex;
  column-gap: 40px;
  justify-content: center;

  // .menu__item

  &__item {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.45;
    letter-spacing: 0.03rem;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
  }
}
</style>
