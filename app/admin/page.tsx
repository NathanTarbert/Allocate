"use client";

import { IAccount } from "@/models/Account";
import { IInvitation } from "@/models/Invitation";
import { IUser } from "@/models/User";
import {
  getAllAccounts,
  getAllInvitations,
  getAllUsers,
} from "@/services/mongo/database";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Admin = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [invitations, setInvitations] = useState<IInvitation[]>([]);

  interface Stats {
    title: string;
    value: string;
    unit: string;
  }

  const stats: Stats[] = [
    {
      title: "Users",
      value: users.length.toString(),
      unit: "",
    },
    {
      title: "Invitations",
      value: invitations.length.toString(),
      unit: "",
    },
    {
      title: "Accounts",
      value: accounts.length.toString(),
      unit: "",
    },
  ];

  useEffect(() => {
    const getData = async () => {
      const accounts = await getAllAccounts();
      const users = await getAllUsers();
      const invitations = await getAllInvitations();

      setAccounts(accounts);
      setUsers(users);
      setInvitations(invitations);
    };
    getData();
  }, []);

  if (!isUnlocked) {
    return (
      <Box textAlign="center" mt="10rem">
        <Heading as="h1">Admin Page</Heading>
        <Text as="h2" cursor="pointer" onClick={() => setIsUnlocked(true)}>
          Under Construction
        </Text>
      </Box>
    );
  }

  return (
    <Container mt="10rem" textAlign="center">
      <Heading mb={3}>Admin Dashboard</Heading>

      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
        rounded="md"
        overflow="hidden"
        my="2rem"
      >
        {stats.map((stat, index) => (
          <GridItem key={index} bg="gray.900" borderRadius="md" p={4}>
            <Text fontSize="sm">{stat.title}</Text>
            <Text
              fontSize={{ base: "sm", sm: "md", md: "2xl" }}
              color="primary"
              fontWeight="bold"
            >
              {stat.value} {stat.unit}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Admin;
