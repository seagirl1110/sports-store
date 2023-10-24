<script setup lang="ts">
const emit = defineEmits<{
    (e: 'click'): void,
}>();
</script>

<template>
    <button @click="emit('click')" class="btn">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: transparent;
    color: #000000;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>