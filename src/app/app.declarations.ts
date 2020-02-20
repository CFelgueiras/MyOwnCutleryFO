import {CreateMachineComponent} from './components/Factory/create-machine/create-machine.component';
import {CreateMachineTypeComponent} from './components/Factory/create-machine-type/create-machine-type.component';
import {CreateOperationComponent} from './components/Factory/create-operation/create-operation.component';
import {CreateProductComponent} from './components/Production/create-product/create-product.component';
import {CreateProductionLineComponent} from './components/Factory/create-production-line/create-production-line.component';
import {MachineOperationsComponent} from './components/Factory/machine-operations/machine-operations.component';
import {MachineSearchComponent} from './components/Factory/machine-search/machine-search.component';
import {MachineTypeComponent} from './components/Factory/machine-type/machine-type.component';
import {ManufacturingPlanSearchComponent} from './components/Production/manufacturing-plan-search/manufacturing-plan-search.component';
import {ProductSearchComponent} from './components/Production/product-search/product-search.component';
import {AboutComponent} from './components/about/about.component';
import {UpdateMachineComponent} from './components/Factory/update-machine/update-machine.component';
// tslint:disable-next-line:max-line-length
import {UpdateMachineTypeOperationComponent} from './components/Factory/update-machine-type-operation/update-machine-type-operation.component';
import {VizCanvasComponent} from './components/WebGl/viz-canvas.component';
import {AppComponent} from './app.component';
import {CreateClientComponent} from './components/OrdersManagement/create-client/create-client.component';
import {UpdateClientComponent} from './components/OrdersManagement/update-client/update-client.component';
import {ClientSearchComponent} from './components/OrdersManagement/search-client/search-client.component';
import {CreateOrderComponent} from './components/OrdersManagement/create-order/create-order.component';
import {RGPDComponent} from './components/RGPD/rgpd.component';
import {DeleteOrderComponent} from './components/OrdersManagement/delete-order/delete-order.component';
import {UpdateOrderComponent} from './components/OrdersManagement/update-order/update-order.component';
import {OrderSearchComponent} from './components/OrdersManagement/search-order/search-order.component';
import {LoginComponent} from './auth/login/login.component';
import {MyOrdersComponent} from './components/ClientArea/my-orders/my-orders.component';
import {ProductBestSellersComponent} from './components/ClientArea/product-best-sellers/product-best-sellers.component';
import {ProductModeComponent} from './components/ClientArea/product-mode/product-mode.component';
import {ProductFastestToCreateComponent} from './components/ClientArea/product-fastest-to-create/product-fastest-to-create.component';
import {ChangeMachineStateComponent} from './components/Factory/change-machine-state/change-machine-state.component';

export const declarations = [
    CreateProductionLineComponent,
    CreateProductComponent,
    CreateOperationComponent,
    CreateMachineTypeComponent,
    CreateMachineComponent,
    ManufacturingPlanSearchComponent,
    MachineTypeComponent,
    MachineSearchComponent,
    MachineOperationsComponent,
    ProductSearchComponent,
    AboutComponent,
    UpdateMachineComponent,
    UpdateMachineTypeOperationComponent,
    CreateClientComponent,
    UpdateClientComponent,
    ClientSearchComponent,
    VizCanvasComponent,
    AppComponent,
    CreateOrderComponent,
    RGPDComponent,
    DeleteOrderComponent,
    UpdateOrderComponent,
    OrderSearchComponent,
    LoginComponent,
    MyOrdersComponent,
    ProductBestSellersComponent,
    ProductModeComponent,
    ProductFastestToCreateComponent,
    ChangeMachineStateComponent,
];
