/* export default{
    port: 3000,
    fetch(request: Request){
        const { url, method } = request 

        const { pathname } = new URL(url)

        console.log( { pathname })

        if(pathname === '/' && method === 'GET') {
            return new Response(`<h1>HOLA MUNDO<h1>`, {
                status: 200,
                headers: {
                    'Content-Type': 'text/html'
                }
            })
        }

        if( pathname === '/users' && method === 'GET') {
            return new Response(JSON.stringify([
                {
                    name: 'luis',
                    articulos : {
                        comidas:{
                            frias: '',
                            calientes: ''
                        }, 
                        objectos: {
                            objecto1: [],
                            objecto2: []
                        }
                    }
                },
                {
                    name: 'Almeida'
                },
                {
                    name: 'Parejo'
                }
            ]), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        return new Response('', { status: 404 })
    }
} */
