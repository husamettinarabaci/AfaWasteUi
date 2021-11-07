export default {
    namespaced: true,

    state: {
        currentType: 'dumpsters',
        customer: null,
        devices: {
            rfid: [],
            recy: [],
            ult: []
        },
        tags: []
    },

    getters: {
    },

    mutations: {
        setCustomer(state, customer) {
            state.customer = customer;
        },

        setRfidDevices(state, rfidDevices) {
            state.devices.rfid = rfidDevices;
        },

        setRecyDevices(state, recyDevices) {
            state.devices.recy = recyDevices;
        },

        setUltDevices(state, ultDevices) {
            state.devices.ult = ultDevices;
        },

        setTags(state, tags) {
            state.tags = tags;
        },
    },

    actions: {

    },
}
