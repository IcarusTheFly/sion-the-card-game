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

type UserPayload = {
  username: string;
  email: string;
};

type LoginResultType = {
  data: UserPayload | null;
  error: string;
};

interface LoginFormData {
  email: string;
  password: string;
}

interface UserDataContextType {
  userData: UserPayload;
  createSession: (payload: UserPayload) => Promise<void>;
  destroySession: () => Promise<void>;
  fetchSession: () => Promise<void>;
}

declare module "bcrypt" {
  export function hashSync(password: string, saltRounds: number): string;
  export function compareSync(password: string, hash: string): boolean;
}