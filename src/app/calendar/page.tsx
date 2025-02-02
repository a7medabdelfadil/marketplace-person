import React from "react";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";

function Calendar() {
  return (
    <>
      <Container>
        <Text>Calendar</Text>
        <div className="flex gap-4">
          <div className="h-[750px] w-1/5 rounded-xl bg-bgPrimary p-4"></div>
          <div className="h-[750px] w-4/5 rounded-xl bg-bgPrimary p-4"></div>
        </div>
      </Container>
    </>
  );
}

export default Calendar;
