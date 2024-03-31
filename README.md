# Cómo funciona el hook useRef en React

#### En términos simples, useRef se utiliza para acceder y manipular directamente elementos del DOM desde un componente de React, sin tener que recurrir a consultas o manipulaciones directas del DOM.

#### Importante, no olvidar que useRef, es un hook de React que permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente.

#### Para correr el proyecto, solo basta instalar las dependencias y correr el proyecto

### Comparación: Manipulación de formularios con useRef vs. Estados y onChange en React

    useRef:

        Ventaja:
            Permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente
            Útil para acceder y manipular elementos del DOM directamente sin causar renderizaciones adicionales.
        Desventaja:
            No actualiza automáticamente el componente cuando cambia su valor.

    onChange tradicional:

        Ventaja:
            Manejo tradicional de cambios en elementos de formulario y actualización del estado del componente.
        Desventaja:
            Puede causar renderizaciones costosas si se abusa, ya que dispara una renderización cada vez que cambia el valor.

#### Para correr el proyecto, solo basta instalar las dependencias y correr el proyecto
npm install
npm run dev

#### Resultado final

![](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/como-usar-el-hook-useRef.png)

### Expresiones de Gratitud 🎁

    Comenta a otros sobre este proyecto 📢
    Invita una cerveza 🍺 o un café ☕
    Paypal iamdeveloper86@gmail.com
    Da las gracias públicamente 🤓.

## No olvides SUSCRIBIRTE 👍
