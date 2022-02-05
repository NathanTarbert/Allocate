import { useEffect } from "react";
import { ethers } from "ethers";
import { loginUser, StoreAction, useStore } from "../services/store";
import Web3Auth from "../services/web3auth";
import { useRouter } from "next/router";
import { UserType } from "../services/contract";

const Auth: React.FC = () => {
  const store = useStore();
  const router = useRouter();

  const handleLogin = async (data) => {
    try {
      const provider = new ethers.providers.Web3Provider(
        Web3Auth.web3auth.provider
      );
      loginUser(provider, store.dispatch);
    } catch (error) {
      logout();
    }
  };

  const logout = () => {
    Web3Auth.logout();
  };

  const handleLogout = () => {
    store.dispatch({ type: StoreAction.LOGOUT });
    window.location.replace("/");
  };

  useEffect(() => {
    const init = async () => {
      try {
        await Web3Auth.initializeModal(handleLogin, handleLogout);
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    switch (store.state.userType) {
      case UserType.UNREGISTERED:
        router.push("/register");
        break;
      case UserType.PARENT:
        router.push("/parent");
        break;
      case UserType.CHILD:
        router.push("/child");
        break;
      default:
        return;
    }
  }, [store.state.userType]);

  useEffect(() => {
    if (window.ethereum) {
      return;
    }

    window.ethereum.on("chainChanged", async () => {
      logout();
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async () => {
      console.log("account changed");
      logout();
      window.location.reload();
    });
  }, []);

  return <></>;
};

export default Auth;