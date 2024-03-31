import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

const Button = styled.button`
  //display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
`

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`
const Container = styled.div`
  display: flex;
  //flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`
const Card = styled.div`
  width: 450px;
  height: 150px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
  /* &:hover ${Button} {
    display: block;
  } */
`

// const Card = styled.div`
//   width: 400px;
//   border-radius: 10px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//   padding: 12px 16px;
//   justify-content: space-between;
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//   transition: all 0.3s ease-in-out;
//   &:hover {
//     box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
//     transform: translateY(-5px);
//   }
//   @media only screen and (max-width: 768px) {
//     padding: 10px;
//     gap: 8px;
//     width: 300px;
//   }

//   &:hover ${Document} {
//     display: flex;
//   }

//   &:hover ${Span} {
//     overflow: visible;
//     -webkit-line-clamp: unset;
//   }

//   border: 0.1px solid #306ee8;
//   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;

//   &:hover ${Button} {
//     display: block;
//   }
// `

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`

const CertificateCard = ({ certificate }) => {
  return (
    <Container>
      <Card>
        <Top>
          <Body>
            <Role>{certificate.role}</Role>
            <Company>{certificate.company}</Company>
            <Date>{certificate.date}</Date>
          </Body>
        </Top>

        {certificate.doc && (
          <a href={certificate.doc} target='new'>
            <Button>View Certificate</Button>
          </a>
        )}
      </Card>
    </Container>
  )
}

export default CertificateCard
