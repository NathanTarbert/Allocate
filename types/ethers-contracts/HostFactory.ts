/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { Host } from "./Host";

export class HostFactory {
  static connect(address: string, signerOrProvider: Signer | Provider): Host {
    return new Contract(address, _abi, signerOrProvider) as Host;
  }
}

const _abi = [
  {
    inputs: [],
    name: "AlreadyRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxParentIdExceeded",
    type: "error",
  },
  {
    inputs: [],
    name: "NotRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValidUserType",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerOnly",
    type: "error",
  },
  {
    inputs: [],
    name: "ParentOnly",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_familyId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_username",
        type: "string",
      },
      {
        internalType: "string",
        name: "_avatarURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "_child",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_sandboxMode",
        type: "bool",
      },
    ],
    name: "addChild",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_child",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_familyId",
        type: "bytes32",
      },
    ],
    name: "fetchChild",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "username",
            type: "string",
          },
          {
            internalType: "string",
            name: "avatarURI",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "familyId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "memberSince",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "childId",
            type: "uint24",
          },
          {
            internalType: "bool",
            name: "sandboxMode",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
        ],
        internalType: "struct Host.Child",
        name: "fetchedChild",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_familyId",
        type: "bytes32",
      },
    ],
    name: "fetchChildren",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "username",
            type: "string",
          },
          {
            internalType: "string",
            name: "avatarURI",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "familyId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "memberSince",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "childId",
            type: "uint24",
          },
          {
            internalType: "bool",
            name: "sandboxMode",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
        ],
        internalType: "struct Host.Child[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getFamilyByOwner",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "familyId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "memberSince",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "avatarURI",
            type: "string",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "numOfChildren",
            type: "uint8",
          },
        ],
        internalType: "struct Host.Family",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getFamilyIdByOwner",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserType",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
    ],
    name: "hashFamilyId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_familyId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_avatarURI",
        type: "string",
      },
    ],
    name: "registerParent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_child",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_familyId",
        type: "bytes32",
      },
    ],
    name: "toggleSandbox",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_avatarURI",
        type: "string",
      },
    ],
    name: "updateAvatarURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_familyId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_avatarURI",
        type: "string",
      },
      {
        internalType: "uint24",
        name: "_childId",
        type: "uint24",
      },
    ],
    name: "updateChildAvatarURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_familyId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_username",
        type: "string",
      },
      {
        internalType: "uint24",
        name: "_childId",
        type: "uint24",
      },
    ],
    name: "updateUsername",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
