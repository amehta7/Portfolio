import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import { certificates } from '../../data/constants'
import CertificateCard from '../Cards/CertificateCard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media screen and (max-width: 960px) {
    padding: 0px;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

const Certificates = () => {
  return (
    <Container id='certificates'>
      <Wrapper>
        <Title>Certificates</Title>

        <TimelineSection>
          <Timeline>
            {certificates.map((certificate, index) => (
              <TimelineItem key={index}>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <CertificateCard certificate={certificate} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  )
}

export default Certificates
