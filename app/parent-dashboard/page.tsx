"use client";
/* eslint-disable react/no-children-prop */
import { Box, Flex, useDisclosure, useSteps } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { useAuthStore } from "@/store/auth/authStore";
import { useContractStore } from "@/store/contract/contractStore";
import { User, ChildDetails } from "@/data-schema/types";
import { steps } from "@/components/steppers/TransactionStepper";
import axios from "axios";
import { UsernameModal } from "@/components/modals/UsernameModal";
import { ParentDashboardTabs } from "@/data-schema/enums";
import { SettingsModal } from "@/components/modals/SettingsModal";
import { Info } from "@/components/parentDashboard/tabs/Info";
import BackgroundDefaults from "@/components/modals/BackgroundDefaults";
import { ExpandedDashboardMenu } from "@/components/ExpandedDashboardMenu";
import { CollapsedDashboardMenu } from "@/components/CollapsedDashboardMenu";
import { useWindowSize } from "usehooks-ts";
import { AddMemberModal } from "@/components/modals/AddMemberModal";
import { EtherscanModal } from "@/components/modals/EtherscanModal";

const Parent: React.FC = () => {
  //=============================================================================
  //                               STATE
  //=============================================================================

  const [childKey, setChildKey] = useState<number>(0);
  const [childrenLoading, setChildrenLoading] = useState(false);
  const [children, setChildren] = useState([]);
  const [childrenStakes, setChildrenStakes] = useState({});
  // const [stakeContract, setStakeContract] = useState<StakeContract>();
  const [familyDetails, setFamilyDetails] = useState({} as User);

  const [selectedTab, setSelectedTab] = useState<ParentDashboardTabs>(
    ParentDashboardTabs.DASHBOARD
  );
  const [cardOpacity, setCardOpacity] = useState(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);

  //=============================================================================
  //                               HOOKS
  //=============================================================================

  const { userDetails } = useAuthStore(
    (state) => ({
      userDetails: state.userDetails,
    }),
    shallow
  );

  const { connectedSigner } = useContractStore(
    (state) => ({
      connectedSigner: state.connectedSigner,
    }),
    shallow
  );

  const { width, height } = useWindowSize();

  const isMobileSize = width < 768;

  const { isOpen: isOpenExtendedMenu, onToggle: onToggleExtendedMenu } =
    useDisclosure();

  const { isOpen: isOpenCollapsedMenu, onToggle: onToggleCollapsedMenu } =
    useDisclosure();

  const {
    isOpen: isAddChildOpen,
    onOpen: onAddChildOpen,
    onClose: onAddChildClose,
  } = useDisclosure();

  const {
    isOpen: isOpenEtherScan,
    onOpen: onOpenEtherScan,
    onClose: onCloseEtherScan,
  } = useDisclosure();

  const {
    isOpen: isOpenChildDetails,
    onOpen: onOpenChildDetails,
    onClose: onCloseChildDetails,
  } = useDisclosure();

  const {
    isOpen: isChangeUsernameOpen,
    onOpen: onChangeUsernameOpen,
    onClose: onChangeUsernameClose,
  } = useDisclosure();

  const {
    isOpen: isSendFundsOpen,
    onOpen: onSendFundsOpen,
    onClose: onSendFundsClose,
  } = useDisclosure();

  const {
    isOpen: isParentDetailsOpen,
    onOpen: onParentDetailsOpen,
    onClose: onParentDetailsClose,
  } = useDisclosure();

  const {
    isOpen: isOpenBackgroundDefaults,
    onOpen: onOpenBackgroundDefaults,
    onClose: onCloseBackgroundDefaults,
  } = useDisclosure();

  const {
    isOpen: isOpenSettingsModal,
    onOpen: onOpenSettingsModal,
    onClose: onCloseSettingsModal,
  } = useDisclosure();

  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  useEffect(() => {
    fetchFamilyDetails();
    fetchChildren();
  }, []);

  // useEffect(() => {
  //   if (!stakeContract || !children.length) {
  //     setChildrenStakes({});
  //     return;
  //   }
  // }, [stakeContract, children]);

  //=============================================================================
  //                               FUNCTIONS
  //=============================================================================

  const fetchFamilyDetails = useCallback(async () => {
    if (!userDetails?.wallet) return;

    const { data } = await axios.get(
      `/api/vercel/get-json?key=${userDetails?.wallet}`
    );

    const user = data as User;
    setFamilyDetails(user);
  }, [userDetails?.wallet]);

  const fetchChildren = useCallback(async () => {
    const getChildren = async () => {
      if (!userDetails?.wallet) return;

      const children = [] as ChildDetails[];

      familyDetails.children?.forEach(async (walletAddress) => {
        const { data } = await axios.get(
          `/api/vercel/get-json?key=${walletAddress}`
        );

        children.push(data as ChildDetails);
      });

      if (children.length) {
        const childrenWalletBalances = await axios.post(
          `/api/etherscan/balancemulti`,
          {
            addresses: children.map((c) => c.wallet),
          }
        );

        const childrenWithBalances = children.map((c) => {
          const balance = childrenWalletBalances.data.find(
            (b) => b.account === c.wallet
          );
          return {
            ...c,
            balance: balance ? balance.balance : 0,
          };
        });

        // setChildren(childrenWithBalances);
      } else {
        // setChildren(children);
      }

      setChildrenLoading(false);
    };

    await getChildren();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children.length, userDetails?.wallet]);

  const closeTab = () => {
    setSelectedTab(ParentDashboardTabs.DASHBOARD);
  };

  return (
    <Flex>
      <>
        <Box zIndex={1}>
          <ExpandedDashboardMenu
            familyDetails={familyDetails}
            children={children}
            onAddChildOpen={onAddChildOpen}
            setSelectedTab={setSelectedTab}
            onToggleCollapsedMenu={onToggleCollapsedMenu}
            onToggleExtendedMenu={onToggleExtendedMenu}
            isOpenExtendedMenu={isOpenExtendedMenu}
            onOpenEtherScan={onOpenEtherScan}
            isMobileSize={isMobileSize}
            onOpenSettingsModal={onOpenSettingsModal}
          />
        </Box>
        {!isMobileSize && (
          <Box zIndex={100}>
            <CollapsedDashboardMenu
              onToggleCollapsedMenu={onToggleCollapsedMenu}
              onToggleExtendedMenu={onToggleExtendedMenu}
              isOpenCollapsedMenu={isOpenCollapsedMenu}
              isMobileSize={isMobileSize}
            />
          </Box>
        )}
      </>

      {/* handles the background image and opacity */}
      <Flex
        width="100%"
        height="100vh"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bgPosition="center"
          bgSize="cover"
          bgImage={
            familyDetails?.backgroundURI
              ? familyDetails?.backgroundURI
              : "/images/backgrounds/city-center.png"
          }
          opacity={backgroundOpacity || familyDetails?.opacity?.background || 1}
          zIndex={-1}
        />
        <Box width="100vw">
          <Flex
            height="100vh"
            justify="center"
            align="center"
            bgColor={
              selectedTab === ParentDashboardTabs.SETTINGS ? "transparent" : ""
            }
          >
            {selectedTab === ParentDashboardTabs.INFORMATION && (
              <Info
                isMobileSize={isMobileSize}
                isOpenExtendedMenu={isOpenExtendedMenu}
                closeTab={closeTab}
              />
            )}
          </Flex>
        </Box>
      </Flex>

      <UsernameModal
        isOpen={isChangeUsernameOpen}
        onClose={onChangeUsernameClose}
        childKey={childKey}
        children={children}
        familyId={familyDetails.familyId}
        fetchChildren={fetchChildren}
        fetchFamilyDetails={fetchFamilyDetails}
      />

      <BackgroundDefaults
        isOpen={isOpenBackgroundDefaults}
        onClose={onCloseBackgroundDefaults}
        fetchFamilyDetails={fetchFamilyDetails}
      />

      <AddMemberModal
        isOpen={isAddChildOpen}
        onClose={onAddChildClose}
        onAdd={() => fetchChildren()}
      />

      <EtherscanModal isOpen={isOpenEtherScan} onClose={onCloseEtherScan} />

      <SettingsModal
        familyDetails={familyDetails}
        onChangeUsernameOpen={onChangeUsernameOpen}
        fetchFamilyDetails={fetchFamilyDetails}
        onOpenBackgroundDefaults={onOpenBackgroundDefaults}
        setBackgroundOpacity={setBackgroundOpacity}
        setCardOpacity={setCardOpacity}
        cardOpacity={cardOpacity}
        isMobileSize={isMobileSize}
        isOpenExtendedMenu={isOpenExtendedMenu}
        closeTab={closeTab}
        isOpen={isOpenSettingsModal}
        onClose={onCloseSettingsModal}
      />
    </Flex>
  );
};

export default Parent;