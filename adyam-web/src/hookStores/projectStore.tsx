import axios from 'axios';
import api from '../api/api';

import {create} from 'zustand';
import { baseURL, projectsAPI } from '../api/endpoints';

type ProjectState =  {
    projects: [];
    loadProjects: () => void;
    clearError: () => void;
    error: string |null;
    loading: boolean;
}
const useProjectsStore = create<ProjectState>((set) => ({
    projects: [],
    loading: false,
    error: null,

    loadProjects: async () => {
        set({loading: true, error: null});

        try {
            // const baseUrl = import.meta.env.VITE_API_URL;
            const response = await api.get(`${baseURL}${projectsAPI}`, {

            });
            // console.log("data", response.data.contacts);
            set({projects: response.data.projects, loading: false});
        } catch(error) {
            set({error: `${error}` || 'Something went wrong', loading:false})
        }
    },

    clearError: () => set({error: null}),


}));

export default useProjectsStore;