<template> 
	<div class="min-h-screen flex flex-col justify-center items-center">
		Hello, {{ getUser.name }}! How are you today?
		<a @click="logout" class="text-sm cursor-pointer text-gray-600 hover:text-blue-400">
			Logout
		</a>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Home',
	methods: {
		logout: function() {
			this.$store.dispatch('logout')
			.then(() => {
				this.$router.push('/login')
			})
		}
	},
	computed: mapGetters(['getUser'])
}
</script>

<style>

</style>