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
var primeng_1 = require('primeng/primeng');
var categories_service_1 = require('./categories.service');
var CategoryEditComponent = (function () {
    function CategoryEditComponent(router, categoriesService) {
        this.router = router;
        this.categoriesService = categoriesService;
        this.category = {
            catId: 0,
            catName: '',
            catSlug: '',
            catStatus: 0
        };
        this.statusList = [
            { label: 'Ukryty', value: 0 },
            { label: 'Widoczny', value: 1 }
        ];
    }
    CategoryEditComponent.prototype.saveCategory = function () {
        var _this = this;
        this.categoriesService.saveCategory(this.category)
            .subscribe(function (res) { _this.router.navigate(['/backoffice/categories']); }, function (error) { return console.log('onError: %s', error); });
    };
    CategoryEditComponent.prototype.routerOnActivate = function (curr) {
        var _this = this;
        var id = parseInt(curr.getParam('id'));
        this.categoriesService.getCategory(id)
            .subscribe(function (category) { return _this.category = category; }, function (error) { return console.log('onError: %s', error); });
    };
    CategoryEditComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/categories/category-edit.component.html',
            providers: [categories_service_1.CategoriesService],
            directives: [primeng_1.InputText, primeng_1.Dropdown, primeng_1.Button]
        }), 
        __metadata('design:paramtypes', [router_1.Router, categories_service_1.CategoriesService])
    ], CategoryEditComponent);
    return CategoryEditComponent;
}());
exports.CategoryEditComponent = CategoryEditComponent;
//# sourceMappingURL=category-edit.component.js.map