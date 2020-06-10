export const handleErrorResponse = response => {
    let { error } = response.response.data;

    if (typeof error !== "string") {
        return Object.values(error).map(item => item[0]);
    }
    return [error];
};
