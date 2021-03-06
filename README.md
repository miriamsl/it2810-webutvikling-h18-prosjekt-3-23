# it2810-webutvikling-h18-prosjekt-3-23

## Innholdsfortegnelse
* [Beskrivelse av applikasjonen](#ba)
* [Verktøy og rammeverk](#v&r)
* [Installasjon](#inst)
* [Krav til innhold og funksjonalitet](#innhold)
* [Krav til bruk av teknologi](#teknologi)
* [Testing](#testing)
* [Valg og løsninger](#losninger)
* [Tutorial](#tuto)
* [Kilder](#kilder)

<a name="ba"></a>
## Beskrivelse av applikasjon

For å løse oppgaven om å lage en “Personal Information and Motivation Manager” har vi valgt å implementere en prototype av appen som holder på avtaler og gjøremål. For motivasjonens del har vi lagt inn at brukeren får en poengscore ut i fra hvor mange gjøremål den fullfører, og antall planlagte avtaler. Brukeren har mulighet til å navigere mellom tre sider: en Home-side, en Appointment-side og en Todo-side. På Home-siden ligger poengscoren brukeren har oppnådd. Appointment-siden inneholder alle avtaler med tittel, adresse og tid,  muligheten til å legge til og slette avtaler, samt en mulighet til å åpne et kart som viser hvor brukeren er, og hvor avtalens adresse er. Her brukes altså telefonens gps. Todo-siden har muligheten til å legge til gjøremål i en liste, samt til å huke av at et gjøremål er gjort, noe som gjør at det forsvinner. 

<img width="200" alt="home" src="https://user-images.githubusercontent.com/22234642/47218731-116d9f80-d3ad-11e8-9179-24f583545960.jpg">  <img width="200" alt="appoint" src="https://user-images.githubusercontent.com/22234642/47218729-116d9f80-d3ad-11e8-9236-be8913704909.jpg">  <img width="200" alt="todo" src="https://user-images.githubusercontent.com/22234642/47218730-116d9f80-d3ad-11e8-9b1a-9b1bb2828cb5.jpg">

<a name="v&r"></a>
## Verktøy og rammeverk
* [Node.js](https://nodejs.org/en/)
* [React Native](https://facebook.github.io/react-native/)
* [Expo](https://expo.io/)
* [Jest](https://jestjs.io/)

<a name="inst"></a>
## Installering
1. Installer Node.js [her](https://nodejs.org/en/)
2. Installer expo [her](https://expo.io/)
3. Naviger inn i pro3 i terminalen og skriv "npm start" for å kjøre prosjektet lokalt.


<a name="innhold"></a>
## Krav til innhold og funksjonalitet

I appen kan man legge til avtaler og todos. Vi har lagt inn en automatisk oppdatering av poengscore når brukeren oppretter nye avtaler og fullfører todos for å øke motivasjonen til brukeren. Ettersom at dette bare er en prototype, har vi valgt å avgrense appen til det som er nevnt. I en ferdig app ville vi lagt til “trofeer” for høy poengscore, eller en “highscore”-liste som kommuniserer med andre brukere, for å gjøre det enda mer motiverende. Vi ville også hatt med muligheten til å se en oversikt over ferdige todo’s og tidligere avtaler. I prototypen forsvinner todo’s-ene når de blir fullført og avtalene når man når datoen for avtalen. 

Alle todo’s, poengscore og avtaler lagres med all informasjon i AsyncStorage, slik at data tas vare på selv om appen avsluttes og startes på nytt. Dersom Expo har fått tillatelse til å bruke enhetens lokasjon blir også dette lagret i AsyncStorage, slik at man ikke trenger å godkjenne dette hver gang.  
Vi har brukt GPS som eksempel på noe som er utover basic React Native UI-problematikk. GPS-en brukes ved at brukerens lokasjon vises på kartet, i tillegg er avtalens adresse markert på kartet. Igjen, ettersom at dette er en prototype, avgrenset vi appens funksjonalitet, men i en ferdig app, ville vi hatt med veibeskrivelse mellom brukerens lokasjon og avtalens adresse. 

<a name="teknologi"></a>
## Krav til bruk av teknologi 

Prosjektet ble satt opp med expo-cli og skriptet expo init, ved å følge instruksjonene fra introforelesningen til prosjekt 3. Appen bruker AsyncStorage, og som tredjepartskomponenter og biblioteker har vi bruk “React Navigation” (createMaterialBottomNavigator og createStackNavigator), “React Native Elements” (Card, Button) og “tcomb-form-native” for inputskjemaet på NewAppointment-siden. 

Expo API’et har vi brukt til å få opp kartet (MapView), spørre om tillatelse til å finne enhetens lokasjon (Permissions) og til å finne lokasjonen til enheten (Location).

Applikasjonen fungerer på både ios og android, og dette er noe vi har systematisk testet gjennom hele prosjektet. 

<b>Git og issues</b>

I prosjektet har vi dekomponert oppgaven i mindre issues på Github. Disse har vi organisert ved hjelp av GitHub’s Project-funksjonalitet, slik at vi har hatt god oversikt over fremgangen i prosjektet. Commit’s har vært knyttet til issues, med mindre det har vært små endringer som har påvirket flere issues. Alle pull-requests har også blitt knyttet opp til issues, og branchene har blitt slettet jevnlig etter merge for å holde git ryddig. Denne organiseringen av underoppgaver og kodedeling, samt systematiseringen av prosjekt-fremgangen på GitHub har ført til bedre kommunikasjon innad i gruppa.

   <img width="600" alt="Prosjekt" src="https://user-images.githubusercontent.com/22234642/47218883-7fb26200-d3ad-11e8-889a-543492b73729.png">


<a name="testing"></a>
## Testing

Den største utfordringen vi hadde i prosjektet var testing med jest. For det første hadde vi en del problemer med oppsettet, og det var kjedelig at det ikke fungerte på windows før et godt stykke ut i prosjektet. Dette førte til at vi kom litt sent i gang med testing. Videre er dessverre ikke Jest tilstrekkelig for å teste hele applikasjonen vår alene. 

Likevel føler vi at testene vi har laget er et godt grunnlag for videre testing ved et ferdig produkt. Vi har hovedsakelig testet at de viktigste funksjonene i hovedfilene blir kalt, og fokusert mest på å teste de funksjonene som bruker AsyncStorage. Vi har også brukt snapshot-testing. 

Dessverre fikk vi ikke testet kart-delen (geolocation.js) av prosjektet med jest, kun med brukertesting. Dette er fordi det viste seg å være vanskelig å mocke markøren som ble brukt inne i MapViewet.

Som kompensasjon for at disse testene ikke ble helt optimale har vi hatt ekstra fokus på brukertesting. Gjennom hele prosjektet har vi testet hver del av applikasjonen på ios og android før de har blitt erklært ferdige. Vi har gått ut i fra at applikasjonen skal fungere på iPhoner og android 8.0 og nyere. 


<a name="losninger"></a>
## Valg og løsninger

<b>Homepage og poengscore</b>

På Homepage vises det to poengscores, som hentes ut fra AsyncStorage hver gang man går inn på forsiden av appen. Den ene er hvor mange todo’s som er gjennomført, mens den andre er antall planlagte avtaler. På Homepage kan man også resette poengscoren for todo’s, om man skulle ønske dette. 

TodoPage og Appointments henter ut poengscoren fra AsyncStorage, øker scoren med 1 for hver gjennomførte todo og hver avtale lagt til, og sender scoren tilbake til AsyncStorage vha. ScoreManager. Appointment-siden senker også scoren med 1 for hver avtale som slettes, slik at disse ikke regnes med i poengscoren for planlagte avtaler. 

<b>Todo</b>

Todo-delen av applikasjonen er delt i tre komponenter: TodoPage, TodoList og TodoInput, samt en fil i utils-mappa, TaskManager. 

All logikken for todo-lista ligger i TodoPage, og sendes ned som props til TodoList og TodoInput. De to sistnevnte inneholder kun render-funksjonen. Dette ble gjort for å separere de React Native-spesifikke komponentene (her: View og Text) mest mulig i egne filer, slik at logikken kunne blitt brukt i en vanlig web-applikasjon med React ved en senere anledning. TodoPage inneholder logikken som trengs for å legge til og fullføre gjøremål, samt øke poengscoren ved fullførte gjøremål. TaskManager håndterer Todo-funksjonalitetens kommunikasjon med AsyncStorage.

All stylingen for todo-lista ligger også i TodoPage, og sendes ned til TodoInput og TodoList ved hjelp av props. 


<b>BottomNavigation</b>

Navigasjonsbaren nederst på siden blir brukt til å navigere mellom våre tre hovedsider; Homepage, Appointments og Todo’s. For å lage navigasjonsbaren brukte vi en del av React Navigation, "createMaterialBottomNavigator". Dette lot oss style navigasjonsbaren slik vi ønsket, med farger og Iconer.

<b>Appointment</b>

Appointment-siden inneholder komponenten Card fra React Native Elements som viser alle fremtidige avtaler. Informasjonen i hvert Card lagres som separate objekter i en liste i AsyncStorage. 

For å legge til en ny avtale navigerer man til NewAppointment-siden ved å trykke på ‘add’-knappen i høyre hjørne. På NewAppointment-siden fyller brukeren inn tittel, adresse og tidspunkt for avtalene. Dette inputskjemaet er laget med “tcomb-form-native”, som gjør slike skjemaer veldig enkle og greie. Informasjonen blir så hentet ut og sendt videre til Appointment-siden. Deretter lagres informasjonen i AsyncStorage og det opprettes et nytt Card. 

All navigering mellom disse sidene og kartet, som det står mer om nedenfor, skjer ved hjelp av React Navigation sin createStackNavigator funksjon. 

<b>Geolocation</b>

Kartdelen av applikasjonen vår blir brukt på appointments-siden. Ved å trykke på “VIEW MAP” på et avtalekort får man opp et kart som viser enhetens lokasjon og følger den dersom enheten beveger seg. Man får også opp en markør som markerer adressen til stedet der avtalen skal holdes. 

Har man skrevet inn noe annet enn en adresse i adresse-feltet vil man få et par warnings når man trykker seg inn på kartet. Dette er vi klar over, men det ble ikke prioritert å håndtere dette i denne prototypen, ettersom vi antar at brukeren vil skrive inn en ordentlig adresse. 

Vi har også lagt inn logikk som spør om tillatelse til å bruke enhetens lokasjon og logikk som sjekker om applikasjonen er åpnet på en android emulator (det å finne lokasjon fungerer ikke på android emulator, bare på faktiske android-enheter). Åpner man kartet i en android emulator vil man få opp en feilmelding, i en ios simulator vil enhetens lokasjon være i San Francisco og på sin egen mobil vil enhetens lokasjon være der enheten faktisk befinner seg. 

<a name="tuto"></a>
## Tutorial (bruk av GPS)
Her kommer en tutorial for Geolocation og hvordan vi brukte Gps.

Vi brukte Expo’s API for kartet og lokasjon, det var bare komponenten “Marker” som ble importert fra et annet API. Expo SDK API gir tilgang til forskjellig systemfunksjonalitet som vi lett kunne importere og bruke i javascript-filene. I Geolocation.js brukte vi: **import { Constants, Location, Permissions, MapView } from 'expo';**.

<b>Spørre om tillatelse til å finne lokasjon</b>

For å finne lokasjonen til enheten må man først spørre om tillatelse til å finne den, siden det er sensitiv informasjon som ikke alle ønsker å dele med alle. For å gjøre dette importerte vi **Permissions** fra Expo. 
* Metode: *Expo.Permissions.askAsync(...permissionTypes)*. Denne metoden tar  inn de typene tillatelser man ønsker. Den returnerer et promise med informasjon om tillatelsene, om de er innvilget eller ikke. Metoden finner ut om appen allerede har fått tilgang til de oppgitte tillatelsene eller om den må spørre om det.

  <img width="500" alt="skjermbilde 2018-09-18 kl 13 44 50" src="https://user-images.githubusercontent.com/22234642/47218732-116d9f80-d3ad-11e8-892b-e77e9a4240db.png">


<b>Finne lokasjonen til adressen til en avtale</b>

For å finne lokasjonen til adressen til en avtale importerte vi **Location** fra Expo. 
* Metode: * *Expo.Location.geocodeAsync(address)*. Denne metoden tar inn en adresse i string. Den returnerer et geokodet objekt med feltene "latitude", "longitude", "altitude" og "accuracy". Da kunne vi bruke latitude og longitude i markeren, for å markere på kartet hvor avtalen skulle holdes.

  <img width="500" alt="skjermbilde 2018-09-18 kl 13 44 50" src="https://user-images.githubusercontent.com/22234642/47218733-116d9f80-d3ad-11e8-9b83-72d0cf882965.png">

<b>Finne lokasjonen til enheten</b>

For å vise og følge enhetens/brukerens lokasjon brukte vi *"showsUserLocation={true}"* og *"followUserLocation={true}"* inne i MapView-komponenten. Vi satt også "provider" til Google, da vi ønsker å ha google maps på alle enheter uavhengig om det er ios eller android.

<b>Komponentene</b>

* **MapView:** For å vise kartet brukte vi komponenten MapView. Dette er en komponent som bruker Apple Maps eller Google Maps på iOS og Google Maps på Android. I en Expo-app kreves det ingen oppsett for å kunne bruke denne komponenten, man må bare huske å importere den i toppen av javascript-filen: **import {MapView} from ‘Expo’;**

* **Marker:** For å kunne markere adressen til avtalen brukte vi komponenten Marker fra react-native-maps. I denne komponenten la vi inn attributtet coordinate og tok inn latitude og longitude til adressen til avtalen. 
  - For å installere react-native-maps: **npm install react-native-maps**
  - Importere i javascript-filen: **import {Marker} from ‘react-native-maps’;**
         
  <img width="500" alt="skjermbilde 2018-09-18 kl 13 44 50" src="https://user-images.githubusercontent.com/22234642/47218736-129ecc80-d3ad-11e8-91a9-466472d3909c.png">
  

<a name="kilder"></a>
## Kilder
* Form: https://github.com/gcanti/tcomb-form-native 
* React Native Elements: https://react-native-training.github.io/react-native-elements/
* Todo: https://gist.github.com/ahmedam55/b10adc17c4eed1bb634cf6d934552b52/ 
* BottomNavigation: https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html
* Location: https://docs.expo.io/versions/latest/sdk/location
* MapView: https://docs.expo.io/versions/latest/sdk/map-view
* Permission: https://docs.expo.io/versions/latest/sdk/permissions.html
* react-native-maps: https://github.com/react-community/react-native-maps






