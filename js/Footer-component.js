class Footer extends HTMLElement {
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
            #table {
    
                position: absolute;
                background-color: rgb(224, 224, 224);
                top: 600px;
            }
        </style>
    
        <title>Soluciones Estratégicas de Gestión de Inventarios</title>
    </head>
    
    <body>
        <div id="table" class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <div class="container">
                        <table class="">
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="assets/icons/home.png" height="50" width="50" class="mx-auto d-block">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        Dirección
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        probando contenido
                                        probando contenido
                                        probando contenido
                                        probando contenido
                                        probando contenido
                                        probando contenido
    
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    
                </div>
                <div class="col-md-3">
                    <div class="container">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="assets/icons/email.png" height="50" width="50" class="mx-auto d-block">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        Correo electronico
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        probando contenido
                                        probando contenido
                                        probando contenido
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="container">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="assets/icons/phone-call.png" height="50" width="50"
                                            class="mx-auto d-block">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        Telefono
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        probando contenido
                                        probando contenido
                                        probando contenido
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="container">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="assets/icons/time.png" height="50" width="50" class="mx-auto d-block">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        Horario
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        probando contenido
                                        probansdo contenido
                                        probando contenido
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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

window.customElements.define("footer-component", Footer);
