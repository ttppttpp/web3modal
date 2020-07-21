import { IAbstractConnectorOptions } from "../../helpers";

export interface IImkeyConnectorOptions extends IAbstractConnectorOptions {
  rpcUrl: string;
}

const ConnectToImKey = async (
    ImKeyProvider: any,
    opts:IImkeyConnectorOptions
) => {
    try {
        const provider = new ImKeyProvider(opts);
        await provider.enable();
        console.log("create imkey provider");
        return provider;
    } catch (e) {
        return e;
    }
};

export default ConnectToImKey;
