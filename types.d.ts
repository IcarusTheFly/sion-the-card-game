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

type HeaderLinkType = {
  name: string;
  href: string;
};

interface LoginFormData {
  email: string;
  password: string;
};
