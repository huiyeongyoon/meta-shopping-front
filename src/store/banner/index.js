import bannerApi from '@/api/banner';

export default {
    namespaced: true,
    state: {
        mainBanners: []
    },
    mutations: {
        setMainBanners(state, banners) {
            state.mainBanners = [].concat(banners);
        }
    },
    actions: {
        async setMainBanners({ commit }) {
            const response = await bannerApi.getMainSlideBanners();

            commit('setMainBanners', response.data);
        }
    }
}