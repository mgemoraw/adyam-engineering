import axios from 'axios';
import api from '../api/api';

import {create} from 'zustand';
import { baseURL, messagesAPI } from '../api/endpoints';
import type { ContactMessage, Message } from '../models/models';



type MessageState =  {
    messages: [];
    sendMessage: (message:Message) => void;
    sendContactMessage: (message:ContactMessage) => void;
    loadMessages: () => void;
    clearError: () => void;
    error: string |null;
    loading: boolean;
    status: string | null;
}

const useMessagesStore = create<MessageState>((set) => ({
    messages: [],
    loading: false,
    error: null,
    status: null,

    loadMessages: async () => {
        set({loading: true, error: null});

        try {
            // const baseUrl = import.meta.env.VITE_API_URL;
            const response = await axios.get(`${baseURL}${messagesAPI}`, {

            });
            // console.log("data", response.data.contacts);
            set({messages: response.data.messages, loading: false});
        } catch(error) {
            set({error: `${error}` || 'Something went wrong', loading:false})
        }
    },

     sendMessage: async (message:Message) => {
        set({loading: true, error: null, status: 'sending'});

        try {
            // const baseUrl = import.meta.env.VITE_API_URL;
           await api.post(`${baseURL}${messagesAPI}`, {
                message,
            });
            // set status message
            set({status: "success", loading: false});
        } catch(error) {
            set({error: `${error}` || 'Something went wrong', loading:false, status: "failed"})
        }
    },

    sendContactMessage: async (message:ContactMessage) => {
        set({loading: true, error: null, status: 'sending'});

        try {
            // const baseUrl = import.meta.env.VITE_API_URL;
            await api.post(`${baseURL}${messagesAPI}`, {
                message,
            });
            // console.log("data", response.data.contacts);
            set({status: "success", loading: false});
        } catch(error) {
            set({error: `${error}` || 'Something went wrong', loading:false, status: 'failed'})
        }
    },


    clearError: () => set({error: null, status: null, loading: false}),


}));

export default useMessagesStore;


