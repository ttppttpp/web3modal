


const ConnectToImKey = async (
    ImKeyProvider: any
) => {
    try {
        const provider = new ImKeyProvider();
        // await provider.enable();
        console.log("create imkey provider");
        return provider;
    } catch (e) {
        return e;
    }
};

export default ConnectToImKey;
