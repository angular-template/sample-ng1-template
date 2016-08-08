/// <reference path="../../../../typings/index.d.ts"/>
/// <reference path="../../../../typings/app.d.ts"/>

namespace demo.home {
    export const name: string = 'home';

    @Component({
        selector: name
    }, {
            path: '/',
            parent: layouts.sample.name
        })
    export class HomeComponent implements ng.IComponentController {
        /* @ngInject */
        constructor(private $state: ng.ui.IStateService, private customersParams: customers.CustomerParams) {
        }

        public $onInit(): void {
            this.fname = this.customersParams.firstName;
        }

        public fname: string = 'Newer FF Name';

        public showCustomers(): void {
            this.customersParams.firstName = this.fname;
            this.$state.go(customers.name, {
                cust: { id: 82, firstName: 'Anders', lastName: 'Heijlsberg', startDate: new Date() }
            });
        }
    }
}
