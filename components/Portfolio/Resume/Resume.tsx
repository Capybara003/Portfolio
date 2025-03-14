import React from 'react';
import * as Styled from './Resume.styles';
import TextList from '../TextList/TextList';

import {
  keyTechSkills,
  otherSkills,
  professionalExperience,
} from './Resume.config';
import {
  FiDownload,
  FiGithub,
  FiGlobe,
  FiMail,
  FiPhoneOutgoing,
} from 'react-icons/fi';
import { SiLinkedin } from 'react-icons/si';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience';
import Link from 'next/link';

/**
 *Renders resume component
 *@function Resume
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Resume = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.ResumeWrapper>
        <Styled.LeftColumn>
          <Styled.ContactInfo>
            <Styled.ContactLink href="mailto: Advnture123@gmail.com">
              <FiMail />
              Joshua
            </Styled.ContactLink>
            <p>Buffalo, CA, US </p>
          </Styled.ContactInfo>

          <TextList
            variant={'withHeader'}
            textBulletPoints={keyTechSkills}
            headerText={'key technical skills'}
          />

          <TextList
            variant={'withHeader'}
            textBulletPoints={otherSkills}
            headerText={'Other skills'}
          />
        </Styled.LeftColumn>

        <Styled.RightColumn>
          {/*HEADER WITH NAME*/}
          <Styled.SummaryHeader>
            <Styled.Name>
              Joshua <span>David</span>
            </Styled.Name>
            <Styled.Title>
              Senior Full-Stack | Web3 | Bot Engineer
            </Styled.Title>

            {/*SOCIAL MEDIA LINKS*/}
            <Styled.SocialLinksWrapper>
              <Styled.SocialMediaLink
                href={'https://github.com/Capybara003'}
                target={'_blank'}
                rel="noopener"
              >
                <FiGithub className={'social-media-icon'} />
                GitHub
              </Styled.SocialMediaLink>
              <Styled.SocialMediaLink href="mailto: Advnture123@gmail.com">
                <FiMail className={'social-media-icon'} />
                Email
              </Styled.SocialMediaLink>
              <Styled.SocialMediaLink href="tel:+12084359096 ">
                <FiPhoneOutgoing className={'social-media-icon'} />
                +1 208 435 9096
              </Styled.SocialMediaLink>

              <Styled.SocialMediaLink
                href={'/assets/Joshua-cv.pdf'}
                download="Joshua-cv.pdf"
              >
                <FiDownload className={'social-media-icon'} />
                Download CV
              </Styled.SocialMediaLink>
            </Styled.SocialLinksWrapper>

            <Styled.HR />
            {/*SUMMARY*/}
            <Styled.Summary>
              <Styled.ResumeHeader>Summary</Styled.ResumeHeader>
              <PortfolioParagraph
                margin={'0'}
                paragraphText={`Innovative Full-stack Software Engineer with 12+ years experience crafting interactive, 
                  scalable web applications. Track record includes adept project management and leading teams to drive 
                  business growth through enhanced user experiences. Expertise spans end-to- end project leadership, prioritizing 
                  clean code, performance optimization, and exceptional user-centric design. Committed to ongoing learning and 
                  up-to-date with industry trends to deliver cutting-edge solutions`}
                withDarkColor={true}
                variant={'medium'}
                withAnimatedPresence={false}
              />
            </Styled.Summary>
          </Styled.SummaryHeader>

          {/*EXPERIENCE*/}

          <Styled.ResumeHeader>Experience</Styled.ResumeHeader>
          <PortfolioParagraph
            margin={'0'}
            paragraphText={
              'I’ve worked on a handful of large-scale enterprise projects over the past 10 years, some of which were for the following organizations:'
            }
            withDarkColor={true}
            variant={'medium'}
            withAnimatedPresence={false}
          />

          {professionalExperience.map((experience, id) => (
            <ProfessionalExperience key={id} {...experience} />
          ))}
          {/*PROJECTS*/}
          <Styled.ResumeHeader>Highlighted Projects</Styled.ResumeHeader>

          <Styled.Projects>
            <p>
              Links to some of my projects and work can be found on{' '}
              <Link href={'/portfolio/projects'}>
                Joshua/portfolio/projects
              </Link>{' '}
              and details can be provided upon request via a scheduled demo
              call.
            </p>
          </Styled.Projects>

          {/* EDUCATION */}
          <Styled.ResumeHeader>Education</Styled.ResumeHeader>
          <Styled.EducationDetails>
            <h4>
              Bachelor of Computer Engineering
              <span>Computer Science</span>
            </h4>
            <Styled.University>
              Osaka University
            </Styled.University>
          </Styled.EducationDetails>
        </Styled.RightColumn>
      </Styled.ResumeWrapper>
    </Styled.Container>
  );
};

export default Resume;
