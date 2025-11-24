import BumpContainer from "./components/bump-container";
import Container from "./components/container";
import TouchContainer from "./components/touch-container";
import TransformContainer from "./components/transform-container";
import { Grain, Warmth, WhiteOverlay, YummyColorGrading } from "./effects";
import {
  ArtifactTop,
  CircularLight,
  CircularLightArtifact,
  Light,
  TinyCircularLight,
} from "./lights";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Container>
        <TransformContainer>
          <BumpContainer>
            <TouchContainer />
          </BumpContainer>
        </TransformContainer>
      </Container>
      <Grain />
      <Light />
      <CircularLight />
      <ArtifactTop />
      <CircularLightArtifact />
      <TinyCircularLight />
      <YummyColorGrading />
      <Warmth />
      <WhiteOverlay />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
