import React, { useState, useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function TourGuide({ runTour, tourPosition, tourSteps }) {
  console.log(tourPosition);
  const [assistantPosition, setAssistantPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    // Find the current tour step by matching with the currentStepId
    const currentStep = tourSteps.find(
      (step) => step.target === tourSteps[tourPosition].target
    );
    if (currentStep) {
      // Get the position of the target element of the current step
      const targetElement = document.querySelector(currentStep.target);
      const targetRect = targetElement.getBoundingClientRect();

      // Calculate the new position for the assistant
      const newAssistantPosition = {
        top: targetRect.top - 60, // Adjust the top position as needed
        left: targetRect.left - 120,
      };

      // Update the assistant's position
      setAssistantPosition(newAssistantPosition);
    }
  }, [runTour, tourSteps]);

  // Update the current step when tourSteps change
  // useEffect(() => {
  //   if (tourSteps.length > 0 && !currentStepId) {
  //     setCurrentStepId(tourSteps[1].target); // Initialize with the first step if currentStepId is null
  //   }
  // }, [tourSteps, currentStepId]);
  // console.log(currentStepId);

  // Update the current step when tourSteps change

  return (
    <>
      <div>
        <Player
          autoplay
          loop
          src='https://lottie.host/4e40ae60-6aaa-4090-ad31-3517f6cb6d29/p5B7IeG7Nb.json'
          className={`assistant ${runTour ? "active" : ""}`}
          style={{ top: assistantPosition.top, left: assistantPosition.left }}
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
