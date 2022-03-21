# WEB BSALE

Servidor que disponibiliza un API REST para la compra de productos en línea.

[API REST](https://api-bsale-server.herokuapp.com/api/v1/products)

## Tecnologías
---
*  [Node.js](https://nodejs.org/) - Lenguaje de programación
* [Express](https://expressjs.com/) - Framework para el Servidor
*  [Sequelize](https://sequelize.org/) - ORM para la base de datos
*  [dotenv](https://www.npmjs.com/package/dotenv) - Manejo de variables de entorno



## Requisitos de Instalación

Es necesario tener instalado [Node.js](https://nodejs.org/en/).

### Desarrollo
Ejecutar los siguientes comandos para ejecutar la aplicación en modo de desarrollo:
```
npm install
```
```
npm run dev
```

### Producción
Ejecutar los siguientes comandos para ejecutar la aplicación en modo de producción:
```
npm install
```
```
npm run build
```
```
npm run start
```
# API REST
La API REST disponibiliza el siguiente endpoint:

    [GET] api/v1/products/:id
    Retorna un producto en base a su ID

    [GET] api/v1/products
    Retorna todos los productos

Addicionalmente se puede filtrar por cada uno de los campos de la tabla productos, por ejemplo:

    [GET] api/v1/products?name=producto
    Retorna todos los productos que coincidan con el nombre del producto

De la misma forma, se pueden ordenar los resultados de la consulta, por ejemplo:

    [GET] api/v1/products?name=pisco&order=price:asc
    Retorna todos los productos que contengan la palabra pisco ordenados por el precio de forma ascendente

Finalmente es posible paginar los resultados de la consulta, por ejemplo:

    [GET] api/v1/products?name=pisco&page=2&limit=2
    Retorna 2 productos que contengan la palabra pisco, comenzando en la página 2


## Documentación Postman
[Documentación Postman](https://documenter.getpostman.com/view/12226122/UVsQr3PU)
    


