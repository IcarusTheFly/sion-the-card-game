"use client";

import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type CardTypeStrings = {
  title: string;
  name: string;
  legend: string;
  type: string;
  rarity: string;
  cost: string;
  ability: string;
  expansion: string;
  designer: string;
  language: string;
  collectionNumber: string;
  faction: string;
};

type CardTypeBooleans = {
  unique: boolean;
  limited: boolean;
  immune: boolean;
};

type CardTypeExtended = CardTypeStrings & CardTypeBooleans;

const cardTypeStringsKeys = {
  title: true,
  name: true,
  legend: true,
  type: true,
  rarity: true,
  cost: true,
  ability: true,
  expansion: true,
  designer: true,
  language: true,
  collectionNumber: true,
  faction: true,
};

const cardTypeBooleansKeys = {
  unique: true,
  limited: true,
  immune: true,
};

function isCardTypeExtendedKeyString(
  key: string
): key is keyof CardTypeStrings {
  return key in cardTypeStringsKeys;
}

function isCardTypeExtendedKeyBoolean(
  key: string
): key is keyof CardTypeBooleans {
  return key in cardTypeBooleansKeys;
}

export default function Cards() {
  // TO-DO: Load images in .bmp format!
  const cardsRawList: CardTypeExtended[] = useMemo(
    () => [
      {
        title: "Be'er",
        name: "Pozo",
        legend:
          "A veces, el pozo hace referencia a una sepultura y otras, a una esposa amada. La escasez de agua y el trabajo implicado en excavarlos hizo de los pozos una posesión muy valiosa. Génesis 29:2, 3.",
        type: "land",
        rarity: "12",
        unique: false,
        cost: "0",
        limited: false,
        immune: false,
        ability: "",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "005",
        faction: "Descendencia",
      },
      {
        title: "más esparcido",
        name: "Río Pisón",
        legend:
          "Uno de los cuatro ríos que nacían en Edén. Rodeaba toda la tierra de Havila, donde se dice que había oro, bedelio y ónice. Génesis 2:11.",
        type: "land",
        rarity: "",
        unique: false,
        cost: "",
        limited: false,
        immune: false,
        ability: "",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "003",
        faction: "",
      },
      {
        title: "tumba de la descendencia",
        name: "Campo de Macpelá",
        legend:
          "Campo de Hebrón que Abrahán compró a Efrón por 400 siclos de plata (unos 880 $ actuales). Su cueva sirvió de tumba para Sara, Abrahán, Isaac, Rebeca, Jacob y Lea. Génesis 49:30, 31.",
        type: "land",
        rarity: "",
        unique: false,
        cost: "",
        limited: false,
        immune: false,
        ability: "",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "004",
        faction: "",
      },
      {
        title: "",
        name: "Descendencia",
        legend: "",
        type: "land",
        rarity: "",
        unique: false,
        cost: "",
        limited: false,
        immune: false,
        ability: "",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "001",
        faction: "",
      },
      {
        title: "Pa·rá·dei·sos",
        name: "Paraíso",
        legend:
          "Hermoso parque creado por Dios para el ser humano. Será restaurado en la Tierra después del Armagedón, donde Jehová bendecirá a la humanidad con vida eterna, paz y felicidad. Apocalipsis 21:1-5.",
        type: "land",
        rarity: "",
        unique: false,
        cost: "",
        limited: false,
        immune: false,
        ability: "",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "002",
        faction: "",
      },
      {
        title: "Lo mejor de Egipto",
        name: "Gosén",
        legend:
          "La mejor región de Egipto donde vivieron los israelitas como esclavos durante 215 años: de 1728-1513 a.C. A partir de la cuarta plaga, Gosén no se volvió a ver afectada. Génesis 47:27.",
        type: "land",
        rarity: "",
        unique: false,
        cost: "",
        limited: false,
        immune: false,
        ability: "",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "006",
        faction: "",
      },
      {
        title: "Patriarca Tribal",
        name: "Jacob",
        legend:
          "Compró el derecho de primogenitura de su hermano Esaú con un plato de lentejas. Esto hizo posible que su línea genealógica condujera al Mesías. Sus hijos formaron las 12 tribus de Israel. Génesis 25:29-34.",
        type: "character",
        rarity: "4",
        unique: true,
        cost: "4",
        limited: true,
        immune: true,
        ability:
          "Jacob es Inmune mientras tenga un Duplicado. Cuando juegues una Tribu, toma una carta del mazo.",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "007",
        faction: "descendencia",
      },
      {
        title: "La indeseada",
        name: "Lea",
        legend:
          "Hija mayor de Labán, sobrino nieto de Abrahán. No era tan hermosa como su hermana Raquel ni era tan amada como ella por Jacob. Fue madre de 7 de los hijos de Jacob. Génesis 29:18-28.",
        type: "character",
        rarity: "2",
        unique: true,
        cost: "2",
        limited: true,
        immune: false,
        ability: "Cuando juegues una Tribu endereza otra Tribu.",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "008",
        faction: "descendencia",
      },
      {
        title: "La amada",
        name: "Raquel",
        legend:
          "Bella adoradora de Jehová que tuvo 2 hijos con Jacob: José y Benjamín. Raquel y Lea edificaron la casa de Israel, pero fue la esposa favorita de Jacob. Génesis 29:9-11.",
        type: "character",
        rarity: "3",
        unique: true,
        cost: "3",
        limited: true,
        immune: false,
        ability:
          "Mientras controles a Jacob o a una Tribu, esta carta obtiene: Endereza un Lugar. Toma el siguiente Objeto del mazo.",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "009",
        faction: "descendencia",
      },
      {
        title: "El extorsionador",
        name: "Labán el Sirio",
        legend:
          "Semita de Harán hermano de Rebeca. Engañó a Isaac dándole a Lea en vez de Raquel por esposa. Por otros 7 años de trabajo (14 en total) le dio también a Raquel como esposa. Génesis 29:13-28.",
        type: "character",
        rarity: "2",
        unique: true,
        cost: "2",
        limited: false,
        immune: false,
        ability:
          "Los demás jugadores pagarán +1 para jugar Personajes femeninos.",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "010",
        faction: "descendencia",
      },
      {
        title: "Beneficiario de Justicia Divina",
        name: "Bebé de la Discordia",
        legend:
          "Salomón demostró su sabiduría, recibida por Jehová, al tomar una decisión sin precedentes con un bebé. 1 Reyes 3:16-28.",
        type: "character",
        rarity: "3",
        unique: true,
        cost: "3",
        limited: false,
        immune: false,
        ability:
          "Entrada: Todos los jugadores se descartan hasta quedarse con 4 cartas en mano.",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "013",
        faction: "",
      },
      {
        title: "Rey Legendario",
        name: "David, Hijo de Jesé",
        legend:
          "Este pastor, músico, poeta, soldado, hombre de estado, profeta y rey sobresale en las E.H. como ej. de humildad, justicia y fe. Descendiente de Judá y antecesor de Jesús. Mateo 1:1.",
        type: "character",
        rarity: "4",
        unique: true,
        cost: "5",
        limited: true,
        immune: true,
        ability:
          "Reduce 1 el coste de jugar esta carta por cada Objeto Militar que controles. Endereza a un Monarca o a un Guerrero. Entrada: Tira el Dado. Gira el número de Personajes equivalente al valor obtenido.",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "014",
        faction: "descendencia",
      },
      {
        title: "Tiro Certero",
        name: "Hondero Benjamínita",
        legend:
          "Los honderos benjaminitas eran ambidiestros y podían tirar piedras a un cabello dando en el blanco. Jueces 20:16.",
        type: "character",
        rarity: "2",
        unique: true,
        cost: "2",
        limited: false,
        immune: false,
        ability:
          "Pon 2 Dracmas del tesoro sobre esta carta. Descarta 1 de ellos para tomar una carta del mazo cuando equipes un Objeto Militar.",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "012",
        faction: "descendencia",
      },
      {
        title: "Presencia de Dios",
        name: "Arca del Pacto",
        legend:
          "Cofre sagrado situado en el Santísimo del tabernáculo y que, posteriormente, se colocaría en el templo de Salomón. Se creó por mandato de Jehová. Éxodo 37:1-9.",
        type: "event",
        rarity: "3",
        unique: true,
        cost: "3",
        limited: false,
        immune: false,
        ability:
          "Vincular a un Lugar. Salva el Lugar vinculado. Entonces, toma una carta del mazo.",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "015",
        faction: "",
      },
      {
        title: "Al servicio del Mesías",
        name: "Pez Generoso",
        legend:
          "En respuesta al pago del impuesto, Jesús dijo a Pedro que pescara un pez que tendría una moneda de estáter en su boca. Con ella harían el pago. Mateo 17:24-27.",
        type: "event",
        rarity: "0",
        unique: true,
        cost: "0",
        limited: false,
        immune: false,
        ability: "Toma 3 Dracmas del tesoro.",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "016",
        faction: "",
      },
      {
        title: "Armadura Espiritual",
        name: "Escudo de la Fe",
        legend:
          "Arma defensiva usada por la infantería pesada. Simbólicamente nos ayuda a resistir los ataques del inicuo. Efesios 6:16.",
        type: "object",
        rarity: "4",
        unique: true,
        cost: "4",
        limited: false,
        immune: false,
        ability:
          "Vincular a un Personaje. El Personaje vinculado obtiene Inmunidad. Vincular a otro Personaje.",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "017",
        faction: "",
      },
      {
        title: "Armadura Espiritual",
        name: "Espada del Espíritu",
        legend:
          "Arma más mencionada en la Biblia. Simbólicamente, nos ayuda a evitar la mentira y a enseñar la verdad. Efesios 6:17.",
        type: "object",
        rarity: "4",
        unique: true,
        cost: "4",
        limited: false,
        immune: false,
        ability:
          "Vincular a un Personaje. El Personaje vinculado obtiene: Descarta un Personaje de coste 2 o inferior en juego. Vincular a otro Personaje.",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "018",
        faction: "",
      },
      {
        title: "No hay otra igual",
        name: "La Gran Espada",
        legend:
          "Cuando David derribó a Goliat con una honda, asió su espada para rematarlo, degollándolo a la vista de todos. 1 Samuel 17:51, 52.",
        type: "object",
        rarity: "3",
        unique: true,
        cost: "3",
        limited: false,
        immune: false,
        ability:
          "Vincular a un Personaje. Si el Personaje vinculado es David o Goliat, toma una carta del mazo. Gira un Lugar.",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "019",
        faction: "",
      },
      {
        title: "En el nombre de Marduk",
        name: "León Dorado",
        legend:
          "(Babilonia / Oro) 607 a.C. El rey Nabucodonosor destruye Jerusalén. Daniel 2:32, 36-38; 7:4.",
        type: "prophecy",
        rarity: "4",
        unique: true,
        cost: "4",
        limited: false,
        immune: false,
        ability: "Puedes jugar girado un Lugar.",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "020",
        faction: "",
      },
      {
        title: "Cachorro de León",
        name: "Judá",
        legend:
          "Cuarto hijo de Jacob y Lea. Convenció a sus hermanos de vender a José en vez de matarlo. Cumpliendo con las profecías, demostró ser superior a sus hermanos. Génesis 29:35.",
        type: "character",
        rarity: "3",
        unique: true,
        cost: "3",
        limited: true,
        immune: false,
        ability:
          "Limitada: Toma una carta del mazo cuando un Objeto Militar que controles sea enderezado por una habilidad.",
        expansion: "core",
        designer: "defaultDesigner",
        language: "es-ES",
        collectionNumber: "011",
        faction: "descendencia",
      },
      {
        title: "¡Ya te has inscrito!",
        name: "Libro de la Vida",
        legend:
          "Libro simbólico en el que Jehová escribe los nombres de las personas fieles que obtendrán vida eterna en el cielo o en la Tierra. Estos son borrados si las personas pierden su lealtad. Apocalipsis 3:5, 20:15.",
        type: "land",
        rarity: "12",
        unique: false,
        cost: "",
        limited: false,
        immune: false,
        ability: "",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "029",
        faction: "Santidad",
      },
      {
        title: "Santificado",
        name: "Santidad",
        legend: "Toma un Personaje de coste 4 o menos del mazo.",
        type: "strategy",
        rarity: "2",
        unique: true,
        cost: "",
        limited: false,
        immune: false,
        ability:
          "+ Paga 2 Dracmas para salvar un Personaje. + Toma el siguiente Evento del mazo cada vez que salves a un Personaje en juego. + Toma un Dracma de la reserva de otro jugador o del tesoro.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "026",
        faction: "Santidad",
      },
      {
        title: "Horeb",
        name: "Monte Sinaí",
        legend:
          "Montaña arábiga donde acamparon durante un año 3 millones de israelitas. Se crearon las '10 palabras'. Hubo truenos, una gran nube y un sonido muy fuerte de cuerno procedente de Jehová. Éxodo 19:19-20:18.",
        type: "land",
        rarity: "12",
        unique: false,
        cost: "",
        limited: false,
        immune: false,
        ability: "",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "030",
        faction: "Santidad",
      },
      {
        title: "Divina gloria real",
        name: "Oso Plateado",
        legend:
          "(Medopersia / Plata) Año 539 a.C. Medopersia conquista Babilonia. En el año 537 a.C. Ciro autoriza a los judíos a volver a Jerusalén. Daniel 2:32, 39; 7:5.",
        type: "prophecy",
        rarity: "8",
        unique: true,
        cost: "2",
        limited: false,
        immune: false,
        ability: "Toma un Personaje de coste 4 o menos del mazo.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "021",
        faction: "Descendencia",
      },
      {
        title: "Sin retirada, sin rendición",
        name: "Leopardo Cobrizo",
        legend:
          "(Grecia / Cobre) Año 331 a.C. Alejandro Magno conquista Persia. Daniel 2:32, 39; 7:6.",
        type: "prophecy",
        rarity: "10",
        unique: true,
        cost: "2",
        limited: false,
        immune: false,
        ability:
          "Toma una carta del mazo por cada otra Bestia que hayas jugado.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "022",
        faction: "Descendencia",
      },
      {
        title: "Última mayor potencia",
        name: "Ente del Lodazal",
        legend:
          "(EE.UU y UK / Barro) Año 1914-1918 E.C. En la 1ª Guerra Mundial surge la potencia mundial angloamericana. Daniel 2:33, 41-43.",
        type: "prophecy",
        rarity: "8",
        unique: true,
        cost: "3",
        limited: false,
        immune: false,
        ability:
          "Jugar la siguiente carta te costará -1 por cada Bestia que hayas jugado.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "023",
        faction: "Corrupción",
      },
      {
        title: "Híbrido del caos",
        name: "Fusión Bestial",
        legend:
          "(Todos los gobiernos) Cada cabeza representa un imperio: Egipto, Asiria, Babilonia, Medopersia, Grecia, Roma y la potencia angloamericana. Apocalipsis 13:1.",
        type: "prophecy",
        rarity: "8",
        unique: true,
        cost: "2",
        limited: false,
        immune: false,
        ability:
          "Si has jugado 4 Bestias, puedes ver las cartas en mano de un jugador y descartar una de ellas.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "024",
        faction: "Corrupción",
      },
      {
        title: "Enemigo de Dios",
        name: "Abominación Escarlata",
        legend:
          '(ONU y Babilonia) Se la considera el 8º rey. Esta bestia será destruida junto con el "falso profeta" en el Armagedón. Apocalipsis 13:14, 15; 17:3, 8, 11.',
        type: "prophecy",
        rarity: "8",
        unique: true,
        cost: "2",
        limited: false,
        immune: false,
        ability: "Copia la habilidad de otra Bestia que hayas jugado.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "025",
        faction: "Corrupción",
      },
      {
        title: "El padrenuestro",
        name: "Reino Celestial",
        legend:
          "Expresión que representa la soberanía de Dios por medio de una administración real encabezada por su Hijo, Cristo Jesús, acompañado de 144.000 ungidos. Lucas 4:43.",
        type: "land",
        rarity: "12",
        unique: true,
        cost: "",
        limited: false,
        immune: false,
        ability: "Inicio. No vinculable.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "027",
        faction: "Santidad",
      },
      {
        title: "El irreconocible",
        name: "Río Guihón",
        legend:
          "Uno de los 4 ríos que nacían en Edén y que rodeaba toda la tierra de Cus. Tras el Diluvio no se pudo reconocer su localización. Génesis 2:13.",
        type: "land",
        rarity: "12",
        unique: false,
        cost: "",
        limited: false,
        immune: false,
        ability: "",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "028",
        faction: "Santidad",
      },
      {
        title: "La profetisa",
        name: "Miriam",
        legend:
          "Primera profetisa mencionada en la Biblia. Jehová la mandó con sus hermanos a liberar a los israelitas de Egipto, pero la cubrió de lepra durante 7 días por haberse rebelado contra Moisés. Números 12:1-15.",
        type: "character",
        rarity: "2",
        unique: true,
        cost: "2",
        limited: true,
        immune: false,
        ability:
          "Cuando salves a un Profeta toma una carta del mazo. Si juegas a Aarón, toma del mazo una copia suya.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "034",
        faction: "Descendencia",
      },
      {
        title: "Sumo sacerdote",
        name: "Aarón",
        legend:
          "Fue vocero de su hermano Moisés y ejecutó los milagros de Dios. Primer sumo sacerdote de Israel. Acercó al pueblo a Jehová. Éxodo 4:14-16, 27-30.",
        type: "character",
        rarity: "2",
        unique: true,
        cost: "3",
        limited: true,
        immune: false,
        ability:
          "Reduce 2 el coste de jugar un Ángel. Si juegas a Moisés, toma del mazo una copia suya.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "033",
        faction: "Santidad",
      },
      {
        title: "El primero y el último",
        name: "Abel",
        legend:
          "Segundo hijo de la historia. Como pastor, sacrificó a Jehová lo mejor de su rebaño. Por envidia, su hermano Caín le dio muerte. Será la última persona en ser resucitada durante el milenio. Hebreos 11:4.",
        type: "character",
        rarity: "2",
        unique: true,
        cost: "2",
        limited: false,
        immune: false,
        ability:
          "Puedes jugar al Pichón y al Toro desde tu mano y activar su habilidad como si estuvieran vinculados.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "035",
        faction: "Descendencia",
      },
      {
        title: "El jezreelita",
        name: "Nabot",
        legend:
          "Propietario de una viña que fue asesinado junto con sus hijos por Acab y Jezabel por no acceder a su venta. 1 Reyes 21:1-4.",
        type: "character",
        rarity: "8",
        unique: true,
        cost: "1",
        limited: true,
        immune: false,
        ability:
          "Si esta carta es salvada o descartada del juego, del mazo o de la mano, toma la siguiente Ofrenda del mazo.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "037",
        faction: "Descendencia",
      },
      {
        title: "Predicador de justicia",
        name: "Noé, Hijo de Lamec",
        legend:
          "Décimo hombre en la línea desde Adán. Noé fue un predicador de justicia que construyó un arca para la salvación de su familia y de los animales a sus 600 años de edad. 2 Pedro 2:5, 6.",
        type: "character",
        rarity: "8",
        unique: true,
        cost: "3",
        limited: false,
        immune: false,
        ability:
          "Pon hasta 2 Dracmas de tu reserva sobre esta carta. Descartar 1 de ellos para salvar a un Personaje.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "036",
        faction: "Descendencia",
      },
      {
        title: "La roca",
        name: "Apóstol Pedro",
        legend:
          "También llamado Simón y Cefas. Este pescador era como una roca por su influencia fortalecedora para los cristianos. Fue un hombre de acción, gran fe y fuertes sentimientos. Mateo 14:25-32.",
        type: "character",
        rarity: "2",
        unique: true,
        cost: "2",
        limited: false,
        immune: false,
        ability: "Reduce 1 el coste de jugar un Personaje de Santidad.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "038",
        faction: "Santidad",
      },
      {
        title: "El mensajero",
        name: "Ángel Gabriel",
        legend:
          "El único ángel, además de Miguel, mencionado por nombre en la Biblia. Este ángel de alto rango en la corte celestial se apareció a Daniel, a Zacarías y a María. Lucas 1:26-38.",
        type: "character",
        rarity: "6",
        unique: true,
        cost: "5",
        limited: false,
        immune: false,
        ability:
          "Mira la carta superior de un mazo. Puedes colocarla bajo el mismo. Profecía: Si los Dracmas impresos en tu Profecía son inferiores a los de otro jugador, toma 1 Dracma adicional del tesoro.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "039",
        faction: "Santidad",
      },
      {
        title: "Purificación maternal",
        name: "Pichón",
        legend:
          'Aunque la palabra "pichón" aplica a las crías de ave en general, las que se utilizaban como sacrificio eran más bien las crías de paloma. Levítico 12:6.',
        type: "event",
        rarity: "12",
        unique: false,
        cost: "1",
        limited: false,
        immune: false,
        ability:
          "Vincular a un Personaje. Descartar: Salva al Personaje vinculado.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "040",
        faction: "Corrupción",
      },
      {
        title: "Gran lugar de adoración",
        name: "Tabernáculo",
        legend:
          "Tienda portátil de adoración a Jehová utilizada en Israel. Constaba del Santo (mesa del pan, el candelabro, un altar y utensilios de oro) y el Santísimo (con el arca del pacto). Éxodo 39:32.",
        type: "land",
        rarity: "12",
        unique: false,
        cost: "",
        limited: false,
        immune: false,
        ability: "",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "031",
        faction: "Santidad",
      },
      {
        title: "El caudillo",
        name: "Moisés",
        legend:
          "Siervo de Jehová y caudillo de Israel, mediador del pacto de la Ley, profeta, comandante, historiador y escritor. Escribió Génesis, Éxodo, Levítico, Números, Deuteronomio y Job. Éxodo 3:1-15.",
        type: "character",
        rarity: "8",
        unique: true,
        cost: "4",
        limited: true,
        immune: true,
        ability:
          "Inmune a Eventos. Tus Profetas obtienen: Salva esta carta. Si un Profeta es salvado de esta manera, puedes pagar 2 Dracmas para enderezarlo. Si controlas a Miriam, toma del mazo una copia suya.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "032",
        faction: "Santidad",
      },
      {
        title: "Bosque de Efraín",
        name: "Bosque Feral",
        legend:
          "Bosque en el que el ejército del rey David venció a los hombres de Israel. Murieron 20,000 hombres, pero fueron más los muertos por el bosque que por la espada. 2 Samuel 18:6-8.",
        type: "event",
        rarity: "12",
        unique: false,
        cost: "2",
        limited: true,
        immune: false,
        ability:
          "⚡ Todos los jugadores se descartan de un Personaje que controlen.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "042",
        faction: "Corrupción",
      },
      {
        title: "Tierra y Agua",
        name: "Mostaza",
        legend:
          "Parábola que representa y profetiza el sorprendente crecimiento de las personas que aceptan el mensaje del Reino y la protección que reciben. Lucas 17:6.",
        type: "prophecy",
        rarity: "8",
        unique: true,
        cost: "3",
        limited: false,
        immune: false,
        ability: "• Tus habilidades que reducen costes reducen 1 adicional.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "045",
        faction: "Santidad",
      },
      {
        title: "Periodo de Purificación",
        name: "Milenio",
        legend:
          "Tiempo en el que la “gran muchedumbre” habrá sobrevivido al Armagedón y alcanzará la perfección. Culminará con una prueba final. Apocalipsis 20:3.",
        type: "prophecy",
        rarity: "8",
        unique: true,
        cost: "2",
        limited: false,
        immune: false,
        ability: "• Toma 2 cartas del mazo.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "048",
        faction: "Santidad",
      },
      {
        title: "Insondable",
        name: "Abismo",
        legend:
          "Profundidad insondable donde Satanás y los demonios serán arrojados por 1000 años. Solo pueden acceder a el Dios y Apolión (Jesús), a quien Dios dio las llaves del Abismo. Apocalipsis 20:1-3.",
        type: "land",
        rarity: "10",
        unique: true,
        cost: "4",
        limited: false,
        immune: false,
        ability:
          "• Descartar Descartar hasta 2 Lugares en juego y genera  por cada Lugar descartado.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "050",
        faction: "Corrupción",
      },
      {
        title: "Densa Oscuridad",
        name: "Tártaro",
        legend:
          "Condición restringida y degradada en la que Dios sumió a los ángeles desobedientes desde tiempos de Noé hasta tiempo indefinido. En el Tártaro los demonios tienen una libertad limitada. 2 Pedro 2:4.",
        type: "land",
        rarity: "10",
        unique: false,
        cost: "3",
        limited: false,
        immune: false,
        ability: "",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "051",
        faction: "Corrupción",
      },
      {
        title: "Valle de Hinón",
        name: "Gehena",
        legend:
          "Llamada por muchos “Infierno”, la Gehena no es un tormento eterno, sino una destrucción eterna. Por eso es acertado que sea ilustrado con el fuego, que destruye completamente. Mateo 10:26.",
        type: "land",
        rarity: "10",
        unique: false,
        cost: "4",
        limited: false,
        immune: false,
        ability: "",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "052",
        faction: "Corrupción",
      },
      {
        title: "Corrupción",
        name: "Corrupción",
        legend: "",
        type: "prophecy",
        rarity: "6",
        unique: true,
        cost: "7",
        limited: false,
        immune: false,
        ability:
          "• Descartar las cartas superiores del mazo de un jugador equivalentes al valor de la tirada.\n• Recupera la carta superior de tus descartes.\n• Puedes descartar un Personaje en juego.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "049",
        faction: "Corrupción",
      },
      {
        title: "Lugar No Visto",
        name: "Hades • Seol",
        legend:
          "Sepultura común de la humanidad. Esta palabra es traducida erróneamente por “Infierno” en muchas traducciones de la Biblia. Hechos 2:31.",
        type: "land",
        rarity: "10",
        unique: false,
        cost: "2",
        limited: false,
        immune: false,
        ability: "",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "053",
        faction: "Corrupción",
      },
      {
        title: "Casa del Castillo",
        name: "Prisión",
        legend:
          "Se cree que se sujetaba a los prisioneros con grilletes y se les forzaba a trabajar. Bajo la ley mosaica no existían prisiones, pues la ley debía ejecutarse rápidamente. Esdras 7:26.",
        type: "land",
        rarity: "10",
        unique: false,
        cost: "3",
        limited: false,
        immune: false,
        ability: "",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "054",
        faction: "Corrupción",
      },
      {
        title: "Ofrenda Más Valiosa",
        name: "Toro",
        legend:
          "Símbolo babilonio del dios Marduk. En Egipto se veneraban como la reencarnación de los dioses Apis y Menfis. También uno de los primeros signos del zodíaco. Levítico 1:5.",
        type: "event",
        rarity: "12",
        unique: false,
        cost: "1",
        limited: false,
        immune: false,
        ability:
          "• Vincular a un Personaje no Inmune que controles. El Personaje vinculado se convierte en el objetivo de la siguiente habilidad activada que fuera a descartar un Personaje que controles.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "041",
        faction: "Corrupción",
      },
      {
        title: "Invocador Oscuro",
        name: "Sacerdote Mago",
        legend:
          "Estos sacerdotes intentaron desacreditar a Moisés y a Dios por medio de las artes mágicas, pero se vieron obligados a admitir su derrota y humillación. Éxodo 8:18, 19; 9:11.",
        type: "character",
        rarity: "6",
        unique: false,
        cost: "3",
        limited: false,
        immune: false,
        ability:
          "Reduce 1 el coste de jugar la siguiente Plaga durante esta ronda. Si esta carta es descartada, recupera la Plaga superior de tus descartes.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "059",
        faction: "Corrupción",
      },
      {
        title: "Escándalo",
        name: "La Concubina",
        legend:
          "Unos benjaminitas de Guibea violaron hasta matar a una mujer, que acabó siendo descuartizada en 12 partes por su esposo para ser enviados a cada tribu de Israel en forma de denuncia. Jueces 19.",
        type: "character",
        rarity: "6",
        unique: false,
        cost: "3",
        limited: false,
        immune: false,
        ability:
          "Puedes descartar hasta 2 Personajes en juego de coste 2 o inferior.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "060",
        faction: "Corrupción",
      },
      {
        title: "Títeres del Maligno",
        name: "Astrólogos Paganos",
        legend:
          "Medos sacerdotes que practicaban la magia y la adivinación. Los astrólogos del relato de Jesús no eran reyes, como sugiere la tradición popular. Mateo 2:1-16.",
        type: "character",
        rarity: "8",
        unique: false,
        cost: "2",
        limited: false,
        immune: false,
        ability:
          "Cuando recuperes una carta de tus descartes, cambia un Personaje que controles por otro Personaje en juego.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "061",
        faction: "Corrupción",
      },
      {
        title: "El Fervoroso",
        name: "Apóstol Pablo",
        legend:
          "Pese a su pasado oscuro en Tarso, escribió la mayor parte de los libros de las E.G.C. Recibió visiones sobrenaturales y habló lenguas mediante el espíritu santo. Hechos 9:9-19.",
        type: "character",
        rarity: "8",
        unique: false,
        cost: "2",
        limited: false,
        immune: false,
        ability: "Reduce 1 el coste de jugar un Personaje de Corrupción.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "062",
        faction: "Santidad",
      },
      {
        title: "Segunda Plaga",
        name: "Ranas",
        legend:
          "La rana, símbolo de fertilidad y resurrección para los egipcios, estaba consagrada a la diosa-rana Heqet. Esta plaga humilló a tal diosa. Éxodo 8:5-14.",
        type: "event",
        rarity: "8",
        unique: false,
        cost: "3",
        limited: false,
        immune: false,
        ability: "Elige a un jugador para que descarte un Lugar que controle.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "063",
        faction: "Descendencia",
      },
      {
        title: "Tercera Plaga",
        name: "Mosquitos",
        legend:
          "El dios mosquito se hace llamar 3 veces grande. El hecho de que se trate de la tercera plaga y que fuera tan devastadora no parece una simple coincidencia. Éxodo 8:16-19.",
        type: "event",
        rarity: "8",
        unique: false,
        cost: "4",
        limited: false,
        immune: false,
        ability:
          "Elige a un jugador para que sus Personajes no activen sus habilidades durante este turno.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "064",
        faction: "Descendencia",
      },
      {
        title: "Padre de Todos",
        name: "Adán",
        legend:
          "Coronamiento glorioso de la obra creativa terrestre de Dios, pues lo creó a su imagen. Adán no fue engañado, pero eligió a su esposa en vez de a Jehová. Romanos 5:12.",
        type: "character",
        rarity: "10",
        unique: false,
        cost: "4",
        limited: true,
        immune: false,
        ability:
          "Puedes descartar un Lugar que controles para tomar a Eva del mazo o de tus descartes.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "055",
        faction: "Santidad",
      },
      {
        title: "Madre de Todos",
        name: "Eva",
        legend:
          "Primera mujer y última creación terrestre de Dios de la que se tiene registro. Fue engañada por Satanás para que desobedeciera a Jehová, sentenciando así a la humanidad. Génesis 2:18-23.",
        type: "character",
        rarity: "2",
        unique: true,
        cost: "6",
        limited: true,
        immune: false,
        ability:
          "Si controlas a Adán, esta carta obtiene: Cambia una carta que controles por un Personaje en juego.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "056",
        faction: "Santidad",
      },
      {
        title: "Hijo de Metusael",
        name: "Lamec",
        legend:
          "Primer polígamo bíblico descendiente de Caín. Mató a un joven por haberle dado un golpe y pidió la inmunidad. Génesis 4:23, 24.",
        type: "character",
        rarity: "6",
        unique: false,
        cost: "1",
        limited: true,
        immune: false,
        ability:
          "Si esta carta es cambiada o descartada del juego, del mazo o de la mano, toma la siguiente Plaga del mazo.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "057",
        faction: "Descendencia",
      },
      {
        title: "Hijo de Cus",
        name: "Nemrod",
        legend:
          "Poderoso rey cazador opuesto a Jehová que fundó el primer imperio tras el Diluvio. Probablemente edificó la torre de Babel, pues parecía la solución ante otro Diluvio. 1 Crónicas 1:10; Génesis 10:9.",
        type: "character",
        rarity: "2",
        unique: false,
        cost: "3",
        limited: false,
        immune: false,
        ability:
          "Descarta una carta de tu mano para girar un Vínculo. Si la carta descartada es una Plaga, puedes recuperar la siguiente carta de tus descartes.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "058",
        faction: "Corrupción",
      },
      {
        title: "octava plaga",
        name: "Langostas",
        legend:
          'Esta plaga fue una derrota para los dioses que "aseguraban" una cosecha abundante, uno de los cuales era el dios de la fertilidad, Min, al que consideraban protector de cosechas. Éxodo 10:12-15.',
        type: "event",
        rarity: "10",
        unique: false,
        cost: "5",
        limited: false,
        immune: false,
        ability:
          "Elige a un jugador para que descarte hasta 2 Lugares que controle.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "065",
        faction: "Descendencia",
      },
      {
        title: "décima plaga",
        name: "Primogénito abatido",
        legend:
          'Las 10 plagas denotan totalidad. Objetivos: humillar, vindicar y liberar. Egipto "tenía" 740 dioses a los que Jehová humilló. La muerte del primogénito del faraón suponía la muerte de un dios. Éxodo 12:29.',
        type: "event",
        rarity: "10",
        unique: false,
        cost: "3",
        limited: false,
        immune: false,
        ability:
          "Los demás jugadores se descartan de un Personaje que controlen.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "066",
        faction: "Descendencia",
      },
      {
        title: "caballo rojo fuego",
        name: "Jinete de Fuego",
        legend:
          "(Guerra) Desde 1914 hubo guerras a nivel mundial. Esto muestra que la humanidad parece tener el poder de exterminarse. Apocalipsis 6:4.",
        type: "prophecy",
        rarity: "8",
        unique: true,
        cost: "4",
        limited: false,
        immune: false,
        ability: "Gira todos los Lugares en juego.\nToma una carta del mazo.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "068",
        faction: "Santidad",
      },
      {
        title: "caballo negro",
        name: "Jinete Negro",
        legend:
          "(Hambre) Continúa cabalgando, especialmente desde 1914. Apocalipsis 6:5, 6.",
        type: "prophecy",
        rarity: "8",
        unique: true,
        cost: "4",
        limited: false,
        immune: false,
        ability:
          "Durante esta ronda, los Personajes en juego perderán sus habilidades.\nToma una carta del mazo.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "069",
        faction: "Santidad",
      },
      {
        title: "caballo pálido",
        name: "Jinete Pálido",
        legend:
          "(Muerte) Después de 1914, la gripe española contagió a un tercio de la población mundial, matando a decenas de millones de personas. Apocalipsis 6:8.",
        type: "prophecy",
        rarity: "8",
        unique: true,
        cost: "4",
        limited: false,
        immune: false,
        ability:
          "Durante esta ronda, los Vínculos en juego perderán sus habilidades.\nToma una carta del mazo.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "070",
        faction: "Santidad",
      },
      {
        title: "humanidad restaurada",
        name: "Recreación",
        legend:
          'Jehová se propone "hacerlo todo nuevo" bajo el reinado de Cristo. Mateo 19:28.',
        type: "prophecy",
        rarity: "8",
        unique: true,
        cost: "4",
        limited: false,
        immune: false,
        ability: "Descarta X cartas de tu mano para tomar X cartas del mazo.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "072",
        faction: "Santidad",
      },
      {
        title: "rey de reyes y señor de señores",
        name: "Jinete Fiel",
        legend:
          "(Jesucristo) Jinete personificado por Jesucristo que guerreará contra los enemigos de Dios y los derrotará. Apocalipsis 19:11-21.",
        type: "prophecy",
        rarity: "8",
        unique: true,
        cost: "1",
        limited: false,
        immune: false,
        ability:
          "Todos los jugadores se descartan de cartas de su mano hasta quedarse con 3.\nToma una carta del mazo.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "071",
        faction: "Santidad",
      },
      {
        title: "primer sello",
        name: "Jinete Blanco",
        legend:
          "(Jesucristo) Este primer jinete del Apocalipsis recibió autoridad de Jehová para reinar y guerrear a partir del año 1914. Apocalipsis 12.",
        type: "prophecy",
        rarity: "8",
        unique: true,
        cost: "2",
        limited: false,
        immune: false,
        ability:
          "Los demás jugadores se descartan de una carta en mano por cada otro Jinete que hayas jugado.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "067",
        faction: "Santidad",
      },
      {
        title: "algo parecido a...",
        name: "Estructura Celestial",
        legend:
          "(Organización celestial) Esta imponente estructura representa las dimensiones y el potencial de la organización celestial de Jehová. Ezequiel 1, 10.",
        type: "prophecy",
        rarity: "8",
        unique: true,
        cost: "2",
        limited: false,
        immune: false,
        ability: "Toma una carta del mazo cada vez que juegues un Evento.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "043",
        faction: "Descendencia",
      },
      {
        title: '"veni, vidi, vici"',
        name: "Engendro Férreo",
        legend:
          "(Roma / Hierro) Año 63 a.C. Roma gobierna Israel. En el año 70 E.C. destruye Jerusalén. Daniel 2:33, 40; 7:7.",
        type: "prophecy",
        rarity: "8",
        unique: true,
        cost: "1",
        limited: false,
        immune: false,
        ability:
          "Devuelve una carta en juego a la mano de su propietario. No puede ser salvada.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "046",
        faction: "Descendencia",
      },
      {
        title: "sueño profético",
        name: "Pesadilla Vacuna",
        legend:
          "Sueño profético del Faraón en el que 7 vacas gordas son devoradas por 7 vacas flacas. Equivale a 7 años de abundancia y 7 años de hambre. Génesis 41.",
        type: "prophecy",
        rarity: "8",
        unique: true,
        cost: "3",
        limited: false,
        immune: false,
        ability:
          "Toma hasta 3 Dracmas del tesoro o de la reserva de otro jugador.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "044",
        faction: "Descendencia",
      },
      {
        title: "mediador espiritual",
        name: "Fiel y Prudente",
        legend:
          "(Cuerpo gobernante) Pequeño grupo de cristianos que dirigen la organización mundial de los testigos de Jehová. Lucas 12:42.",
        type: "prophecy",
        rarity: "8",
        unique: true,
        cost: "1",
        limited: false,
        immune: false,
        ability:
          "Puedes enderezar a tus Personajes la primera vez que sean girados.",
        expansion: "core",
        designer: "DefaultDesigner",
        language: "es-ES",
        collectionNumber: "047",
        faction: "Descendencia",
      },
    ],
    []
  );
  const cardVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.25,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
  };
  const sortByFilterList = new Map([
    ["name", "Nombre"],
    ["legend", "Leyenda"],
    ["type", "Tipo"],
    ["rarity", "Rareza"],
    ["unique", "Única"],
    ["cost", "Coste"],
    ["limited", "Limitada"],
    ["immune", "Inmune"],
    ["ability", "Habilidad"],
    ["collectionNumber", "Número de Colección"],
    ["faction", "Facción"],
  ]);
  const [searchByFilter, setSearchByFilter] = useState("");
  const [sortByFilter, setSortByFilter] = useState(
    Array.from(sortByFilterList.keys())[0]
  );
  const [cardList, setCardList] = useState(
    cardsRawList.toSorted((a: CardTypeExtended, b: CardTypeExtended) =>
      a.name.localeCompare(b.name)
    )
  );

  useEffect(() => {
    // TO-DO: Move it to a function
    const filteredCardList: CardTypeExtended[] = cardsRawList.filter((card) => {
      if (searchByFilter === "") {
        return true;
      }

      for (const key in cardTypeStringsKeys) {
        if (
          card[key as keyof CardTypeStrings]
            .toLowerCase()
            .includes(searchByFilter.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });

    const sortedCardList: CardTypeExtended[] = filteredCardList.toSorted(
      (a: CardTypeExtended, b: CardTypeExtended) => {
        if (isCardTypeExtendedKeyString(sortByFilter)) {
          return a[sortByFilter].localeCompare(b[sortByFilter]);
        } else if (isCardTypeExtendedKeyBoolean(sortByFilter)) {
          return a[sortByFilter] === b[sortByFilter]
            ? 0
            : a[sortByFilter]
            ? -1
            : 1;
        }
        return a.name.localeCompare(b.name);
      }
    );
    setCardList(sortedCardList);
  }, [searchByFilter, sortByFilter, cardsRawList]);

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <section className="px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">
            Listado de cartas
          </h2>
          {/* Filters */}
          <div className="mb-12 flex flex-col sm:flex-row sm:justify-end gap-8">
            <div className="flex gap-2 items-center justify-end">
              <label
                className="block text-sm text-[#ffd700]"
                htmlFor="searchBy"
              >
                Buscar
              </label>
              <div className="mt-1 relative">
                <input
                  className="block w-[250px] pl-3 pr-10 py-2 text-base border-gray-300 bg-slate-500 focus:outline-none sm:text-sm md:w-full rounded-md"
                  id="searchBy"
                  name="searchBy"
                  placeholder="Filtrar por texto..."
                  onChange={(e) => setSearchByFilter(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2 items-center justify-end">
              <label className="block text-sm text-[#ffd700]" htmlFor="sortBy">
                Ordenar por
              </label>
              <div className="mt-1 relative">
                <select
                  className="block w-[250px] pl-3 pr-10 py-2 text-base border-gray-300 bg-slate-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:w-full rounded-md"
                  id="sortBy"
                  name="sortBy"
                  defaultValue={Array.from(sortByFilterList.keys())[0]}
                  onChange={(e) => setSortByFilter(e.target.value)}
                >
                  {Array.from(sortByFilterList.keys()).map((option: string) => (
                    <option key={option} value={option}>
                      {sortByFilterList.get(option)}
                    </option>
                  ))}
                </select>
                {/* TO-DO: Add sort icon */}
                {/* TO-DO: Sort by ASC and DESC*/}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {cardList.map((item) => {
              return (
                <motion.div
                  key={item.collectionNumber}
                  className="flex flex-col items-center gap-2"
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                >
                  {/* <Image src="/placeholder_card.svg" width={120} height={180} alt="Card" priority={true} className="rounded-md aspect-[120/180] object-cover" /> */}
                  <Image
                    src={`/images/${item.collectionNumber}.jpg`}
                    width={120}
                    height={180}
                    alt="Card"
                    priority={true}
                    className="rounded-md aspect-[120/180] object-cover"
                  />
                  <span className="text-sm font-medium">{item.name}</span>
                  <Button
                    size="sm"
                    className="bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700]"
                  >
                    Ver carta
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
