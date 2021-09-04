<template>
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
    <div class="text-lg font-medium">
      Vue + Laravel Login System
    </div>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '@/components/auth/RegisterForm';

export default {
  name: 'Register',
  components: {
    RegisterForm
  },
  methods: {
    
  }
}
</script>

<style>

</style>