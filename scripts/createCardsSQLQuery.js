// Read the raw card list
const rawCardList = require("../app/cards/rawCardList.json");
let sqlQuery = '';
// Loop through the raw card list and create the SQL query
for (const card of rawCardList) {
  sqlQuery += `INSERT INTO cards (
    collection_number,
    title,
    name,
    legend,
    type,
    rarity,
    "unique",
    cost,
    limited,
    immune,
    ability,
    expansion,
    designer,
    language,
    faction
  ) VALUES (
    '${Number(card.collectionNumber)}',
    '${escapeSingleQuotes(card.title)}',
    '${escapeSingleQuotes(card.name)}',
    '${escapeSingleQuotes(card.legend)}',
    '${escapeSingleQuotes(card.type)}',
    '${card.rarity? Number(card.rarity): 12}',
    ${card.unique.toString().toUpperCase()},
    ${card.cost? Number(card.cost) : 'NULL'},
    ${card.limited.toString().toUpperCase()},
    ${card.immune.toString().toUpperCase()},
    '${escapeSingleQuotes(card.ability)}',
    '${card.expansion}',
    'Natán Mangas Diz',
    '${card.language}',
    ${card.faction? `'${capitalFirstLetter(card.faction)}'` : 'NULL'}
  );
`;
}


function capitalFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeSingleQuotes(str) {
  return str.replace(/'/g, "''");
}

console.log(sqlQuery);