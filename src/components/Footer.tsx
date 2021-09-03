import React from 'react'
import Icon from '@ant-design/icons'
import styled from 'styled-components'

const PROFILE_LINK = 'https://github.com/godori'

interface FooterProps {
  project?: string
}

export const Footer: React.FC<FooterProps> = ({ project }) => (
  <FooterWrapper>
    <div className='footerContent'>
      <Icon
        type='github'
        onClick={() => window.open(`${PROFILE_LINK}/${project}`)}
      />
      <Author onClick={() => window.open(PROFILE_LINK)}>
        © {new Date().getFullYear()} ・ GODORI
      </Author>
    </div>
  </FooterWrapper>
)

const FooterWrapper = styled.div`
  flex-shrink: 0.3;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const Author = styled.div`
  cursor: pointer;
`
