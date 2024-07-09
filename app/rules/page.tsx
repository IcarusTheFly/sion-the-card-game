"use client";

export default function RulesPage() {
  return (
    <main className="bg-gray-900 text-white flex-grow">
      <div className="px-4 mt-8 md:px-8 md:mt-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold md:text-3xl">Reglamento</h2>
        </div>
      </div>
      <section className="bg-gray-900 px-4 py-8 md:px-8 md:py-12 leading-7">
        <div className="mx-auto max-w-4xl flex flex-wrap justify-between">
          <div className="mb-6 w-full md:w-[45%]">
            <h3 className="mb-2 text-lg font-bold text-[#ffcc00]">Conceptos básicos</h3>
            <p>
              Sión: el juego de cartas es un juego de estrategia para dos o más
              jugadores, cada uno de los cuales tiene un mazo personalizado de
              cartas de Sión. En el transcurso del juego, cada jugador se
              turnará para jugar cartas como lugares (que te permiten jugar
              personajes), eventos, objetos y profecías. Cada jugador comienza
              eligiendo una carta de estrategia, que decidirá cuántos personajes
              se deberán reunir para ¡ganar la partida!
            </p>
          </div>
          <div className="mb-6 w-full md:w-[45%]">
            <h3 className="mb-2 text-lg font-bold text-[#ff823f]">Tres Facciones</h3>
            <p>
              Los personajes de este mundo bíblico "viven en lugares erigidos
              para su propia facción". Cada lugar está representado por un
              símbolo y un color. Por ejemplo, la facción de Descendencia tiene
              el símbolo y girar (poner de lado) un lugar de Descendencia te da
              una residencia , que puedes usar para jugar personajes de
              Descendencia.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 px-4 py-8 md:px-8 md:py-12 leading-7">
        <div className="mx-auto max-w-4xl flex flex-wrap justify-between">
          <div className="mb-6 w-full">
            <h3 className="mb-2 text-lg font-bold text-[#ffcc00]">Tipos de cartas</h3>
            <p>
              Las cartas de Sión se clasifican en tipos, los cuales tienen su
              propia forma de ser jugados.
            </p>
          </div>
          <div className="mb-6 w-full md:w-[45%]">
            <h4 className="mb-2 text-lg font-bold text-[#ff823f]">Estrategia</h4>
            <p>
              Cada mazo cuenta con una carta de Estrategia, que definirá su
              facción predominante y los Personajes que necesitas reunir para
              ganar la partida, según el número inferior derecho. Además, tienen
              habilidades únicas, que se activarán automáticamente cuando
              coincidan con la tirada reglamentaria del dado en la fase de
              Estrategia, a no ser que se indique lo contrario. Las Estrategias
              son Inmunes y son las únicas cartas que permanecen en juego de
              principio a fin de la partida.
            </p>
          </div>
          <div className="mb-6 w-full md:w-[45%]">
            <h4 className="mb-2 text-lg font-bold text-[#ff823f]">Evento</h4>
            <p>
              Los Eventos son cartas que, generalmente, dan soporte a tus
              Personajes y Lugares, pero también pueden sabotear a los demás
              jugadores. Traslada tantos Dracmas de tu reserva al Tesoro como
              indique el número superior izquierdo de un Evento para poder
              jugarlo. Algunos Eventos, al igual que los Objetos, pueden ser
              vinculados (o jugados) bajo una carta indicada y se descartan si
              ésta también es descartada. Los Eventos comunes se suelen llevar a
              Descartes tras ser usados.
            </p>
          </div>
          <div className="mb-6 w-full md:w-[45%]">
            <h4 className="mb-2 text-lg font-bold text-[#ff823f]">Lugar</h4>
            <p>
              Normalmente sólo se puede jugar un Lugar por turno, el cuál
              permanecerá sobre el campo de juego. Un Lugar común será girado
              para generar una residencia de su misma facción, necesaria para
              costear Personajes. Existen Lugares especiales que pueden generar
              distintas residencias o que pueden ser girados para activar Ej. Un
              Personaje de Corrupción de coste 5, 3 de ellos residencias, podrá
              ser costeado girando 3 Lugares de Corrupción y 2 Lugares
              aleatorios.
            </p>
          </div>
          <div className="mb-6 w-full md:w-[45%]">
            <h4 className="mb-2 text-lg font-bold text-[#ff823f]">Objeto</h4>
            <p>
              Los Objetos potencian las capacidades de tus Personajes y se
              juegan como los Eventos. A diferencia de éstos, cuando el
              Personaje abandona el juego, el Objeto se vinculará inmediatamente
              a otro Personaje controlado por el mismo jugador, si es posible.
              Si no es posible, éste irá al mazo de Descartes, aunque sea
              Inmune. Un Personaje puede tener tantas cartas vinculadas (también
              llamadas "vínculos") como sea deseado.
            </p>
          </div>
          <div className="mb-6 w-full md:w-[45%]">
            <h4 className="mb-2 text-lg font-bold text-[#ff823f]">Personaje</h4>
            <p>
              Hospeda simultáneamente a tantos Personajes como indique tu
              Estrategia para ganar la partida. Al jugarlos, estos se mantendrán
              en el campo de juego y estarán listos para activar sus
              habilidades. Si sus costes son variados y sus habilidades se
              potencian mutuamente, tendrás más posibilidades de vencer. Los
              Personajes, Lugares, Eventos y Objetos, por lo general, se
              enviarán al mazo de descartes cuando sean descartados del juego,
              del mazo principal o de la mano.
            </p>
          </div>
          <div className="mb-6 w-full md:w-[45%]">
            <h4 className="mb-2 text-lg font-bold text-[#ff823f]">Profecía</h4>
            <p>
              Un mazo debe incluir entre 6-8 cartas de Profecía, que serán
              jugadas en la fase que lleva su nombre. Estas poderosas cartas son
              Inmunes a cartas que no sean de Profecía. El número superior
              izquierdo determina la cantidad de Dracmas que deberás tomar del
              Tesoro. Las habilidades de las Profecías serán activadas al
              revelarse y, al igual que el resto de habilidades del mismo tipo,
              se resolverán en orden, empezando por el primer jugador y
              continuando en el sentido horario.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
