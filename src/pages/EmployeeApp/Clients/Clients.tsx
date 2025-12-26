import { useNavigate } from "react-router-dom"; 
import { ClientsContainer, ButtonControl, Title, ClientsLink } from "./styles";
import Button from "components/Button/Button";

function Clients() {

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/")
  };
  const goBooking = () => {
    navigate("/clients/booking")
  };
  const goTUI = () => {
    navigate("/clients/tui")
  };
  const goCoral = () => {
    navigate("/clients/coral")
  }
  return (
    <ClientsContainer>
      <Title>Our Clients</Title>
      <ClientsLink onClick={goBooking}>Booking</ClientsLink>
      <ClientsLink onClick={goTUI}>TUI</ClientsLink>
      <ClientsLink onClick={goCoral}>Coral</ClientsLink>
      <ButtonControl>
        <Button name="Go to Home" onClick={goToHome}/>
      </ButtonControl>
    </ClientsContainer>
  )
}
export default Clients;