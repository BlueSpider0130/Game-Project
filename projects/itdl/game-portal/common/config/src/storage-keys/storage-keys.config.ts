export class StorageKeys {
    public static readonly GameContainerState = 'gameContainerState';
    public static readonly GameDefinitionState = 'gameDefinitionsState';
    public static readonly GameState = 'gameState';
    public static readonly User = 'user';
    public static readonly UserPreferences = 'userPreferences';
    public static readonly Player = 'playerState';
    public static readonly Auth = 'authState';
    public static readonly KrokoGameState = 'krokoGameState';
    public static readonly GeoGuesserGameState = 'geoGuesserGameState';

    public static get keys() {
        return Object.values(StorageKeys);
    }
}
