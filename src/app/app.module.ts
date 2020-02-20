import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule, MatNativeDateModule,
} from '@angular/material';
import {MachineSearchComponent} from './components/Factory/machine-search/machine-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateOperationComponent} from './components/Factory/create-operation/create-operation.component';
import {MachineTypeComponent} from './components/Factory/machine-type/machine-type.component';
import {MatMenuModule} from '@angular/material/menu';
import {AboutComponent} from './components/about/about.component';
import {MachineOperationsComponent} from './components/Factory/machine-operations/machine-operations.component';
import {CreateMachineTypeComponent} from './components/Factory/create-machine-type/create-machine-type.component';
import {CreateMachineComponent} from './components/Factory/create-machine/create-machine.component';
import {CreateProductionLineComponent} from './components/Factory/create-production-line/create-production-line.component';
import {ProductSearchComponent} from './components/Production/product-search/product-search.component';
import {ManufacturingPlanSearchComponent} from './components/Production/manufacturing-plan-search/manufacturing-plan-search.component';
import {CreateProductComponent} from './components/Production/create-product/create-product.component';
import {UpdateMachineComponent} from './components/Factory/update-machine/update-machine.component';
// tslint:disable-next-line:max-line-length
import {UpdateMachineTypeOperationComponent} from './components/Factory/update-machine-type-operation/update-machine-type-operation.component';
import {VizCanvasComponent} from './components/WebGl/viz-canvas.component';
import {UpdateClientComponent} from './components/OrdersManagement/update-client/update-client.component';
import {CreateClientComponent} from './components/OrdersManagement/create-client/create-client.component';
import {ClientSearchComponent} from './components/OrdersManagement/search-client/search-client.component';
import {RGPDComponent} from './components/RGPD/rgpd.component';
import {CreateOrderComponent} from './components/OrdersManagement/create-order/create-order.component';
import {OrderSearchComponent} from './components/OrdersManagement/search-order/search-order.component';
import {UpdateOrderComponent} from './components/OrdersManagement/update-order/update-order.component';
import {DeleteOrderComponent} from './components/OrdersManagement/delete-order/delete-order.component';
import {LoginComponent} from './auth/login/login.component';
import {JwtInterceptor} from './interceptors/jwt.interceptor';
import {UnauthorizedInterceptor} from './auth/services/unauthorized.interceptor';
import {AuthGuard} from './auth/auth.guard';
import {ChangeMachineStateComponent} from './components/Factory/change-machine-state/change-machine-state.component';
import {DemoMaterialModule} from './components/about/material-module';
import {MyOrdersComponent} from './components/ClientArea/my-orders/my-orders.component';
import { ProductModeComponent } from './components/ClientArea/product-mode/product-mode.component';
import { ProductBestSellersComponent } from './components/ClientArea/product-best-sellers/product-best-sellers.component';
import { ProductFastestToCreateComponent } from './components/ClientArea/product-fastest-to-create/product-fastest-to-create.component';

@NgModule({
    declarations: [
        AppComponent,
        MachineSearchComponent,
        CreateOperationComponent,
        MachineTypeComponent,
        AboutComponent,
        MachineOperationsComponent,
        CreateMachineTypeComponent,
        CreateMachineComponent,
        CreateProductionLineComponent,
        ProductSearchComponent,
        ManufacturingPlanSearchComponent,
        CreateProductComponent,
        UpdateMachineComponent,
        UpdateMachineTypeOperationComponent,
        VizCanvasComponent,
        CreateClientComponent,
        UpdateClientComponent,
        ClientSearchComponent,
        RGPDComponent,
        CreateOrderComponent,
        OrderSearchComponent,
        UpdateOrderComponent,
        DeleteOrderComponent,
        LoginComponent,
        ChangeMachineStateComponent,
        AboutComponent,
        MyOrdersComponent,
        ProductModeComponent,
        ProductBestSellersComponent,
        ProductFastestToCreateComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        MatMenuModule,
        ReactiveFormsModule,
        MatCardModule,
        MatTableModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        DemoMaterialModule,
        MatNativeDateModule,
        ReactiveFormsModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true},
        AuthGuard,
    ],
    bootstrap: [AppComponent, AboutComponent]
})
export class AppModule {

}
