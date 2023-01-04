const url = 'https://vue3-course-api.hexschool.io';
const path = 'akihico-hexschool';

const App = {
    data() {
        return {
            user: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        login() {
            axios.post(`${url}/v2/admin/signin`, this.user)
            .then((res) => {
                alert(res.data.message);
                const {token, expired} = res.data;
                //console.log(token, expired);
                // 把token和時效存在cookie中
                document.cookie = `hexToken=${ token }; expires=${ new Date(expired)};`;
                window.location = 'productList.html';
            })
            .catch((err) => {
                alert('帳號密碼錯誤，請重新輸入');
            })
        }
    }
}
Vue.createApp(App).mount('#app');