import { Container, Title } from 'components/NotFound/notFound.styled.jsx';

export const NotFound = () => {
  return (
    <Container>
      <Title>Not Found</Title>
      <p>The resource requested could not be found this server!</p>
    </Container>
  );
};
