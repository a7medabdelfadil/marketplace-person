import React from "react";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";

function Grade() {
  return (
    <>
      <Container>
        <Text font={'bold'} size={'2xl'}>Grade</Text>
        <Box className="h-[80vh]"></Box>
      </Container>
    </>
  );
}

export default Grade;