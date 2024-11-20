import React from 'react';
import { Container } from './container';
import { Row } from './row';
import { Column } from './column';

export const Flex: React.FC = () => {
  return (
    <Container fluid>
      <Row justify="flex-start" alignItems="center" gap={10}>
        <Column xs={12} sm={6} md={4} lg={3}>
          Column 1
        </Column>
        <Column xs={12} sm={6} md={4} lg={3}>
          Column 2
        </Column>
        <Column xs={12} sm={6} md={4} lg={3}>
          Column 3
        </Column>
        <Column xs={12} sm={6} md={4} lg={3}>
          Column 4
        </Column>
      </Row>
    </Container>
  );
};

export default Flex;
