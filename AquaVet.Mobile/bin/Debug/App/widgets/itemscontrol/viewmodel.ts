/// <reference path="../../_typings.ts" />
export class ItemsControl{
    public headerProperty: KnockoutObservable<string>;
    public items: KnockoutObservableArray<any>;

    constructor() {
        
    }

    public activate(settings) {
        this.headerProperty = settings.headerProperty;
        this.items = settings.items;
    }

    public getHeaderText(item) {
        if (this.headerProperty) {
            return item[this.headerProperty];
        }

        return item.toString();
    }
    public attached() { }

}

export var ic = new ItemsControl();

export var activate = function (settings) { return ic.activate(settings); };
export var attached = function () { ic.attached(); }