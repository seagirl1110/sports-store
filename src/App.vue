<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="center-wrapper">
      <nav>
        <RouterLink to="/">Каталог</RouterLink>
        <RouterLink to="/basket">Корзина</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
