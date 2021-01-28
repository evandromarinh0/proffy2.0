import React from 'react';

import { 
  Container,
  Title,
  Instructions,
} from './styles';

interface PageHeaderProps {
  title: string;
  instruction?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, instruction, children }) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Instructions>{instruction}</Instructions>
        {children}
      </Container>

    </>
  );
}

export default PageHeader;