import "reflect-metadata";
import { Store } from '~/app/core/state/app-store';

describe("App Store", () => {
    let store: Store;

    beforeEach(() => {
        store = new Store();
    })


    it("default language is english", () => {
        // Act
        store.set("defaultLanguage", "english");
        // Assert
        expect(store.value.defaultLanguage).toBe("english");
    })


    it("default language is english", () => {
        // Act
        store.set("defaultLanguage", "english");
        // Assert
        expect(store.value.defaultLanguage).toBe("english");
    })
})
