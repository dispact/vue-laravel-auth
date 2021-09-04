<template>
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
    <div class="text-lg font-medium">
      Vue + Laravel Login System
    </div>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm';

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  methods: {
    
  }
}
</script>

<style>

</style>