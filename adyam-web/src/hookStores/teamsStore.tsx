import axios from 'axios';
import api from '../api/api';

import {create} from 'zustand';
import { baseURL, teamsAPI } from '../api/endpoints';

type TeamsState =  {
    teams: [];
    loadTeams: () => void;
    clearError: () => void;
    error: string |null;
    loading: boolean;
}
const useTeamsStore = create<TeamsState>((set) => ({
    teams: [],
    loading: false,
    error: null,

    loadTeams: async () => {
        set({loading: true, error: null});

        try {
            // const baseUrl = import.meta.env.VITE_API_URL;
            const response = await api.get(`${baseURL}${teamsAPI}`, {

            });
            // console.log("data", response.data.contacts);
            set({teams: response.data.teams, loading: false});
        } catch(error) {
            set({error: `${error}` || 'Something went wrong', loading:false})
        }
    },

    clearError: () => set({error: null}),


}));

export default useTeamsStore;