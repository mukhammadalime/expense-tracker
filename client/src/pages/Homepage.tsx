import { Container } from "@mui/material";
import Balance from "../components/Balance";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

const Homepage = () => {
  return (
    <Container>
      <Header />
      <Balance />
      <MainContent />
    </Container>
  );
};

export default Homepage;
