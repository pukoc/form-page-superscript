Vue.createApp({
	el: '#index_page',
	data() {
		return {
			form: {
				title: '',
				first_name: '',
				last_name: '',
				address: '',
				policy_start_date: '',
				ern: '',
				ern_exempt: false,
				password: '',
				password_confirmation: '',
			},
			formSubmitting: false,
			errors: []
		};
	},
	methods: {
		async submitForm() {
			this.errors = []
			this.formSubmitting = true

			try {
				const response = await createAccount(this.form);

				window.localStorage.setItem(
					'new_account_response',
					JSON.stringify(response)
				);
				window.location.href = '/success.html';
			} catch (error) {

				for (const [errorKey, errorMessages] of Object.entries(error.response.data.errors)) {
					errorMessages.forEach(message => this.errors.push(message))
				}
			} finally {
				this.formSubmitting = false
			}
		},
	},
}).mount('#index_page');
