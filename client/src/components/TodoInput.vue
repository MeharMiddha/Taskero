<script setup lang="ts">
import { useTodos } from "../composables/useTodos";

const { list, handleAddItem } = useTodos();
</script>

<template>
  <form @submit.prevent="handleAddItem" class="flex gap-4">
    <input
      v-model="list"
      placeholder="Enter Name"
      class="border border-black p-2 rounded-lg"
    />
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
      Add
    </button>
  </form>
</template>
