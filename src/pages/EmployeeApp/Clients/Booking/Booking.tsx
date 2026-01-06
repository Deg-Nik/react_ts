import {
  AboutClient,
  ButtonControl,
  Container,
  InfoContent,
  LogoImg,
} from "./styles";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <InfoContent>
        <LogoImg
          src="https://www.designyourway.net/de/wp-content/uploads/2024/07/Booking-Logo.jpg"
          alt="Logo"
        />
        <AboutClient>About Booking.com™</AboutClient>
        Founded in 1996 in Amsterdam, Booking.com has grown from a small Dutch
        start-up to one of the world’s leading digital travel companies. Part of
        Booking Holdings Inc. (NASDAQ: BKNG), the mission of Booking.com is to
        make it easier for everyone to experience the world. By investing in
        technology that takes the friction out of travel, Booking.com seamlessly
        connects millions of travelers to memorable experiences, a variety of
        transportation options, and incredible places to stay – from homes to
        hotels, and much more. As one of the world’s largest travel marketplaces
        for both established brands and entrepreneurs of all sizes, Booking.com
        enables properties around the world to reach a global audience and grow
        their businesses. Booking.com is available in 43 languages and offers
        more than 28 million reported accommodation listings, including over 6.6
        million homes, apartments, and other unique places to stay. Wherever you
        want to go and whatever you want to do, Booking.com makes it easy and
        supports you with 24/7 customer support.
      </InfoContent>
      <ButtonControl>
        <Button name="Go Back" onClick={goBack} />
      </ButtonControl>
    </Container>
  );
}
export default Booking;
