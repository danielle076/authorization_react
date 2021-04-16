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
