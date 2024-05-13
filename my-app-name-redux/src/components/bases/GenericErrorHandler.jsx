export const genericErrorHandler = (error) => {
    console.log(error);

    return Promise.resolve(null);
}