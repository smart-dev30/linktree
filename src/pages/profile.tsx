import React from 'react'
import { Box, Text, Input, Textarea, Image, Button } from '@chakra-ui/react'
import Avatar from '../assets/images/avatar.png'
import LinkTree from '../assets/images/linktree.svg'
import { AddIcon } from "@chakra-ui/icons"
import { BsBarChart, BsUpload, BsFillLightningFill, BsLink45Deg } from 'react-icons/bs'
import { RiSettingsLine } from 'react-icons/ri'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
const Profile: React.FC = () => {
  return <Box>
    <Box paddingX="4" border="1px" borderRadius="full" height="20" backgroundColor="white" borderColor="#e7e9e2" boxShadow="sm" display="flex" alignItems="center">
      <Box display="flex" alignItems="center" flex="1" paddingX="2">
        <Box>
          <Image src={LinkTree} width="6" height="6" />
        </Box>
        <Box display="flex" alignItems="center" paddingLeft="8">
          <BsLink45Deg />
          <Text marginLeft="2" fontSize="lg">Links</Text>
        </Box>
        <Box display="flex" alignItems="center" paddingLeft="8">
          <AiOutlineAppstoreAdd />
          <Text marginLeft="2" fontSize="lg">Appearance</Text>
        </Box>
        <Box display="flex" alignItems="center" paddingLeft="8">
          <BsBarChart />
          <Text marginLeft="2" fontSize="lg">Analytics</Text>
        </Box>
        <Box display="flex" alignItems="center" paddingLeft="8">
          <RiSettingsLine />
          <Text marginLeft="2" fontSize="lg">Settings</Text>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Box marginX="4">
          <HiOutlineSpeakerphone />
        </Box>
        <Button backgroundColor="#f3f3f1" leftIcon={<BsFillLightningFill />} borderRadius="full" fontWeight="100">Try Pro for free</Button>
        <Button backgroundColor="white" borderRadius="full" border="1px" borderColor="#e7e9e2" marginX="2" leftIcon={<BsUpload />} fontWeight="100">Share</Button>
        <Image src={Avatar} height="12" />
      </Box>
    </Box>
    <Box padding="20" maxWidth="900px">
      <Box textAlign="left">
        <Text fontSize="3xl" fontWeight="100">Profile</Text>
      </Box>
      <Box backgroundColor="white" borderRadius="3xl">
        <Box display="flex" marginBottom="6" padding="8">
          <Image src={Avatar} height="20" />
          <Box display="flex" flexDirection="column" flex="1" paddingLeft="4">
            <Button borderRadius="full" backgroundColor="#8129d9" color="white" marginBottom="2" fontWeight="100">Pick an image</Button>
            <Button borderRadius="full" backgroundColor="white" border="1px" borderColor="#e7e9e2" fontWeight="100">Remove</Button>
          </Box>
        </Box>
        <Box marginBottom="8" paddingX="8">
          <Box position="relative">
            <Input backgroundColor="#f6f7f5" borderRadius="xl" height="16" border="none" marginBottom="2" fontSize="xl" paddingTop="3" />
            <Text position="absolute" top="1" left="4" fontSize="sm" zIndex="100" color="gray">Profile Title</Text>
          </Box>
          <Box position="relative">
            <Textarea backgroundColor="#f6f7f5" borderRadius="xl" border="none" paddingTop="6" fontSize="xl" rows={4} cols={40} />
            <Text position="absolute" top="2" left="4" fontSize="sm" zIndex="100" color="gray">Bio</Text>
            <Text fontSize="sm" color="gray" position="absolute" bottom="-5" right="0">26 / 80</Text>
          </Box>
        </Box>
        <Box textAlign="left" paddingY="8" borderTop="1px" borderColor="#e7e9e2" paddingLeft="8">
          <Button variant="ghost" leftIcon={<AddIcon />} color="#8129d9" fontWeight="100">Add social icons</Button>
        </Box>
      </Box>
    </Box>
  </Box>
}

export default Profile