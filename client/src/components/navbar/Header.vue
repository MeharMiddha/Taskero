<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="flex items-center justify-between p-2">
    <RouterLink to="/" class="cursor-pointer">
      <img
        src="https://play-lh.googleusercontent.com/L_FCWzrpjxcyzssZDTL7OZNPvc5NFxoHnQnL-EvOE5ZzF7N2e3h1xg4c4Vno7p-GOxngdNrIzeVobx7UBqfRbQ"
        alt=""
        width="50"
        height="50"
    />
    </RouterLink>
    <div class="flex gap-4">
      <RouterLink to="/todos" class="font-bold text-blue-500 hover:text-blue-900">My Tasks</RouterLink>
      <RouterLink to="/login" class="font-bold text-blue-500 hover:text-blue-900">Login</RouterLink>
      <RouterLink to="/signup" class="font-bold text-blue-500 hover:text-blue-900">SignUp</RouterLink>
    </div>
  </div>
</template>
