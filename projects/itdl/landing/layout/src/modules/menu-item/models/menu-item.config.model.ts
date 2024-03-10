export type MenuItemConfig = {
    titleKey: string;
    subMenus?: SubMenuItemConfig[];
};

export type SubMenuItemConfig = {
    titleKey: string;
    logicAnchorName?: string;
    action?: () => void;
};
