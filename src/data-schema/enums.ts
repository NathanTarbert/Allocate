export enum SandboxFeatures {
  riskFree = "Risk Free",
  handsOn = "Hands On",
  educational = "Educational",
  realistic = "Realistic",
}

export enum StepperContext {
  AVATAR = "AVATAR",
  DEFAULT = "DEFAULT",
  PERMIT = "PERMIT",
  WITHDRAW_REQUEST = "WITHDRAW_REQUEST",
  WITHDRAW_SETTLED = "WITHDRAW_SETTLED",
}

export enum EtherscanContext {
  TRANSACTION = "tx",
  ADDRESS = "address",
}

export enum ChainId {
  MAINNET = 1,
  GOERLI = 5,
}

export enum UserType {
  UNREGISTERED = "UNREGISTERED",
  PARENT = "PARENT",
  MEMBER = "MEMBER",
}

export enum AccountStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
  PENDING = "Pending",
}

export enum AccountPackage {
  NONE = "None",
  BASIC = "Basic",
  PREMIUM = "Premium",
}
export enum Explaination {
  NONE = "NONE",
  SANDBOX = "SANDBOX",
  FAMILY_NAME = "FAMILY_NAME",
  BLOCKCHAIN = "BLOCKCHAIN",
  DEFI_DOLLARS = "DEFI_DOLLARS",
  ALLOWANCE = "ALLOWANCE",
  MEMBER_WITHDRAW = "MEMBER_WITHDRAW",
}

export enum MainnetNetworks {
  MAINNET = "Ethereum",
  POLYGON = "Polygon",
}

export enum TestnetNetworks {
  GOERLI = "Goerli",
  MUMBAI = "Mumbai",
}

export enum NetworkType {
  MAINNET = "MAINNET",
  TESTNET = "TESTNET",
}

export enum PermissionType {
  AVATAR = "AVATAR",
  EMAIL = "EMAIL",
  USERNAME = "USERNAME",
}

export enum TokenLockerFunctions {
  NONE = "NONE",
  CREATE_LOCKER = "CREATE_LOCKER",
  ADD_TO_LOCKER = "ADD_TO_LOCKER",
  EMPTY_LOCKER = "EMPTY_LOCKER",
  REMOVE_FROM_LOCKER = "REMOVE_FROM_LOCKER",
  APPLY_NEW_LOCK = "APPLY_NEW_LOCK",
  DELETE_LOCKER = "DELETE_LOCKER",
  RENAME_LOCKER = "RENAME_LOCKER",
  TRANSFER_FUNDS_BETWEEN_LOCKERS = "TRANSFER_FUNDS_BETWEEN_LOCKERS",
}
