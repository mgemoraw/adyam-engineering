import axios from 'axios';
import api from '../api/api';

import {create} from 'zustand';
import { baseURL, newsAPI } from '../api/endpoints';

type NewsState =  {
    news: [];
    loadNews: () => void;
    clearError: () => void;
    error: string |null;
    loading: boolean;
}
const useNewsStore = create<NewsState>((set) => ({
    news: [],
    loading: false,
    error: null,

    loadNews: async () => {
        set({loading: true, error: null});

        try {
            // const baseUrl = import.meta.env.VITE_API_URL;
            const response = await api.get(`${baseURL}${newsAPI}`, {

            });
            // console.log("data", response.data.contacts);
            set({news: response.data.news, loading: false});
        } catch(error) {
            set({error: `${error}` || 'Something went wrong', loading:false})
        }
    },

    clearError: () => set({error: null}),


}));

export default useNewsStore;