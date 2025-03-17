const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => console.log("Error appeared: ", err.message), next);
    }
}

export {asyncHandler}