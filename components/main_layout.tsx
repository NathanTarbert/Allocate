import React, { useEffect } from "react";
import Navbar from "./navbar";
import { useAuthStore } from "@/store/auth/authStore";
import { shallow } from "zustand/shallow";
import { useDisclosure, Box, useBreakpointValue } from "@chakra-ui/react";

export const MainLayout = ({
  showStartEarning,
  isRegisterOpen,
}: {
  showStartEarning: boolean;
  isRegisterOpen: boolean;
}) => {
  //=============================================================================
  //                               HOOKS
  //=============================================================================
  const isMobileSize = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    lg: false,
  });

  const { navigationSection } = useAuthStore(
    (state) => ({
      navigationSection: state.navigationSection,
    }),
    shallow
  );

  const { onToggle } = useDisclosure();

  useEffect(() => {
    console.log("navigationSection - useEffect", navigationSection);
    if (navigationSection === "DefiKids") {
      onToggle;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigationSection]);

  //=============================================================================
  //                             FUNCTIONS
  //=============================================================================

  return (
    <Box
      bgGradient={["linear(to-b, black,#4F1B7C)"]}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      p={1}
      zIndex={5}
    >
      <Box px={!isMobileSize ? 5 : 2} zIndex={5}>
        <Navbar
          showStartEarning={showStartEarning}
          isRegisterOpen={isRegisterOpen}
        />
      </Box>
    </Box>
  );
};
