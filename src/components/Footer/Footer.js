import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  display: inline-block;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.4s;

  &:hover {
    border-bottom: 1px solid white;
  }
  @media ${(props) => props.theme.breakpoints.md},
         ${(props) => props.theme.breakpoints.sm} {
    border-bottom: 1px solid white;
    
    &:hover {
      border-bottom: 3px solid white;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>CV/Resume</LinkTitle>
          <LinkItem>
            <StyledLink
              href="/Min-Kaung-Myat-CV.pdf"
              download="Your_CV_Name.pdf"
            >
              Download CV
            </StyledLink>
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:+959964331230">09-964,331,230</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:minnkaungmyat00@gmail.com">
            minnkaungmyat00@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/minn-kaungmyat">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/min-kaung-myat-a18783299/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/minnkaungmyatt/">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
