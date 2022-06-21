class Services extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!doctype html>
    <html lang="en">
    
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
            integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <link href="css/mystyle.css" rel="stylesheet" type="text/css">
    
        <style>
            #tituloCarta {
                color: #F0F0F0;
                background-color: #1E5ABE;
                border-radius: 10px;
            }
            button{
                border-radius: 10px;
            }
        </style>
    
        <title>Soluciones Estratégicas de Gestión de Inventarios</title>
    </head>
    
    <body>
        <div id="table" class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-4">
    
                    <div class="card px-5" style="background-color: #F0F0F0">
                        <div id=tituloCarta>
                            <h5 class="text-center">Análisis de inventario</h5>
                        </div>
    
                        <p>
                            Aquí en SEGI consigue un análisis de tu empresa para la máxima optimización de tu inventario con nuestros expertos capacitados en el ambito profesional
                        </p>
    
                        <button class="btn btn-primary btn-sm">
                            Más información
                        </button>
                        <img src="" alt="">
                    </div>
    
                </div>
                <div class="col-md-4">
                    <div class="card px-5" style="background-color: #F0F0F0">
                        <div id=tituloCarta>
                            <h5 class="text-center">Desarrollo web</h5>
                        </div>
    
                        <p>
                            SEGI cuenta con desarrollo web para dar a conocer su negocio y de igual manera poder implementar funciones para que logré sus metas propuestas
                        </p>
    
                        <button class="btn btn-primary btn-sm">
                            Más información
                        </button>
                        <img src="" alt="">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card px-5" style="background-color: #F0F0F0">
    
                        <div id=tituloCarta>
                            <h5 class="text-center">Modelado de datos</h5>
                        </div>
                        <p>
                            Aprende a saber como relacionar la estructura de tu empresa con los servicios y productos que ofrece para que estos sean más optimos en su proceso
                        </p>
    
                        <button class="btn btn-primary btn-sm">
                            Más información
                        </button>
                        <img src="" alt="">
                    </div>
                </div>
            </div>
    
            <div class="row mt-5">
                <div class="col-md-4">
    
                    <div class="card px-5" style="background-color: #F0F0F0">
                        <div id=tituloCarta>
                            <h5 class="text-center">Capacitaciones</h5>
                        </div>
                        <p>
                            SEGI cuenta con personal experto competente para la enseñanza de los sistemas desarrollados aquí y en otros sistemas de información
                        </p>
    
                        <button class="btn btn-primary btn-sm">
                            Más información
                        </button>
                        <img src="" alt="">
                    </div>
    
                </div>
                <div class="col-md-4">
                    <div class="card px-5" style="background-color: #F0F0F0">
                        <div id=tituloCarta>
                            <h5 class="text-center">Aplicaciones de escritorio</h5>
                        </div>
                        <p>
                            Aplicaciones capaces de administrar bases de datos para el manejo de inventario
                            y generación de estadisticas para la venta y compra de los mismos
                        </p>
    
                        <button class="btn btn-primary btn-sm">
                            Más información
                        </button>
                        <img src="" alt="">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card px-5" style="background-color: #F0F0F0">
    
                        <div id=tituloCarta>
                            <h5 class="text-center">Equipo de computo y otros</h5>
                        </div>
                        <p>
                            Si no cuenta con equipo para manejar sistemas de información, SEGI le ofrece las mejores opciones que se ajusten a las necesidades de su empresa
                        </p>
    
                        <button class="btn btn-primary btn-sm">
                            Más información
                        </button>
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF"
            crossorigin="anonymous"></script>
    
    </body>
    
    </html>
    `;
  }
}

window.customElements.define("services-component", Services);
