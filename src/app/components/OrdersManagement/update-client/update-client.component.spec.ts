import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateClientComponent} from './update-client.component';
import {declarations} from '../../../app.declarations';
import {imports} from '../../../app.imports';
import {ClientService} from '../../../services/client.service';

describe('UpdateClientComponent', () => {
    let component: UpdateClientComponent;
    let fixture: ComponentFixture<UpdateClientComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations,
            imports,
            providers: [ClientService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UpdateClientComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return false when Client Id is empty', () => {
        spyOn(window, 'alert');
        component.clientUpdate.id = '';
        component.clientUpdate.name = 'a';
        component.clientUpdate.email = 'a';
        component.clientUpdate.address = 'a';
        component.updateClient();
        expect(window.alert).toHaveBeenCalledWith('Client ID field is mandatory.');
    });

    it('should return true when Client Id is filled', () => {
        spyOn(window, 'alert');
        component.clientUpdate.id = '1';
        component.clientUpdate.name = 'a';
        component.clientUpdate.email = 'x';
        component.clientUpdate.address = 'z';
        component.updateClient();
        expect(window.alert).toHaveBeenCalledWith('Client was successfully updated.');
    });

    it('should call updateClient Method when identification is filled', () => {
        const debugElement = fixture.debugElement;
        const clientService = debugElement.injector.get(ClientService);
        const spy = spyOn(clientService, 'updateClient').and.callThrough();
        component.clientUpdate.id = '1';
        component.clientUpdate.name = 'a';
        component.clientUpdate.email = 'x';
        component.clientUpdate.address = 'z';
        component.updateClient();
        expect(spy).toHaveBeenCalled();
    });
});
