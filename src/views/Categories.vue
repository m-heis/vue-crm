<template>

    <div>
        <div class="page-title">
            <h3>Категории</h3>
        </div>
        <section>
            <div class="row">
                <CategoryCreate @created="addNewCategory" />

                <CategoryEdit />
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
            categories: []
        }),
        components: {
            CategoryEdit, CategoryCreate
        },
        methods: {
            addNewCategory(category){
                this.categories.push(category);
                console.log(this.categories)
            }
        }
    }
</script>

<style scoped>

</style>
