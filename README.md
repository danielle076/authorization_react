## Routing
Maak de volgende pagina's met routing:
- Een homepagina (url: /)
- Een profielpagina: (url: /profile)
- Een registreerpagina (url: /sign-up)
- Een login pagina (url: /sign-in)

<i>map pages > Home.js</i>
    
    import React from 'react';
    import { Link } from 'react-router-dom';
    
    function Home() {
        return (
            <>
              <h1>Homepagina</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
              <p>Als je ingelogd bent, bekijk dan de <Link to="/profile">Profielpagina</Link></p>
              <p>Je kunt ook <Link to="/signin">inloggen</Link> of jezelf <Link to="/signup">registeren</Link> als je nog geen account hebt.</p>
            </>
        );
    }
    
    export default Home;

<i>map pages > Profile.js</i>

    import React from 'react';
    import { Link } from 'react-router-dom';
    
    function Profile() {
        return (
            <>
                <h1>Profielpagina</h1>
                <h2>Gegevens</h2>
                <p><strong>Gebruikersnaam:</strong> intoyou</p>
                <p><strong>Email:</strong> intoyou@gmail.com</p>
                <h2>Afgeschermde content voor ingelogde gebruikers</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
                <p>Terug naar de <Link to="/">Homepagina</Link></p>
            </>
        );
    }
    
    export default Profile;

<i>map pages > SignIn.js</i>

    import React from 'react';
    
    function SignIn() {
            
        return (
            <>
                <h1>Inloggen</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>                        
            </>
        );
    }
    
    export default SignIn;

<i>map pages > SignUp.js</i>

    import React from 'react';
    
    function SignUp() {
    
        return (
            <>
                <h1>Registreren</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
            </>
        );
    }

    export default SignUp;    

<i>App.js</i>

    import React from 'react';
    import { Switch, Route } from 'react-router-dom';
    import Header from './components/Header';
    import Profile from './pages/Profile';
    import Home from './pages/Home';
    import SignIn from './pages/SignIn';
    import SignUp from './pages/SignUp';
    import './App.css';

    function App() {
        return (
            <>
                <Header />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                          <Home />
                        </Route>
                        <Route path="/profile">
                          <Profile />
                        </Route>
                        <Route exact path="/signin">
                          <SignIn />
                        </Route>
                        <Route exact path="/signup">
                          <SignUp />
                        </Route>
                    </Switch>
                </div>
            </>
        );
    }
    
    export default App;

## React-hook-form
Maak met react-hook-form een inlog formulier (alleen gebruikersnaam en wachtwoord) op de inlog pagina en een registreer-formulier (gebruikersnaam, email en wachtwoord) op de registreerpagina. Deze formulieren loggen de ingevulde waardes in de console wanneer de gebruiker op submit drukt.

<i>map pages > SignIn.js</i>

    import React from 'react';
    import { useForm } from 'react-hook-form';
    import { Link } from 'react-router-dom';
    
    function SignIn() {
        const { handleSubmit, register } = useForm();
        
        function onSubmit(data) {
        console.log(data);
        }
    
        return (
            <>
                <h1>Inloggen</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
        
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email-field">
                      Emailadres:
                      <input
                        type="email"
                        id="email-field"
                        name="email"
                        {...register("email")}
                      />
                    </label>
        
                    <label htmlFor="password-field">
                      Wachtwoord:
                      <input
                        type="password"
                        id="password-field"
                        name="password"
                        {...register("password")}
                      />
                    </label>

                    <button
                      type="submit"
                      className="form-button"
                    >
                      Inloggen
                    </button>
              </form>
              <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
            </>
        );
    }
    
    export default SignIn;

<i>map pages > SignUp.js</i>

    import React from 'react';
    import { Link } from 'react-router-dom';
    import { useForm } from 'react-hook-form';
    
    function SignUp() {
        const { handleSubmit, register } = useForm();
        
        function onSubmit(data) {
        console.log(data);
        }
    
        return (
            <>
                <h1>Registreren</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
    
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email-field">
                  Email:
                  <input
                    type="email"
                    id="email-field"
                    name="email"
                    {...register("email")}
                  />
                </label>
        
                <label htmlFor="username-field">
                  Gebruikersnaam:
                  <input
                    type="text"
                    id="username-field"
                    name="username"
                    {...register("username")}
                  />
                </label>
        
                <label htmlFor="password-field">
                  Wachtwoord:
                  <input
                    type="password"
                    id="password-field"
                    name="password"
                    {...register("password")}
                  />
                </label>
                <button
                  type="submit"
                  className="form-button"
                >
                  Maak account aan
                </button>
              </form>
              <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
            </>
        );
    }

    export default SignUp;    

## JSON Web Tokens
Authenticatie is het verzekeren dat alleen de juiste personen bij de content kunnen. Deze data wordt opgeslagen in een back-end.

De versleuteling tussen de back-end en front-end verloopt vaak met JSON Web Tokens. Deze JSON Web Tokens bevatten veel informatie.

JSON Web Tokens (JWT's) volgen een specifieke, vastgestelde standaard om een soort digitale "handtekening" te creëren.

Er kunnen ook stukjes data in opgeslagen worden.

### Hoe ziet een JWT eruit: https://jwt.io/
Een JSON Web Token is wat we gebruiken om authenticatie te verzorgen in de webapplicaties.

![img.png](src/assets/img.png)

De token bestaat uit drie stukken.
1. <i>Header</i>: type van de token.
2. <i>Payload</i>: de data die erin opgeslagen is, zoals bijvoorbeeld een id, een tijdstempel of een naam etc.
3. <i>Verify signature</i>: deze is er om ervoor te zorgen dat we zeker weten dat de sleutel van een bepaalde bron komt en deze is als enige niet aan te passen.

Wanneer je een token hebt, kun je hem in de Encoded box zetten en dan zal de website hem decoden.

### Gegevens in de frontend

De JWT kunnen we kwijt in de <i>local storage</i> of in een <i>cookie</i>.

Een cookie is een klein text bestandje dat wordt opgeslagen in de browser. Om daar data kwijt te kunnen die we later weer kunnen bereiken.

Local storage is ook een stukje wat in de browser opgeslagen staat. De local storage kun je ook altijd bereiken. 

Op deze manier kunnen we altijd terughalen of de gebruiker bijvoorbeeld na het eten weer terugkomt op de website en verder wil, want dit wordt opgeslagen in de <i>browser</i>.

Wat je niet wilt opslaan zijn gegevens over gebruiker, zoals email of gebruikersnaam, want dit zou je kunnen uitlezen.

#### Local storage

De local storage kun je vinden wanneer je de dev tools opent en kiest voor application.

![img.png](src/assets/img2.png)

De website https://jwt.io/ heeft dingen in de local storage gezet. In deze storage kun je iets opslaan, aanpassen en wordt het aan de browser gehangen.

Wanneer je begint met programmeren is local storage makkelijker dan cookies, maar JSON Web Tokens plaats je liever in cookies.

#### Context

De gebruikersdata (gebruikersnaam, email, profielfoto etc.) willen we opslaan in de context van de app. Deze moet in heel de applicatie beschikbaar zijn, maar die gaan we niet in de local storage zetten.

Wanneer het in de context staat hebben de componenten altijd toegang tot deze informatie. Maar <i>let op</i>, wanneer de app opnieuw wordt opgestart is de context weer leeg. Op basis van de JWT, die wel in de browser blijft staan, kunnen we opnieuw de gebruikersgegevens ophalen.

Wat willen we niet opslaan in de context:
- JWT token
- het wachtwoord van de gebruiker

## Fake database server
We hebben een server nodig om data in op te slaan, om de echte situatie na te kunnen doen. Deze kun je vinden op github: https://github.com/danielle076/fake_server_react. In het db.json worden 'zogenaamd' de gebruikers opgeslagen.  

De nepserver draait apart van de frontend project, zodat we de "database" via een API kunnen benaderen. Zo kun je door gebruik te maken van specifieke eindpoints, data opvragen en toevoegen.

Voor je de server kunt gebruiken zul je de de dependencies moeten installeren met het commando: `inpm install`. 

Er is een speciaal script aangemaakt om deze server te runnen. Het letterlijke script kun je terugvinden in de package.json. Om de server te starten voer je het volgende commando in de terminal: `npm run json:server`.

Deze server draait op http://localhost:3000, wanneer je dit in de browser opent zul je alle beschikbare endpoints zien verschijnen.

<i>Let op</i>: omdat deze server op localhost:3000 draait is het belangrijk deze server te starten voor je een React-project start. React zal dan automatisch vragen om dat project op een andere port te draaien.

Het benaderen van de endpoints staat in de documentatie.
