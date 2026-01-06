import { useNavigate } from "react-router-dom"; 
import { ClientsContainer, ButtonControl, Title, ClientsLink } from "./styles";
import Button from "components/Button/Button";
import { ROUTES } from "constants/routes"

function Clients() {

  const navigate = useNavigate();
  const goToHome = () => {
    navigate(ROUTES.HOME)
  };
  const goBooking = () => {
    navigate(ROUTES.BOOKING)
  };
  const goTUI = () => {
    navigate(ROUTES.TUI)
  };
  const goCoral = () => {
    navigate(ROUTES.CORAL)
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