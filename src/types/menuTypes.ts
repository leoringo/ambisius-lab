export interface TMenuList {
    id: string;
    name: string;
}

export interface TMenuContext {
    menuList?: TMenuList[];
    setMenuList?: (value: TMenuList[]) => void;
}