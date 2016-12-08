"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var AddNewTaskClipComponent = (function () {
    function AddNewTaskClipComponent(_route) {
        this._route = _route;
        this.showAddClip = false;
    }
    AddNewTaskClipComponent.prototype.ngOnInit = function () {
        var id = +this._route.snapshot.params['id'];
    };
    AddNewTaskClipComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $('.collapsible').collapsible();
        });
    };
    AddNewTaskClipComponent = __decorate([
        core_1.Component({
            selector: 'vtl-add-new-task-clip',
            templateUrl: 'app/shared/add-new-task-clip.component.html',
            styleUrls: ['app/shared/add-new-task-clip.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], AddNewTaskClipComponent);
    return AddNewTaskClipComponent;
}());
exports.AddNewTaskClipComponent = AddNewTaskClipComponent;
//# sourceMappingURL=add-new-task-clip.component.js.map