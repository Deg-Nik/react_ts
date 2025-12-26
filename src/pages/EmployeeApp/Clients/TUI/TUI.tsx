import {
  AboutClient,
  ButtonControl,
  Container,
  InfoContent,
  LogoImg,
} from "./styles";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

function TUI() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <InfoContent>
        <LogoImg
          src="https://cdn.aptoide.com/imgs/7/1/2/712e5f2e6540c1ab904aa4e3d51ef74e_fgraphic.png"
          alt="Logo"
        />
        <AboutClient>TUI Headquarters</AboutClient>
        TUI Group ( German: Touristik Union International ) is a German travel
        company. Headquartered in Hanover , Lower Saxony , Germany . Until 2002,
        the company focused on industry and transportation and was named
        Preussag AG . In the mid-1990s, the company decided to shift its focus
        to tourism and shipping. The company sold many of its industrial
        concerns and acquired several large travel and transportation companies.
        Following its 2014 merger with its British subsidiary, TUI Travel, it
        became the world's largest travel company. It owns travel agencies ,
        hotels , airlines , cruise ships , and tour operators . The main
        subsidiary airlines, part of the TUI AG group, are considered the
        largest by fleet size in Europe. In the UK, air travel is carried out
        through the tour operator Thomson . TUI AG was also one of the world's
        largest shipping companies, operating under the logistics umbrella of
        Hapag-Lloyd AG and focusing on maritime transport. Hapag-Lloyd is no
        longer an operating unit in the business, having sold a majority stake
        in March 2009 to a consortium of investors, including Albert Ballin. In
        February 2012, the German company TUI sold another portion of its shares
        to exit the shipping business and streamline its tourism operations,
        with expansion in Russia , China , and India . TUI AG currently owns 22
        percent of Hapag-Lloyd's shares. As of September 2020, Unifirm Ltd. is
        TUI 's largest shareholder, with a 24.9% stake. With TUI's total market
        capitalization on the London Stock Exchange at over €2.8 billion on
        December 2, the market value of this stake exceeded €707 million
      </InfoContent>
      <ButtonControl>
        <Button name="Go Back" onClick={goBack} />
      </ButtonControl>
    </Container>
  );
}
export default TUI;
