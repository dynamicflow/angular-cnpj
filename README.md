# packaged angular-cnpj

This repo is for distribution on `npm` and `bower`. The source for this module is in the
[main AngularCNPJ repo](https://github.com/dynamicflow/angular-cnpj).
Please file issues and pull requests against that repo.

## Install

You can install this package either with `bower`.

### bower

```shell
bower install angular-cnpj
```

Then add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular-cnpj/cnpj-validate.directive.js"></script>
```

## Usage

You can use this validator along with forms, ui-mask and regular angular validation framework.

### Just CNPJ Validation

The CNPJ fields can be validated without any other angular validation

```html
<script src="/bower_components/angular-cnpj/cnpj-validate.directive.js"></script>
... 
<input type="text" name="cnpj" ng-model="cnpj" cnpj>
```

### CNPJ Validation + Required

The CNPJ fields can also be validated along with other angular directives such as `required` 

```html
<script src="/bower_components/angular-cnpj/cnpj-validate.directive.js"></script>
... 
<input type="text" name="cnpj" ng-model="cnpj" required cnpj>
```

[Check Sample01](https://rawgit.com/dynamicflow/angular-cnpj/master/examples/sample01/index.html)

### CNPJ Validation + Required + UI.Mask

The CNPJ fields can also be formatted using regular ui.mask templates such as:
 
```html
<input type="text" name="cnpj" ng-model="cnpj" cnpj required
    ui-mask="99.999.999/9999-99" ui-mask-placeholder ui-mask-placeholder-char="_" >
```

[Check Sample02](https://rawgit.com/dynamicflow/angular-cnpj/master/examples/sample02/index.html)