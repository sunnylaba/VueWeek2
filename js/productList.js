
const App = {
    data() {
        return {
            url: 'https://vue3-course-api.hexschool.io',
            path: 'akihico-hexschool',
            products: [],
            tempProduct: {}
        }
    },
    methods: {
        checkLogin() {
            //取出token
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            // headers夾帶token
            axios.defaults.headers.common['Authorization'] = token;
            axios.post(`${this.url}/v2/api/user/check`)
            .then((res) => {
                this.render();
            })
            .catch((err) => {
                alert('請重新登入');
                window.location = 'login.html';
            })

        },
        getProducts() {
            axios.get(`${this.url}/v2/api/${this.path}/admin/products`)
            .then((res) => {
                this.products = res.data.products;
            })
        },
        getItemProduct(item) {
            this.tempProduct = item;
        },
        render() {
            this.getProducts();
        }
    },
    mounted() {
        this.checkLogin();
    }
}
Vue.createApp(App).mount('#app')