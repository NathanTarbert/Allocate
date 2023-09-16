"use client";

import { Button, VStack } from "@chakra-ui/react";
import { ChildDetails } from "@/data-schema/types";
import { ParentDashboardTabs } from "@/data-schema/enums";

const ButtonMenu = ({
  onAddChildOpen,
  setSelectedTab,
  onOpenEtherScan,
  onOpenSettingsModal,
  children,
}: {
  onAddChildOpen: () => void;
  setSelectedTab: (tab: ParentDashboardTabs) => void;
  onOpenEtherScan: () => void;
  onOpenSettingsModal: () => void;
  children?: ChildDetails[];
}) => {
  function onToggleCollapsedMenu() {
    throw new Error("Function not implemented.");
  }

  function onToggleExtendedMenu() {
    throw new Error("Function not implemented.");
  }

  return (
    <VStack spacing={4} align="stretch" justify="space-between" mt={10} mx={5}>
      <Button
        variant="outline"
        colorScheme="white"
        _hover={{ borderColor: "gray" }}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedTab(ParentDashboardTabs.DASHBOARD);
        }}
      >
        Dashboard
      </Button>

      <Button
        variant="outline"
        colorScheme="white"
        _hover={{ borderColor: "gray" }}
        onClick={(e) => {
          e.stopPropagation();
          onOpenSettingsModal();
        }}
      >
        Settings
      </Button>

      <Button
        variant="outline"
        colorScheme="white"
        _hover={{ borderColor: "gray" }}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedTab(ParentDashboardTabs.INFORMATION);
        }}
      >
        General
      </Button>

      <Button
        variant="outline"
        colorScheme="white"
        _hover={{ borderColor: "gray" }}
        onClick={(e) => {
          e.stopPropagation();
          onOpenEtherScan();
        }}
      >
        Blockchain
      </Button>

      {/* {children && children.length == 0 && (
        <Button
          variant="outline"
          colorScheme="white"
          onClick={(e) => {
            e.stopPropagation();
            onAddChildOpen();
            setSelectedTab(ParentDashboardTabs.MEMBER_PROFILES);
          }}
          _hover={{ borderColor: "gray" }}
        >
          Invite Member
        </Button>
      )} */}
    </VStack>
  );
};

export default ButtonMenu;