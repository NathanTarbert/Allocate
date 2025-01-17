"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { DepositDefiDollars } from "@/components/DepositDefiDollars";
import { ExplainDefiDollars } from "@/components/explainations/ExplainDefiDollars";
import { Explaination } from "@/data-schema/enums";

export const DepositDefiDollarsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [explaination, setExplaination] = useState(Explaination.NONE);

  const showDefiDollarsExplaination = () => {
    return (
      <ExplainDefiDollars
        explaination={explaination}
        setShowExplanation={setShowExplanation}
      />
    );
  };

  const depositComponent = () => {
    return (
      <DepositDefiDollars
        onClose={onClose}
        setShowExplanation={setShowExplanation}
        setExplaination={setExplaination}
      />
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="10%"
        backdropBlur="4px"
      />
      <ModalContent>
        <ModalHeader>
          <Heading fontSize="sm">Deposit DefiDollars</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {showExplanation ? showDefiDollarsExplaination() : depositComponent()}
        </ModalBody>

        <ModalFooter m={0} p="3px" />
      </ModalContent>
    </Modal>
  );
};
