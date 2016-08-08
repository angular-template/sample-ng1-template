/// <reference path="../../../../typings/index.d.ts"/>
/// <reference path="../../../../typings/app.d.ts"/>

namespace demo.customers {
    import ws = common.webservices;
    import wsModels = common.webservices.models;

    export const name: string = 'customers';

    @Component({
        selector: name
    }, {
        path: '/demos/customers',
        parent: demo.layouts.sample.name,
        params: {
            cust: new Date()
        }
    })
    export class CustomersComponent implements ng.IComponentController {
        /* @ngInject */
        constructor(
            private customersWebService: ws.CustomersWebService,
            private $stateParams: ng.ui.IStateParamsService,
            private customersParams: CustomerParams
        ) {
        }

        public $onInit(): void {
            this.customers = this.customersWebService.getCustomers()
                .concat(this.$stateParams['cust'] || [
                    {
                        id: 77,
                        firstName: 'Jeevan',
                        lastName: 'James',
                        startDate: new Date()
                    }
                ])
                .concat({
                    id: 567,
                    firstName: this.customersParams.firstName || 'Not assigned',
                    lastName: 'James',
                    startDate: new Date()
                });
        }

        public customers: wsModels.Customer[];
    }

    @InjectableState('customersParams')
    export class CustomerParams {
        @state.session()
        public firstName: string;
    }
}
