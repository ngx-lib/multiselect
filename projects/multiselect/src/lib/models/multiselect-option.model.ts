export interface MultiselectOption {
  id?: any;
  name: string;
  disabled?: boolean;
  ticked?: boolean;
  [key: string]: any;
}

export interface GroupByMultiselectOption extends MultiselectOption {
  isGroup: boolean;
  parent?: string;
  values?: MultiselectOption[];
  depth?: number;
}
