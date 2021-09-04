<template>
	<div class="w-full sm:max-w-md mt-2 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
		<form @submit="onSubmit">
         <div>
				<label class="block font-medium text-sm text-gray-700">
					Name
				</label>
				<input
					class="rounded-md shadow-sm border border-gray-300 focus:border-blue-300 
					focus:ring-1 focus:ring-blue-200 focus:ring-opacity-50 block mt-1 w-full py-2 px-2"
					type="text" 
					name="name" 
					v-model="name"
				>
			</div>
			<div class="mt-4">
				<label class="block font-medium text-sm text-gray-700">
					Email
				</label>
				<input
					class="rounded-md shadow-sm border border-gray-300 focus:border-blue-300 
					focus:ring-1 focus:ring-blue-200 focus:ring-opacity-50 block mt-1 w-full py-2 px-2"
					type="email" 
					v-model="email"
				>
			</div>
			<div class='mt-4'>
				<label class="block font-medium text-sm text-gray-700">
					Password
				</label>
				<input
					class="rounded-md shadow-sm border border-gray-300 focus:border-blue-300 
					focus:ring-1 focus:ring-blue-200 focus:ring-opacity-50 block mt-1 w-full py-2 px-2"
					type="password" 
					v-model="password"
				>
			</div>
         <div class='mt-4'>
				<label class="block font-medium text-sm text-gray-700">
					Confirm Password
				</label>
				<input
					class="rounded-md shadow-sm border border-gray-300 focus:border-blue-300 
					focus:ring-1 focus:ring-blue-200 focus:ring-opacity-50 block mt-1 w-full py-2 px-2"
					type="password" 
					v-model="password_confirmation"
				>
			</div>
			<div class="flex items-center justify-end mt-4">
				<router-link to="/login" class="text-sm cursor-pointer hover:text-blue-400">
					Already have an account?
				</router-link>
				<button type="submit" class="px-4 py-2 bg-gray-800
					rounded-md font-semibold text-xs text-white uppercase hover:bg-gray-700 
					focus:outline-none focus:ring ring-gray-300 ml-3"
				>
					Register
				</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'RegisterForm',
	data() {
		return {
         name: '',
			email: '',
			password: '',
         password_confirmation: ''	
		}
	},
	methods: {
		async onSubmit(e) {
			e.preventDefault();
			let name = this.name
			let email = this.email
			let password = this.password
			let password_confirmation = this.password_confirmation
			await this.$store.dispatch('register', {name, email, password, password_confirmation})
		}
	}
}
</script>

<style>

</style>