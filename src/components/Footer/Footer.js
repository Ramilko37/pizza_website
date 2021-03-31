import React, {useState} from 'react';
import {FaFacebook, FaInstagram, FaTelegram, FaWhatsapp, FaYoutube} from "react-icons/all";
import {FooterContainer,
        FooterWrap,
        SocialMedia,
        SocialMediaWrap,
        SocialIconLink,
        SocialIcons,
        SocialLogo} from "./FooterElements";


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo></SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                                            aria-label="Facebook"
                                            rel="noopener noreferrer">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                            aria-label="Instagram"
                                            rel="noopener noreferrer">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                            aria-label="Whatsapp"
                                            rel="noopener noreferrer">
                                <FaWhatsapp/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                            aria-label="Youtube"
                                            rel="noopener noreferrer">
                                <FaYoutube/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;