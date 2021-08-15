const ConnectTookexwallet = async () => {
  let provider = null;
  if (window.ethereum) {
    provider = window.ethereum;
    try {
      await window.ethereum.enable();
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else if (window.okexchain) {
    provider = window.okexchain.currentProvider;
  } else {
    throw new Error("No okexchain Provider found");
  }
  return provider;
};

export default ConnectTookexwallet;
