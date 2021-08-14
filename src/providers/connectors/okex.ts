mport { IAbstractConnectorOptions } from "../../helpers";

interface IOkexOptions extends IAbstractConnectorOptions {
  apiKey: string;
}

const ConnectToOkex = async (
  OkexProvider: any,
  opts: IOkexOptions
) => {
  const provider = new OkexProvider(opts.apiKey);

  await provider.enable();

  return provider;
};
