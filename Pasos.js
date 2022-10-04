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
    - Agregamos estilos al css para que se vea como grilla y el tamaño de la card

    - Creamos el componente SingleCard.js con sus css
    - insertamos el componente en App.js , lo mapeamos y pasamos como prop la key={card.id} y la card={card} para poder utilizalo en SingleCard.js
    

    - Hago un estado para almacenar las tarjetas seleccionadas por el usuario , para luego comparar esas 2 tarjetas para ver si coinciden o no. Voy a crear un estado para cada carta elegida 
    - Voy a App.js agrego los estados , y comienzan null
      const [choiceOne, setChoiceOne] = useState(null)//estado para la primer carta elegida
    - cuando el usuardio hace click en la primera tarjeta se actualiza el estado 

    - Agregamos el evento onClick a cada tarjeta , pero en la parte posterior para darla vuelta , le pasamos la funcion handleClick 
    - creamos esa funcion(handleClick) y dentro queremos actulizar el estado , por si es la choiceOne o choiceTwo, para esto hacemos una funcion adentro de esta misma que me permita distinguir si es la primera carta o la segunda. 

    - Voy a App.js , creo la funcion handleChoice = (card) =>{}, esta funcion , toma como argumento la card elegida,
    - tengo que pasar la funcion al componnete SingleCArd.js, la paso como prop
   - Voy a SingleCard y recibo el como parametro la prop
   - metemos el handleChoice adentro de la funcion handleClick y le paso la card seleccionada 
   handleChoice(card)
   - Tenemos que verificar si la carta elegida es de primera opcion o segunda opcion , para eso, vamos a usar la logica que si el estado tiene valor, ya hay una carta seleccionada, y si el estado no contiene ningun valor quiere decir que no hay ninguna carta seleccionada. Asi que si no tiene valor vamos a actulizar el estado de la choiceOne y si tiene valor, actualizamos el estado de la choiceTwo. Para eso vamos a usar un operador ternario. 
   En App.js dentro de la funcion handleChoice 
    choiceOne ? setChoiceTwo (card) : setChoiceTwo(card)

- Una vez que tengamos las opciones eleccionadas es comparar esas dos para ver si coinciden, para saber si coinciden podemos verificar si tiene la misma ruta 

- hacemos una funcion que resetea la cartas seleccionadas e ingresa un turno
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }
- Tenemos que usar un hook para comparar las tarjetas 
- hacemos un useEffect para comparar, le paso como dependencias  la carta uno y la dos, 
useEffect(()=>{},[choiceOne, choiceTwo])
esta funcion se activa una vez al comenzar pero tambien una vez que se selecciona una card, 
- Primero verificamos si hay algun valor tanto para la opcion uno como para la dos , hacemos una verificaion para esto y si la pasa compara. Para comparar tienen en comun el src , lo verificamos. y si coinciden . tenemos llamar a la funcion resetTurn() para que una vez que hicimos la comparacion debemos establecer la opcion uno en null y la opcion dos en null y luego agregar un turno , sino las cartas no coinciden y tambien se resetea el turno

-    if(choiceOne && choiceTwo){

      if(choiceOne.src === choiceTwo.src){
        console.log('those cards match - esas cartas coinciden');
        resetTurn();
      }else{
        console.log('those cards do not match')
      }
    }


    - Lo proximo por hacer es que el par de cartas que coinciden queden dadas vuelta, para esto tenemos que ir al objeto cardImages y agregar una propiedad para cada uno que inicialmente se configurara como falso
     matched :false
    - Hay que establecer la propiedad coincidente para que sea verdadera para las dos opciones de tarjeta si coinciden, para esto lo que debemos hacer es altualizar el estado de las tarjetas con el useEffect, adentroi de la validacion si coinciden, ponemos la funcion setCards

    si la opcion uno, coincide con la dos, tenemos unn match que lo actualizamos con el estaqdo de la tarjeta(setCards), tomamos el estado previo de la tarjeta para actualizar el estado y retornamos y mapeamos una array de tarjetas, para eso tomamos las cartas previas y activamos una funcion para cada tarjeta y cada vez que activamos una funcion devolvemos el objeto que queremos colocar dentro del nuevo array


    - Lo Proximo es girar las cartas, ya mostramos en consola cuando coinciden y cambia el estado de matched a true. Para esto voy a componente <SingleCard/> dentro de App.js y le agrego una propiedad a cafa tarjeta (flipped={true/false}) - puede ser true o false y para determinar cual es , hay tres escenarios cuando se voltea deberia ser verdadero
    1  - si la carta que dimos vuelta es igual a la eleccion uno
    2  - si la carta que dimos vuelta es igual a la eleccion dos
    3  - si la tarjeta coincidio en la propiedad matched
        flipped={card === choiceOne || card || choiceTwo || card.matched}
     
-Vamos al componente SingleCard.js y aceptamos el flipped como prop
- en el return agregamos una clase dinamica al div con un operador ternario, dice que cuando es verdadero aplica la clase flipped, si no es verdadero no quiero aplicar , y es un string vacio " " .
    div className={flipped ? "flipped": "div-card-front"

- Vamos al archivo css y tenemos en la clase .card.front, una transform de rotate90deg que es para que arranque dada vuelta y la clase .flipped.front{} 

- vamos a agregarle un tiempo de retardo cuando se cambia de turno para que el usuario tenga un segundo para miarar las cartas que habia elegido

- lo proximo es agregar un periodo de tiempo para volver a elegir cartas, esto se debe a que si aprieto rapido piedo seleccionar 3 cartas, Para eso vamos a App,js  al componente <SingleCard/> y agregamos una propiedad para pasar  
    disabled= {true /false}
- Vamos a crear un estado const [disabled, setDisabled] = useState(false) , que comienza en falso
- Voy a donde hago la comparacion (useEffect)   y quiero configurar el desabilitado, para que sea tru 
    setDisabled(true)
- Una vez que todo esta hecho y nosotros reniciamos el turno resetTurn() , volvemos a configurar para que el desabilitado este en false 
    setDisabled(false)
- pasamops el valor desabled a la prop desabled
    disabled={disabled}
- Aceptamos la prop disabled en SingleCard 
- Verificamos si la tarjeta esta disabled o no en la funcion handleClick() y decimos entonces si no esta deshabilitada podemos hacer la eleccion de la carta , por eso metemos el handleChoice(card) dentro de la verificacion 
        const handleClick = () => {
        if (!disabled){
            handleChoice(card)
        }
    }
- El problema de ahora es que las cartas estan deshabilitadas cuando hago click, el problema esta en el useEffect que se monta por primera vez cuando se carga la pantalla y lo estamos con disabled en true , y cuando es true no podemos ahcer click en las tarjetas 
- La correccion es cambiar de lugar el sabled y agregarlo cuando se ahce la primera verificacion.  
  useEffect(() => {
    if(choiceOne && choiceTwo){
      setDisabled(true)
    }
  }    

- Hay q mostrar el nuero de turnos en la pantalla para interatuar con ela usuario, para eso  agrego
      <p>Intentos: {turns}</p>

- Falta Que el juego comience automaticamente 
  useEffect(()=>{
    shuffleCards()
  },[])

- Falta que cuando comenzamos un nuevo juego , quiero restablecer la opcion uno y la dos en caso de que todavia haya alguna tarjeta seleccionada, AGREGAMOS shuffleCards
      setChoiceOne(null)
      setChoiceTwo(null)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(()=> Math.random() - 0.5)
      .map((card)=>({ ...card, id : Math.random() }))
      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(shuffledCards)
      setTurns(0)
  }



   */  