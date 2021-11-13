export default {
    namespaced: true,

    state: {
        currentType: 'dumpsters',
        customer: null,
        devices: {
            rfid: [],
            ult: [],
            recy: []
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

        setUltDevices(state, ultDevices) {
            state.devices.ult = ultDevices;
        },

        setRecyDevices(state, recyDevices) {
            state.devices.recy = recyDevices;
        },

        setTags(state, tags) {
            state.tags = tags;
        },
    },

    actions: {

    },
}
