import React, { useState, useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function TourGuide({ runTour, tourPosition, tourSteps }) {
  const [assistantPosition, setAssistantPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    // Find the current tour step by matching with the tourPosition
    const currentStep = tourSteps.find(
      (step) => step.target === tourSteps[tourPosition]?.target
    );

    if (currentStep) {
      // Get the position of the target element of the current tour step
      const targetElement = document.querySelector(currentStep.target);
      const targetRect = targetElement.getBoundingClientRect();
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const x = targetRect.left + scrollLeft;
      const y = targetRect.top + scrollTop;
      // Calculate the new position for the assistant
      const newAssistantPosition = {
        top: y,
        left: x,
      };
      // Update the assistant's position
      setAssistantPosition(newAssistantPosition);
    } else {
      // Calculate the new position for the assistant
      const newAssistantPosition = {
        position: "fixed",
        top: 450,
        left: 10,
      };
      setAssistantPosition(newAssistantPosition);
    }
  }, [tourPosition]);

  return (
    <>
      <div
        style={assistantPosition}
        className={`assistant ${runTour ? "active" : ""}`}
      >
        <Player
          autoplay
          loop
          src='https://lottie.host/4e40ae60-6aaa-4090-ad31-3517f6cb6d29/p5B7IeG7Nb.json'
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
    </>
  );
}

export default TourGuide;
