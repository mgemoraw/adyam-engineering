import axios from 'axios';
import api from '../api/api';

import {create} from 'zustand';
import { baseURL, servicesAPI } from '../api/endpoints';

type ServiceState =  {
    services: [];
    loadServices: () => void;
    clearError: () => void;
    error: string |null;
    loading: boolean;
}
const useServicesStore = create<ServiceState>((set) => ({
    services: [],
    loading: false,
    error: null,

    loadServices: async () => {
        set({loading: true, error: null});

        try {
            // const baseUrl = import.meta.env.VITE_API_URL;
            const response = await api.get(`${baseURL}${servicesAPI}`, {

            });
            // console.log("data", response.data.contacts);
            set({services: response.data.services, loading: false});
        } catch(error) {
            set({error: `${error}` || 'Something went wrong', loading:false})
        }
    },

    clearError: () => set({error: null}),


}));

export default useServicesStore;