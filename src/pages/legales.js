// import { useRouter } from "next/router";
import estilos from "./legales.module.css";
import { useEffect } from "react";
// import { DataContext } from "@/contexts/DataContext";

function Legales() {
  // const { legales } = useContext(DataContext);
  // const router = useRouter();

  useEffect(() => {
    document.title = "Algemene Voorwaarden";
    // if (!legales) {
    //   router.push("/");
    // }
  }, []);

  return (
    <div className={estilos.contenedor}>
      <div className={estilos.logo}>
        <img className={estilos.logos} src="/catsLogoConcert.svg"></img>
        <img className={estilos.logos} src="/catsLogoGatoNegro.svg"></img>
      </div>
      <div className={estilos.contenedorTexto}>
        <p className={estilos.texto}>
          <strong>
            Algemene Voorwaarden: Door deelname aan de betreffende winactie gaat
            de deelnemer akkoord met het onderstaande:
          </strong>
          <br />
          <br />1 – Deelnemers dienen minimaal 18 jaar oud te zijn voor deelname
          aan de winactie en woonachtig in Nederland. Wij volgen alle regels van
          NIX 18 en stimuleren geen extra alcohol gebruik, maar wel gezelligheid
          en sfeer met vrienden, familie en relaties. <br />2 – De duur van de
          winactie loopt t/m 18 juni 2023 (het kan zo zijn dat de actie langer
          loopt). Alle geldige aanmeldingen die in deze periode worden geüpload
          maken kans op de prijs. De inzendingen die buiten deze periode worden
          geüpload zijn uitgesloten voor de winactie. <br />3 – Om kans te maken
          op de prijs dient de winnaar alle stappen te hebben uitgevoerd zoals
          vermeld op de winactie pagina. <br />4 – De winnaar wordt onpartijdig
          getrokken door de organisatie en bekend gemaakt in de week na het
          aflopen van de campagne, de prijswinnaar heeft 48 uur de tijd om de
          prijs te aanvaarden. <br />5 – Wanneer een product aankoop onderdeel
          is voor deelname aan de winactie is de organisatie ten alle tijden
          gerechtigd om te vragen naar het aankoopbewijs van het aangeschafte
          product. <br />6 – Over de uitslag en toekenning van de prijs kan niet
          worden gecorrespondeerd. <br />7 – Deelname is uitgesloten voor
          personen niet woonachtig in Nederland. <br />8 – De prijs is
          persoonsgebonden en staat op naam van de winnaar. De prijs is niet
          overdraagbaar, inwisselbaar of uit te keren in geld of voor andere
          producten of diensten. Bij weigering of niet aanvaarding van de prijs
          of de aan de winactie verbonden voorwaarden, zal de prijs niet worden
          uitgekeerd. Alsdan is de organisatie gerechtigd een andere winnaar te
          kiezen. <br />
          9 – De persoonsgegevens kunnen worden gebruikt om uitvoering te geven
          aan de winactie en de uitreiking van de prijs. In dat kader is de
          organisatie gerechtigd om na digitale/schriftelijke toestemming de
          persoonsgegevens te verstrekken aan derde partijen, die betrokken zijn
          bij de betreffende winactie. <br />
          10 – Indien van toepassing dient de uitgereikte prijs binnen de
          vervaldatum te worden gebruikt (in geval van bijv.
          tegoed/waardebon/toegangstickets). <br />
          11 – De organisatie is op geen enkele wijze aansprakelijk voor
          eventuele schade die voortvloeit uit de deelname aan de actie noch
          voor eventuele technische storingen, gebreken of vertragingen met
          betrekking tot de deelname aan de winactie of de aanwijzing van de
          winnaar. <br />
          12 – De organisatie is gerechtigd deelnemers te diskwalificeren en/of
          van deelname uit te sluiten als zij van mening is dat de deelnemers
          niet conform via de Algemene Voorwaarden winactie handelen dan wel
          indien de deelnemers zich anderszins op frauduleuze wijze toegang
          verschaffen tot de winactie of het verloop van de winactie op
          oneerlijke wijze beïnvloeden. <br />
          13 – De organisatie is gerechtigd te allen tijde naar eigen inzicht en
          zonder voorafgaande kennisgeving deze Algemene Voorwaarden winactie
          gedurende de looptijd van de winactie te wijzigen of aan te passen
          vanwege haar moverende redenen, zonder dat de organisatie daardoor op
          enigerlei wijze tot vergoeding van schade is gehouden jegens de
          deelnemer. Wijziging of aanpassing van de winactie, zal de organisatie
          op passende wijze publiekelijk bekend maken. <br />
          14 – De organisatie mag iedere deelnemer uitsluiten in geval van (een
          vermoeden van) fraude en de actie altijd stopzetten of wijzigen. We
          hoeven hiervoor geen reden op te geven. <br />
          15 – Als wij je uitsluiten of de actie stopzetten of wijzigen, dan heb
          je geen recht op een (schade)vergoeding.
          <br />
          16 – De organisatie is de exclusieve eigenaar van alle auteursrechten
          en eventuele andere rechten in verband met de actie. <br />
          17 – Indien één of meer bepalingen van de Algemene Voorwaarden
          winactie nietig of ongeldig zijn, dan tast dit niet de geldigheid van
          de overige bepalingen van de Algemene Voorwaarden winactie aan. <br />
          18 – De organisatie verloot 5 ‘hoofdprijzen’. Elke hoofdprijs bestaat
          uit 2 VIP tickets voor Concert at Sea 2023 voor donderdag 22 juni
          2023, ter waarde van EUR 354,-- per toegangskaart. Overige kosten
          zoals reiskosten, verblijfkosten die de prijswinnaar maakt kunnen niet
          worden gedeclareerd. Er kunnen ook enkele ‘troostprijzen’ worden
          aangeboden, een troostprijs bestaat uit 2 tickets met normale toegang
          tot het festival voor donderdag 22 juni 2023 ter waarde van EUR 80,--
          per toegangskaart. <br />
          19 – Als je van de winactie gebruikmaakt, dan ga je akkoord met deze
          voorwaarden. <br />
          20 – Voor eventuele vragen, klachten of opmerkingen over de winactie
          kunt u contact opnemen met het hoofdkantoor van de organisatie of een
          e-mail sturen naar{" "}
          <strong>
            <a href="mailto:marketing@deltawines.eu">
              {" "}
              Marketing@deltawines.eu
            </a>
          </strong>
        </p>
      </div>
    </div>
  );
}

export default Legales;
