import {
  Container,
  IconButton,
  Text,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  Avatar,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function NewFooter() {
  return (
    <Flex
      as="footer" // Use <footer> semantic element
      alignItems="center"
      justifyContent="space-between"
      bg="#1F3944"
      color="white"
      p={4}
      position="fixed" // Position the footer at the bottom
      left={0}
      bottom={0}
      right={0}
      width="100%" // Take up full width
      style={{ zIndex: 100 }}
    >
      <Container>
        {/* <Logo /> */}
        <Image src={"/pig_logo.png"} alt="Loader" width="50" height="50" />
      </Container>
      <Container>
        <Text fontSize="sm" color="white" textAlign={"center"}>
          &copy; {new Date().getFullYear()} DefiKids Inc. All rights reserved.
        </Text>
      </Container>
      <Container variant="ghost" width={"100%"}>
        <Flex justifyContent={"end"}>
          {/* LinkedIn */}
          <Popover>
            <PopoverTrigger>
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
                mx={2}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />

              {/* LinkedIn */}
              <PopoverHeader>
                <Flex alignItems={"center"}>
                  <FaLinkedin fontSize="1.25rem" />
                  <Text pl={2}>LinkedIn</Text>
                </Flex>
              </PopoverHeader>
              <PopoverHeader>
                <Flex
                  alignItems={"center"}
                  cursor={"pointer"}
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/in/nathan-tarbert/`,
                      "_blank"
                    )
                  }
                >
                  <Avatar
                    size="md"
                    name="Nathan Tarbert"
                    mr={2}
                    src="https://media.licdn.com/dms/image/C5603AQFXrP0yaGLdfA/profile-displayphoto-shrink_800_800/0/1649446441808?e=1696464000&v=beta&t=qeoOCdqlFl_Rzi_4EFYfq7yd9Vk8Xjd9v9wyOTM2sxw"
                  />{" "}
                  Nathan Tarbert
                </Flex>
              </PopoverHeader>
              <PopoverHeader>
                <Flex
                  alignItems={"center"}
                  cursor={"pointer"}
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/in/jason-schwarz-75b91482/`,
                      "_blank"
                    )
                  }
                >
                  <Avatar
                    size="md"
                    name="Jason Schwarz"
                    mr={2}
                    src="https://media.licdn.com/dms/image/C4E03AQH3b5e91FbDwg/profile-displayphoto-shrink_800_800/0/1650844151671?e=1696464000&v=beta&t=Ke4oGlypKWPn9MtkJI72WZHzq3E1YkvXIeVfzbL7BMs"
                  />
                  Jason Schwarz
                </Flex>
              </PopoverHeader>
            </PopoverContent>
          </Popover>

          {/* Github */}
          <Popover>
            <PopoverTrigger>
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
                mx={2}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                <Flex alignItems={"center"}>
                  <FaGithub fontSize="1.25rem" />
                  <Text pl={2}>Github</Text>
                </Flex>
              </PopoverHeader>

              <PopoverHeader>
                <Flex alignItems={"center"}>
                  <Text pl={2}>Project</Text>
                </Flex>
              </PopoverHeader>
              <PopoverHeader>
                <Flex
                  alignItems={"center"}
                  cursor={"pointer"}
                  onClick={() =>
                    window.open(
                      `https://github.com/NathanTarbert/DefiKids`,
                      "_blank"
                    )
                  }
                >
                  <Avatar
                    size="md"
                    name="defi-kids"
                    mr={2}
                    src="/pig_logo.png"
                  />{" "}
                  DefiKids
                </Flex>
              </PopoverHeader>

              <PopoverHeader>
                <Flex alignItems={"center"}>
                  <Text pl={2}>Developers</Text>
                </Flex>
              </PopoverHeader>

              {/* Github */}
              <PopoverHeader>
                <Flex
                  alignItems={"center"}
                  cursor={"pointer"}
                  onClick={() =>
                    window.open(`https://github.com/NathanTarbert`, "_blank")
                  }
                >
                  <Avatar
                    size="md"
                    name="BYZAN-SOLUTIONS"
                    mr={2}
                    src="https://avatars.githubusercontent.com/u/66887028?v=4"
                  />{" "}
                  NathanTarbert
                </Flex>
              </PopoverHeader>

              <PopoverHeader>
                <Flex
                  alignItems={"center"}
                  cursor={"pointer"}
                  onClick={() =>
                    window.open(`https://github.com/passandscore`, "_blank")
                  }
                >
                  <Avatar
                    size="md"
                    name="passandscore"
                    mr={2}
                    src="https://avatars.githubusercontent.com/u/71670015?v=4"
                  />
                  passandscore
                </Flex>
              </PopoverHeader>
            </PopoverContent>
          </Popover>

          {/* Twitter */}
          <Popover>
            <PopoverTrigger>
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" />}
                mx={2}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                <Flex alignItems={"center"}>
                  <FaLinkedin fontSize="1.25rem" />
                  <Text pl={2}>Twitter</Text>
                </Flex>
              </PopoverHeader>
              <PopoverHeader>
                <Flex
                  alignItems={"center"}
                  cursor={"pointer"}
                  onClick={() =>
                    window.open(`https://twitter.com/nathan_tarbert`, "_blank")
                  }
                >
                  <Avatar
                    size="md"
                    name="Nathan Tarbert"
                    mr={2}
                    src=" https://pbs.twimg.com/profile_images/1512513474051514369/RDyBlAJE_400x400.jpg"
                  />{" "}
                  @nathan_tarbert
                </Flex>
              </PopoverHeader>
              <PopoverHeader>
                <Flex
                  alignItems={"center"}
                  cursor={"pointer"}
                  onClick={() =>
                    window.open(`https://twitter.com/passandscore`, "_blank")
                  }
                >
                  <Avatar
                    size="md"
                    name="Jason Schwarz"
                    mr={2}
                    src="https://pbs.twimg.com/profile_images/1518377329306783747/Ra6f8mU9_400x400.jpg"
                  />
                  @passandscore
                </Flex>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </Flex>
      </Container>
    </Flex>
  );
}