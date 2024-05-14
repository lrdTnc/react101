export const genericErrorHandler = (messageSetter) => {

    return (error) => {
        if (error.response.status === 404) {
            messageSetter('Not found');
            return Promise.resolve('Not found');
        }
        return Promise.resolve(null);
    };
}
