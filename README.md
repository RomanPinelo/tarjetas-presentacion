# Tarjetas de presentación

Tarjetas de presentación con React


## Construido con 🛠️

* React


## Autores ✒️

José Román Pinelo Escobar


### Explicación

En esta página se muestran 4 tarjetas sencillas de presentación y están hechas con React. Para crear el proyecto se utilizó la herramienta Vite.js.

![imagen1](https://user-images.githubusercontent.com/71656431/192024091-9491156a-e763-46ce-9b54-1b99dccad555.png)


El reto consistió en construir un array de objetos en un archivo externo, este se exporta e importa en la aplicación principal. Los datos guardados son simplemente una URL de las imágenes, el id de usuario y una especie de testimonio.

![imagen2](https://user-images.githubusercontent.com/71656431/192024090-d56b39b2-a9c9-4be5-b4d7-c417de491be7.png)


Después construir un solo componente de la tarjeta, recibiendo a través de las propiedades (props) los datos del array.

![imagen3](https://user-images.githubusercontent.com/71656431/192024089-39661371-ee1f-4cc4-8e07-eeaacad21058.png)


Finalmente, a partir del array, se generan dichas tarjetas con el método map(). De esta forma solo se puede ir actualizando el archivo del array y se genera su tarjeta.

![imagen4](https://user-images.githubusercontent.com/71656431/192024087-0dadfc59-a5c1-4a20-984a-fa3f2660214c.png)


El principal reto fue que cada testimonio tiene una parte especifica resaltada en negritas. En un principio en el texto del testimonio se puso como tal esa parte entre las etiquetas HTML <strong> </strong >, pero aparecía tal cual y no resaltaba el texto.
Lo que se hizo fue dividir el texto en partes, y cada parte guardarla en un array. En el componente se pusieron las etiquetas HTML <strong> </ strong > y cada parte del testimonio en su lugar (antes, dentro y después de las etiquetas). Si la parte resaltada esta al inicio o final, se puso un string vacío (“”).
De esta forma se resalta solo lo que cada usuario desee.

![imagen5](https://user-images.githubusercontent.com/71656431/192024085-a1b4329b-519f-4920-9ba9-6e7593b4ca59.png)

![imagen6](https://user-images.githubusercontent.com/71656431/192024082-f96b9acd-c809-445d-9e7c-a932944a7153.png)


En el siguiente link puedes ver la página funcionando: 

https://romanpinelo.github.io/tarjetas-presentacion/