import React, { useState } from 'react'
import styled from 'styled-components'
import { projects } from '../../data/constants'
import ProjectCards from '../Cards/ProjectCards'

const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
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

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary + 20};
    `}
  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }
  @media screen and (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`
const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-gap: 32px;
  // grid-auto-rows: minmax(100px, auto);
  // @media screen and (max-width: 960px) {
  //     grid-template-columns: repeat(2, 1fr);
  // }
  // @media screen and (max-width: 640px) {
  //     grid-template-columns: repeat(1, 1fr);
  // }
`

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all')

  return (
    <Container id='projects'>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my
          projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ? (
            <ToggleButton active value='all' onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value='all' onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'mern app' ? (
            <ToggleButton
              active
              value='mern app'
              onClick={() => setToggle('mern app')}
            >
              MERN APP
            </ToggleButton>
          ) : (
            <ToggleButton
              value='mern app'
              onClick={() => setToggle('mern app')}
            >
              MERN APP
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'react app' ? (
            <ToggleButton
              active
              value='react app'
              onClick={() => setToggle('react app')}
            >
              REACT APP
            </ToggleButton>
          ) : (
            <ToggleButton
              value='react app'
              onClick={() => setToggle('react app')}
            >
              REACT APP
            </ToggleButton>
          )}
          <Divider />

          {toggle === 'api' ? (
            <ToggleButton active value='api' onClick={() => setToggle('api')}>
              BACKEND API
            </ToggleButton>
          ) : (
            <ToggleButton value='api' onClick={() => setToggle('api')}>
              BACKEND API
            </ToggleButton>
          )}
          <Divider />

          {toggle === 'nextjs app' ? (
            <ToggleButton
              active
              value='nextjs app'
              onClick={() => setToggle('nextjs app')}
            >
              NEXT.JS APP
            </ToggleButton>
          ) : (
            <ToggleButton
              value='nextjs app'
              onClick={() => setToggle('nextjs app')}
            >
              NEXT.JS APP
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'graphql app' ? (
            <ToggleButton
              active
              value='graphql app'
              onClick={() => setToggle('graphql app')}
            >
              GRAPHQL APP
            </ToggleButton>
          ) : (
            <ToggleButton
              value='graphql app'
              onClick={() => setToggle('graphql app')}
            >
              GRAPHQL APP
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'typescript app' ? (
            <ToggleButton
              active
              value='typescript app'
              onClick={() => setToggle('typescript app')}
            >
              TYPESCRIPT APP
            </ToggleButton>
          ) : (
            <ToggleButton
              value='typescript app'
              onClick={() => setToggle('typescript app')}
            >
              TYPESCRIPT APP
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all'
            ? projects.map((project) => (
                <ProjectCards
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))
            : projects
                .filter((item) => item.category === toggle)
                .map((project) => (
                  <ProjectCards
                    project={project}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
