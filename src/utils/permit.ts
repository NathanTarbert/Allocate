import { type Contract, Signer, Signature, BigNumberish } from "ethers";
import { SignatureLike } from "@ethersproject/bytes";

// uses version 2
export const createStableTokenPermitMessage = async (
  signer: Signer,
  spender: string,
  value: BigNumberish,
  contract: Contract
): Promise<{
  data?: SignatureLike;
  deadline?: number;
  error?: String;
}> => {
  try {
    const owner = await signer.getAddress();
    const transactionDeadline = Math.floor(Date.now() / 1000) + 20 * 60;
    const nonce = (await contract.nonces(owner)) as BigNumberish;
    const contractName = await contract.name();
    const chainId = (await signer.provider?.getNetwork())?.chainId.toString();

    const domain = {
      chainId,
      name: contractName,
      verifyingContract: await contract.getAddress(),
      version: "2", // EIP 712 version
    };

    const message = {
      owner,
      spender,
      value,
      nonce,
      deadline: transactionDeadline,
    };

    const types = {
      Permit: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
        { name: "value", type: "uint256" },
        { name: "nonce", type: "uint256" },
        { name: "deadline", type: "uint256" },
      ],
    };

    const signature = await signer.signTypedData(domain, types, message);

    return {
      data: Signature.from(signature),
      deadline: transactionDeadline,
    };
  } catch (err) {
    console.error(err);
    return {
      error: err,
    };
  }
};

// uses version 1
export const createPermitMessage = async (
  signer: Signer,
  spender: string,
  value: BigNumberish,
  contract: Contract,
  deadline?: number
): Promise<{
  data?: SignatureLike;
  deadline?: number;
  error?: String;
}> => {
  try {
    const owner = await signer.getAddress();
    const transactionDeadline = Math.floor(Date.now() / 1000) + 20 * 60;
    const nonce = (await contract.nonces(owner)) as BigNumberish;
    const contractName = await contract.name();
    const chainId = (await signer.provider?.getNetwork())?.chainId.toString();

    const domain = {
      chainId,
      name: contractName,
      verifyingContract: await contract.getAddress(),
      version: "1",
    };

    const message = {
      owner,
      spender,
      value,
      nonce,
      deadline: deadline || transactionDeadline,
    };

    const types = {
      Permit: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
        { name: "value", type: "uint256" },
        { name: "nonce", type: "uint256" },
        { name: "deadline", type: "uint256" },
      ],
    };

    const signature = await signer.signTypedData(domain, types, message);

    return {
      data: Signature.from(signature),
      deadline: deadline || transactionDeadline,
    };
  } catch (err) {
    console.error(err);
    return {
      error: err,
    };
  }
};
