---
title: "Maven"
weight: 1
tags: ["java", "maven"]
---

## Deployment

Définir les paramètres de déploiement dans le `settings.xml` :

```xml
<distributionManagement>
  <repository>
    <id>release</id>
    <url>http://my-releases</url>
  </repository>
  <snapshotRepository>
    <id>snapshots</id>
    <url>http://my-snapshots</url>
  </snapshotRepository>
</distributionManagement>
```

Maven gère automatiquement le repository à utiliser en fonction de si la version dans le POM termine par SNAPSHOT ou non.

#### Deploy to different repositories

Après avoir définit les repositories dans le `settings.xml` il est possible de les utiliser :

```bash
mvn deploy:deploy-file -DrepositoryId=releases -DartifactId=... -Durl=
```

[Source](https://stackoverflow.com/questions/6871494/mvn-deployfile-to-different-repositories-for-snapshot-and-release-version)
