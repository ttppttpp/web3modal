import * as connectors from "./connectors";
import * as injected from "./injected";
import * as providers from "./providers";
import ImkeyLogo from "./logos/firebox.png";
import { IProviderInfo } from 'src/helpers/types';

export { connectors, injected, providers };

export const Imkey: IProviderInfo = {
  id: "imkey",
  name: "Imkey",
  logo: ImkeyLogo,
  type: "web",
  check: "isImkey",
  package: {
    // required: ["apiKey"]
  }
};