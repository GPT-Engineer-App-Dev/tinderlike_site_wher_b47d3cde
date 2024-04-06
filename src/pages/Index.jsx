import React, { useState } from "react";
import { Box, Button, Stack, Text, Image, useToast, VStack, HStack, Heading, IconButton } from "@chakra-ui/react";
import { FaArrowRight, FaSmile, FaBatteryThreeQuarters, FaBed, FaQuestionCircle, FaRunning } from "react-icons/fa";

const moodCards = [
  {
    mood: "Happy",
    icon: FaSmile,
    description: "Feeling joyful and content",
    image: "https://images.unsplash.com/photo-1620216464337-69f08c564cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweXxlbnwwfHx8fDE3MTIzOTE1MjN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    mood: "Energized",
    icon: FaBatteryThreeQuarters,
    description: "Ready to take on the world",
    image: "https://images.unsplash.com/photo-1629570887218-a3da69b1ece5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmVyZ2l6ZWR8ZW58MHx8fHwxNzEyMzkxNTIzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    mood: "Tired",
    icon: FaBed,
    description: "Needing rest or sleep",
    image: "https://images.unsplash.com/photo-1657029941667-68b0038af164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0aXJlZHxlbnwwfHx8fDE3MTIzOTE1MjN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    mood: "Anxious",
    icon: FaQuestionCircle,
    description: "Feeling uneasy or worried",
    image: "https://images.unsplash.com/photo-1613312328068-c9b6b76c9e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbnhpb3VzfGVufDB8fHx8MTcxMjM5MTUyNHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    mood: "Motivated",
    icon: FaRunning,
    description: "Driven to achieve goals",
    image: "https://images.unsplash.com/photo-1521669246297-b04a27e36f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3RpdmF0ZWR8ZW58MHx8fHwxNzEyMzkxNTI0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const toast = useToast();

  const handleSwipe = () => {
    if (currentCardIndex < moodCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      toast({
        title: "End of cards!",
        description: "You've gone through all the mood cards.",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const currentMood = moodCards[currentCardIndex];

  return (
    <VStack minH="100vh" justify="center" align="center" p={4}>
      <Heading mb={6}>How are you feeling today?</Heading>
      <Box p={4} boxShadow="md" borderRadius="lg" w="full" maxW="md" bg="white" textAlign="center">
        <Image borderRadius="lg" src={currentMood.image} alt={currentMood.mood} mb={4} />
        <Text fontSize="2xl" fontWeight="bold" mb={2}>
          {currentMood.mood}
        </Text>
        <Text color="gray.600" mb={4}>
          {currentMood.description}
        </Text>
        <IconButton aria-label={`Swipe ${currentMood.mood}`} icon={<currentMood.icon />} isRound size="lg" colorScheme="blue" onClick={handleSwipe} />
      </Box>
      <HStack mt={4}>
        <Button leftIcon={<FaArrowRight />} colorScheme="teal" onClick={handleSwipe}>
          Next Mood
        </Button>
      </HStack>
    </VStack>
  );
};

export default Index;
