<template>
    <b-row>
        <b-col lg="12">
            <list/>
        </b-col>
    </b-row>
</template>

<script>
import {BRow, BCol} from 'bootstrap-vue';
import List from '@/components/panel/containers/List.vue';

export default {
    components: {
        BRow,
        BCol,
        List
    }
}
</script>

<style>

</style>