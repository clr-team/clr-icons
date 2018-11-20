import { IconAlias, IconShapeSources } from './interfaces/icon-interfaces';
export declare namespace ApiModule {
    class ClarityIconsApi {
        private iconShapeSources;
        private validateName;
        private setIconTemplate;
        private setIconAliases;
        init(icons?: IconShapeSources): void;
        add(icons?: IconShapeSources): void;
        has(shapeName: string): boolean;
        get(shapeName?: string): any;
        alias(aliases?: IconAlias): void;
    }
    const instance: ClarityIconsApi;
}
