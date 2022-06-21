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
                background-color: rgb(224, 224, 224);
                top: 600px;
            }
            
        </style>
    
        <title>Soluciones Estratégicas de Gestión de Inventarios</title>
    </head>
    
    <body>
        <div id="table" class="container-fluid" style="padding: 2%;">
            <div class="row">
                <div class="col-md-3">
                    <div class="container">
                        <table class="mx-5">
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="assets/icons/hogar.png" height="50" width="50" class="mx-auto d-block">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center" style="font-weight: 800;">
                                        Dirección
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        Av. Adolfo López Mateos Ote. 1001, San Luís, 20250 Aguascalientes, Ags.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    
                </div>
                <div class="col-md-3">
                    <div class="container">
                        <table class="mx-5">
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="assets/icons/email.png" height="50" width="50" class="mx-auto d-block">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center" style="font-weight: 800;">
                                        Correo electronico
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        segi.inventarios@gmail.com
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="container">
                        <table class="mx-auto">
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="assets/icons/llamada-telefonica.png" height="50" width="50"
                                            class="mx-auto d-block">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center" style="font-weight: 800;">
                                        Telefono
                                    </td>
                                </tr>
                                <tr>
                                    <td>    
                                        +52 (449) 329 6380                                   
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="container">
                        <table class="mx-5">
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="assets/icons/reloj.png" height="50" width="50" class="mx-auto d-block">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center" style="font-weight: 800;">
                                        Horario
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        Lunes a Viernes de 8:00 AM 18:00 PM
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