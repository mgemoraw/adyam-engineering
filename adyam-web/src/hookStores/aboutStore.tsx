import axios from 'axios';
import api from '../api/api';

import {create} from 'zustand';
import { baseURL, aboutAPI } from '../api/endpoints';

type AboutState =  {
    info: [];
    loadInfo: () => void;
    clearError: () => void;
    error: string |null;
    loading: boolean;
}
const useAboutStore = create<AboutState>((set) => ({
    info: [],
    loading: false,
    error: null,

    loadInfo: async () => {
        set({loading: true, error: null});

        try {
            // const baseUrl = import.meta.env.VITE_API_URL;
            const response = await api.get(`${baseURL}${aboutAPI}`, {

            });
            // console.log("data", response.data.contacts);
            set({info: response.data.info, loading: false});
        } catch(error) {
            set({error: `${error}` || 'Something went wrong', loading:false})
        }
    },

    clearError: () => set({error: null}),


}));

export default useAboutStore;