import { IDynamicModuleConfiguration } from './dynamic-module-configuration.interface';

export interface IDynamicLoaderConfiguration {
    devMode: boolean;
    moduleConfigs: Record<string, IDynamicModuleConfiguration>;
}
