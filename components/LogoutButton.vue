<template>
  <button
    @click="logout"
    type="button"
    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-primary/90 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:focus:ring-primary/80"
  >
    Logout
  </button>
</template>

<script setup lang="ts">
const client = useSupabaseClient();
const router = useRouter();
const logout = async () => {
  const { error } = await client.auth.signOut();
  if (error) {
    return alert("Something went wrong !");
  }
  router.push("/login");
};
</script>
