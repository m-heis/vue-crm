<template>

    <div>
        <div class="page-title">
            <h3>Категории</h3>
        </div>
        <section>
            <Loader v-if="loading"/>
            <div class="row" v-else>
                <CategoryCreate @created="addNewCategory" />

                <CategoryEdit
                    v-if="categories.length"
                    :categories="categories"
                    :key="categories.length + updateCount"
                    @updated="updateCategories"
                />
                <p v-else class="center">Категорий не существует</p>
            </div>
        </section>
    </div>

</template>

<script>

    import CategoryCreate from "@/components/category/CategoryCreate";
    import CategoryEdit from "@/components/category/CategoryEdit";

    export default {
        name: "Categories",
        data: () => ({
            categories: [],
            loading: true,
            updateCount: 0
        }),
        async mounted(){
            this.categories = await this.$store.dispatch('fetchCategories');
            this.loading = false
        },
        components: {
            CategoryEdit, CategoryCreate
        },
        methods: {
            addNewCategory(category){
                this.categories.push(category);
            },
            updateCategories(category) {
                const i = this.categories.findIndex(c => c.id === category.id);
                this.categories[i].title = category.title;
                this.categories[i].limit = category.limit;
                this.updateCount++
            }
        }
    }
</script>

<style scoped>

</style>
