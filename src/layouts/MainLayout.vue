<template>

    <div>

        <Loader v-if="loading" />

        <div v-else class="app-main-layout">

            <Navbar @click="isOpen = !isOpen" />
            <SideBar v-model="isOpen" />

            <main class="app-content" :class="{full: !isOpen}">
                <div class="app-page">
                    <router-view />
                </div>
            </main>

            <div class="fixed-action-btn" title="Создать новую запись">
                <router-link class="btn-floating btn-large blue" to="/record">
                    <i class="large material-icons">add</i>
                </router-link>
            </div>
        </div>
    </div>


</template>

<script>
    import Navbar from "../components/app/Navbar";
    import SideBar from "../components/app/SideBar";

    export default {
        name: "MainLayout",
        data: () => ({
            isOpen: true,
            loading: true
        }),
        async mounted() {
            if(!Object.keys(this.$store.getters.info).length){
                await this.$store.dispatch('fetchInfo')
            }

            this.loading = false
        },
        components: {
            Navbar, SideBar
        }
    }
</script>

<style scoped>

</style>
