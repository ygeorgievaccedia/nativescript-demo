import "reflect-metadata";
import { HomePageComponent } from '~/app/modules/home/home-page/home-page.component';

describe("Home page component", () => {
    let homeComponent: HomePageComponent;

    beforeEach(() => {
        // homeComponent = new HomePageComponent();
    })

    it("button click update test property set to true", () => {
        homeComponent.onChangeTestValue();
        expect(homeComponent.testProperty).toBe(true);
    })
})
