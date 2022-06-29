import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../styles/FooterStyle";

export default function MainFooter() {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Team 12</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Notion</FooterLink>
          </Column>
          <Column>
            <Heading>Stacks</Heading>
            <FooterLink href="#">Back-End</FooterLink>
            <FooterLink href="#">Front-End</FooterLink>
            <FooterLink href="#">AI-Construction</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Nayeon Kim</FooterLink>
            <FooterLink href="#">Gwangcheong Shin</FooterLink>
            <FooterLink href="#">Jooyeong Bae</FooterLink>
            <FooterLink href="#">Hosan Lee</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}
