import { DomainEvent } from './domainEvent';

export abstract class EntityBase<T extends number> {
    public id: T | any;
    private _domainEvents: Array<DomainEvent> = new Array<DomainEvent>();

    public addDomainEvent(event: DomainEvent): void {
        this._domainEvents.push(event);
    };

    public removeDomainEvent(event: DomainEvent): void {
        // this._domainEvents.
    }
}