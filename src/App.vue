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
  min-height: 40px;
  background-color: #e4edff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #b3baf2;
}
.menu {
  display: flex;
  column-gap: 30px;
  justify-content: center;

  // .menu__item

  &__item {
    text-decoration: none;
  }
}
</style>
