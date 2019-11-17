<template>

    <div>
        <div class="page-title">
            <h3>Планирование</h3>
            <h4>{{info.bill}}</h4>
        </div>

        <Loader v-if="loading" />

        <p class="center" v-else-if="!categories.length">Категорий пока нет. <router-link to="categories">Добавить новую категорию</router-link></p>

        <section v-else>
            <div v-for="c in categories" :key="c.id">
                <p>
                    <strong>{{c.title}}:</strong>
                    {{c.spend}} из {{c.limit}}
                </p>
                <div class="progress" v-tooltip="c.tooltip">
                    <div
                            class="determinate"
                            :class="[c.progressColor]"
                            :style="{width: c.progressPercent + '%'}"
                    ></div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
        name: "Planning",
        data: () => ({
            loading: true,
            categories: []
        }),
        computed: {
            ...mapGetters(['info'])
        },
        async mounted() {
            const records = await this.$store.dispatch('fetchRecords');
            const categories2 = await this.$store.dispatch('fetchCategories');

            this.categories = categories2.map(cat => {
                const spend = records
                    .filter(r => r.categoryId === cat.id)
                    .filter(r => r.type === 'outcome')
                    .reduce((total, record) => {
                        return total += +record.amount
                    }, 0);

                const percent = 100 * spend / cat.limit;
                const progressPercent = percent > 100 ? 100 : percent;
                const progressColor =
                    percent < 60 ? 'green' : percent < 100 ? 'yellow' : 'red';

                const tooltipValue = cat.limit - spend;
                const tooltip = `${tooltipValue < 0 ? 'Превышение на' : 'Осталось'} ${Math.abs(tooltipValue)}`;

                return {
                    ...cat,
                    progressPercent,
                    progressColor,
                    spend,
                    tooltip
                }
            });

            this.loading = false
        }
    }
</script>

<style scoped>

</style>
