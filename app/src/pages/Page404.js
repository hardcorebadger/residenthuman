import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { Logo } from '../components/ChakraLogo';

function PageDefault() {
  return (
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40" pointerEvents="none" />
            <Text>
              404 Page
            </Text>
          </VStack>
        </Grid>
      </Box>
  );
}

export default PageDefault;
