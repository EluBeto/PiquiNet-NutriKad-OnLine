export default {
    namespaced: true,
    state: {
        foodsWomen: {
            oneWeek: {
                breakfastOrDinner: [
                    {
                        foodId: 1,
                        image: '/img/desayuno.jpg',
                        title: '¡Huevito rappidito!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>Huevo entero: 2 piezas</li>
                            <li>Espinacas 1 taza</li>
                            <li>Cebolla y chile al gusto</li>
                        </ul>  . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>Huevo entero: 2 piezas</li>
                            <li>Espinacas 1 taza</li>
                            <li>Cebolla y chile al gusto</li>
                            <li>Tortilla de maíz 1 pieza </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                                En una sartén caliente cocina la cebolla, cuando esté suave, agrega el huevo, y revuelve.
                            </li>
                            <li>
                                Al final añade las espinacas.
                            </li>
                            <li>
                            Emplata.
                                <ul>
                                    <li>
                                    Acompaña tu omelette con la tortilla.
                                    </li>
                                    <li>
                                    Manzana amarilla 1 pieza
                                    </li>
                                    <li>
                                    Almendras 5 piezas
                                    </li>
                                </ul>
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 2,
                        image: '/img/desayuno.jpg',
                        title: '¡Taco rojo!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>½ jitomate rebanado</li>
                            <li>1 jitomate cocido</li>
                            <li>pedacito de cebolla cocida</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>½ jitomate rebanado</li>
                            <li>1 jitomate cocido</li>
                            <li>pedacito de cebolla cocida</li>
                            <li>2 cucharaditas chile chipotle enlatado</li>
                            <li>1 tortilla de maíz</li>
                            <li>60 gramos pollo en trozos (fajitas)</li>
                            <li>Chorrito de agua</li>
                            <li>Pizca de orégano, pizca sal y pimienta </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                                Licua el jitomate cocido, cebolla, ajo y chile chipotle con un chorrito de agua.
                            </li>
                            <li>
                                Licua muy bien.
                            </li>
                            <li>
                                Vierte la salsa en una olla y calienta hasta que suelte el hervor.
                            </li>
                            <li>
                            Agrega el pollo y mezcla hasta que se cocine muy bien.
                            </li>
                            <li>
                            Calienta la tortilla y rellénala con el pollo.
                            </li>
                            <li>
                            Agrega un poco de orégano, sal y pimienta y el jitomate rebanado.
                            </li>
                        </ol>       
                        <br>              
                        Manzana amarilla 1 pieza   
                        Almendras 5 piezas
                        `
                    },
                    {
                        foodId: 3,
                        image: '/img/desayuno.jpg',
                        title: '¡Pastel de zanahoria y manzana!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1/2 taza zanahoria rallada </li>
                            <li>1/2 manzana en puré </li>
                            <li>3 cucharadas harina de avena </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1/2 taza zanahoria rallada </li>
                            <li>1/2 manzana en puré </li>
                            <li>3 cucharadas harina de avena </li>
                            <li>2 huevos </li>
                            <li>1 cucharadita polvo de hornear, 1 cucharadita extracto de vainilla (Libre)</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Licua todos los ingredientes hasta tener una mezcla homogénea.
                            </li>
                            <li>
                            Vierte sobre un recipiente apto para horno (puede ser una taza común o un molde de silicona).
                            </li>
                            <li>
                            Colócalo en el horno de microondas por 4 a 5 minutos hasta que esté cocido. 
                            </li>
                            <li>
                            Desmolda y emplata.
                            </li>
                            <li>
                            Topping: mezcla la manzana con la canela en una taza y calienta por 1 minuto en el horno de microondas.
                            </li>
                            <li>
                            Coloca el topping de manzana y las nueces.
                            </li>
                            <li>
                            Decora con:
                                <ul>
                                    <li>
                                    1/2 manzana en cubitos 
                                    </li>
                                    <li>
                                    3.5 mitades de nuez trocedas 
                                    </li>
                                    <li>
                                    Pizca canela en polvo (Libre)
                                    </li>
                                </ul>
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 4,
                        image: '/img/desayuno.jpg',
                        title: '¡Espagueti con vegetales!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 jitomate en cubitos</li>
                            <li>¼ taza brócoli picado</li>
                            <li>¼ taza calabacitas picadas</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 jitomate en cubitos</li>
                            <li>¼ taza brócoli picado</li>
                            <li>¼ taza calabacitas picadas</li>
                            <li>¼ taza zanahoria picada (Libre)</li>
                            <li>1/3 taza espagueti cocido </li>
                            <li>60 gramos carne molida de res</li>
                            <li>15 gramos aguacate </li>
                            <li>Pizca de pimienta (Libre) </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                                En una sartén caliente cocina la cebolla, cuando esté suave, agrega el huevo, y revuelve.
                            </li>
                            <li>
                                Al final añade las espinacas.
                            </li>
                            <li>
                            Emplata.
                                <ul>
                                    <li>
                                    Acompaña tu omelette con la tortilla.
                                    </li>
                                    <li>
                                    Manzana amarilla 1 pieza
                                    </li>
                                    <li>
                                    Almendras 5 piezas
                                    </li>
                                </ul>
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 5,
                        image: '/img/desayuno.jpg',
                        title: '¡Nutrikad-sándwich!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>
                                Huevo entero: 2 piezas
                            </li>
                            <li>
                            40 gr queso panela
                            </li>
                            <li>
                            Huevo estrellado 1 pieza
                            </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>
                                Huevo entero: 2 piezas
                            </li>
                            <li>
                            40 gr queso panela
                            </li>
                            <li>
                            Huevo estrellado 1 pieza
                            </li>
                            <li>
                            2 hojas de lechuga
                            </li>
                            <li>
                            Zanahoria rallada (libre)
                            </li>
                            <li>
                            1/5 de pieza de aguacate
                            </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Coloca todos los ingredientes entre las 2 rebanadas de pan
                            </li>
                            <li>
                            Guayabas 2 piezas
                            </li>
                        </ol>                     
                        `
                    }
                ],
                detoxJuice: [
                    {
                        foodId: 1,
                        image: '/img/juice.jpg',
                        title: '¡Jugo  green detóx basic!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 taza de espinacas</li>
                            <li>1/2 vara de apio</li>
                            <li>1 nopal pequeño </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 taza de espinacas</li>
                            <li>1/2 vara de apio</li>
                            <li>1 nopal pequeño </li>
                            <li>3 ramitas de perejil (Libre) </li>
                            <li>Jugo de 1 naranja  (Libre) </li>
                            <li>1 taza de agua (Libre) </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                                ¡Licua y disfruta!
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 2,
                        image: '/img/juice.jpg',
                        title: '¡Jugo vitaminpower!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 zanahoria</li>
                            <li>Jugo de 1 naranja </li>
                            <li>1 nopal pequeño </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 zanahoria</li>
                            <li>Jugo de 1 naranja </li>
                            <li>1 nopal pequeño </li>
                            <li>Jugo de 1 limón </li>
                            <li>1 taza de agua </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                                ¡Licua y disfruta!
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 3,
                        image: '/img/juice.jpg',
                        title: '¡Jugo súper detóx !',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>½ tazade betabel </li>
                            <li>½  pepino sin cascara y sin semillas </li>
                            <li>Jugo de 1 naranja </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>½ tazade betabel </li>
                        <li>½  pepino sin cascara y sin semillas </li>
                        <li>Jugo de 1 naranja </li>
                            <li>1 cm cucharadita de cúrcuma</li>
                            <li>1cm de jengibre </li>
                            <li>1 taza de agua </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                                ¡Licua y disfruta!
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 4,
                        image: '/img/juice.jpg',
                        title: '¡Jugo antioxidante!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>½ taza betabel</li>
                            <li>3 fresas </li>
                            <li>½ pieza de pepino</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>½ taza betabel</li>
                            <li>3 fresas </li>
                            <li>½ pieza de pepino</li>
                            <li>1 taza de agua</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                                ¡Licua y disfruta!
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 5,
                        image: '/img/juice.jpg',
                        title: '¡Mojito fit detóx!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1/2 pepino</li>
                            <li>2 limones </li>
                            <li>500 ml de agua </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>1/2 pepino</li>
                            <li>2 limones </li>
                            <li>500 ml de agua </li>
                            <li>1 puño de hierbabuena</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Pela el pepino, retira las semillas, y parte en rodajas. 
                            </li>
                            <li>
                            Parte en rodajas los limones. 
                            </li>
                            <li>
                            Pon el agua en una jarra, agrega las verduras  y deja reposar por varias horas. 
                            </li>
                        </ol>                     
                        `
                    }
                ],
                foodTickets: [
                    {
                        foodId: 1,
                        image: '/img/tickets.jpg',
                        title: '¡Arroz blanco falso!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 taza de pedacitos de brócoli y coliflor </li>
                            <li>¼  taza de zanahoria picada en cubitos pequeños </li>
                        </ul> . . . 
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 taza de pedacitos de brócoli y coliflor </li>
                            <li>¼  taza de zanahoria picada en cubitos pequeños </li>
                            <li>¼  taza de chícharos </li>
                            <li>Pedacito de cebolla </li>
                            <li>1/2 diente de ajo</li>
                            <li>1 taza de agua </li>
                            <li>Sal y pimienta</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Licua el agua con la cebolla y el ajo. 
                            </li>
                            <li>
                            En un sartén caliente pasa lo licuado, los pedacitos de brócoli y colifor y las verduras. Condimenta al gusto. 
                            </li>
                            <li>
                            Deja de cocinar por 10 minutos a fuego bajo o hasta que estén bien cocidos.
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 2,
                        image: '/img/tickets.jpg',
                        title: '¡Crema de verduras!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>3 floretes de brócoli  </li>
                            <li>Pedacito de chayote </li>
                            <li>Pedacito de zanahoria </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>3 floretes de brócoli  </li>
                        <li>Pedacito de chayote </li>
                        <li>Pedacito de zanahoria </li>
                        <li>Pedacito de cebolla  </li>
                            <li>3 varitas de cilantro </li>
                            <li>Sal, pimienta y ajo en polvo</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Coloca las verduras, cebolla y cilantro en una cazuela, cubre con agua y agrega sal. Hierve hasta que se hayan ablandado por completo. 
                            </li>
                            <li>
                            Licua las verduras con un poco del agua donde se cocieron. 
                            </li>
                            <li>
                            1.	Pasa lo licuado a una cazuela, condimenta con ajo en polvo, sal y pimienta, ve agregando poco a poco agua hasta conseguir la textura deseada. 
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 3,
                        image: '/img/tickets.jpg',
                        title: '¡Ensalada de peinos!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>Puño de hojas de lechuga</li>
                            <li>1/2 pepino</li>
                            <li>Pedacito de cebolla morada rebanada</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>Puño de hojas de lechuga</li>
                        <li>1/2 pepino</li>
                        <li>Pedacito de cebolla morada rebanada</li>
                            <li>Jugo de medio limón </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Pica el pepino y la lechuga y pasa a un bowl.  
                            </li>
                            <li>
                            Agrega el resto de los ingredientes al bowl y revuelve para que todo se integre.
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 4,
                        image: '/img/tickets.jpg',
                        title: '¡Mix de vegetales al fuego!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>5 champiñones </li>
                            <li>Pedacito de cebolla  </li>
                            <li>1/2 pimiento mediano amarillo </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>5 champiñones </li>
                        <li>Pedacito de cebolla  </li>
                        <li>1/2 pimiento mediano amarillo </li>
                            <li>1/2 pimiento mediano rojo </li>
                            <li>1/2 taza germen de trigo </li>
                            <li>1 cucharada de hojuelas de chile seco </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Pica las verduras en cubos medianos. 
                            </li>
                            <li>
                            Pasa a un sartén caliente junto con 2 cucharadas de agua, deja cocinar a fuego bajo por 7 minutos. 
                            </li>
                            <li>
                            Decora con las hojuelas de chile seco. 
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 5,
                        image: '/img/tickets.jpg',
                        title: '¡Sopa de verduras!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>Recaudo
                                <ul>
                                    <li>1 jitomate, </li>
                                    <li>pedacito de cebolla</li>
                                </ul>
                            </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>Recaudo
                                <ul>
                                    <li>1 jitomate, </li>
                                    <li>pedacito de cebolla</li>
                                    <li>1 diente de ajo pequeño</li>
                                    <li>3 varitas de cilantro</li>
                                </ul>
                            </li>
                            <li>1/2 taza de ejotes</li>
                            <li>1/2 taza de zanahoria </li>
                            <li>1/4 taza de calabacita  </li>
                            <li>2 tazas de agua o 2 tazas de caldo de verdura</li>
                            <li>Sal y pimienta</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Licua los ingredientes del recaudo con el agua/caldo.  
                            </li>
                            <li>
                            Pasa el caldo a una cazuela junto con las verduras picadas. 
                            </li>
                            <li>
                            Salpimienta al gusto y deja cocinar hasta que las verduras ablanden.
                            </li>
                        </ol>                     
                        `
                    }
                ],
                foods: [
                    {
                        foodId: 1,
                        image: '/img/comida.jpg',
                        title: '¡Tostadas de pollo!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>
                            ½ taza zanahoria rallada 
                            </li>
                            <li>
                            ½ pimiento verde en tiras
                            </li>
                            
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>
                            ½ taza zanahoria rallada 
                            </li>
                            <li>
                            ½ pimiento verde en tiras 
                            </li>
                            <li>
                            2 tostadas sanissimo 
                            </li>
                            <li>
                            90 gramos pechuga de pollo deshebrada cocida 
                            </li>
                            <li>60 gramos queso Oaxaca light rallado </li>
                            <li>1/5  de pieza aguacate </li>
                        </lul>
                        </br>    
                        <small><b>Salsa</b></small>
                        <ul>
                            <li>
                            2 jitomates cocidos 
                            </li>
                            <li>
                            1 chile serrano cocido
                            </li>
                            <li>
                            pedacito cebolla cocida al gusto
                            </li>
                            <li>1 diente de ajo  </li>
                        </lul>                
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            <b>Para la salsa</b>: licua todos los ingredientes.
                                <ul>
                                    <li>
                                    Cuela la salsa.
                                    </li>
                                </ul>
                            </li>
                            <li>
                            Vierte la salsa una olla, agrega el pollo, zanahoria y pimiento.
                            </li>
                            <li>
                            Calienta hasta que suelte el hervor. Reserva.
                            </li>
                            <li>
                            Emplata las tostadas.
                            </li>
                            <li>
                            Agrega el aguacate machacado sobre ellas.
                            </li>
                            <li>
                            Coloca la tinga sobre las tostadas.
                            </li>
                            <li>
                            Decora con el queso.
                            </li>
                        </ol>                       
                        `
                    },
                    {
                        foodId: 2,
                        image: '/img/comida.jpg',
                        title: '¡Taquitos Nutrikadfit!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1/3 betabel rallado</li>
                            <li>½ pimiento amarillo en tiras</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                                    <li>1/3 betabel rallado</li>
                                    <li>½ pimiento amarillo en tiras</li>
                                    <li>puñito germen de alfalfa</li>
                                    <li>pedacito chile serrano rebanado </li>
                                    <li>2 tortillas de maíz </li>
                                    <li>200 gramos filete de pescado </li>
                                    <li>15 gramos aguacate rebanado </li>
                                    <li>3 cucharadas jugo de limón</li>
                                    <li>2 cucharadas jugo de naranja</li>
                                    <li>pizca sal y pimienta</li>
                                    <li>pizca pimienta de cayena </li>
                                </ul>                   
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Vierte el jugo de limón, naranja, sal, pimienta y pimienta de cayena en un recipiente.
                            </li>
                            <li>
                            Corta el pescado en trozos y colócalos dentro del recipiente anterior.
                            </li>
                            <li>
                            Deja reposar por 10 minutos. Coloca el pescado dentro de papel aluminio, sella bien el papel y cocínalo por los dos lados.
                            </li>
                            <li>
                            Calienta las tortillas y rellena con el pescado y las verduras.
                            </li>
                            <li>
                            Agrega un poco mas de pimienta cayena.
                            </li>
                            <li>
                            Decora con el aguacate.
                            </li>
                        </ol>                       
                        `
                    },
                    {
                        foodId: 3,
                        image: '/img/comida.jpg',
                        title: '¡Plato de vegetales con queso!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 calabacita rebanada</li>
                            <li>pedacito de cebolla</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 calabacita rebanada</li>
                            <li>1 jitomate rebanado</li>
                            <li>1 ajo picado fino </li>
                            <li>½ taza de papa cocida rebanada </li>
                            <li>2 tortillas de maíz</li>
                            <li>150 gramos queso panela</li>
                            <li>½ cucharadita aceite de oliva </li>
                            <li>Pizca de orégano en seco, pizca de tomillo, pizca de sal y pimienta </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Sobre una caserola en el fuego, coloca 1 rebanada de calabacita, jitomate y papa y así sucesivamente. 
                            </li>
                            <li>
                            Agrega el queso sobre las verduras. 
                            </li>
                            <li>
                            Mezcla el ajo, orégano y tomillo con el aceite y viértelo sobre el platillo.
                            </li>
                            <li>
                            Deja se que por unos minutos, retira del fuego y disfruta.
                            </li>
                        </ol>                   
                        `
                    },
                    {
                        foodId: 4,
                        image: '/img/comida.jpg',
                        title: '¡Pescado a la mexicana!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1/2 pimiento morrón amarillo</li>
                            <li>1/2 jitomate y pedacitos de cebolla </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>1/2 pimiento morrón amarillo</li>
                                <li>1/2 jitomate y pedacitos de cebolla </li>
                                    <li>2 paquetes de Salmas </li>
                                    <li>240 gramos filete de pescado </li>
                                    <li>15 gramos de aguacate </li>
                                    <li>Pizca de hierbas finas y ajo en polvo </li>
                                </ul>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Corta en cubos los pimientos morrones, jitomate y cebolla.  
                            </li>
                            <li>
                            Guisa las verduras y agrega una pizca de ajo.
                            </li>
                            <li>
                            Cocina el filete de pescado con hierbas finas y sirve.
                            </li>
                            <li>
                            Emplata el pescado con el guiso de verduras.
                            </li>
                            <li>
                            Decora con el aguacate. 
                            </li>
                        </ol>     
                        Acompaña con las Salmas.            
                        `
                    },
                    {
                        foodId: 5,
                        image: '/img/comida.jpg',
                        title: '¡Taquitos de nopales con pollo y queso!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>½ taza nopales cocidos </li>
                            <li>pedacito de cebolla</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>1 jitomate, </li>
                            <li>2 tortillas de maíz </li>
                            <li>120 gramos pechuga de pollo </li>
                            <li>pedacito de cebolla</li>
                            <li>90 gramos queso Oaxaca light rallado </li>
                            <li>1/5 de pieza de aguacate </li>
                            <li>Pizca sal y pimienta, 2 cucharaditas salsa Maggie baja en sodio, jugo de 1 limón (Libre)</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Mezcla la salsa Maggie con el limón.
                            </li>
                            <li>
                            Unta la mezcla en el pollo y asa por los dos lados. 
                            </li>
                            <li>
                            Cuando esté cocido el pollo, agrega el queso para que se derrita y tapa el sartén.
                            </li>
                            <li>
                            Sirve y decora con los champiñones y aguacate. Salpimenta.
                            </li>
                            <li>
                            Acompaña con los nopales y las tortillas.
                            </li>
                        </ol>                 
                        `
                    }
                ],
                snacks: [
                    {
                        foodId: 1,
                        image: '/img/colacion.jpg',
                        title: '¡Picaditas enchiladas!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 pepino sin cáscara ni semillas picado (Libre) </li>
                            <li>1 naranja en gajos picada</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 pepino sin cáscara ni semillas picado (Libre) </li>
                            <li>1 naranja en gajos picada</li>
                            <li>14 piezas de cacahuates</li>
                            <li>Una pizca de Tajín bajo en sodio (Tapa azúl)</li>
                        
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br>
                        </br>
                        <b>
                        Simplemente disfruta
                        </b> 
                        `
                    },
                    {
                        foodId: 2,
                        image: '/img/colacion.jpg',
                        title: '¡Nutribufet!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 pepino sin cáscara ni semillas picado (Libre) </li>
                            <li>1 naranja en gajos picada</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>½  betabel cocido picado</li>
                            <li>½  taza de jícama picada</li>
                            <li>½  limón (Libre)</li>
                            <li>½  manzana rebanada </li>
                            <li>14 piezas de cacahuates </li>
                            <li>1 taza de gelatina light </li>
                            <li>picada </li>
                            <li>1Pizca de sal </li>
                        
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br>
                        </br>
                        <b>
                        Simplemente disfruta
                        </b>          
                        `
                    },
                    {
                        foodId: 3,
                        image: '/img/colacion.jpg',
                        title: '¡Fácil y básica !',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>2 mandarinas</li>
                            <li>1 taza de gelatina light </li>
                            <li>10 almendras</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>2 mandarinas</li>
                            <li>1 taza de gelatina light </li>
                            <li>10 almendras</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br>
                        </br>
                        <b>
                        Simplemente disfruta
                        </b>              
                        `
                    },
                    {
                        foodId: 4,
                        image: '/img/colacion.jpg',
                        title: '¡Piña a la canela!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 rebanada de piña </li>
                            <li>Canela al gusto</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 rebanada de piña </li>
                            <li>Canela al gusto</li>
                            <li>1 cucharadita de esencia de vainilla</li>
                        
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        <ol>
                            <ul>
                            Mezcla la canela y la vainilla
                            </ul>
                            <ul>
                            colócala la mezcla sobre la piña y colocola en un comal
                            </ul>
                            <ul>
                            espera 2 minutos y voleteala pasados 2 minutos más disfruta.
                            </ul>
                        </ol>
                        </br>
                        10 piezas de almendras 
                        1 taza de gelatina light

                        `
                    },
                    {
                        foodId: 5,
                        image: '/img/colacion.jpg',
                        title: '¡Fresas con chocolate !',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>18 fresas</li>
                            <li>1 barra de 18 gr </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>18 fresas</li>
                        <li>1 barra de 18 gr </li>
                        <li>3 mitades de nuez troceada</li>
                            <li>1 taza de gelatina light</li>
                        
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br>
                        </br>
                        <b>
                        Simplemente disfruta
                        </b>        
                        `
                    }
                ]
            }
        },
        foodsMen: {
            oneWeek: {
                breakfastOrDinner: [
                    {
                        foodId: 1,
                        image: '/img/desayuno.jpg',
                        title: '¡Huevito rappidito!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>Huevo entero: 3 piezas</li>
                            <li>Espinacas 1 ½ taza</li>
                            <li>Cebolla y chile al gusto</li>
                        </ul>  . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>Huevo entero: 3 piezas</li>
                            <li>Espinacas 1 ½ taza</li>
                            <li>Cebolla y chile al gusto</li>
                            <li>Tortilla de maíz 2 pieza </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                                En una sartén caliente cocina la cebolla, cuando esté suave, agrega el huevo, y revuelve.
                            </li>
                            <li>
                                Al final añade las espinacas.
                            </li>
                            <li>
                            Emplata.
                                <ul>
                                    <li>
                                    Acompaña tu omelette con la tortilla.
                                    </li>
                                    <li>
                                    Manzana amarilla 1 pieza
                                    </li>
                                    <li>
                                    Almendras 5 piezas
                                    </li>
                                </ul>
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 2,
                        image: '/img/desayuno.jpg',
                        title: '¡Taco rojo!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>½ jitomate rebanado</li>
                            <li>1 jitomate cocido</li>
                            <li>pedacito de cebolla cocida</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>½ jitomate rebanado</li>
                            <li>1 jitomate cocido</li>
                            <li>pedacito de cebolla cocida</li>
                            <li>2 cucharaditas chile chipotle enlatado</li>
                            <li>2 tortilla de maíz</li>
                            <li>140 gramos pollo en trozos (fajitas)</li>
                            <li>Chorrito de agua</li>
                            <li>Pizca de orégano, pizca sal y pimienta </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                                Licua el jitomate cocido, cebolla, ajo y chile chipotle con un chorrito de agua.
                            </li>
                            <li>
                                Licua muy bien.
                            </li>
                            <li>
                                Vierte la salsa en una olla y calienta hasta que suelte el hervor.
                            </li>
                            <li>
                            Agrega el pollo y mezcla hasta que se cocine muy bien.
                            </li>
                            <li>
                            Calienta la tortilla y rellénala con el pollo.
                            </li>
                            <li>
                            Agrega un poco de orégano, sal y pimienta y el jitomate rebanado.
                            </li>
                        </ol>       
                        <br>              
                        Manzana amarilla 1 pieza   
                        Almendras 5 piezas
                        `
                    },
                    {
                        foodId: 3,
                        image: '/img/desayuno.jpg',
                        title: '¡Pastel de zanahoria y manzana!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1/2 taza zanahoria rallada </li>
                            <li>1/2 manzana en puré </li>
                            <li>3 cucharadas harina de avena </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1/2 taza zanahoria rallada </li>
                            <li>1/2 manzana en puré </li>
                            <li>3 cucharadas harina de avena </li>
                            <li>2 huevos </li>
                            <li>1 cucharadita polvo de hornear, 1 cucharadita extracto de vainilla (Libre)</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Licua todos los ingredientes hasta tener una mezcla homogénea.
                            </li>
                            <li>
                            Vierte sobre un recipiente apto para horno (puede ser una taza común o un molde de silicona).
                            </li>
                            <li>
                            Colócalo en el horno de microondas por 4 a 5 minutos hasta que esté cocido. 
                            </li>
                            <li>
                            Desmolda y emplata.
                            </li>
                            <li>
                            Topping: mezcla la manzana con la canela en una taza y calienta por 1 minuto en el horno de microondas.
                            </li>
                            <li>
                            Coloca el topping de manzana y las nueces.
                            </li>
                            <li>
                            Decora con:
                                <ul>
                                    <li>
                                    1/2 manzana en cubitos 
                                    </li>
                                    <li>
                                    3.5 mitades de nuez trocedas 
                                    </li>
                                    <li>
                                    Pizca canela en polvo (Libre)
                                    </li>
                                </ul>
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 4,
                        image: '/img/desayuno.jpg',
                        title: '¡Espagueti con vegetales!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 jitomate en cubitos</li>
                            <li>¼ taza brócoli picado</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 jitomate en cubitos</li>
                            <li>¼ taza brócoli picado</li>
                            <li>¼ taza calabacitas picadas</li>
                            <li>¼ taza zanahoria picada (Libre)</li>
                            <li>1/3 taza espagueti cocido </li>
                            <li>120 gramos carne molida de res</li>
                            <li>¼ de pieza de aguacate </li>
                            <li>Pizca de pimienta (Libre) </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                                En una sartén caliente cocina la cebolla, cuando esté suave, agrega el huevo, y revuelve.
                            </li>
                            <li>
                                Al final añade las espinacas.
                            </li>
                            <li>
                            Emplata.
                                <ul>
                                    <li>
                                    Acompaña tu omelette con la tortilla.
                                    </li>
                                    <li>
                                    Manzana amarilla 1 pieza
                                    </li>
                                    <li>
                                    Almendras 5 piezas
                                    </li>
                                </ul>
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 5,
                        image: '/img/desayuno.jpg',
                        title: '¡Nutrikad-sándwich!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>
                                2 rebanadas de pan bimbo cero
                            </li>
                            <li>
                            70 gr queso panela
                            </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>
                                2 rebanadas de pan bimbo cero
                            </li>
                            <li>
                            70 gr queso panela
                            </li>
                            <li>
                            Huevo estrellado 2 pieza
                            </li>
                            <li>
                            2 hojas de lechuga
                            </li>
                            <li>
                            Zanahoria rallada (libre)
                            </li>
                            <li>
                             ¼ de pieza de aguacate
                            </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Coloca todos los ingredientes entre las 2 rebanadas de pan
                            </li>
                            <li>
                            Guayabas 2 piezas
                            </li>
                            <li>
                            Yogurt 1 pieza
                            </li>
                        </ol>                     
                        `
                    }
                ],
                detoxJuice: [
                    {
                        foodId: 1,
                        image: '/img/juice.jpg',
                        title: '¡Jugo  green detóx basic!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 taza de espinacas</li>
                            <li>1/2 vara de apio</li>
                            <li>1 nopal pequeño </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 taza de espinacas</li>
                            <li>1/2 vara de apio</li>
                            <li>1 nopal pequeño </li>
                            <li>3 ramitas de perejil (Libre) </li>
                            <li>Jugo de 1 naranja  (Libre) </li>
                            <li>1 taza de agua (Libre) </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                                ¡Licua y disfruta!
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 2,
                        image: '/img/juice.jpg',
                        title: '¡Jugo vitaminpower!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>2 zanahoria</li>
                            <li>Jugo de 2 naranja </li>
                            <li>Jugo de 1 limón </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>2 zanahoria</li>
                            <li>Jugo de 2 naranja </li>
                            <li>Jugo de 1 limón </li>
                            <li>1 ½  tazas de agua</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                                ¡Licua y disfruta!
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 3,
                        image: '/img/juice.jpg',
                        title: '¡Jugo súper detóx !',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>½ tazade betabel </li>
                            <li>½  pepino sin cascara y sin semillas </li>
                            <li>Jugo de 1 naranja </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>½ tazade betabel </li>
                        <li>½  pepino sin cascara y sin semillas </li>
                        <li>Jugo de 1 naranja </li>
                            <li>1 cm cucharadita de cúrcuma</li>
                            <li>1cm de jengibre </li>
                            <li>1 taza de agua </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                                ¡Licua y disfruta!
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 4,
                        image: '/img/juice.jpg',
                        title: '¡Jugo antioxidante!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>½ taza betabel</li>
                            <li>3 fresas </li>
                            <li>½ pieza de pepino</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>½ taza betabel</li>
                            <li>3 fresas </li>
                            <li>½ pieza de pepino</li>
                            <li>1 taza de agua</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                                ¡Licua y disfruta!
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 5,
                        image: '/img/juice.jpg',
                        title: '¡Mojito fit detóx!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1/2 pepino</li>
                            <li>2 limones </li>
                            <li>500 ml de agua </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>1/2 pepino</li>
                            <li>2 limones </li>
                            <li>500 ml de agua </li>
                            <li>1 puño de hierbabuena</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Pela el pepino, retira las semillas, y parte en rodajas. 
                            </li>
                            <li>
                            Parte en rodajas los limones. 
                            </li>
                            <li>
                            Pon el agua en una jarra, agrega las verduras  y deja reposar por varias horas. 
                            </li>
                        </ol>                     
                        `
                    }
                ],
                foodTickets: [
                    {
                        foodId: 1,
                        image: '/img/tickets.jpg',
                        title: '¡Arroz blanco falso!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 taza de pedacitos de brócoli y coliflor </li>
                            <li>¼  taza de zanahoria picada en cubitos pequeños </li>
                        </ul> . . . 
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 taza de pedacitos de brócoli y coliflor </li>
                            <li>¼  taza de zanahoria picada en cubitos pequeños </li>
                            <li>¼  taza de chícharos </li>
                            <li>Pedacito de cebolla </li>
                            <li>1/2 diente de ajo</li>
                            <li>1 taza de agua </li>
                            <li>Sal y pimienta</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Licua el agua con la cebolla y el ajo. 
                            </li>
                            <li>
                            En un sartén caliente pasa lo licuado, los pedacitos de brócoli y colifor y las verduras. Condimenta al gusto. 
                            </li>
                            <li>
                            Deja de cocinar por 10 minutos a fuego bajo o hasta que estén bien cocidos.
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 2,
                        image: '/img/tickets.jpg',
                        title: '¡Crema de verduras!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>3 floretes de brócoli  </li>
                            <li>Pedacito de chayote </li>
                            <li>Pedacito de zanahoria </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>3 floretes de brócoli  </li>
                        <li>Pedacito de chayote </li>
                        <li>Pedacito de zanahoria </li>
                        <li>Pedacito de cebolla  </li>
                            <li>3 varitas de cilantro </li>
                            <li>Sal, pimienta y ajo en polvo</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Coloca las verduras, cebolla y cilantro en una cazuela, cubre con agua y agrega sal. Hierve hasta que se hayan ablandado por completo. 
                            </li>
                            <li>
                            Licua las verduras con un poco del agua donde se cocieron. 
                            </li>
                            <li>
                            1.	Pasa lo licuado a una cazuela, condimenta con ajo en polvo, sal y pimienta, ve agregando poco a poco agua hasta conseguir la textura deseada. 
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 3,
                        image: '/img/tickets.jpg',
                        title: '¡Ensalada de peinos!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>Puño de hojas de lechuga</li>
                            <li>1/2 pepino</li>
                            <li>Pedacito de cebolla morada rebanada</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>Puño de hojas de lechuga</li>
                        <li>1/2 pepino</li>
                        <li>Pedacito de cebolla morada rebanada</li>
                            <li>Jugo de medio limón </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Pica el pepino y la lechuga y pasa a un bowl.  
                            </li>
                            <li>
                            Agrega el resto de los ingredientes al bowl y revuelve para que todo se integre.
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 4,
                        image: '/img/tickets.jpg',
                        title: '¡Mix de vegetales al fuego!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>5 champiñones </li>
                            <li>Pedacito de cebolla  </li>
                            <li>1/2 pimiento mediano amarillo </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>5 champiñones </li>
                        <li>Pedacito de cebolla  </li>
                        <li>1/2 pimiento mediano amarillo </li>
                            <li>1/2 pimiento mediano rojo </li>
                            <li>1/2 taza germen de trigo </li>
                            <li>1 cucharada de hojuelas de chile seco </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Pica las verduras en cubos medianos. 
                            </li>
                            <li>
                            Pasa a un sartén caliente junto con 2 cucharadas de agua, deja cocinar a fuego bajo por 7 minutos. 
                            </li>
                            <li>
                            Decora con las hojuelas de chile seco. 
                            </li>
                        </ol>                     
                        `
                    },
                    {
                        foodId: 5,
                        image: '/img/tickets.jpg',
                        title: '¡Sopa de verduras!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>Recaudo
                                <ul>
                                    <li>1 jitomate, </li>
                                    <li>pedacito de cebolla</li>
                                </ul>
                            </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>Recaudo
                                <ul>
                                    <li>1 jitomate, </li>
                                    <li>pedacito de cebolla</li>
                                    <li>1 diente de ajo pequeño</li>
                                    <li>3 varitas de cilantro</li>
                                </ul>
                            </li>
                            <li>1/2 taza de ejotes</li>
                            <li>1/2 taza de zanahoria </li>
                            <li>1/4 taza de calabacita  </li>
                            <li>2 tazas de agua o 2 tazas de caldo de verdura</li>
                            <li>Sal y pimienta</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Licua los ingredientes del recaudo con el agua/caldo.  
                            </li>
                            <li>
                            Pasa el caldo a una cazuela junto con las verduras picadas. 
                            </li>
                            <li>
                            Salpimienta al gusto y deja cocinar hasta que las verduras ablanden.
                            </li>
                        </ol>                     
                        `
                    }
                ],
                foods: [
                    {
                        foodId: 1,
                        image: '/img/comida.jpg',
                        title: '¡Tostadas de pollo!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>
                            1 taza zanahoria rallada 
                            </li>
                            <li>
                            ½ pimiento verde en tiras
                            </li>
                            
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>
                            ½ taza zanahoria rallada 
                            </li>
                            <li>
                            ½ pimiento verde en tiras 
                            </li>
                            <li>
                            3 tostadas sanissimo 
                            </li>
                            <li>
                            160 gramos pechuga de pollo deshebrada cocida 
                            </li>
                            <li>60 gramos queso Oaxaca light rallado </li>
                            <li>1/5  de pieza aguacate </li>
                        </lul>
                        </br>    
                        <small><b>Salsa</b></small>
                        <ul>
                            <li>
                            2 jitomates cocidos 
                            </li>
                            <li>
                            1 chile serrano cocido
                            </li>
                            <li>
                            pedacito cebolla cocida al gusto
                            </li>
                            <li>1 diente de ajo  </li>
                        </lul>                
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            <b>Para la salsa</b>: licua todos los ingredientes.
                                <ul>
                                    <li>
                                    Cuela la salsa.
                                    </li>
                                </ul>
                            </li>
                            <li>
                            Vierte la salsa una olla, agrega el pollo, zanahoria y pimiento.
                            </li>
                            <li>
                            Calienta hasta que suelte el hervor. Reserva.
                            </li>
                            <li>
                            Emplata las tostadas.
                            </li>
                            <li>
                            Agrega el aguacate machacado sobre ellas.
                            </li>
                            <li>
                            Coloca la tinga sobre las tostadas.
                            </li>
                            <li>
                            Decora con el queso.
                            </li>
                        </ol>                       
                        `
                    },
                    {
                        foodId: 2,
                        image: '/img/comida.jpg',
                        title: '¡Taquitos Nutrikadfit!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1/3 betabel rallado</li>
                            <li>½ pimiento amarillo en tiras</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                                    <li>1/3 betabel rallado</li>
                                    <li>½ pimiento amarillo en tiras</li>
                                    <li>puñito germen de alfalfa</li>
                                    <li>pedacito chile serrano rebanado </li>
                                    <li>3 tortillas de maíz </li>
                                    <li>400 gramos filete de pescado </li>
                                    <li>15 gramos aguacate rebanado </li>
                                    <li>3 cucharadas jugo de limón</li>
                                    <li>2 cucharadas jugo de naranja</li>
                                    <li>pizca sal y pimienta</li>
                                    <li>pizca pimienta de cayena </li>
                                </ul>                   
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Vierte el jugo de limón, naranja, sal, pimienta y pimienta de cayena en un recipiente.
                            </li>
                            <li>
                            Corta el pescado en trozos y colócalos dentro del recipiente anterior.
                            </li>
                            <li>
                            Deja reposar por 10 minutos. Coloca el pescado dentro de papel aluminio, sella bien el papel y cocínalo por los dos lados.
                            </li>
                            <li>
                            Calienta las tortillas y rellena con el pescado y las verduras.
                            </li>
                            <li>
                            Agrega un poco mas de pimienta cayena.
                            </li>
                            <li>
                            Decora con el aguacate.
                            </li>
                        </ol>                       
                        `
                    },
                    {
                        foodId: 3,
                        image: '/img/comida.jpg',
                        title: '¡Plato de vegetales con queso!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>2 calabacita rebanada</li>
                            <li>pedacito de cebolla</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>2 calabacita rebanada</li>
                            <li>1 jitomate rebanado</li>
                            <li>1 ajo picado fino </li>
                            <li>½ taza de papa cocida rebanada </li>
                            <li>3 tortillas de maíz</li>
                            <li>180 gramos queso panela</li>
                            <li>½ cucharadita aceite de oliva </li>
                            <li>Pizca de orégano en seco, pizca de tomillo, pizca de sal y pimienta </li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Sobre una caserola en el fuego, coloca 1 rebanada de calabacita, jitomate y papa y así sucesivamente. 
                            </li>
                            <li>
                            Agrega el queso sobre las verduras. 
                            </li>
                            <li>
                            Mezcla el ajo, orégano y tomillo con el aceite y viértelo sobre el platillo.
                            </li>
                            <li>
                            Deja se que por unos minutos, retira del fuego y disfruta.
                            </li>
                        </ol>                   
                        `
                    },
                    {
                        foodId: 4,
                        image: '/img/comida.jpg',
                        title: '¡Pescado a la mexicana!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1/2 pimiento morrón amarillo</li>
                            <li>1/2 jitomate y pedacitos de cebolla </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>1/2 pimiento morrón amarillo</li>
                                <li>1/2 jitomate y pedacitos de cebolla </li>
                                    <li>2 paquetes de Salmas </li>
                                    <li>320 gramos filete de pescado </li>
                                    <li>¼ gramos de aguacate </li>
                                    <li>Pizca de hierbas finas y ajo en polvo </li>
                                </ul>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Corta en cubos los pimientos morrones, jitomate y cebolla.  
                            </li>
                            <li>
                            Guisa las verduras y agrega una pizca de ajo.
                            </li>
                            <li>
                            Cocina el filete de pescado con hierbas finas y sirve.
                            </li>
                            <li>
                            Emplata el pescado con el guiso de verduras.
                            </li>
                            <li>
                            Decora con el aguacate. 
                            </li>
                        </ol>     
                        Acompaña con las Salmas.            
                        `
                    },
                    {
                        foodId: 5,
                        image: '/img/comida.jpg',
                        title: '¡Taquitos de nopales con pollo y queso!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 taza nopales cocidos </li>
                            <li>pedacito de cebolla</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>1 jitomate, </li>
                            <li>3 tortillas de maíz </li>
                            <li>200 gramos pechuga de pollo </li>
                            <li>pedacito de cebolla</li>
                            <li>100 gramos queso Oaxaca light rallado </li>
                            <li>¼ de pieza de aguacate </li>
                            <li>Pizca sal y pimienta, 2 cucharaditas salsa Maggie baja en sodio, jugo de 1 limón (Libre)</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br> </br>
                        <ol>
                            <li>
                            Mezcla la salsa Maggie con el limón.
                            </li>
                            <li>
                            Unta la mezcla en el pollo y asa por los dos lados. 
                            </li>
                            <li>
                            Cuando esté cocido el pollo, agrega el queso para que se derrita y tapa el sartén.
                            </li>
                            <li>
                            Sirve y decora con los champiñones y aguacate. Salpimenta.
                            </li>
                            <li>
                            Acompaña con los nopales y las tortillas.
                            </li>
                        </ol>                 
                        `
                    }
                ],
                snacks: [
                    {
                        foodId: 1,
                        image: '/img/colacion.jpg',
                        title: '¡Picaditas enchiladas!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 pepino sin cáscara ni semillas picado (Libre) </li>
                            <li>1 naranja en gajos picada</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 pepino sin cáscara ni semillas picado (Libre) </li>
                            <li>2 naranja en gajos picada</li>
                            <li>14 piezas de cacahuates</li>
                            <li>Una pizca de Tajín bajo en sodio (Tapa azúl)</li>
                        
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br>
                        </br>
                        <b>
                        Simplemente disfruta
                        </b> 
                        `
                    },
                    {
                        foodId: 2,
                        image: '/img/colacion.jpg',
                        title: '¡Nutribufet!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 pepino sin cáscara ni semillas picado (Libre) </li>
                            <li>1 naranja en gajos picada</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>½  betabel cocido picado</li>
                            <li>½  taza de jícama picada</li>
                            <li>½  limón (Libre)</li>
                            <li>½  manzana rebanada </li>
                            <li>14 piezas de cacahuates </li>
                            <li>1 taza de gelatina light </li>
                            <li>picada </li>
                            <li>1Pizca de sal </li>
                        
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br>
                        </br>
                        <b>
                        Simplemente disfruta
                        </b>          
                        `
                    },
                    {
                        foodId: 3,
                        image: '/img/colacion.jpg',
                        title: '¡Fácil y básica !',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>2 mandarinas</li>
                            <li>1 taza de gelatina light </li>
                            <li>10 almendras</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>2 mandarinas</li>
                            <li>1 taza de gelatina light </li>
                            <li>10 almendras</li>
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br>
                        </br>
                        <b>
                        Simplemente disfruta
                        </b>              
                        `
                    },
                    {
                        foodId: 4,
                        image: '/img/colacion.jpg',
                        title: '¡Piña a la canela!',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 rebanada de piña </li>
                            <li>Canela al gusto</li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>1 rebanada de piña </li>
                            <li>Canela al gusto</li>
                            <li>1 cucharadita de esencia de vainilla</li>
                        
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        <ol>
                            <ul>
                            Mezcla la canela y la vainilla
                            </ul>
                            <ul>
                            colócala la mezcla sobre la piña y colocola en un comal
                            </ul>
                            <ul>
                            espera 2 minutos y voleteala pasados 2 minutos más disfruta.
                            </ul>
                        </ol>
                        </br>
                        10 piezas de almendras 
                        1 taza de gelatina light

                        `
                    },
                    {
                        foodId: 5,
                        image: '/img/colacion.jpg',
                        title: '¡Fresas con chocolate !',
                        smallDescription: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                            <li>10 fresas</li>
                            <li>1 barra de 18 gr </li>
                        </ul> . . .
                        `,
                        ingredients: `
                        <small><b>Ingredientes</b></small>
                        <ul>
                        <li>10 fresas</li>
                        <li>1 barra de 18 gr </li>
                        <li>6 mitades de nuez troceada</li>
                            <li>1 taza de gelatina light</li>
                        
                        </ul>                    
                        `,
                        instructions: `
                        <small><b>Instrucciones</b></small>
                        </br>
                        </br>
                        <b>
                        Simplemente disfruta
                        </b>        
                        `
                    }
                ]
            }
        }
    },
    actions: {
        getFoods({ state }, payload) {
            switch (payload.food) {
                case 'breakfastOrDinner':
                    if (payload.gender) {
                        const response = state.foodsWomen.oneWeek.breakfastOrDinner
                        return response
                    } else {
                        const response = state.foodsMen.oneWeek.breakfastOrDinner 
                        return response
                    }
                case 'detoxJuice':
                    if (payload.gender) {
                        const response = state.foodsWomen.oneWeek.detoxJuice
                        return response
                    } else {
                        const response = state.foodsMen.oneWeek.detoxJuice 
                        return response
                    }
                case 'foodTickets':
                    if (payload.gender) {
                        const response = state.foodsWomen.oneWeek.foodTickets
                        return response
                    } else {
                        const response = state.foodsMen.oneWeek.foodTickets 
                        return response
                    }
                case 'foods':
                    if (payload.gender) {
                        const response = state.foodsWomen.oneWeek.foods
                        return response
                    } else {
                        const response = state.foodsMen.oneWeek.foods 
                        return response
                    }
                case 'snacks':
                    if (payload.gender) {
                        const response = state.foodsWomen.oneWeek.snacks
                        return response
                    } else {
                        const response = state.foodsMen.oneWeek.snacks 
                        return response
                    }
            }
        }
    },
    mutations: {
        SET_RECIPE(state, payload) {
            state.foodsWomen.oneWeek.breakfastOrDinner = payload
        },
        SET_RECIPE_MEN(state, payload) {
            state.foodsWomen.oneWeek.breakfastOrDinner = payload
        }
    },
    getters: {
        getBreakfastDinerOneWeekWomen(state) {
            return state.foodsWomen.oneWeek.breakfastOrDinner
        },
        getBreakfastDinerOneWeekMen(state) {
            return state.foodsMen.oneWeek.breakfastOrDinner
        }
    }
}