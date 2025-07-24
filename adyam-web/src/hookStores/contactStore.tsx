import axios from 'axios';
import api from '../api/api';

import {create} from 'zustand';
import { baseURL, contactAPI } from '../api/endpoints';

type ContactState =  {
    contacts: Object;
    loadContacts: () => void;
    clearError: () => void;
    error: string |null;
    loading: boolean;
}


const useContactStore = create<ContactState>((set) => ({
    contacts: {},
    loading: false,
    error: null,

    loadContacts: async () => {
        set({loading: true, error: null});

        try {
            // const baseUrl = import.meta.env.VITE_API_URL;
            const response = await axios.get(`${baseURL}${contactAPI}`, {

            });
            console.log("data", response.data.contacts);
            set({contacts: response.data.contacts, loading: false});
        } catch(error) {
            set({error: `${error}` || 'Something went wrong', loading:false})
        }
    },

    clearError: () => set({error: null}),


}));

export default useContactStore;