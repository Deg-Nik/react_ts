import {
  AboutClient,
  ButtonControl,
  Container,
  InfoContent,
  LogoImg,
} from "./styles";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

function Coral() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <InfoContent>
        <LogoImg
          src="https://www.reisetiger.net/wp-content/uploads/2018/07/coral-travel-deutschland-700x328.jpg"
          alt="Logo"
        />
        <AboutClient>Coral Travel</AboutClient>
        The Coral Travel brand has been present on the market since 1995. Today,
        the operator occupies a leading position in the tourism industry and is
        positioned as a brand of reliability and quality. Coral Travel clients
        in Turkey, Egypt, Greece, Spain, the UAE, Thailand, and Vietnam are
        served by the incoming company Odeon Tours. Tour operator Coral Travel
        offers the best resorts and hotels in 40 countries, including Austria,
        Andorra, Bahrain, Belarus, Bulgaria, Vietnam, Greece, Georgia, the
        Dominican Republic, Egypt, Israel, India, Indonesia, Jordan, Spain,
        Italy, Qatar, Kenya, Cyprus, Cuba, Mauritius, the Maldives, Morocco,
        Mexico, the UAE, Russia, the Seychelles, Singapore, Thailand, Tanzania,
        Tunisia, Turkey, Uzbekistan, Croatia, Montenegro, and Sri Lanka. We are
        constantly working to open new destinations. The tour operator organizes
        group and individual FIT tours based on its own charter programs and
        regular flights, develops incentive, congress, sports, and other types
        of tourism, and actively sells airline tickets online.
      </InfoContent>
      <ButtonControl>
        <Button name="Go Back" onClick={goBack} />
      </ButtonControl>
    </Container>
  );
}
export default Coral;
