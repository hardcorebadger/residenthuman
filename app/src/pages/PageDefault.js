import {useState} from 'react';
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
import { signOut, db, helloWorld } from '../firebase';
import {collection, addDoc, getDoc, Timestamp, doc} from 'firebase/firestore'
import { functions } from '../firebase';
import { httpsCallable } from 'firebase/functions';

function PageDefault() {
  const [hitdata, setHitdata] = useState(0)
  const spamServer = async () => {
    const sendEmail = httpsCallable(functions, 'sendEmail')
    const resp = await sendEmail({template:'welcome'});
    // const resp = await helloWorld();
    console.log(resp)
    // const d = await getDoc(doc(db, "email-templates", "example-1"))
    // if (d.exists())
    //   console.log(d.data())
  }

  return (
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Button onClick={signOut}>Logout</Button>
            <Button colorScheme='primary' onClick={
              ()=>LemonSqueezy.Url.Open("https://indiestack.lemonsqueezy.com/checkout/buy/774c774a-d010-49bd-aeba-a9a2f59e2cc1?checkout[email]="+user.email+"&checkout[name]="+user.first_name+" "+user.last_name)
            }>Buy Something</Button>
            <Button onClick={spamServer}>Spam Server</Button>
            <Text>You've spammed the endpoint {hitdata} times</Text>
          </VStack>
        </Grid>
      </Box>
  );
}

export default PageDefault;
