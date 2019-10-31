export default {
    // eslint-disable-next-line no-unused-vars
    install(Vue, options) {
        Vue.prototype.$message = function (html) {
            // eslint-disable-next-line no-undef
            M.toast({html})
        };

        Vue.prototype.$error = function (html) {
            // eslint-disable-next-line no-undef
            M.toast({html: `[Ошибка]: ${html}`})
        }
    }
}
