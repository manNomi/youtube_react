import { Container, Box, Icon } from "./style";

const HoverIcon = ({ resource }) => {
  return (
    <Container>
      <Box>
        <Icon src={resource} />
      </Box>
    </Container>
  );
};
export default HoverIcon;
