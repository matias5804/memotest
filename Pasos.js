   /*
   -Creamos un btn para jugar otra de nuevo. 
   -importamos fuientes y coleres en el css
   -Creamos un array de tarjetas, en el que cada elemento del array apunta a una ruta de una imagen específica => const cardImages = ["src":"./..""]
   -Creamos una funcion dentro del componente que va a hacer 3 cosas por nosotros // shuffle cards // barajar las cartas
   1- va a duplicar cada tarjeta 1 vez, 
   2- Aleatorizará el orden de la matrix utilizando un metodo de clasificacion 
   3- Aplica una identificacion aleatoria a cada una de las tarjetas 
   - adentro de la funcion creo una constante llamada shuffledCards = [] para duplicar las cartas, las distribullo  usando el spring operator pero 2 veces
   const shuffledCards = [...cardImages, ...cardImages]
   - vamos a mezclar las cartas y ordenarlas.si el numero da negativo las cartas coinciden y quedan descubiertas y si dan positivo se dan vuelta  
   .sort(()=> Math.random() - 0.5)
   - mapeo el arrray que ya esta ordenado , a cada elemento le tengo que dar una identificacion, y queremos q retorne un objeto que toma todas las propietasdes de la card y la card tambien se la toma como un argumento y tambien le agregamos un propiedad id, y esa id va a ser aleatoria 
   - el resultado final va a ser la constante shuffledCard 
   -Ahora creamos un estado para almacenar nuestras tarjetas 
   const [cards, serCards] = useState([]), comienza con un array vacio 
   - abajo de la funcion para barajar cartas, voy a actualizar el estado ,
   setCards(shuffledCards) que adentro pasamos las cartas barajadas

   - Vamos a crear un estado para los turnos const [turns, setTurns] = useState(0), comienza en 0 
   - insertamos la actulizacion en la funcion 
        setTurns(0)
   * cada vez que hacemos clivk en el btn llamamos a barajar de nuevo y los turnos vuelven a 0
    - Conectamos el btn con la funcion shuffleCards
    onClick={shuffleCards}
    -Puedo revisar por consola si esto esta funcionando. 

    - vammos a generar una plantilla para cada card
    - creamos un div donde vamos a meter todas las cards, hay q mapear el estado de las card barajadas y por cada una hacer un div, donde vamos s insertar la card, cada uno con su key, - adentro del div, hacemos 2 divs mas, uno para cada lado de la card. (front y cover)



   */  