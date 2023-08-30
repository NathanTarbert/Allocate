import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useBreakpointValue,
  Collapse,
} from "@chakra-ui/react";
import { CustomConnectButton } from "@/components/ConnectButton";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuthStore } from "@/store/auth/authStore";
import { useContractStore } from "@/store/contract/contractStore";
import { shallow } from "zustand/shallow";
import { WalletPopover } from "@/components/WalletPopover";
import { MenuPopover } from "@/components/MenuPopover";
import { AiFillAppstore } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { UserType } from "@/dataSchema/enums";
import { BiSolidUserRectangle } from "react-icons/bi";
import { useAccount } from "wagmi";
import DefiKidsLogo from "@/components/logos/DefiKidsLogo";

type ConnectedUser = {
  success: boolean;
  userType?: number;
  accountAddress?: string;
};

export default function NavBar({
  showStartEarning,
  isRegisterOpen,
}: {
  showStartEarning: boolean;
  isRegisterOpen: boolean;
}) {
  //=============================================================================
  //                               HOOKS
  //============================================================================
  const router = useRouter();
  const { isConnected } = useAccount();

  const isMobileSize = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    lg: false,
  });

  const { userType, isLoggedIn, walletAddress, navigationSection } =
    useAuthStore(
      (state) => ({
        userType: state.userType,
        isLoggedIn: state.isLoggedIn,
        walletAddress: state.walletAddress,
        navigationSection: state.navigationSection,
      }),
      shallow
    );

  const { setConnectedSigner } = useContractStore(
    (state) => ({
      setConnectedSigner: state.setConnectedSigner,
    }),
    shallow
  );

  //=============================================================================
  //                             STATE
  //=============================================================================
  const [menuOpen, setMenuOpen] = useState(false);
  const iconToShow = menuOpen ? (
    <IoMdClose size={30} />
  ) : (
    <AiFillAppstore size={30} />
  );

  //=============================================================================
  //                             FUNCTIONS
  //=============================================================================

  return (
    <>
      <Box
        zIndex={5}
        bgGradient={["linear(to-b, black,#4F1B7C)"]}
        position="fixed"
        top={`${showStartEarning && !isRegisterOpen ? 8 : 0}`}
        left={0}
        right={0}
        p={!isMobileSize ? 5 : 2}
        id="main-navbar"
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          mx={2}
        >
          <DefiKidsLogo />

          <Flex justifyContent="flex-end">
            {/* Connect Button */}
            {!isLoggedIn && <CustomConnectButton />}

            {userType === UserType.PARENT && router.pathname !== "/parent" && (
              <IconButton
                size="lg"
                aria-label="Parent Icon"
                icon={<BiSolidUserRectangle size={30} />}
                onClick={() => router.push("/parent")}
              />
            )}

            {/* Wallet Menu */}
            {isLoggedIn && <WalletPopover />}

            {/* Main Menu */}
            <IconButton
              size="lg"
              aria-label="Menu Icon"
              icon={iconToShow}
              onClick={() => setMenuOpen(!menuOpen)}
            />
            <MenuPopover menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </Flex>
        </Flex>

        {/* Titles */}
        <Collapse in={navigationSection !== "DefiKids"} animateOpacity>
          <Box zIndex={5} w="100%">
            <Flex direction="column" align="center" justify="center">
              <Heading size="2xl" color="#82add9">
                {navigationSection === "DefiKids" ? "" : navigationSection}
              </Heading>
            </Flex>
          </Box>
        </Collapse>
      </Box>
    </>
  );
}
