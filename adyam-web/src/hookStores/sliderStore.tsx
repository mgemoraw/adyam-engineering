import axios from 'axios';
import api from '../api/api';

import {create} from 'zustand';
import { baseURL, slidersAPI } from '../api/endpoints';

type SliderState =  {
    sliders: [];
    loadSliders: () => void;
    clearError: () => void;
    error: string |null;
    loading: boolean;
}
const useSliderStore = create<SliderState>((set) => ({
    sliders: [],
    loading: false,
    error: null,

    loadSliders: async () => {
        set({loading: true, error: null});

        try {
            // const baseUrl = import.meta.env.VITE_API_URL;
            const response = await api.get(`${baseURL}${slidersAPI}`, {

            });
            // console.log("data", response.data.contacts);
            set({sliders: response.data.sliders, loading: false});
        } catch(error) {
            set({error: `${error}` || 'Something went wrong', loading:false})
        }
    },

    clearError: () => set({error: null}),


}));

export default useSliderStore;