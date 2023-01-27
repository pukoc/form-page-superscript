Vue.createApp({
	el: '#success_page',
	data() {
		return {
			ref: '',
			activeProducts: [],
			expiredProducts: [],
		};
	},
	mounted() {
		const {ref, products} = JSON.parse(
			window.localStorage.getItem('new_account_response')
		);

		this.ref = ref;
		
        for (const [key, value] of Object.entries(products)) {
            if (value.hasPolicy) {
                this.activeProducts.push({
                    name: key,
                    startDate: value.startDate ? new Date(value.startDate).toLocaleDateString() : null,
                    endDate: value.endDate ? new Date(value.endDate).toLocaleDateString() : null,
                    price: value.price ? value.price : null,
                })
            } else {
                this.expiredProducts.push({
                    name: key,
                    startDate: value.startDate ? new Date(value.startDate).toLocaleDateString() : null,
                    endDate: value.endDate ? new Date(value.endDate).toLocaleDateString() : null,
                    price: value.price ? value.price  : null,
                })
            }
        }
	},
}).mount('#success_page');
