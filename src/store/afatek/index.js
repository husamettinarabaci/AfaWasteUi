export default {
    namespaced: true,

    state: {
        customers: []
    },

    getters: {
        getCustomers: state => state.customers
    },

    mutations: {
        setCustomers(state, customers) {
            state.customers = customers;
        }
    },

    actions: {

    },
}
