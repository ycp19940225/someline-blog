<style scoped>
</style>

<template>

    <div class="wrapper-md">

        <h1>{{ $t('user.users') }}</h1>
        <hr>

        <div class="row">

            <div class="list-group list-group-lg list-group-sp">
                <template v-for="item of items">
                    <div class="col-md-4 m-b-sm">
                        <sl-user-list-item :item="item"></sl-user-list-item>
                    </div>
                </template>
            </div>

        </div>

    </div>

</template>

<script>
    export default{
        props: [],
        data(){
            return {
//                msg: 'hello vue',
                items: [],
            }
        },
        computed: {},
        components: {
            'sl-user-list-item': require('./UserListGroupItem.vue'),
        },
        http: {
            root: '/api',
            headers: {
                Accept: 'application/x.someline.v1+json'
            }
        },
        mounted(){
            console.log('Component Ready.');

            this.fetchData();
        },
        watch: {},
        events: {},
        methods: {
            fetchData(){

                var resource = this.$resource('users', {
//                    include: ''
                });

                // get item
                resource.get({}).then((response) => {
                    console.log(response);
                    this.items = response.data.data;
                });

            }
        },
    }
</script>