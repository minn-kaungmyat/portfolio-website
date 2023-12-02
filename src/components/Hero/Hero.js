import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Min Kaung Myat <br />
          Junior React Developer
        </SectionTitle>
        <SectionText>
          An IT enthusiast with a comprehensive skill set spanning web
          development, system analysis, design, and database management.
          Aspiring to carve a path in front-end development.
        </SectionText>
        <Button onClick={() => window.location = "mailto:minnkaungmyat00@gmail.com"}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
