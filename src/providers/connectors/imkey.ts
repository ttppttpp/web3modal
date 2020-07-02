import { IAbstractConnectorOptions } from "../../helpers";

interface IimkeyOptions extends IAbstractConnectorOptions {
    // apiKey: string;
}

const ConnectToFirebox = async (
    ImKeyProvider: any,
    opts: IimkeyOptions
) => {
    // const provider = new ImKeyProvider(opts.apiKey);
    const provider = new ImKeyProvider();

    await provider.enable();

    return provider;
};