## curso-platzi-react-avanzado ⚛️

Repositorio con el código del [Curso Avanzado de React de Platzi](https://platzi.com/cursos/react-avanzado/)

### SVGR: de SVG a componente de ReactJS

[ maketext.io](https://maketext.io/ " maketext.io") para crear nuestro logo y descargarlo en SVG. Posteriormente a esto utilizaremos [SVGOMG](https://jakearchibald.github.io/svgomg/ "SVGOMG") para optimizar nuestro logo y tener una mejor versión para usarla en nuestro proyecto.

Luego para convertir nuestro logo svg en un componente utilizaremos [SVGR](https://react-svgr.com/playground/ "SVGR").

### Soporte a navegadores viejos
[Polifyll](https://github.com/w3c/IntersectionObserver/tree/main/polyfill "folifyll");


### GraphQL y React Apollo

GraphQL es un lenguaje creado por Facebook para obtener solo los datos que necesitamos en nuestra aplicación. Imaginemos que tenemos una REST API con WordPress, él nos entrega un JSON con mucha data innecesaria y solo queremos unos cuantos fields; GraphQL hace posible obtener únicamente esa data.

React Apollo es un cliente que nos va a permitir conectarnos a un servidor GraphQL.

Vamos a instalar `npm i apollo-boost`, una utilidad que nos permite inicializar nuestra conexión con un servidor de Apollo muy rápidamente y sin configuración, necesitaremos `npm i react-apollo` el cual es la integración de Apollo con React y finalmente `npm i graphql`.

Configuraremos nuestro `index.js` para inicializar nuestro cliente de Apollo con GraphQL de la siguiente manera:

    // index.js
    
    {/*...*/}
    import ApolloClient from 'apollo-boost'
    import { ApolloProvider } from 'react-apollo'
    
    {/*...*/}
    
    const client = new ApolloClient({
            uri: 'URL_DEL_BACKEND' // En el proyecto usamos https://petgram-server.midudev.now.sh/graphql aquí debes colocar el tuyo
    })
    
    ReactDOM.render(
            <ApolloProvider client={client}>
                    <App />
            ApolloProvider>,
            document.getElementById('app')
    )

### useMutation

El componente de mutation es otro componente importante en una aplicación Apollo. Es un componente React que proporciona una función para ejecutar una mutation de GraphQL para así alterar la data. Además, rastrea el estado de carga, finalización y error de esa mutación.

### JSON WEB TOKEN

Un JSON Web Token (JWT) es un estándar abierto para crear tokens y asegurar que el envío de datos es confiable y seguro. Van a ser muy útiles para implementar la lógica de los likes pues solamente los usuarios autentificados podrán dar like.

Un JWT se conforma de 3 partes:

Header: Es un objeto que define qué algoritmo y tipo tiene el token.
Payload: La información que almacenamos en el token.
Verify Signature: Una encriptación del header más el payload más tu llave secreta.
Para utilizar nuestro JWT necesitamos añadirlo al header authorization de las peticiones HTTP que hagamos con el texto Bearer [token].