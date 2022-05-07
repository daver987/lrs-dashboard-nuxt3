<template>
  <div class="p-12">
    <h1 class="text-3xl text-center mb-4 uppercase text-gray-400">Chat App</h1>
    <div class="flex flex-col space-y-4 max-w-2xl mx-auto">
      <input
        type="text"
        v-model="options.body.text"
        @keyup.enter="sendMessage"
        class="p-1 border border-black"
      />
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded-md"
        @click="sendMessage"
      >
        Send
      </button>
      <p>{{ options.body.text }}</p>
      <div class="space-y-4">
        <label for="contacts">Send Message to: </label>
        <select v-model="selected" name="contacts" id="contacts">
          <option value="">Select a contact</option>
          <option value="15142991410">Jeremy Brown</option>
          <option value="14167057627">High Park Livery</option>
          <option value="12894009408">David Robertson</option>
        </select>
        <pre>{{ selected }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const selected = ref('')
const options = ref({
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer gZ8synsZVHZJbXoQBei7SAQop5SJrW3CmDK7JJnDa2uhIxF3',
  },
  body: {
    to: [''],
    from: '12896401876',
    text: '',
  },
})

const sendMessage = async () => {
  options.value.body.to = [selected.value]
  return await $fetch(
    'https://api.phone.com/v4/accounts/2664503/messages',
    options.value
  )
    .then((response) => response)
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
}
definePageMeta({
  middleware: ['auth'],
  layout: 'default',
})
</script>
