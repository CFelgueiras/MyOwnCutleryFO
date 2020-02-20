import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MachineSearchComponent} from './components/Factory/machine-search/machine-search.component';
import {MachineTypeComponent} from './components/Factory/machine-type/machine-type.component';
import {CreateOperationComponent} from './components/Factory/create-operation/create-operation.component';
import {AboutComponent} from './components/about/about.component';
import {CreateMachineComponent} from './components/Factory/create-machine/create-machine.component';
import {CreateMachineTypeComponent} from './components/Factory/create-machine-type/create-machine-type.component';
import {CreateProductionLineComponent} from './components/Factory/create-production-line/create-production-line.component';
import {CreateProductComponent} from './components/Production/create-product/create-product.component';
import {ProductSearchComponent} from './components/Production/product-search/product-search.component';
import {ManufacturingPlanSearchComponent} from './components/Production/manufacturing-plan-search/manufacturing-plan-search.component';
import {UpdateMachineComponent} from './components/Factory/update-machine/update-machine.component';
// tslint:disable-next-line:max-line-length
import {UpdateMachineTypeOperationComponent} from './components/Factory/update-machine-type-operation/update-machine-type-operation.component';
import {VizCanvasComponent} from './components/WebGl/viz-canvas.component';
import {MachineOperationsComponent} from './components/Factory/machine-operations/machine-operations.component';
import {CreateClientComponent} from './components/OrdersManagement/create-client/create-client.component';
import {ClientSearchComponent} from './components/OrdersManagement/search-client/search-client.component';
import {UpdateClientComponent} from './components/OrdersManagement/update-client/update-client.component';
import {RGPDComponent} from './components/RGPD/rgpd.component';
import {CreateOrderComponent} from './components/OrdersManagement/create-order/create-order.component';
import {OrderSearchComponent} from './components/OrdersManagement/search-order/search-order.component';
import {UpdateOrderComponent} from './components/OrdersManagement/update-order/update-order.component';
import {DeleteOrderComponent} from './components/OrdersManagement/delete-order/delete-order.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/auth.guard';
import {ChangeMachineStateComponent} from './components/Factory/change-machine-state/change-machine-state.component';
import {MyOrdersComponent} from './components/ClientArea/my-orders/my-orders.component';
import {ProductBestSellersComponent} from './components/ClientArea/product-best-sellers/product-best-sellers.component';
import {ProductModeComponent} from './components/ClientArea/product-mode/product-mode.component';
import {ProductFastestToCreateComponent} from './components/ClientArea/product-fastest-to-create/product-fastest-to-create.component';

const routes: Routes = [
  {path: 'ClientArea', component: MyOrdersComponent , canActivate: [AuthGuard]},
  {path: 'ProductBestSellers', component: ProductBestSellersComponent , canActivate: [AuthGuard]},
  {path: 'ProductMode', component: ProductModeComponent , canActivate: [AuthGuard]},
  {path: 'ProductLessTimeProduction', component: ProductFastestToCreateComponent , canActivate: [AuthGuard]},
  {path: 'MachineSearch', component: MachineSearchComponent , canActivate: [AuthGuard]},
  {path: 'MachineTypeSearch', component: MachineTypeComponent, canActivate: [AuthGuard]},
  {path: 'MachineType', component: CreateMachineTypeComponent, canActivate: [AuthGuard]},
  {path: 'MachineTypeUpdate', component: UpdateMachineComponent, canActivate: [AuthGuard]},
  {path: 'MachineStateUpdate', component: ChangeMachineStateComponent, canActivate: [AuthGuard]},
  {path: 'Machine', component: CreateMachineComponent, canActivate: [AuthGuard]},
  {path: 'Operation', component: CreateOperationComponent, canActivate: [AuthGuard]},
  {path: 'OperationUpdate', component: UpdateMachineTypeOperationComponent, canActivate: [AuthGuard]},
  {path: 'ProductionLine', component: CreateProductionLineComponent, canActivate: [AuthGuard]},
  {path: 'Product', component: CreateProductComponent , canActivate: [AuthGuard]},
  {path: 'ProductSearch', component: ProductSearchComponent , canActivate: [AuthGuard]},
  {path: 'ManPlanSearch', component: ManufacturingPlanSearchComponent , canActivate: [AuthGuard]},
  {path: 'OperationsMachType', component: MachineOperationsComponent , canActivate: [AuthGuard]},
  {path: 'CreateClient', component: CreateClientComponent , canActivate: [AuthGuard]},
  {path: 'ClientSearch', component: ClientSearchComponent , canActivate: [AuthGuard]},
  {path: 'ClientUpdate', component: UpdateClientComponent , canActivate: [AuthGuard]},
  {path: 'About', component: AboutComponent},
  {path: 'MyOwnCutlery3D', component: VizCanvasComponent},
  {path: 'RGPD', component: RGPDComponent},
  {path: 'CreateOrder', component: CreateOrderComponent , canActivate: [AuthGuard]},
  {path: 'OrderSearch', component: OrderSearchComponent, canActivate: [AuthGuard]},
  {path: 'OrderUpdate', component: UpdateOrderComponent, canActivate: [AuthGuard]},
  {path: 'OrderDelete', component: DeleteOrderComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
