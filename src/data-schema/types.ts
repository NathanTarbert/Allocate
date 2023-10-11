import mongoose from "mongoose";
import {
  UserType,
  AccountStatus,
  AccountPackage,
  NetworkType,
  MainnetNetworks,
  TestnetNetworks,
  PermissionType,
} from "./enums";

export type User = {
  accountId: mongoose.Schema.Types.ObjectId | null;
  permissions: PermissionType[];
  familyId: string;
  email: string;
  wallet: string;
  avatarURI: string;
  defaultNetwork: MainnetNetworks | TestnetNetworks;
  defaultNetworkType: NetworkType;
  username: string;
  termsAgreed?: boolean;
  userType: UserType;
  emailVerified?: boolean;
  sandboxMode: boolean | undefined;
  balance?: string;
};

export type AccountDetails = {
  id: string;
  status: AccountStatus;
  memberSince: number;
  package: AccountPackage;
  maxMembers?: number;
  expiry?: number; // timestamp in seconds
};
