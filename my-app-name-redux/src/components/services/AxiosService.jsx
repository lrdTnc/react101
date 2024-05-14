import axios from "axios";

export class AxiosService {
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
    }
    create = (config) => {
        const axiosInstance = axios.create(config);
        axiosInstance.interceptors.response.use((response) => {
            return response;
        }, this.errorHandler);
        return axiosInstance;
    }
}