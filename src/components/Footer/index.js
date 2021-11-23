import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import { FooterContainer,
      FooterWrap,
      FooterLinkContainer,
      FooterLinkWrapper,
      FooterLinkItems,
      FooterLinkTitle,
      FooterLink,
      SocialMedia,
      SocialMediaWrap,
      SocialLogo,
      WebsiteRights,
      SocialIcons,
      SocialIconLink, } from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                           <FooterLinkTitle>Titulo 1</FooterLinkTitle> 
                               <FooterLink to='/Signin'>Item 1</FooterLink>
                               <FooterLink to='/Signin'>Item 2</FooterLink>
                               <FooterLink to='/Signin'>Item 3</FooterLink>
                               <FooterLink to='/Signin'>Item 4</FooterLink>
                               <FooterLink to='/Signin'>Item 5</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                           <FooterLinkTitle>Titulo 2</FooterLinkTitle> 
                               <FooterLink to='/Signin'>Item 1</FooterLink>
                               <FooterLink to='/Signin'>Item 2</FooterLink>
                               <FooterLink to='/Signin'>Item 3</FooterLink>
                               <FooterLink to='/Signin'>Item 4</FooterLink>
                               <FooterLink to='/Signin'>Item 5</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                           <FooterLinkTitle>Titulo 3</FooterLinkTitle> 
                               <FooterLink to='/Signin'>Item 1</FooterLink>
                               <FooterLink to='/Signin'>Item 2</FooterLink>
                               <FooterLink to='/Signin'>Item 3</FooterLink>
                               <FooterLink to='/Signin'>Item 4</FooterLink>
                               <FooterLink to='/Signin'>Item 5</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>MindSet</SocialLogo>
                        <WebsiteRights>MindSet © {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
