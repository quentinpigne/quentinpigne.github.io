---
title: "Multiple providers"
weight: 2
tags: ["angular", "di"]
---

Le multi-providing en Angular est la capacité du framework à fournir plusieurs dépendances au sein du même token.

```typescript
const SOME_TOKEN: InjectionToken = new InjectionToken('SomeToken');

var injector = Injector.create([
  { provide: SOME_TOKEN, useValue: 'dependency one', multi: true },
  { provide: SOME_TOKEN, useValue: 'dependency two', multi: true }
]);

var dependencies = injector.get(SOME_TOKEN);
// dependencies == ['dependency one', 'dependency two']
```

## Références

- [https://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html#other-multi-providers](https://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html#other-multi-providers)
