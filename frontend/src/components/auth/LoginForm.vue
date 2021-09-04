<template>
	<div class="w-full sm:max-w-md mt-2 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
		<form @submit="onSubmit">
			<div v-if="formHasError" class="text-red-500 text-center">
				{{ this.errorMessage }}
			</div>
			<div>
				<label class="block font-medium text-sm text-gray-700">
					Email
				</label>
				<input
					class="rounded-md shadow-sm border border-gray-300 focus:border-blue-300 
					focus:ring-1 focus:ring-blue-200 focus:ring-opacity-50 block mt-1 w-full py-2 px-2"
					type="text" 
					name="email" 
					v-model="email"
				>
			</div>
			<div class='mt-4'>
				<label class="block font-medium text-sm text-gray-700"
					
				>
					Password
				</label>
				<input
					class="rounded-md shadow-sm border focus:border-blue-300 
					focus:ring-1 focus:ring-blue-200 focus:ring-opacity-50 block mt-1 w-full py-2 px-2"
					type="password" 
					name="password" 
					v-model="password"
				>
			</div>
			<div class="flex items-center justify-end mt-4">
				<router-link class="text-sm cursor-pointer hover:text-blue-400" to="/register">
					Create an account
				</router-link>
				<button type="submit" class="px-4 py-2 bg-gray-800
					rounded-md font-semibold text-xs text-white uppercase hover:bg-gray-700 
					focus:outline-none focus:ring ring-gray-300 ml-3"
				>
					Login
				</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'LoginForm',
	data() {
		return {
			email: '',
			password: '',
			errorMessage: this.$store.getters.getErrorMessage,
		}
	},
	methods: {
		async onSubmit(e) {
			e.preventDefault();
			let email = this.email
			let password = this.password
			await this.$store.dispatch('login', {email, password})
		},
		formHasError() {
			return (this.errorMessage !== '')
		}
	}
}
</script>

<style>

</style>