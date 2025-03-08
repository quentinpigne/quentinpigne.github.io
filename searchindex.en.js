var relearn_searchindex = [
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end",
    "content": "Mise en place d'un projet Organisation des fichiers Vues et manipulations du DOM Injection de dépendances Gestion de l'état Migration de Karma vers Jest Librairies à points d'entrée multiples Angular sans CLI",
    "description": "Mise en place d'un projet Organisation des fichiers Vues et manipulations du DOM Injection de dépendances Gestion de l'état Migration de Karma vers Jest Librairies à points d'entrée multiples Angular sans CLI",
    "tags": [],
    "title": "Angular",
    "uri": "/developpement/frontend/angular/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement",
    "content": "Java Maven Python Bases du langage Programmation Orientée Objet Data Science Ruby Bases du langage Programmation Orientée Objet Modules, namespaces et mixins",
    "description": "Java Maven Python Bases du langage Programmation Orientée Objet Data Science Ruby Bases du langage Programmation Orientée Objet Modules, namespaces et mixins",
    "tags": [],
    "title": "Back-end",
    "uri": "/developpement/backend/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Back-end \u003e Python",
    "content": "Variables Types Integer 1234 Float 3.14 String 'string' ou \"string\" Boolean True et False En Python, le type null est None.\nMéthodes utiles pour convertir les types int() : conversion en Integer float() : conversion en Float str() : conversion en String Info La fonction type() permet de connaître le type d’une variable.\nNote Afin de mieux documenter le code, il est possible d’annoter les fonctions des types de paramètres et de retour.\ndef greet(name: str) -\u003e str: return name Déclaration d’une variable En Python les variables ont un typage faible et peuvent changer de type à volonté.\nma_variable = \"Chaine de caractères\" Inclusion de variable dans une string : Concaténation : variable = \"World\" \"Hello, \" + variable + \" !\" # str(variable) si besoin de convertir Opérateur “%” :\n%s pour les strings %d pour les nombres variable1 = \"My\" variable2 = \"World\" \"Hello, %s %s !\"%(variable1, variable2) Fonction format() : variable = \"World\" \"Hello, {} !\".format(variable) f-string (Python \u003e= 3.6) : variable = \"World\" f\"Hello, {variable} !\" Entrées/Sorties print() affiche une chaîne de caractères à l’écran\ninput() récupère une entrée utilisateur (ne garde pas de saut de ligne de fin)\nnom = input() print(f\"Bonjour {nom} !\") Commentaires Commentaires sur une ligne En Python, un commentaire sur une ligne est défini par le caractère #.\n# Ceci est un commentaire Commentaires sur plusieurs lignes Il est possible de définir un bloc de commentaires pouvant tenir sur plusieurs lignes en l’entourant de \"\"\".\n\"\"\" Ceci est un bloc de commentaires pouvant tenir sur plusieurs lignes. \"\"\" Docstrings Ces mêmes commentaires, entourés de \"\"\", lorsqu’ils sont placés comme première déclaration d’un module, avant une fonction, une classe ou une définition de méthode, sont appelés docstrings et deviennent l’attribut spécial __doc__ de l’objet.\n\"\"\" Ceci est une docstring (accessible via `help()` et `__doc__`). \"\"\" def function(): return 'Hello' Plus d’infos ici\nConditions Bloc if-elif-else if \u003ccondition\u003e: instruction elif \u003ccondition\u003e: instruction else: instruction Il est possible de combiner les conditions avec and, or et not.\nTernaire En Python, les conditions ternaires s’écrivent avec un if et un else sur une ligne :\nresult = \"ok\" if a \u003c b else \"ko\" Boucles Boucle while while test: handle_true() else: handle_false() # Run if didn't exit loop with break Boucle while-else i = 0 while i \u003c 10: print(i) if i == 3: break i += 1 else: print(\"the `while` loop did NOT exited early\") Boucle for for x in range(5): # range(5) = 0, 1, 2, 3, 4 print(x) Boucle for-else for i in range(5): print(i) # if i == 3: # break else: print(\"the `for` loop did NOT exited early\") Opérations sur les boucles Ne rien faire L’opérateur pass ne fait rien. Il permet d’indiquer explicitement au programme qu’il ne doit rien se passer.\nfor x in range(5): if x == 3: pass else: print(x) Arrêter la boucle L’opérateur break permet de sortir d’une boucle.\nfor x in range(5): if x == 3: break Sauter une itération L’opérateur continue permet de passer directement à l’itération suivante.\nfor x in range(5): continue if x == 3 print(x) Listes et tuples Listes Déclaration d’une liste et accès à un élément tableau = [1, 2, '3', '4'] # Un tableau peut contenir des éléments de types différents print(tableau[0]) # 1 tableau = list(1, 2, '3', '4') print(tableau[0]) # 1 Ajout d’un élément à un tableau Pour ajouter un élément à un tableau, trois méthodes sont disponibles : append pour ajouter un élément, insert qui ajoute un élément à un index précis et enfin extend qui permet d’ajouter une liste d’éléments.\ntableau.append('5') tableau.insert(1, '6') tableau.extend(['7', '8']) Retrait d’un élément du tableau Pour retirer un élément d’un tableau, trois méthodes sont disponibles : remove qui prend l’élément à supprimer, pop qui prend l’index de l’élément à supprimer ou supprime le dernier élément si non fourni et enfin clear qui supprime l’intégralité des éléments de la liste.\nnum = ['one', 'two', 'three', 'four'] num.remove('one') # ['two', 'three', 'four'] num.pop() # ['two', 'three'] num.clear() # [] Connaître la taille d’un tableau La méthode len() permet de connaître le nombre d’éléments présents dans un tableau.\ntableau = [1, 2, 3, 4] print(len(tableau)) # 4 Trier un tableau La méthode sort() permet de trier un tableau par ordre croissant.\ntableau = [2, 3, 1, 4] print(tableau.sort()) # [1, 2, 3, 4] Info De nombreuses autres méthodes utiles aux tableaux sont présentées dans la documentation officielle.\nTuples Les tuples sont des structures de données similaires aux tableau à la différence qu’ils sont immutables, contrairement aux tableau qui, eux, peuvent être modifiés.\nIls se déclarent entre parenthèses ().\nmon_tuple = (1, 2) Dictionnaires Déclaration d’un dictionnaire et accès à un élément dico = { 'key': 'value' } print(dico['key']) # value print(dico['inexistingKey']) # =\u003e KeyError Il est aussi possible d’utiliser la fonction dict() :\ndico = dict( key: 'value' ) print(dico['key']) # value print(dico['inexistingKey']) # =\u003e KeyError Ajout d’un élément dans un dictionnaire dico['otherKey'] = 'otherValue' Suppression d’un élément d’un dictionnaire Pour supprimer un élément d’un dictionnaire, il suffit d’utiliser le mot-clé del en précisant l’élément à supprimer.\ndico = dict( key: 'value' ) del dico['key'] Vérification de l’existence d’une clé Il est possible d’utiliser le mot-clé in pour tester l’existance d’une clé dans un dictionnaire.\ndico = dict( key: 'value' ) if 'key' in dico: print(dico['key']) Fonctions Définir une fonction def add(a, b): return a + b En l’absence d’instruction return, une fonction renverra toujours None.\nRetour multiple En Python, il est possible de retourner plusieurs valeurs d’une fonction. Il suffit de les séparer par des virgules et le retour est ainsi récupérable sous forme de tuple.\ndef test_func(num1, num2): return num1, num2 a, b = test_func(5, 10) Paramètres nommés def test_func(num1, num2): return num1, num2 a, b = test_func(num1=5, num2=10) Paramètres optionnels Il est possible de rendre un paramètre optionnel en précisant sa valeur par defaut\ndef test_func(num1, num2=10): return num1, num2 a, b = test_func(5) Liste de paramètres def nom_fonction(*args) print(type(args)) # \u003cclass 'tuple'\u003e Il est toujours possible de passer des paramètres “isolés” en les mettant avant la liste.\nLambda Python supporte les fonctions anonymes, aussi appelées lambda.\nlambda arguments: expression Fonctions de fonctions (curryfication) def greeter(greet_word: str): def greet(name: str) -\u003e str: return f\"{greet_word}, {name}!\" return greet g = greeter(\"Salut\") g(\"Sarah\") # 'Salut, Sarah!' greeter(\"Bienvenue\")(\"Michel\") # 'Bienvenue, Michel!' Gérer les erreurs et les exceptions En Python, les exceptions sont gérées à l’aide du bloc try/except.\ntry: x = int(input(\"Entrez un nombre entier : \")) break except ValueError: print(\"Oops ! Ce n'est pas un nombre entier. Essayez encore...\") Lire et écrire des fichiers Ouverture et fermeture d’un fichier En Python, il est possible d’ouvrir un fichier en lecture ou en écriture avec la méthode open().\nf = open(\"myfile.csv\") Il peut être utile de préciser le mode dans lequel on souhaite ouvrir le fichier :\nf = open(\"myfile.csv\") # This is the same as “rt” mode. f = open(\"myfile.csv\", \"w\") # write in text mode f = open(\"myimage.png\", \"r+b\") # read and write in binary mode Voici la liste des options possibles :\nOption Description “r” read mode (default) “w” write mode “x” exclusive creation (fails if file already exists) “t” text mode (default) “b” binary mode “a” appending data at the end (create file if doesn’t exist) “+” update file (reading and writing) Après utilisation, il est nécessaire de fermer le fichier à l’aide de la méthode close().\nf = open(\"myfile.csv\") f.close() Le mot-clé with permet d’ouvrir un bloc dans lequel un fichier est ouvert au début et automatiquement fermé à la fin.\nwith open(\"myfile.csv\") as f: \u003cinstructions\u003e Lecture d’un fichier Lecture complète sous forme de texte La méthode read() permet de lire l’entièreté d’un fichier sous la forme d’un string.\nwith open(\"myfile.csv\") as f: content = f.read() Info La méthode read() retourne une ligne vide quand elle arrive à la fin du fichier. Pour la supprimer il est possible d’utiliser la méthode rstrip()\nLecture ligne par ligne Il est possible de parcourir un fichier ligne par ligne en itérant dessus avec une boucle for\nwith open(\"myfile.csv\") as f: for line in f: print(line) Info Comme précédemment, cette méthode retourne une ligne vide après chaque ligne lue. Pour la supprimer il est possible d’utiliser la méthode rstrip()\nRécupération du contenu sous forme de liste La méthode readlines() permet de récupérer l’entièreté des lignes du fichier sous forme de liste.\nwith open(\"myfile.csv\") as f: lines = f.readlines() Écriture dans un fichier La méthode write() permet d’écrire une ligne dans un fichier.\nwith open(\"myfile.csv\") as f: f.write(\"new line\") Info La méthode write() n’ajoute pas de retour à la ligne en fin de texte. Il est nécessaire, si besoin, d’ajouter manuellemenet un \\n.",
    "description": "Variables Types Integer 1234 Float 3.14 String 'string' ou \"string\" Boolean True et False En Python, le type null est None.\nMéthodes utiles pour convertir les types int() : conversion en Integer float() : conversion en Float str() : conversion en String Info La fonction type() permet de connaître le type d’une variable.\nNote Afin de mieux documenter le code, il est possible d’annoter les fonctions des types de paramètres et de retour.",
    "tags": [
      "Python"
    ],
    "title": "Bases du langage",
    "uri": "/developpement/backend/python/basics/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Back-end \u003e Ruby",
    "content": "Variables Types Integer 1234 Float 3.14 String 'string' ou \"string\" Boolean true et false En Ruby, le type null est nil.\nMéthodes utiles pour convertir les types to_i : conversion en Integer to_f : conversion en Float to_s : conversion en String Vérifier qu’une variable est d’un certain type En Ruby, on vérifie rarement le type d’une variable, on utilise plutôt la méthode respond_to? afin de vérifier qu’on puisse lui appliquer une certaine méthode.\ndef to_up(text) if text.respond_to?(:to_s) text.to_s.upcase end end Déclaration d’une variable En Ruby, les variables ont un typage faible et peuvent changer de type à volonté.\nma_variable = 'Chaine de caractères' Inclusion de variable dans une string :\n\"Ceci est une chaine de caractères contenant une #{variable}\" Il est possible de déclarer des variables de manière globale en la plaçant en dehors de tout bloc et en utilisant le signe $.\n$variable_globale = \"Hello, world !\" Et pour finir, il est possible de déclarer des constantes en écrivant leur nom tout en majuscule.\nMA_CONSTANTE = 1 Entrées/Sorties puts affiche une chaîne de caractères à l’écran (avec saut de ligne)\nprint affiche une chaîne de caractères à l’écran (sans saut de ligne)\ngets récupère une entrée utilisateur (garde le saut de ligne de fin) utliser la méthode chomp pour supprimer le saut de ligne final\nnom = gets.chomp puts \"Bonjour #{nom} !\" Commentaires Commentaires sur une ligne En Ruby, un commentaire sur une ligne est défini par le caractère #.\n# Ceci est un commentaire Commentaires sur plusieurs lignes Il est possible de définir un bloc de commentaires pouvant tenir sur plusieurs lignes à l’aide de =begin et =end.\n=begin Ceci est un bloc de commentaires pouvant tenir sur plusieurs lignes. =end Conditions Bloc if-elsif-else if \u003ccondition\u003e instruction elsif \u003ccondition\u003e instruction else instruction end unless condition est équivalent à if !condition\nUne condition if peut s’écrire sur une ligne :\nputs \"Condition vraie\" if \u003ccondition\u003e puts \"Condition fausse\" unless \u003ccondition\u003e Il est possible de combiner les conditions avec \u0026\u0026, || et !.\nBloc case-when var = 1 case var when 1 puts \"ok\" else puts \"ko\" end Il existe une version raccourcie :\nvar = 1 case var when 1 then puts \"ok\" end Ternaire En Ruby, les conditions ternaires s’écrivent comme dans tous les autres langages :\nputs a \u003c b ? \"ok\" : \"ko\" Operateurs conditionnels || renvoie la 1ère valeur si truthy et la 2ème sinon.\na = false b = \"Salut\" puts a || b # Salut a = \"Hello\" puts a || b # Hello Affectation conditionnelle a = false a ||= \"Valeur par defaut\" puts a # Valeur par defaut a = \"Hello\" a ||= \"Valeur par defaut\" puts a # Hello Boucles Boucle while while \u003ccondition\u003e # until !\u003ccondition\u003e ... end Boucle for for num in 1..10 # 1..10 = [1, 10] et 1...10 = [1, 10[ puts num end Sauter une itération for num in 1..10 next if num == 3 puts num end Boucle loop (Infinie) loop do ... break if \u003ccondition\u003e end Tableaux Déclaration d’un tableau et accès à un élément tableau = [1, 2, '3', '4'] # Un tableau peut contenir des éléments de types différents puts tableau[0] # 1 Ajout d’un élément à un tableau Pour ajouter un élément à un tableau, on peut utiliser la concaténation d’un autre tableau avec l’opérateur +, les chevrons («) ou la méthode push.\ntableau += ['5'] tableau \u003c\u003c '6' tableau.push '7' Retrait d’un élément du tableau On utilise la méthode pop de la classe Array\ntableau.pop Méthodes collect et map Ce sont deux fonctions identiques qui executent un bloc pour chaque élément d’un tableau et retournent le tableau resultant.\nHash Déclaration d’un Hash et accès à un élément hash = { 'key' =\u003e 'value' } puts hash['key'] # value puts hash['inexistingKey'] # nil Syntaxe plus moderne utilisant implicitement des symboles\nhash = { key: 'value' } hash[:key] # value puts hash[:inexistingKey] # nil En utilisant le constructeur et en spécifiant une valeur par défaut\nhash = Hash.new(0) puts hash[:inexistingKey] # 0 Ajout d’un élément dans un Hash hash['otherKey'] = 'otherValue' hash[:otherKey] = 'otherValue' Itérateurs Méthode times 3.times do |num| puts num end Méthode each array.each do |value| ... end hash.each do |key, value| ... end Fonctions Définir une fonction def nom_fonction(param) return param end En l’absence d’instruction return, une fonction renverra le résultat de sa dernière instruction.\nEn Ruby, on ne teste pas le type d’un paramètre mais on tente directement de le caster.\nConventions de nommage Les caractères spéciaux sont autorisés dans les noms de fonction ainsi que les symboles comme ‘+’, ‘-’… Traditionnellement, les fonctions possédant ces symboles implémentent les opérateurs correspondants.\n? : retourne un boolean ! : modifie l’objet Paramètres optionnels Il est possible de rendre un paramètre optionnel en précisant sa valeur par defaut\ndef nom_fonction(param = \"Valeur par defaut\") return param end Liste de paramètres def nom_fonction(*params) puts params.inspect # [param1, param2, ...] end Il est toujours possible de passer des paramètres “isolés” en les mettant avant la liste.\nProcs et Blocs Blocs Passer un bloc a une fonction Un bloc peut être passé à une fonction à l’aide du mot-clé yield.\ndef test puts \"A first text\" yield puts \"A third text\" end test { puts \"A second text\" } Un bloc peut être appelé plusieurs fois en mettant plusieurs yield dans la fonction.\nWarning À partir du moment où on met un yield dans une fonction, celle-ci va obligatoirement attendre un paramètre de type bloc.\nPasser un paramètre à un bloc Il est possible de passer un ou plusieurs paramètre(s) à yield. Ils seront automatiquement passés au bloc :\ndef test puts \"A first text\" yield(\"A second text\") puts \"A third text\" end test { |text| puts text } La limite des blocs est qu’ils ne peuvent pas être sauvegardés dans des variables. Empêcher ainsi de pouvoir les réutiliser à plusieurs endroits.\nProcs On peut voir les procs comme des blocs qu’on peut sauvegarder.\nCréation d’un Proc On peut créer un Proc avec Proc.new auquel on passe un bloc. Et on peut le sauvegarder dans une variable.\nvar = Proc.new { \u003cinstructions\u003e } Passage d’un Proc à une fonction Pour être passé en tant que bloc à une fonction, un Proc doit être ‘converti’ en bloc. Cela se fait avec le signe \u0026.\nmon_proc = Proc.new { \u003cinstructions\u003e } a = [1, 2, 3] a.map!(\u0026mon_proc) Appel direct d’un Proc Il est possible d’appeler à n’importe quel moment un Proc en utilisant la méthode call :\nmon_proc = Proc.new { |param| \u003cinstructions\u003e } mon_proc.call(\"param\") Récupérer dans une fonction un bloc sous forme de Proc Il est possible de récupérer un bloc sous forme de Proc dans une fonction à l’aide du même signe \u0026 :\ndef ma_fonction(\u0026bloc) # ici, bloc est un Proc bloc.call(\"param\") end ma_fonction { |param| \u003cinstructions\u003e } Info Contrairement aux blocs, il est possible de passer plusieurs Proc à une fonction !\nLambda En Ruby, un lambda est très similaire à un Proc.\nPour créer un lambda, il suffit de remplacer le Proc.new par lambda et lui passer un bloc.\nmon_lambda = lambda { |param| \u003cinstructions\u003e } puts mon_lambda.inspect # On se rend compte ici qu'un lambda est un Proc particulier Il s’utilise ensuite de la même façon qu’un Proc.\nDifférences entre Proc et lambda Un lambda vérifie le nombre de paramètres fournis, alors que le Proc n’effectue aucune vérification sur les paramètres. Dans un lambda, le return retourne au sein du bloc, alors que dans un Proc, il le comprend comme un return “classique”. def a_lambda a = lambda { return \"Salut\" } a.call # équivalent \"Salut\" return \"Au revoir\" end def a_proc a = Proc.new { return \"Salut\" } a.call # équivalent return \"Salut\" return \"Au revoir\" end a_lambda # Au revoir a_proc # Salut Nouvelle syntaxe du lambda mon_lambda = -\u003e(\u003cparam\u003e) { \u003cinstructions\u003e } Syntaxe raccourcie pour un appel de méthode sur chaque élément passé à un bloc a = [\"1\", \"2\", 3] a.map! { |n| n.to_i } # Syntaxe \"classique\" a.map!(\u0026:to_i) # Syntaxe raccourcie",
    "description": "Variables Types Integer 1234 Float 3.14 String 'string' ou \"string\" Boolean true et false En Ruby, le type null est nil.\nMéthodes utiles pour convertir les types to_i : conversion en Integer to_f : conversion en Float to_s : conversion en String Vérifier qu’une variable est d’un certain type En Ruby, on vérifie rarement le type d’une variable, on utilise plutôt la méthode respond_to? afin de vérifier qu’on puisse lui appliquer une certaine méthode.",
    "tags": [
      "Ruby"
    ],
    "title": "Bases du langage",
    "uri": "/developpement/backend/ruby/basics/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Algorithmique \u003e Génération procédurale",
    "content": "Références http://sdz.tdct.org/sdz/bruit-de-perlin.html https://github.com/pvigier/perlin-numpy/blob/master/perlin_numpy/perlin2d.py https://github.com/caseman/noise/blob/master/_perlin.c https://stackoverflow.com/questions/42147776/producing-2d-perlin-noise-with-numpy https://jaysmito101.hashnode.dev/perlins-noise-algorithm https://adrianb.io/2014/08/09/perlinnoise.html",
    "description": "Références http://sdz.tdct.org/sdz/bruit-de-perlin.html https://github.com/pvigier/perlin-numpy/blob/master/perlin_numpy/perlin2d.py https://github.com/caseman/noise/blob/master/_perlin.c https://stackoverflow.com/questions/42147776/producing-2d-perlin-noise-with-numpy https://jaysmito101.hashnode.dev/perlins-noise-algorithm https://adrianb.io/2014/08/09/perlinnoise.html",
    "tags": [
      "Algorithmique",
      "Perlin-Noise"
    ],
    "title": "Bruit de Perlin",
    "uri": "/algorithmique/generation-procedurale/perlin-noise/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Architecture",
    "content": "System context diagram Container diagram Component diagram Code diagram Références https://c4model.com/",
    "description": "System context diagram Container diagram Component diagram Code diagram Références https://c4model.com/",
    "tags": [
      "Architecture-as-Code",
      "Diagrams"
    ],
    "title": "C4 Model",
    "uri": "/architecture/c4/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e DevOps",
    "content": "Introduction Les pipelines CI/CD permettent un passage simplifié et sécurisé du code en production. Ils doivent s’assurer qu’une application est correctement compilée/assemblée, testée et déployée.\nLe principal objectif d’un pipeline CI/CD est de réduire les risques liés à une mise en production. En fournissant au plus tôt un retour sur la qualité du code, les tests et en faisant du déploiement un process simple et répétable. Le déploiement cesse ainsi d’être un évènement exceptionnel et devient fréquent.\nUn bon pipeline est divisé en 3 macro-étapes :\nL’intégration continue (CI) est une pratique de développement logiciel où, après un merge des modifications du code dans un référentiel central (Git). Chaque modification (commit) déclenche une construction et un test automatisé, fournissant des retours aux développeurs. La livraison continue (CD) consiste à produire un artefact à partir du code, prêt à être déployé et potentiellement déposé sur un référentiel type Artifactory. Le déploiement continue (CD) consiste à automatiser l’ensemble du processus de mise en production logicielle, y compris la provision de l’infrastructure. D’autres étapes peuvent être ajoutées en fonction des besoins, comme un alerting. Mais le but premier d’un CI/CD et de s’assurer que le code soit testé et parte en production.\nLes différents stage d’une CI/CD Un pipeline CI/CD est divisé en “stages”, où chaque “stage” accomplit une série de tâches spécifiques. Nous allons voir les étapes essentielles d’un pipeline CI/CD.\nTrigger Un bon pipeline doit pouvoir se déclencher de manière automatique quand du code est commit et push sur le dépôt.\nCela peut se faire en configurant l’outil de CI/CD pour récupérer les changements sur le Git à intervalles réguliers ou encore en configurant un Webhook pour notifier l’outil de CI quand un développeur push du code.\nCheckout Durant cette étape, la CI va récupérer le code à partir d’un dépôt Git. Elle reçoit différentes informations et notamment quel commit à déclencher le pipeline.\nLe pipeline checkout le code source à ce commit et démarre le process.\nCompile Dans le cadre d’un développement dans un langage compilé tel que Java, la première chose à faire est de compiler le programme.\nCela signifie que l’outil de CI doit avoir accès à l’outil de build utilisé pour compiler le programme. Dans le cas de Java, par exemple, il peut s’agir de Maven ou Gradle.\nIdéalement, ce stage doit s’exécuter dans un environnement vierge.\nVerify Linter Tests Packaging Delivery / Deployment Références https://www.tutorialworks.com/cicd-pipeline-stages/",
    "description": "Introduction Les pipelines CI/CD permettent un passage simplifié et sécurisé du code en production. Ils doivent s’assurer qu’une application est correctement compilée/assemblée, testée et déployée.\nLe principal objectif d’un pipeline CI/CD est de réduire les risques liés à une mise en production. En fournissant au plus tôt un retour sur la qualité du code, les tests et en faisant du déploiement un process simple et répétable. Le déploiement cesse ainsi d’être un évènement exceptionnel et devient fréquent.",
    "tags": [
      "Ci/Cd"
    ],
    "title": "CI/CD",
    "uri": "/devops/ci-cd/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e DevOps \u003e Kubernetes \u003e Ressources",
    "content": "Contextes Un contexte est une sorte de profil (qui sommes-nous ? où sommes-nous ?)\nkubectl config view permet de visualiser la configuration du cluster.\nPour lister les contextes:\nkubectl config get-contexts kubectl config current-context Création d’un contexte kubectl config set-context [name] --namespace [default_ns] --user [user_name] --cluster [cluster_name].\nLe nouveau contexte est ensuite activable avec: kubectl use-context [name].\nNamespaces Un namespace est un élément de K8s permettant de réaliser du cloisonnement comme la gestion de droits ou la possibilité de lancer plusieurs fois le même pod sur un cluster. Il permet aussi d’ordonner et de sécuriser ses déploiements.\nPar exemple, le namespace kube-system (kubectl get pods -n kube-system).\nPour lister les namespaces: kubectl get namespace.\nCréation et suppression d’un namespace Pour créer un namespace: kubectl create namespace [name]. Il est aussi possible d’utiliser un fichier de description :\napiVersion: v1 kind: Namespace metadata: name: \u003cinsert-namespace-name-here\u003e Qui peut ensuite être appliqué avec: kubectl create -f ./my-namespace.yaml.\nInfo Un label immutable kubernetes.io/metadata.name est défini automatiquement pour chaque namespace. Sa valeur est le nom du namespace.\nPour supprimer un namespace: kubectl delete namespace [name]. Info La suppression d’un namespace entraînera la suppression de toutes les ressources qui lui sont associées.",
    "description": "Contextes Un contexte est une sorte de profil (qui sommes-nous ? où sommes-nous ?)\nkubectl config view permet de visualiser la configuration du cluster.\nPour lister les contextes:\nkubectl config get-contexts kubectl config current-context Création d’un contexte kubectl config set-context [name] --namespace [default_ns] --user [user_name] --cluster [cluster_name].\nLe nouveau contexte est ensuite activable avec: kubectl use-context [name].\nNamespaces Un namespace est un élément de K8s permettant de réaliser du cloisonnement comme la gestion de droits ou la possibilité de lancer plusieurs fois le même pod sur un cluster. Il permet aussi d’ordonner et de sécuriser ses déploiements.",
    "tags": [
      "Kubernetes"
    ],
    "title": "Contextes et Namespaces",
    "uri": "/devops/kubernetes/resources/contexts-namespaces/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e CSS - SCSS",
    "content": "The CSS Reset /* 1. Use a more-intuitive box-sizing model. */ *, *::before, *::after { box-sizing: border-box; } /* 2. Remove default margin */ * { margin: 0; } /* 3. Allow percentage-based heights in the application */ html, body { height: 100%; } /* Typographic tweaks! 4. Add accessible line-height 5. Improve text rendering */ body { line-height: 1.5; -webkit-font-smoothing: antialiased; } /* 6. Improve media defaults */ img, picture, video, canvas, svg { display: block; max-width: 100%; } /* 7. Remove built-in form typography styles */ input, button, textarea, select { font: inherit; } /* 8. Avoid text overflows */ p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; } /* 9. Create a root stacking context */ #root, #__next { isolation: isolate; } Références https://meyerweb.com/eric/tools/css/reset/ https://www.joshwcomeau.com/css/custom-css-reset/",
    "description": "The CSS Reset /* 1. Use a more-intuitive box-sizing model. */ *, *::before, *::after { box-sizing: border-box; } /* 2. Remove default margin */ * { margin: 0; } /* 3. Allow percentage-based heights in the application */ html, body { height: 100%; } /* Typographic tweaks! 4. Add accessible line-height 5. Improve text rendering */ body { line-height: 1.5; -webkit-font-smoothing: antialiased; } /* 6. Improve media defaults */ img, picture, video, canvas, svg { display: block; max-width: 100%; } /* 7. Remove built-in form typography styles */ input, button, textarea, select { font: inherit; } /* 8. Avoid text overflows */ p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; } /* 9. Create a root stacking context */ #root, #__next { isolation: isolate; } Références https://meyerweb.com/eric/tools/css/reset/ https://www.joshwcomeau.com/css/custom-css-reset/",
    "tags": [
      "Css"
    ],
    "title": "CSS Reset",
    "uri": "/developpement/frontend/css-scss/css-reset/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Design",
    "content": "Clarity Talend PrimeNg ElasticUI",
    "description": "Clarity Talend PrimeNg ElasticUI",
    "tags": [
      "Design Systems"
    ],
    "title": "Design systems et librairies graphiques",
    "uri": "/design/design-systems/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Algorithmique",
    "content": "Bruit de Perlin",
    "description": "Bruit de Perlin",
    "tags": [
      "Algorithmique"
    ],
    "title": "Génération procédurale",
    "uri": "/algorithmique/generation-procedurale/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Poste de travail",
    "content": "Ce document vise a donner une méthode pour sauvegarder les fichiers de config de sa machine.\nInitialisation du repository Commencer par créer un bare-repository Git .dotfiles afin de pouvoir versionner les fichiers souhaités\ngit init --bare $HOME/.dotfiles Puis créer un alias dotfiles afin de faciliter l’utilisation de ce repository\nalias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME' Configurer git pour qu’il n’affiche pas les fichiers non inclus\ndotfiles config --local status.showUntrackedFiles no Il peut être utile de créer une branche par ordinateur\ndotfiles checkout -b bureau Finir par configurer le dépôt distant et tout pousser dedans\ndotfiles remote add origin git@mondomain.org:monorg/dotfile.git dotfiles push dotfiles push --set-upstream origin bureau Warning Attention, il ne faut pas pousser des données critiques sur des repository publiques, ni même sur des repos privés hébergés sur des sites publiques comme Github, Gitlab ou Bitbucket. Par exemple des clef privée ssh, ou des tokens d’api…\nUtilisation Pour l’utilisation courante avec des exemples utiles :\ndotfiles status dotfiles add .vimrc dotfiles commit -m \"Add vimrc\" dotfiles add .bashrc dotfiles commit -m \"Add bashrc\" dotfiles add .bash_aliases dotfiles commit -m \"Add .bash_aliases\" dotfiles add .zshrc dotfiles commit -m \"Add .zshrc\" dotfiles add .ssh/config dotfiles commit -m \"Add .ssh config\" dotfiles add .screenrc dotfiles commit -m \"Add .screenrc\" dotfiles add .kube/config dotfiles commit -m \"Add kubectl config\" dotfiles add .gitconfig .git-credentials dotfiles commit -m \"Add git config\" dotfiles add .aws/config .aws/credentials .aws/shell/awsshellrc .aws/shell/history dotfiles commit -m \"Add aws config\" Restauration des dotfiles sur un ordinateur Il faut commencer par créer l’alias comme dans la section d’initalisation\nalias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME' Puis récuperer le repository\ngit clone --bare git@mondomain.org:monorg/dotfile.git $HOME/.dotfiles Et enfin passer sur la bonne branche\ndotfiles checkout bureau Note Afin d’éviter les problèmes de perte de données avec les fichiers en conflits ou installés de base, on va les copier dans un répertoire pour les sauvegarder.\nmkdir -p .dotfile-backup \u0026\u0026 \\ dotfiles checkout bureau 2\u003e\u00261 | egrep \"\\s+\\.\" | awk {'print $1'} | \\ xargs -I{} mv {} .dotfile-backup/{} et comme on a déplacé les fichiers en conflit, on peut re-lancer le checkout\ndotfiles checkout bureau Branches différentes Si on ne veut pas melanger ses fichiers de configurations mais qu’on souhaite tout versionner dans son repo\nIl faut creer une autre branche vide home\ndotfiles checkout --orphan home dotfiles add .bash_aliases dotfiles commit .bash_aliases dotfiles push --set-upstream origin home Ajouter ensuite tous les fichiers comme décrit au début.\nRéférences doc doc doc",
    "description": "Ce document vise a donner une méthode pour sauvegarder les fichiers de config de sa machine.\nInitialisation du repository Commencer par créer un bare-repository Git .dotfiles afin de pouvoir versionner les fichiers souhaités\ngit init --bare $HOME/.dotfiles Puis créer un alias dotfiles afin de faciliter l’utilisation de ce repository\nalias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME' Configurer git pour qu’il n’affiche pas les fichiers non inclus\ndotfiles config --local status.showUntrackedFiles no Il peut être utile de créer une branche par ordinateur",
    "tags": [
      "Workspace",
      "Dotfiles"
    ],
    "title": "Gestion des fichiers de config",
    "uri": "/workspace/dotfiles/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e DevOps \u003e Kubernetes \u003e Outils",
    "content": "Présentation Helm est un gestionnaire de paquet et un outil de templating pour Kubernetes.\nQuickstart",
    "description": "Présentation Helm est un gestionnaire de paquet et un outil de templating pour Kubernetes.\nQuickstart",
    "tags": [
      "Kubernetes",
      "Helm"
    ],
    "title": "Helm",
    "uri": "/devops/kubernetes/tools/helm/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e Angular \u003e Injection de dépendances",
    "content": "Références https://angular.io/guide/dependency-injection-context",
    "description": "Références https://angular.io/guide/dependency-injection-context",
    "tags": [
      "Angular",
      "Di"
    ],
    "title": "Injection context",
    "uri": "/developpement/frontend/angular/dependency_injection/injection_context/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Poste de travail \u003e Linux",
    "content": "Ce document détaille la procédure d’installation et de mise en service d’un serveur sous Ubuntu.\nTéléchargement de l’image et création de la clé USB bootable sur MAC Téléchargement de l’ISO L’ISO de la distribution Linux Ubuntu Server est téléchargeable sur ici.\nConversion de l’ISO en IMG Sous MAC, il est nécessaire de convertir l’image au format ISO en format IMG afin de pouvoir la copier sur une clé USB bootable. Il faut ensuite renommer le fichier parce que MacOS ajoute .dmg à la fin du nom.\nhdiutil convert -format UDRW -o ~/path/to/target.img ~/path/to/ubuntu.iso mv ~/path/to/target.img.dmg ~/path/to/target.img Copie de l’image sur la clé USB Commencer par récupérer la liste des disques du MAC avec la commande :\ndiskutil list Repérer la clé USB parmis tous les disques présentés et la démonter avec la commande :\ndiskutil unmountDisk /dev/diskN Copier ensuite le contenu de l’image sur la clé USB à l’aide de l’utilisaire dd :\nsudo dd if=/path/to/downloaded.img of=/dev/rdiskN bs=1m Une fois la copie terminée, la clé USB peut être éjectée.\ndiskutil eject /dev/diskN L’installation du système peut ensuite se faire de manière classique sur le serveur. Il est cependant important de choisir l’installation d’un serveur SSH comme openssh en même temps que l’installation du système.\nDésactivation de la mise en veille automatique à la fermeture du capôt (Portable uniquement) Si le serveur est un ancien PC portable, il est nécessaire de désactiver la mise en veille automatique de celui-ci. 2 possibilités en fonction du modèle :\n​ logind.conf libdtn Si le fichier /etc/systemd/logind.conf existe, il faut l’éditer et ajouter ou modifier la ligne HandleLidSwitch=ignore.\nSi le fichier /etc/acpi/event/lidbtn existe, il faut l’éditer et commenter les 2 lignes ‘action’ et ’event’ (ajoutes un # devant).\nConfiguration de SSH Copie de la clé SSH et ajout aux authorized_keys On commence par transférer avec SCP les clés SSH (privée et publique) sur le serveur.\nscp ~/.ssh/id_rsa [host]:~/.ssh/ scp ~/.ssh/id_rsa.pub [host]:~/.ssh/ Puis on ajoute la clé publique aux authorized_keys afin de pouvoir désactiver l’authentification par mot de passe.\ncat ~/.ssh/id_rsa.pub \u003e ~/.ssh/authorized_keys Désactivation de l’authentification par mot de passe pour SSH Pour ce faire, la configuration du serveur SSH se trouve dans un fichier nommé sshd_config.\nsudo vim /etc/ssh/sshd_config Il suffit ensuite de passer la valeur de 3 paramètres à “no”:\nChallengeResponseAuthentication no PasswordAuthentication no UsePAM no Puis redémarrer les démon SSH pour appliquer la nouvelle configuration :\nsudo /etc/init.d/ssh restart Installation de Zsh et Oh My Zsh Zsh est disponible sur les dépôts officiels et s’installe avec la commande : sudo apt-get install zsh Il faut ensuite indiquer au système d’utiliser Zsh par défaut en utilisant l’outil chsh : sudo chsh -s /bin/zsh On peut ensuite installer Oh My Zsh avec la commande : sh -c \"$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)\" Mise en place des dotfiles La récupération des dotfiles sur le serveur se fait avec la commande :\ngit clone --bare --branch server git@github.com:quentinpigne/dotfiles.git $HOME/.dotfiles À ce stade, la récupération des dotfiles reste incomplète du fait de conflits avec des fichiers déjà présents (comme .zshrc par exemple).\nOn va commencer par ajouter l’alias dotfiles au fichier .zshrc :\necho \"alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'\" \u003e\u003e .zshrc source .zshrc Puis on configure Git pour qu’il n’affiche pas les fichiers non inclus :\ndotfiles config --local status.showUntrackedFiles no Pour finir, on reset les dotfiles afin de supprimer les fichiers en conflit puis on re-checkout la branche server.\ndotfiles reset --hard HEAD dotfiles checkout server Plus d’informations sur la page dédiée aux dotfiles.\nInstallation de NVim Il faut être sûr que software-properties-common est installé.\nsudo add-apt-repository ppa:neovim-ppa/unstable sudo apt-get update sudo apt-get install neovim On va ensuite installer la distribution AstroNvim avec la commande :\ngit clone --depth 1 https://github.com/AstroNvim/AstroNvim ~/.config/nvim Installation de NVM et de NodeJS NVM permet d’installer et d’utiliser différentes versions de NodeJS. Il s’installe avec la commande suivante :\nPROFILE=/dev/null bash -c 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash' Installation de Docker Il faut être sûr que ca-certificates, curl et gnupg sont installés.\nOn commence par ajouter la clé GPG officielle de Docker :\nsudo install -m 0755 -d /etc/apt/keyrings curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg sudo chmod a+r /etc/apt/keyrings/docker.gpg Puis on ajoute le repository correspondants à la distribution Ubuntu du système :\necho \\ \"deb [arch=\"$(dpkg --print-architecture)\" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\ \"$(. /etc/os-release \u0026\u0026 echo \"$VERSION_CODENAME\")\" stable\" | \\ sudo tee /etc/apt/sources.list.d/docker.list \u003e /dev/null Et enfin, on installe les paquets de Docker :\ndocker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin Il est ensuite nécessaire d’ajouter l’utilisateur au groupe docker afin d’avoir les bonnes permissions.\nsudo usermod -aG docker $USER",
    "description": "Ce document détaille la procédure d’installation et de mise en service d’un serveur sous Ubuntu.\nTéléchargement de l’image et création de la clé USB bootable sur MAC Téléchargement de l’ISO L’ISO de la distribution Linux Ubuntu Server est téléchargeable sur ici.\nConversion de l’ISO en IMG Sous MAC, il est nécessaire de convertir l’image au format ISO en format IMG afin de pouvoir la copier sur une clé USB bootable. Il faut ensuite renommer le fichier parce que MacOS ajoute .dmg à la fin du nom.",
    "tags": [
      "Workspace",
      "Server",
      "Ubuntu"
    ],
    "title": "Installation d'un serveur Ubuntu",
    "uri": "/workspace/linux/server/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Back-end",
    "content": "Maven",
    "description": "Maven",
    "tags": [],
    "title": "Java",
    "uri": "/developpement/backend/java/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e DevOps",
    "content": "Labels et Annotations Healthchecks: Liveness et Readiness Ressources: Limits et Requests Les volumes Ressources Contextes et Namespaces Pods Outils Helm Présentation Kubernetes (souvent abrégé K8S), dont le nom vient du grec timonier ou pilote, est un orchestrateur de conteneurs.\nGoogle utilise en interne un orchestrateur de conteneurs (Borg) depuis plusieurs années déjà (2 milliards de conteneur lancés par semaine en 2014) En 2015, Google décide de faire un extract de Borg utilisable par la communauté et il l’a reverse à la CNCF (Cloud Native Computing Foundation) qui compte des grands noms comme Amazon, Google, Oracle, Docker… Fonctionne avec des conteneurs Docker mais pas que… (Containerd, CoreOS…) Parmi toutes ses fonctionnalités, Kubernetes permet :\nd’orchestrer (lancement orchestré de multiples conteneurs) de créer de l’abstraction (notion de Service != IP, …) d’apporter de la haute disponibilité de scaler (lancement de multiples conteneurs en fonction de paramètres) Notions Nodes (serveurs): Master ou simple noeud d’execution. Pods (pierre centrale de K8S): Ensemble cohérent de conteneurs. Services (abstraction des pods): Permet d’éviter la communication par IP car changeantes dans une architecture en conteneurs. Service = ip et port fixe. Volumes (persistants ou non): Lieu d’échange entre les pods. Deployments: Object de gestion des déploiements. Gère les créations et suppression ainsi que le nombre de replicas. Namespaces: Cluster virtuel (ensemble de services) pour cloisonner K8S. Premiers pods, déploiements, services et scaling Info Si on souhaite lancer des pods sur les noeuds maîtres, il est nécessaire de supprimer les taints correspondants sur ceux-ci :\nkubectl taint nodes --all node-role.kubernetes.io/master- kubectl taint nodes --all node-role.kubernetes.io/control-plane- Warning L’utilisation de kubectl run et kubectl create n’est pas conseillé. Il est préférable d’utiliser des fichiers descriptifs en Yaml.\nPour lancer un pod et interagir avec via shell: kubectl run myshell -it --image busybox -- sh.\nPour créer un déploiement dont les pods seront basés sur une image Nginx: kubectl create deployment monnginx --image nginx.\nAfin d’obtenir des informations, il est possible d’utiliser la commande kubectl describe deployment|pod avec le nom du déploiement ou du pod.\nAfin d’accéder à Nginx, il faut créer un service: kubectl create service nodeport monnginx --tcp 8080:80.\nDifférents types de services possibles:\nnodeport: exposition de port, va rendre public le pod via un port (30000-32767). clusterip: exposition interne loadbalancer: exposition via controller ingress ou dans le cloud. Il est aussi possible d’utiliser la commande expose: kubectl expose deployment monnginx --type NodePort --port 80.\nOu bien ponctuellement car non recommandé: kubectl port-forward [portName] [exposedPort]:[podPort].\nIl est possible d’augmenter le nombre de pods du déploiement (scaling) par la commande: kubectl scale deployment monnginx --replicas=2.\nEt pour finir, on peut définir un autoscale via: kubectl autoscale deployment monnginx --min=2 --max=10.\nLister les ressources et objets disponibles dans Kubernetes kubectl api-resources -o wide: Permet de lister les resources. kubectl api-versions: Permet de lister les api versions. kubectl explain pod: Permet d’obtenir la document d’une resource. Obtenir le fichier descriptif d’une ressource Il est possible d’obtenir le fichier Yaml d’une ressource déployée avec: kubectl get [typeRessource] [nomRessource] -o yaml.\nPar exemple: kubectl get deployment monnginx -o yaml.\nIl est bien sûr possible de sauvegarder le fichier Yaml avec \u003e: kubectl get deployment monnginx -o yaml \u003e monnginx.yml.",
    "description": "Labels et Annotations Healthchecks: Liveness et Readiness Ressources: Limits et Requests Les volumes Ressources Contextes et Namespaces Pods Outils Helm Présentation Kubernetes (souvent abrégé K8S), dont le nom vient du grec timonier ou pilote, est un orchestrateur de conteneurs.\nGoogle utilise en interne un orchestrateur de conteneurs (Borg) depuis plusieurs années déjà (2 milliards de conteneur lancés par semaine en 2014) En 2015, Google décide de faire un extract de Borg utilisable par la communauté et il l’a reverse à la CNCF (Cloud Native Computing Foundation) qui compte des grands noms comme Amazon, Google, Oracle, Docker… Fonctionne avec des conteneurs Docker mais pas que… (Containerd, CoreOS…) Parmi toutes ses fonctionnalités, Kubernetes permet :",
    "tags": [
      "Kubernetes"
    ],
    "title": "Kubernetes",
    "uri": "/devops/kubernetes/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e DevOps \u003e Kubernetes",
    "content": "Ces deux notions, très similaires, permettent notamment d’ajouter des métadonnées aux ressources. Elles s’appliquent à toutes les ressources de Kubernetes.\nLabels Les labels sont utilisés à l’intérieur de Kubernetes. Notamment avec l’outil selector qui permet de sélectionner uniquement les pods en fonction des labels qu’ils contiennent. (sélection poussée, regexp…)\nAjout d’un label en ligne de commande: kubectl create deployment monnginx --image nginx --labels \"env=prod,group=front.\nVisualisation des labels: kubectl get deployment --show-labels.\nModification d’un label: kubectl label deployment [deployment_name] --overwrite \"env=dev\".\nSuppression d’un label: kubectl label deployment [deployment_name] --overwrite \"env-\".\nUtilisation d’un label dans un selector: kubectl get pods --selector \"env=dev\".\nIl est aussi possible d’utiliser des opérateurs: kubectl get pods --selector \"env in (dev, prod)\".\nAnnotations Les annotations ont exactement le même fonctionnement que les labels.\nElles permettent de:\ngarder des traces stocker des fichiers (images en Base64…) des liens/url",
    "description": "Ces deux notions, très similaires, permettent notamment d’ajouter des métadonnées aux ressources. Elles s’appliquent à toutes les ressources de Kubernetes.\nLabels Les labels sont utilisés à l’intérieur de Kubernetes. Notamment avec l’outil selector qui permet de sélectionner uniquement les pods en fonction des labels qu’ils contiennent. (sélection poussée, regexp…)\nAjout d’un label en ligne de commande: kubectl create deployment monnginx --image nginx --labels \"env=prod,group=front.\nVisualisation des labels: kubectl get deployment --show-labels.",
    "tags": [
      "Kubernetes"
    ],
    "title": "Labels et Annotations",
    "uri": "/devops/kubernetes/labels-annotations/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Back-end \u003e Java",
    "content": "Deployment Définir les paramètres de déploiement dans le settings.xml :\n\u003cdistributionManagement\u003e \u003crepository\u003e \u003cid\u003erelease\u003c/id\u003e \u003curl\u003ehttp://my-releases\u003c/url\u003e \u003c/repository\u003e \u003csnapshotRepository\u003e \u003cid\u003esnapshots\u003c/id\u003e \u003curl\u003ehttp://my-snapshots\u003c/url\u003e \u003c/snapshotRepository\u003e \u003c/distributionManagement\u003e Maven gère automatiquement le repository à utiliser en fonction de si la version dans le POM termine par SNAPSHOT ou non.\nDeploy to different repositories Après avoir définit les repositories dans le settings.xml il est possible de les utiliser :\nmvn deploy:deploy-file -DrepositoryId=releases -DartifactId=... -Durl= Source",
    "description": "Deployment Définir les paramètres de déploiement dans le settings.xml :\n\u003cdistributionManagement\u003e \u003crepository\u003e \u003cid\u003erelease\u003c/id\u003e \u003curl\u003ehttp://my-releases\u003c/url\u003e \u003c/repository\u003e \u003csnapshotRepository\u003e \u003cid\u003esnapshots\u003c/id\u003e \u003curl\u003ehttp://my-snapshots\u003c/url\u003e \u003c/snapshotRepository\u003e \u003c/distributionManagement\u003e Maven gère automatiquement le repository à utiliser en fonction de si la version dans le POM termine par SNAPSHOT ou non.\nDeploy to different repositories Après avoir définit les repositories dans le settings.xml il est possible de les utiliser :\nmvn deploy:deploy-file -DrepositoryId=releases -DartifactId=... -Durl= Source",
    "tags": [
      "Java",
      "Maven"
    ],
    "title": "Maven",
    "uri": "/developpement/backend/java/maven/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e Angular",
    "content": "Création du projet Un projet Angular peut se présenter sous deux structures différentes. Une structure “classique” qui ne comprend qu’un unique projet ou bien un workspace pouvant contenir plusieurs applications ou librairies (aussi appelé “monorepo”)\nStructure ‘classique’ ng new [application-name] --routing --style scss --prefix [prefix] Workspace vide + application (monorepo) ng new [project-name] --create-application false ng generate application [application-name] --routing --style scss --prefix [prefix] Info Si le projet est créé dans un dépôt Git existant, il faut utiliser l’option --skip-git afin de spécifier au CLI d’Angular de ne pas initialiser de dépôt Git.\nIl peut aussi être utile de spécifier le package manager à utiliser à l’aide de l’option --package-manager.\nDans des cas plus rares, l’option --new-project-root permet de spécifier le nom du dossier dans lequel les nouvelles applications devront être générées.\nAjout d’ESLint et de Prettier Installation d’ESLint Il est possible d’ajouter facilement ESLint à un projet Angular en executant le schematic fourni :\nng add @angular-eslint/schematics Cela aura pour effet d’installer les dépendances nécessaires et créer le(s) fichier(s) de configuration associé(s).\nInstallation de Prettier Commencer par installer la package prettier ainsi que les deux plugins nécessaires à son intégration avec ESLint npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier Créer un fichier .prettierrc.json à la racine du projet { \"printWidth\": 120, \"singleQuote\": true, \"trailingComma\": \"all\", \"bracketSpacing\": true, \"overrides\": [ { \"files\": \".editorconfig\", \"options\": { \"parser\": \"yaml\" } } ] } Exemple de configuration ESLint pour workspace multi-projets ​ racine projet { \"root\": true, \"ignorePatterns\": [\"projects/**/*\"], \"overrides\": [ { \"files\": [\"*.ts\"], \"extends\": [ \"plugin:@typescript-eslint/recommended\", \"plugin:@typescript-eslint/recommended-requiring-type-checking\", \"plugin:@angular-eslint/recommended\", \"plugin:@angular-eslint/template/process-inline-templates\", \"plugin:prettier/recommended\" ], \"rules\": {} }, { \"files\": [\"*.html\"], \"extends\": [\"plugin:@angular-eslint/template/recommended\"], \"rules\": {} } ] } { \"extends\": \"../../.eslintrc.json\", \"ignorePatterns\": [\"!**/*\"], \"overrides\": [ { \"files\": [\"*.ts\"], \"parserOptions\": { \"project\": [ \"./tsconfig.lib.json\", \"./tsconfig.spec.json\" ] }, \"rules\": { \"@typescript-eslint/no-inferrable-types\": \"off\", \"@typescript-eslint/no-empty-function\": \"off\", \"@angular-eslint/no-output-native\": \"off\", \"@angular-eslint/directive-selector\": [ \"error\", { \"type\": \"attribute\", \"prefix\": \"ui\", \"style\": \"camelCase\" } ], \"@angular-eslint/component-selector\": [ \"error\", { \"type\": [\"element\", \"attribute\"], \"prefix\": \"ui\", \"style\": \"kebab-case\" } ] } } ] } Ajout de Stylelint Commencer par installer la package stylelint ainsi que sa configuration standard npm install --save-dev stylelint stylelint-config-standard Créer un fichier .stylelintrc.json à la racine du projet { \"extends\": \"stylelint-config-standard\" } Ajout de Commitlint Commencer par installer la package commitlint ainsi que sa configuration standard npm install -g @commitlint/cli @commitlint/config-conventional Créer un fichier commitlint.config.js à la racine du projet module.exports = { extends: ['@commitlint/config-conventional'] } Ajout de Husky Husky est un outil qui permet de gérer facilement les Hooks Git en exécutant des scripts au format Node.js\nInstallation Il peut s’installer de manière automatique grâce au script d’initialisation\nnpx husky-init \u0026\u0026 npm install Mais aussi de manière manuelle en exécutant une suite de commandes :\nnpm install husky --save-dev npx husky install npm set-script prepare \"husky install\" Création de hooks Il est nécessaire des hooks afin d’exécuter les linters, les tests au commit et/ou au push. Pour ajouter une commande à un hook ou en créer un nouveau, utiliser la commande husky add \u003cfile\u003e [cmd]\nAjout de Storybook Storybook est un outil qui peut s’avérer très utile pour visualiser et tester ses composants en isolation. Il s’installe très facilement en exécutant le script d’init :\nnpx storybook init",
    "description": "Création du projet Un projet Angular peut se présenter sous deux structures différentes. Une structure “classique” qui ne comprend qu’un unique projet ou bien un workspace pouvant contenir plusieurs applications ou librairies (aussi appelé “monorepo”)\nStructure ‘classique’ ng new [application-name] --routing --style scss --prefix [prefix] Workspace vide + application (monorepo) ng new [project-name] --create-application false ng generate application [application-name] --routing --style scss --prefix [prefix] Info Si le projet est créé dans un dépôt Git existant, il faut utiliser l’option --skip-git afin de spécifier au CLI d’Angular de ne pas initialiser de dépôt Git.",
    "tags": [
      "Angular"
    ],
    "title": "Mise en place d'un projet",
    "uri": "/developpement/frontend/angular/project-setup/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e Angular \u003e Gestion de l'état",
    "content": "Références https://ngrx.io/docs https://github.com/ngrx",
    "description": "Références https://ngrx.io/docs https://github.com/ngrx",
    "tags": [
      "Angular",
      "Redux",
      "State Management"
    ],
    "title": "NgRx",
    "uri": "/developpement/frontend/angular/state_management/ngrx/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Back-end \u003e Python \u003e Data Science",
    "content": "Introduction import numpy as np Tableaux multidimensionnels Introduction aux tableaux multidimensionnels La fonctionnalité de base de NumPy est ndarray, qui représente un tableau multidimensionnel. Pour en déclarer un, il suffit de créer une liste Python et d’utiliser le constructeur np.array.\nnp.array([1, 2, 3, 4, 5, 6, 7, 8]) # Pour créer plusieurs dimensions, il suffit de créer des listes de listes np.array([[1, 2, 3, 4], [5, 6, 7, 8]]) # La manière dont les lignes sont arrangées donne la dimension du tableau np.array([[1, 2], [3, 4], [5, 6], [7, 8]]) # Voici maintenant un tableau à trois dimensions np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]) On dispose d’une fonctionnalité permettant de produire des nombres à la manière du générateur range de Python ([min], max, [step]) :\nnp.arange(1, 9) # On peut également gérer les dimensions dans un second temps np.arange(1, 9).reshape(2, 4) # L'ordre des dimensions est important np.arange(1, 9).reshape(4, 2) # Et voici arriver le tableau à trois dimensions np.arange(1, 9).reshape(2, 2, 2) # Enfin, on peut remettre à plat un tableau assez facilement arr = np.arange(1, 9).reshape(2, 2, 2) arr.ravel() Voici quelques exemples supplémentaires avec la fonction np.arange pour bien visualiser son fonctionnement :\nnp.arange(5) np.arange(2, 7, 2) np.arange(0, 7, 2.5) Cet exemple montre également que lorsqu’on utilise un pas \u003c 1, on obtient des nombres flottants (c’est aussi l’intérêt de arange : renvoyer des listes de réels, chose impossible avec range). En effet, tous les objets d’un tableau multidimensionnel sont forcement du même type.\nnp.arange(2, 7, 2).dtype np.arange(0, 7, 2.5).dtype.name Le type utilisé est un type géré par NumPy et la conversion avec les types Python se fait naturellement. Le fait d’utiliser ces types de bas niveau est une des clés qui permet d’avoir de bonnes performances. Admettons maintenant que nous soyons face à un tableau multidimensionnel et que nous souhaitions récupérer des informations.\na = np.arange(100).reshape(5, 5, 4) # Voici comment obtenir le nombre de dimensions a.ndim # Quel est la taille de chaque dimension ? a.shape # Le nombre d'éléments dans le tableau, au total a.size # Le nom du type des données des objets présents dans le tableau (rappel) a.dtype.name # Et une dernière petite astuce utile, comment connaître leur taille a.itemsize # En effet, pour des raisons de performance, il peut être utile d'utiliser des objets de taille plus petite a = np.arange(100, dtype='int8').reshape(5, 5, 4) Pour terminer cette introduction, voici comment créer des tableaux multidimensionnels rapidement en les remplissant de 0 ou de 1 (on en profite pour montrer une manière de déclarer le type) :\nnp.zeros((3, 4)) np.ones((3, 4), dtype=np.int8) # En les remplissant aléatoirement (on reviendra juste apres sur la signification de l’opérateur de multiplication) np.random.random((2, 2)) np.floor(10 * np.random.random((2, 2))) # Ou encore en les remplissant à l'aide d'une fonction qui se base sur la position du nombre à générer (lignes et colonnes) def f(x, y): return 10 * x + y arr = np.fromfunction(f, (4, 3), dtype=np.int8) Le tout permet de créer très rapidement des tableaux de données de la dimension de son choix.\nOpérateur crochet S’il y a un opérateur qui est extrêmement utile et bien pensé, c’est bien l’opérateur crochet de Python. Cependant, NumPy le rend encore meilleur, c’est-à-dire avec toutes les qualités que l’on connaît à Python avec la gestion des dimensions. Reprenons l’exemple precedent :\n# et accédons au premier element arr[0, 0] # On utilise ici les coordonnées du point dans le tableau multidimensionnel. On peut aussi utiliser les nombres négatifs pour avoir le dernier element arr[-1, -1] # On peut utiliser les deux pour avoir le dernier élément de la seconde ligne par exemple arr[1, -1] # Et la cerise sur le gâteau, les tranches (slices en anglais) fonctionnent aussi arr[1:2, -2:1] arr[0:2, -2:] # Mais elles fonctionnent vraiment arr[::2, ::2] # Voici un exemple avec le tableau en trois dimensions a = np.arange(100, dtype='int8').reshape(5, 5, 4) a[2] a[2, 3] a[2, 3, 1] # On sait maintenant naviguer dans ces tableaux. Il n'est pas non plus inutile de savoir que l'on peut itérer for l, lig in enumerate(a): for c, case in enumerate(lig): print(\"Case (%s, %s) = %s\" % (l, c, case)) # Et que l'on peut itérer également sur les nombres indépendamment de leur structure for e in a.flat: print(e) Operations basiques En premier lieu, les algorithmes usuels de Python fonctionnent toujours avec les objets NumPy\nprint 3 in np.array([1, 2, 3, 4, 5, 6, 7, 8]) Mais ces objets ont beaucoup plus à offrir. Pour commencer, on va voir certaines opérations qui concernent les nombres contenus dans les tableaux, peu importe comment lesdits tableaux sont organisés.\na = np.arange(100, dtype='int8').reshape(5, 5, 4) a.min() a.max() a.sum() On prend en compte ici l’ensemble des nombres présents dans le tableau. Mais comme on peut le voir dans l’exemple suivant, on peut aussi réaliser ces operations selon un axe donné :\na.sum(axis=0) a.min(axis=1) a.max(axis=2) # On peut également les réaliser selon plusieurs axes a.sum(axis=(0, 1)) a.sum(axis=(1, 2)) Il existe également une opération permettant d’effectuer un produit scalaire. Pour cela, il faut que les tableaux multidimensionnels soient alignés, c’est-à-dire que le nombre de colonnes corresponde, sinon :\nb = np.array([16, 42, 64]) # np.dot(a, b) -\u003e ValueError: shapes (5,5,4) and (3,) not aligned: 4 (dim 2) != 3 (dim 0) Avec deux opérandes corrects, on obtient un résultat :\nb = np.array([16, 42, 64, 48]) np.dot(a, b) Cette opération peut également être menée sur deux tableaux unidimensionnels et de même sens. Créons deux tableaux distincts :\na = np.arange(2, 9, 2) b = np.arange(20, 5, -4) # Voici leur produit scalaire np.dot(a, b) # Ce qu'il faut pas confondre avec la multiplication (qui multiplie entre eux chaque nombre aux memes positions) a * b On encore les tableaux multidimensionnels de sens contraire :\na = np.arange(4).reshape(4, 1) b = np.arange(4).reshape(1, 4) np.dot(a, b) Tout autre chose, on peut également réaliser des additions, soustractions, multiplications ou divisions :\na - 5 a + 10 a * 2 a / 2 La encore, comme pour la multiplication entre deux tableaux multidimensionnels, on agit individuellement sur chaque membre du tableau en lui appliquant la transformation. On peut aussi citer ces deux exemples de transformation :\na = np.array([2, 4, 6, 8]) np.exp(a) np.sqrt(a) Une autre fonctionnalité intéressante des tableaux multidimensionnels est la possibilité de les concaténer verticalement ou horizontalement\na = np.arange(6).reshape(3, 2) b = np.arange(6, 12).reshape(3, 2) np.hstack((a, b)) np.vstack((a, b)) Cela fonctionne également avec la fonction concatenate, en précisant éventuellement l’axe sur lequel l’opération doit avoir lieu (indispensable si l’on a plus de deux dimensions). Enfin, il est aussi possible de réaliser une transposée :\na.transpose() Mais attention, on parle bien ici de tableaux multidimensionnels et non pas de matrices. Autrement dit, une matrice n’est pas un tableau a deux dimensions. Ce sont des objets totalement différents, qui n’ont pas du tout la même utilisation.\nMatrices Une matrice, dans NumPy, est l’objet mathématique que l’on connaît. On entre ici dans l’algèbre linéaire. Nous n’allons pas rentrer dans un cours mathématique, mais nous précisons juste quelques notions élémentaires pour que la suite puisse bien se comprendre. Une matrice m x n est une matrice de m lignes et n colonnes. Des matrices sont dites de même taille si elles ont le meme nombre de lignes et de colonnes. Enfin, une matrice carrée est une matrice possédant le même nombre de lignes et de colonnes. Voici trois manières différentes de declarer une même matrice :\nnp.matrix([[1, 2], [3, 4]]) np.matrix(np.arange(1, 5).reshape(2, 2)) np.matrix('1 2; 3 4') Seules des matrices de même taille peuvent s’additionner ou se soustraire, ou même se diviser, selon un procède identique aux tableaux a deux dimensions, c’est-à-dire que l’opération se passe en réalité entre chaque membre ayant la même position :\nnp.matrix('10 20; 30 40') + np.matrix('1 2; 3 4') np.matrix('10 20; 30 40') - np.matrix('1 2; 3 4') np.matrix('10 20; 30 40') / np.matrix('1 2; 3 4') # Attention, avec le produit, on réalise en fait un produit matriciel qui est une operation entre les matrices np.matrix('10 20; 30 40') * np.matrix('1 2; 3 4') On peut aussi multiplier une matrice par un nombre, tout comme on l’a vu avec les tableaux multidimensionnels. Il est temps maintenant sur les elements spécifiques aux matrices et à l’algèbre linéaire. On peut commencer avec la recherche de la transposée.\nA = np.matrix('1. 2.; 3. 4.') A.T # Ce qui fonctionne également sur des matrices non carrées X = np.matrix('1. 10.') X.T # On peut aussi multiplier deux matrices et cela respecte les règles mathématiques liées aux matrices A * X.T Il faut, entre autres, faire ceci dans le bon sens. D’une part, dans l’exemple précédent, la transposition est prioritaire sur la multiplication. D’autre part, dans l’exemple suivant, il faut que les matrices soient multipliables\nX = np.matrix('1.; 10.') X.T A*X Dans cet exemple, on a déclare une matrice carrée. Une des opérations les plus utiles consiste à retrouver la matrice inverse A.I. Et enfin, voici la fonction permettant de gérer la résolution d’une équation d’algèbre linéaire.\nnp.linalg.solve(A, X.T) On voit la l’utilisation du module linalg, un des modules importants de NumPy. Pour aller plus loin, vous pouvez vous rendre ici http://docs.scipy.org/doc/numpy/reference/routines.linalg.html. Voici cependant quelques exemples basiques, par exemple le determinant d’une matrice :\nnp.linalg.det(A) # Et sa norme np.linalg.norm(A) Polynômes Le calcul polynomial est également une fonctionnalité importante pour le calcul scientifique. Cela sert, entre autres, en cryptographie par exemple. On va introduire ici la manière dont on peut déclarer un polynôme et les opérations courantes qu’il est possible de faire.\np = np.poly1d([1, -6, 5]) On a donc déclaré un polynôme de second degré, composé de trois monômes de degrés respectifs 0, 1, 2. Voici comment obtenir les coefficients de ces monômes :\np[0] p[1] p[2] # Si on s’intéresse à tous les degrés supérieurs, on ne trouvera rien d'autre que des zéros p[3] p[6] Attention, pour cela, on a utilise l’opérateur crochet. À ne pas confondre avec l’opérateur parenthèse (appel de fonction en Python), qui permet d’appeler la fonction au sens mathématique du terme et d’obtenir la valeur du polynôme pour une valeur de la variable donnée.\np(0) p(1) p(2) p(3) p(4) p(5) p(6) # On obtient ainsi un petit échantillon de valeurs qu'il est possible d'obtenir plus simplement p(range(0, 7)) Voici maintenant une petite liste des opérations qu’il est possible de réaliser sur un polynôme. Multiplication par une constante.\n2 * p # Addition à une constante 2 * p + 2 # Multiplication par un autre polynôme p * p # On peut aussi réaliser les opérations classiques de dérivation p.deriv() # Et d'integration p.integ() # Cette dernière offre également la possibilité de preciser la constante a utiliser p.integ(k=42) On peut également résoudre ces deux problématiques directement à partir des coefficients des monômes.\nnp.polyint([1, -6, 5]) np.polyder([1, -6, 5]) np.polyint([1, -6, 5], k=42) Enfin, on peut résoudre l’equation :\np.roots Et faire l’opération inverse, c’est-à-dire trouver le polynôme à partir des racines :\nnp.poly([5, 1]) Voici la démarche complète pour créer l’objet polynôme :\nnp.poly1d(np.poly([5, 1])) Algèbre booléenne Gardons à l’esprit qu’il n’y a pas que les nombres qui peuvent être utilisés. On peut également travailler avec des booléens et réaliser des opérations avec :\na = np.array([1, 42, 0], float) np.logical_and(a \u003e 0, a \u003c 42) On sait ici, élément par élément, lesquels remplissent les conditions données. On peut également réaliser de l’algèbre booléenne.\nb = np.array([True, True, False, True], bool) np.logical_not(b) c = np.array([True, False, True, False], bool) np.logical_or(b, c) np.logical_xor(b, c) Et enfin, l’utilisation des fonctionnalités basiques de Python est possible.\nany(b) all(b) Conclusion La programmation scientifique est une discipline à part entière. On a effleuré ici les possibilités offertes par NumPy. Ce module profite des possibilités du langage Python tout en apportant énormément de choses et le tout rend Python particulièrement attractif pour un public de chercheurs ou doctorants, entre autres, qui souhaite pouvoir faire du calcul scientifique sans avoir à devenir des spécialistes de la programmation.\nCe n’est pas pour cette seule raison que Python et NumPy sont choisis, puisque la raison principale reste le fait que la bibliothèque permette de combler un besoin extrêmement large, le tout avec une licence tres permissive.",
    "description": "Introduction import numpy as np Tableaux multidimensionnels Introduction aux tableaux multidimensionnels La fonctionnalité de base de NumPy est ndarray, qui représente un tableau multidimensionnel. Pour en déclarer un, il suffit de créer une liste Python et d’utiliser le constructeur np.array.\nnp.array([1, 2, 3, 4, 5, 6, 7, 8]) # Pour créer plusieurs dimensions, il suffit de créer des listes de listes np.array([[1, 2, 3, 4], [5, 6, 7, 8]]) # La manière dont les lignes sont arrangées donne la dimension du tableau np.array([[1, 2], [3, 4], [5, 6], [7, 8]]) # Voici maintenant un tableau à trois dimensions np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]) On dispose d’une fonctionnalité permettant de produire des nombres à la manière du générateur range de Python ([min], max, [step]) :",
    "tags": [
      "Python",
      "Data Science"
    ],
    "title": "Numpy",
    "uri": "/developpement/backend/python/data-science/numpy/index.html"
  },
  {
    "breadcrumb": "Ma documentation",
    "content": "Cette rubrique présente les différents articles liés à l’environnement de travail.\nGestion des fichiers de config Git Sparse checkout et Sparse index NeoVim Raccourcis clavier Linux Installation d'un serveur Ubuntu Commandes utiles RedHat Windows",
    "description": "Cette rubrique présente les différents articles liés à l’environnement de travail.\nGestion des fichiers de config Git Sparse checkout et Sparse index NeoVim Raccourcis clavier Linux Installation d'un serveur Ubuntu Commandes utiles RedHat Windows",
    "tags": [],
    "title": "Poste de travail",
    "uri": "/workspace/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Design \u003e Figma",
    "content": "Zoom Shift + 0 : Zoom 100% Shift + 1 : Fit layer to screen Shift + 2 : Zoom in the selected frame Hide/Show Shift + R : Hide/Show Rulers Control + G : Hide/Show Layout Grids Tools P : Pen V : Move T : Text tool H : Hand I : Color picker Go to Option + 1 : Go to layers menu Option + 2 : Go to components menu For Windows, use Alt instead of Option\nCopy/Paste styles Option + Command + C : Copy style Option + Command + V : Paste style For Windows, use Ctrl + Shift instead of Option + Command\nGroup/Ungroup Command + C : Group selection Command + Shift + V : Ungroup selection For Windows, use Ctrl instead of Command",
    "description": "Zoom Shift + 0 : Zoom 100% Shift + 1 : Fit layer to screen Shift + 2 : Zoom in the selected frame Hide/Show Shift + R : Hide/Show Rulers Control + G : Hide/Show Layout Grids Tools P : Pen V : Move T : Text tool H : Hand I : Color picker Go to Option + 1 : Go to layers menu Option + 2 : Go to components menu For Windows, use Alt instead of Option",
    "tags": [
      "Figma"
    ],
    "title": "Raccourcis clavier",
    "uri": "/design/figma/shortcuts/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Poste de travail \u003e NeoVim",
    "content": "Modes i: insertion (au niveau du curseur)\nI: insertion au début de la ligne\na: insertion (après le curseur)\nA: insertion à la fin de la ligne\no: insertion (nouvelle ligne en dessous)\nO: insertion (nouvelle ligne au-dessus)\ns: insertion après suppression du caractère courant\nS: insertion après suppression de la ligne\nv: visuel au niveau du curseur\nV: visuel au niveau de la ligne\nCtrl+v: visuel bloc\nr: remplacer le caractère courant\nR: remplacer\nESC: retour au mode normal (commande)\nFonctionnement global {operator}{count}{motion} ou {count}{operator}{motion}\noperator désigne l’action qu’on veut effectuer (supprimer, changer, copier, formatter…) count désigne le nombre de fois que l’on veut effectuer l’action motion désigne le morceau de texte sur lequel on veut effectuer l’action Par exemple, pour supprimer 2 mots on peut écrire : d2w (delete 2 words)\nDéplacements h, j, k, l: déplacements gauche, bas, haut, droite\nw: déplacement vers le début du mot suivant (séparé par un espace/une ponctuation)\nW: déplacement vers le début du mot suivant (séparé par un espace)\ne: déplacement vers la fin du mot suivant (séparé par un espace/une ponctuation)\nE: déplacement vers la fin du mot suivant (séparé par un espace)\nb: déplacement vers le début du mot précédent (séparé par un espace/une ponctuation)\nB: déplacement vers le début du mot précédent (séparé par un espace)\n$: déplacement vers la fin d’une ligne\n0: déplacement vers le début d’une ligne\n^: déplacement vers le premier caractère non-espace d’une ligne\nf{char}: saut vers le caractère spécifié\nF{char}: saut vers le caractère spécifié en arrière\n(: déplacement vers le début d’un bloc\n): déplacement vers la fin d’un bloc\n{: déplacement vers le début d’un paragraphe\n}: déplacement vers la fin d’un paragraphe\nCtrl + d: déplacement vers le bas d’une moitié d’une page\nCtrl + u: déplacement vers le haut d’une moitié d’une page\nCtrl + f: déplacement vers le bas d’une page\nCtrl + b: déplacement vers le haut d’une page\ngg: déplacement vers le début d’un fichier\nG: déplacement vers la fin d’un fichier\ngd: déplacement vers la définition\n:{numero}: déplacement vers la ligne spécifiée\nModifier cw: changer un mot ciw: changer un mot depuis l’intérieur (change inner word) s: remplacer un caractère y: copier la sélection (yy pour copier une ligne complète) p: coller la sélection (après le curseur) P: coller la sélection (avant le curseur) yi{(), {}, []}: copier le contenu de la parenthèse, de la boucle ou de l’array (excl.) ya{(), {}, []}: copier le contenu de la parenthèse, de la boucle ou de l’array (incl.) di{(), {}, []}: supprimer le contenu de la parenthèse, de la boucle ou de l’array (excl.) di{(), {}, []}: supprimer le contenu de la parenthèse, de la boucle ou de l’array (incl.) dd: supprimer la ligne d$: supprimer jusqu’à la fin de la ligne d0: supprimer jusqu’au début de la ligne di{w, s, p}: supprimer le mot, la phrase ou le paragraphe dt{char}: supprimer jusqu’au caractère spécifié x: supprimer le caractère sous le curseur X: supprimer le caractère avant le curseur History u: annuler Ctrl + r: rétablir .: répéter l’opération Navigation /: chercher un mot (n prochaine occurrence, Shift_N occurrence précédente) ?: chercher un mot en sens inverse (n prochaine occurrence, Shift_N occurrence précédente) *: chercher le mot courant #: chercher le mot courant en sens inverse m{a-z}: marquer le mot courant \\{a-z}: aller à la marque Références https://www.malekal.com/raccourcis-clavier-commandes-vim/#Modifier_le_texte_dans_vim https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim/editing-like-magic-with-vim-operators/",
    "description": "Modes i: insertion (au niveau du curseur)\nI: insertion au début de la ligne\na: insertion (après le curseur)\nA: insertion à la fin de la ligne\no: insertion (nouvelle ligne en dessous)\nO: insertion (nouvelle ligne au-dessus)\ns: insertion après suppression du caractère courant\nS: insertion après suppression de la ligne\nv: visuel au niveau du curseur\nV: visuel au niveau de la ligne\nCtrl+v: visuel bloc\nr: remplacer le caractère courant",
    "tags": [
      "Workspace",
      "Neovim"
    ],
    "title": "Raccourcis clavier",
    "uri": "/workspace/neovim/shortcuts/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Poste de travail \u003e Git",
    "content": "Références https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/ https://github.blog/2021-11-10-make-your-monorepo-feel-small-with-gits-sparse-index/",
    "description": "Références https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/ https://github.blog/2021-11-10-make-your-monorepo-feel-small-with-gits-sparse-index/",
    "tags": [
      "Workspace",
      "Git"
    ],
    "title": "Sparse checkout et Sparse index",
    "uri": "/workspace/git/sparse/index.html"
  },
  {
    "breadcrumb": "Ma documentation",
    "content": "C4 Model Domain Driven Design",
    "description": "C4 Model Domain Driven Design",
    "tags": [],
    "title": "Architecture",
    "uri": "/architecture/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e CSS - SCSS",
    "content": "Le problème \u003cbody\u003e \u003cdiv style=\"border: 1px solid green\"\u003e \u003cspan style=\"border: 1px solid red; font-size: 12px;\"\u003eCeci est un texte\u003c/span\u003e \u003c/div\u003e \u003c/body\u003e Solutions Utiliser display: flex à la place de display: block sur le container : \u003cbody\u003e \u003cdiv style=\"border: 1px solid green; display: flex\"\u003e \u003cspan style=\"border: 1px solid red; font-size: 12px\"\u003eCeci est un texte\u003c/span\u003e \u003cspan style=\"border: 1px solid red; font-size: 8px\"\u003eCeci est un autre texte\u003c/span\u003e \u003c/div\u003e \u003c/body\u003e Paramétrer les propriétés font-size, letter-spacing et word-spacing du container à 0px et réinitialiser les enfants : \u003cbody\u003e \u003cdiv style=\"border: 1px solid green; font-size: 0px; letter-spacing: 0px; word-spacing: 0px\"\u003e \u003cspan style=\"all: initial; border: 1px solid red; font-size: 12px\"\u003eCeci est un texte\u003c/span\u003e \u003cspan style=\"all: initial; border: 1px solid red; font-size: 8px\"\u003eCeci est un autre texte\u003c/span\u003e \u003c/div\u003e \u003c/body\u003e Utiliser la propriété float: left sur chaque enfant : \u003cbody\u003e \u003cdiv style=\"border: 1px solid green\"\u003e \u003cspan style=\"border: 1px solid red; float: left; font-size: 12px\"\u003eCeci est un texte\u003c/span\u003e \u003cspan style=\"border: 1px solid red; float: left; font-size: 8px\"\u003eCeci est un autre texte\u003c/span\u003e \u003c/div\u003e \u003c/body\u003e Sources https://stackoverflow.com/questions/1833734/display-inline-block-extra-margin/8262649#8262649",
    "description": "Le problème \u003cbody\u003e \u003cdiv style=\"border: 1px solid green\"\u003e \u003cspan style=\"border: 1px solid red; font-size: 12px;\"\u003eCeci est un texte\u003c/span\u003e \u003c/div\u003e \u003c/body\u003e Solutions Utiliser display: flex à la place de display: block sur le container : \u003cbody\u003e \u003cdiv style=\"border: 1px solid green; display: flex\"\u003e \u003cspan style=\"border: 1px solid red; font-size: 12px\"\u003eCeci est un texte\u003c/span\u003e \u003cspan style=\"border: 1px solid red; font-size: 8px\"\u003eCeci est un autre texte\u003c/span\u003e \u003c/div\u003e \u003c/body\u003e",
    "tags": [
      "Css"
    ],
    "title": "Block Margin Issue",
    "uri": "/developpement/frontend/css-scss/block-margin-issue/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Poste de travail \u003e Linux",
    "content": "Fichiers et arborescence Éditer un fichier : (-i pour en place) sed -i 's/foo/FOO/' file.txt Éditer tous les fichiers d’un dossier : find . -type f -exec sed -i.bak 's/foo/bar/g' {} \\; Cette commande crée un fichier .bak pour chaque fichier modifié.\nSupprimer une extension : for file in *.[ext]; do mv \"$file\" \"${file%%.[ext]}\"; done Gestion des services Récupérer la liste des services s’exécutant sur le système : sudo systemctl --type=service --state=running Rechargement du daemon après modification d’un fichier de configuration : sudo systemctl daemon-reload Activer le démarrage automatique d’un service : sudo systemctl enable [service] Démarrer / Redémarrer / Arrêter un service : sudo systemctl start|restart|stop [service] Consulter les logs d’un service sudo journalctl -u [service]",
    "description": "Fichiers et arborescence Éditer un fichier : (-i pour en place) sed -i 's/foo/FOO/' file.txt Éditer tous les fichiers d’un dossier : find . -type f -exec sed -i.bak 's/foo/bar/g' {} \\; Cette commande crée un fichier .bak pour chaque fichier modifié.\nSupprimer une extension : for file in *.[ext]; do mv \"$file\" \"${file%%.[ext]}\"; done Gestion des services Récupérer la liste des services s’exécutant sur le système : sudo systemctl --type=service --state=running Rechargement du daemon après modification d’un fichier de configuration : sudo systemctl daemon-reload Activer le démarrage automatique d’un service : sudo systemctl enable [service] Démarrer / Redémarrer / Arrêter un service : sudo systemctl start|restart|stop [service] Consulter les logs d’un service sudo journalctl -u [service]",
    "tags": [
      "Workspace",
      "Linux",
      "Shell"
    ],
    "title": "Commandes utiles",
    "uri": "/workspace/linux/useful-commands/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end",
    "content": "CSS Reset Block Margin Issue Appliquer un masque à une image CSS Overlay Techniques Faire de belles ombres en CSS",
    "description": "CSS Reset Block Margin Issue Appliquer un masque à une image CSS Overlay Techniques Faire de belles ombres en CSS",
    "tags": [],
    "title": "CSS - SCSS",
    "uri": "/developpement/frontend/css-scss/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Architecture",
    "content": "Introduction / Définition Les logiciels doivent rester pratiques, utiles et ergonomiques. Le Domain Driven Design est une approche de conception qui vise à accorder de l’importance au domaine métier, à travers des design patterns de conception.\nRéférences https://cdiese.fr/domain-driven-design-en-5-min/ https://lesdieuxducode.com/blog/2019/7/introduction-au-domain-driven-design https://khalilstemmler.com/articles/typescript-domain-driven-design/ddd-frontend/",
    "description": "Introduction / Définition Les logiciels doivent rester pratiques, utiles et ergonomiques. Le Domain Driven Design est une approche de conception qui vise à accorder de l’importance au domaine métier, à travers des design patterns de conception.\nRéférences https://cdiese.fr/domain-driven-design-en-5-min/ https://lesdieuxducode.com/blog/2019/7/introduction-au-domain-driven-design https://khalilstemmler.com/articles/typescript-domain-driven-design/ddd-frontend/",
    "tags": [
      "Domain Driven Design"
    ],
    "title": "Domain Driven Design",
    "uri": "/architecture/domain-driven-design/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Design",
    "content": "Raccourcis clavier",
    "description": "Raccourcis clavier",
    "tags": [],
    "title": "Figma",
    "uri": "/design/figma/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement",
    "content": "Angular Mise en place d'un projet Organisation des fichiers Vues et manipulations du DOM Injection de dépendances Gestion de l'état Migration de Karma vers Jest Librairies à points d'entrée multiples Angular sans CLI CSS - SCSS CSS Reset Block Margin Issue Appliquer un masque à une image CSS Overlay Techniques Faire de belles ombres en CSS",
    "description": "Angular Mise en place d'un projet Organisation des fichiers Vues et manipulations du DOM Injection de dépendances Gestion de l'état Migration de Karma vers Jest Librairies à points d'entrée multiples Angular sans CLI CSS - SCSS CSS Reset Block Margin Issue Appliquer un masque à une image CSS Overlay Techniques Faire de belles ombres en CSS",
    "tags": [],
    "title": "Front-end",
    "uri": "/developpement/frontend/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Poste de travail",
    "content": "Sparse checkout et Sparse index",
    "description": "Sparse checkout et Sparse index",
    "tags": [],
    "title": "Git",
    "uri": "/workspace/git/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e DevOps \u003e Kubernetes",
    "content": "Certaines applications ont besoin d’être restart.\nPrévenir des images mal construites et non fonctionnelles.\nÉviter les coupures lors des déploiements (zero-downtime)\nLiveness = restart automatique\nReadiness = remplacement pod défectueux (suppression du pod et création d’un nouveau)\nConfiguration, modes et variables La configuration des liveness et des readiness se fait exactement de la même façon. 3 modes de vérification sont possibles:\ncommand: exec\nhttp: httpGet\ntcp: tcpSocket\ninitialDelaySeconds: à partir de quand commence le check.\nperiodSeconds: à quelle fréquence on check.\ntimeoutSeconds: à partir de quelle durée on timeout.\nsuccessThreshold: au bout de combien de positifs on réactive.\nfailureThreshold: au bout de combien de négatifs on sort.\nhttpGet host: quel host ? scheme: protocole (http ou https) path: route vérifiée httpHeaders: headers spécifiques port: port à vérifier Exemples apiVersion: v1 kind: Pod metadata: labels: test: liveness name: liveness-exec spec: containers: - name: liveness image: registry.k8s.io/busybox args: - /bin/sh - -c - touch /tmp/healthy; sleep 30; rm -f /tmp/healthy; sleep 600 livenessProbe: exec: command: - cat - /tmp/healthy initialDelaySeconds: 5 periodSeconds: 5",
    "description": "Certaines applications ont besoin d’être restart.\nPrévenir des images mal construites et non fonctionnelles.\nÉviter les coupures lors des déploiements (zero-downtime)\nLiveness = restart automatique\nReadiness = remplacement pod défectueux (suppression du pod et création d’un nouveau)\nConfiguration, modes et variables La configuration des liveness et des readiness se fait exactement de la même façon. 3 modes de vérification sont possibles:\ncommand: exec\nhttp: httpGet\ntcp: tcpSocket\ninitialDelaySeconds: à partir de quand commence le check.",
    "tags": [],
    "title": "Healthchecks: Liveness et Readiness",
    "uri": "/devops/kubernetes/healthchecks/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e DevOps",
    "content": "Présentation Pipelines Variables d’environnement BRANCH_NAME: For a multibranch project, this will be set to the name of the branch being built, for example in case you wish to deploy to production from master but not from feature branches; if corresponding to some kind of change request, the name is generally arbitrary (refer to CHANGE_ID and CHANGE_TARGET).\nCHANGE_BRANCH: For a multibranch project corresponding to some kind of change request, this will be set to the name of the actual head on the source control system which may or may not be different from BRANCH_NAME. For example in GitHub or Bitbucket this would have the name of the origin branch whereas BRANCH_NAME would be something like PR-24.\nCHANGE_TARGET: For a multibranch project corresponding to some kind of change request, this will be set to the target or base branch to which the change could be merged, if supported; else unset.\nSource",
    "description": "Présentation Pipelines Variables d’environnement BRANCH_NAME: For a multibranch project, this will be set to the name of the branch being built, for example in case you wish to deploy to production from master but not from feature branches; if corresponding to some kind of change request, the name is generally arbitrary (refer to CHANGE_ID and CHANGE_TARGET).\nCHANGE_BRANCH: For a multibranch project corresponding to some kind of change request, this will be set to the name of the actual head on the source control system which may or may not be different from BRANCH_NAME. For example in GitHub or Bitbucket this would have the name of the origin branch whereas BRANCH_NAME would be something like PR-24.",
    "tags": [],
    "title": "Jenkins",
    "uri": "/devops/jenkins/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Back-end \u003e Python \u003e Data Science",
    "content": "L’objectif de cet article est de vous faire découvrir, au travers d’exemples, quelques’unes des possibilités du module matplotlib. Avant de commencer, il est important de comprendre que matplotlib offre 2 interfaces distinctes :\npylab est une interface similaire à celle de matlab et existe essentiellement pour des raisons historiques. pyplot est l’interface officielle que je vous recommande d’utiliser. Tout au long de cet article, on supposera donc que les commandes suivantes ont été exécutées dans chaque session interactive (ou bien se trouvent au début de chaque script)\nimport numpy as np import matplotlib.pyplot as plt from matplotlib.backends import pylab_setup from matplotlib.lines import lineStyles IPython IPython est un shell Python avec des fonctionnalités avancées et permet notamment de réaliser des figures de façon interactive. Cela veut dire, entre autres choses, que vous pouvez visualiser votre figure et continuer à taper des commandes dans l’interpréteur, ce qui n’est pas le cas avec le shell Python normal.\nipython --pylab Par ailleurs, les dernières versions de IPython offre une fonctionnalité de notebook qui permet d’avoir un shell Python interactif dans un navigateur et de produire les figures à l’intérieur du navigateur, ce qui est très pratique (ne pas oublier l’option --pylab)\nPremiers pas matplotlib est une librairie orientée vers la visualisation scientifique et possède donc un grand nombre de fonctions dédiées à ce domaine. L’objet le plus simple est la fonction plot, qui permet de relier une suite de points. Par exemple, si l’on souhaite tracer la fonction cosinus, il faut générer au préalable l’ensemble des points X et Y décrivant la courbe. Pour cela, on se fixe d’abord un domaine de définition en utilisant la librairie NumPy, qui permet de construire et de manipuler les matrices et vecteurs de manière très efficace.\nX = np.linspace(0, 2*np.pi, 256) Cette instruction construit un vecteur de 256 valeurs uniformément réparties entre 0 et 2pi (exclu). Il suffit alors de générer les cosinus pour chaque valeur, ce que numpy permet de faire en travaillant directement sur les vecteurs :\nY = np.cos(X) Il ne nous reste plus alors qu’à tracer la courbe et à visualiser le résultat :\nplt.plot(X, Y) plt.show() # Optionnel si vous utilisez IPython en mode pylab Si tout s’est bien passe, vous devriez avoir à l’écran une fenêtre qui s’affiche avec la courbe du cosinus.\nConfiguration et paramétrage Pour afficher la courbe des cosinus, matplotlib effectue un certain nombre de choix par défaut :\ntaille initiale de la fenêtre et choix du DPI (dots per inch), nombre de repères sur les axes, valeurs maximales et minimales pour l’axe des abscisses et des ordonnées, style, épaisseur et couleur du trace, presence ou absence de marqueur, etc… Évidemment, tout peut être change, soit de façon générale pour toutes les nouvelles figures, soit au cas par cas via les options des différentes commandes et les méthodes des différents objets. Pour connaître l’ensemble de ces options, il faut se reporter à la documentation ou bien à ce tutoriel. Voila, par exemple, la même figure que la précédente ou l’on a explicitement choisi chaque paramètre :\n# Création d'une figure de taille 8x6 (points) en utilisant un DPI de 80 fig = plt.figure(figsize=(8,6), dpi=80) # Création d'une sous-figure ax = plt.subplot(1, 1, 1) # Création de X et Y X = np.linspace(0, 2*np.pi, 256) Y = np.cos(X) # Affichage de la courbe en bleu, épaisseur 1, trait continu ax.plot(X, Y, color=\"blue\", linewidth=1.0, linestyle=\"-\") # Limites en abscisse ax.set_xlim(0, 2*np.pi) # Indicateurs sur les abscisses ax.set_xticks(np.linspace(0, 6, 6, endpoint=True)) # Limites en ordonnée ax.set_ylim(-1.0, 1.0) # Indicateurs sur les ordonnées ax.setyticks(np.linspace(-1, 1, 5, endpoint=True)) # On sauve la figure plt.savefig('cosinus.png', dpi=72) # Affiche la figure plt.show() Il existe une multitude d’objets qui facilitent la visualisation scientifique et un livre entier ne suffirait pas à tous les présenter. Le plus simple pour en avoir un petit apercu est d’aller voir la galerie d’exemples de matplotlib. Pour la suite de cet article, nous allons plutôt essayer de sortir des sentiers battus.\nManipulation d’image matplotlib permet d’afficher des images de façon tres rapide via la commande imshow :\nfrom matplotlib._png import read_png plt.imshow(read_png('lena.png')) plt.show() Pixel versus point Ce qui peut être un peu perturbant cependant, c’est que la taille de l’image affichée ne correspond pas à la taille réelle de l’image. En effet, matplotlib gère en interne une figure comme un objet vectoriel pouvant être redimensionné à volonté et, par defaut, toute figure est entourée par un cadre délimitant toute sa surface. Tout ce qui est hors de ce cadre est généralement utilisé pour afficher les informations telles que le titre, les étiquettes des axes, etc. Si l’on souhaite maintenant afficher la même image de façon naturelle, il faut le préciser explicitement :",
    "description": "L’objectif de cet article est de vous faire découvrir, au travers d’exemples, quelques’unes des possibilités du module matplotlib. Avant de commencer, il est important de comprendre que matplotlib offre 2 interfaces distinctes :\npylab est une interface similaire à celle de matlab et existe essentiellement pour des raisons historiques. pyplot est l’interface officielle que je vous recommande d’utiliser. Tout au long de cet article, on supposera donc que les commandes suivantes ont été exécutées dans chaque session interactive (ou bien se trouvent au début de chaque script)",
    "tags": [
      "Python",
      "Data Science"
    ],
    "title": "Matplotlib",
    "uri": "/developpement/backend/python/data-science/matplotlib/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e Angular \u003e Injection de dépendances",
    "content": "Le multi-providing en Angular est la capacité du framework à fournir plusieurs dépendances au sein du même token.\nconst SOME_TOKEN: InjectionToken = new InjectionToken('SomeToken'); var injector = Injector.create([ { provide: SOME_TOKEN, useValue: 'dependency one', multi: true }, { provide: SOME_TOKEN, useValue: 'dependency two', multi: true } ]); var dependencies = injector.get(SOME_TOKEN); // dependencies == ['dependency one', 'dependency two'] Références https://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html#other-multi-providers",
    "description": "Le multi-providing en Angular est la capacité du framework à fournir plusieurs dépendances au sein du même token.\nconst SOME_TOKEN: InjectionToken = new InjectionToken('SomeToken'); var injector = Injector.create([ { provide: SOME_TOKEN, useValue: 'dependency one', multi: true }, { provide: SOME_TOKEN, useValue: 'dependency two', multi: true } ]); var dependencies = injector.get(SOME_TOKEN); // dependencies == ['dependency one', 'dependency two'] Références https://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html#other-multi-providers",
    "tags": [
      "Angular",
      "Di"
    ],
    "title": "Multiple providers",
    "uri": "/developpement/frontend/angular/dependency_injection/multiple_providers/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e Angular \u003e Gestion de l'état",
    "content": "Références https://ngxs.io/ https://github.com/ngxs",
    "description": "Références https://ngxs.io/ https://github.com/ngxs",
    "tags": [
      "Angular",
      "Redux",
      "State Management"
    ],
    "title": "NgXs",
    "uri": "/developpement/frontend/angular/state_management/ngxs/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e Angular",
    "content": "src +-- app | +-- modules | | +-- home | | | +-- components | | | | +-- ... | | | +-- pages | | | | +-- ... | | | +-- home-store | | | | home.actions.ts | | | | home.reducers.ts | | | | home.effects.ts | | | | home.selectors.ts | | | | home.state.ts | | | | home-store.module.ts | | | home.routing.module.ts | | | home.module.ts | +-- core | | +-- core-store | | | +-- actions | | | | user.actions.ts | | | | index.ts | | | +-- reducers | | | | user.reducer.ts | | | | index.ts | | | +-- effects | | | | user.effects.ts | | | +-- selectors | | | | user.selectors.ts | | | core-store.module.ts | | +-- shell | | | +-- components | | | | +-- header | | | | | header.component.[ts|spec.ts|html|scss] | | | | +-- footer | | | | | footer.component.[ts|spec.ts|html|scss] | | | shell.module.ts | | | shell.component.[ts|spec.ts|html|scss] | | +-- authentication | | +-- services | | +-- ... | | core.module.ts | +-- shared | | +-- componentes | | +-- directives | | +-- pipes | | shared.module.ts | app.module.ts | app-routing.module.ts | app.component.ts | app.component.spec.ts | app.component.scss | app.component.html +-- assets +-- environments | environment.prod.ts | environment.ts index.html main.ts polyfills.ts styles.scss test.ts Modules Les modules sont un groupements de pages similaires fonctionnellement. Ils servent au découpage de l’application en vue du Lazy-loading\nPages Les pages sont un groupements de composants dont l’organisation est calqué sur la navigation. A chaque page correspond une route au niveau du RoutingModule\nComposants Un composant est une unité atomique représentant un élément d’une page",
    "description": "src +-- app | +-- modules | | +-- home | | | +-- components | | | | +-- ... | | | +-- pages | | | | +-- ... | | | +-- home-store | | | | home.actions.ts | | | | home.reducers.ts | | | | home.effects.ts | | | | home.selectors.ts | | | | home.state.ts | | | | home-store.module.ts | | | home.routing.module.ts | | | home.module.ts | +-- core | | +-- core-store | | | +-- actions | | | | user.actions.ts | | | | index.ts | | | +-- reducers | | | | user.reducer.ts | | | | index.ts | | | +-- effects | | | | user.effects.ts | | | +-- selectors | | | | user.selectors.ts | | | core-store.module.ts | | +-- shell | | | +-- components | | | | +-- header | | | | | header.component.[ts|spec.ts|html|scss] | | | | +-- footer | | | | | footer.component.[ts|spec.ts|html|scss] | | | shell.module.ts | | | shell.component.[ts|spec.ts|html|scss] | | +-- authentication | | +-- services | | +-- ... | | core.module.ts | +-- shared | | +-- componentes | | +-- directives | | +-- pipes | | shared.module.ts | app.module.ts | app-routing.module.ts | app.component.ts | app.component.spec.ts | app.component.scss | app.component.html +-- assets +-- environments | environment.prod.ts | environment.ts index.html main.ts polyfills.ts styles.scss test.ts Modules Les modules sont un groupements de pages similaires fonctionnellement. Ils servent au découpage de l’application en vue du Lazy-loading",
    "tags": [
      "Angular"
    ],
    "title": "Organisation des fichiers",
    "uri": "/developpement/frontend/angular/files-organization/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e DevOps \u003e Kubernetes \u003e Ressources",
    "content": "Les Pods sont les plus petites unités informatiques déployables qui peuvent être créées et gérées dans Kubernetes.\nUn pod est un groupe d’un ou plusieurs conteneurs (comme des conteneurs Docker), ayant du stockage/réseau partagé, et une spécification sur la manière d’exécuter ces conteneurs.\nLes conteneurs d’un pod partagent une adresse IP et un espace de ports, et peuvent communiquer via localhost. Ils peuvent aussi communiquer entre eux en utilisant des communications inter-process standard comme les sémaphores SystemV ou la mémoire partagée POSIX.\nFichier de description apiVersion: v1 kind: Pod metadata: name: [podName] namespace: [namespace] labels: [label]: value spec: containers: - name: nginx image: nginx ports: - containerPort: 80 - name: debian image: debian command: [\"sleep\", \"600\"] Templates de pods Nous ne sommes pas sensés manipuler les pods directement mais à travers des contrôleurs, comme les deployments, les daemonsets, les statefulsets ou encore les jobs.\napiVersion: batch/v1 kind: Job metadata: name: hello spec: template: # This is the pod template spec: containers: - name: hello image: busybox:1.28 command: ['sh', '-c', 'echo \"Hello, Kubernetes!\" \u0026\u0026 sleep 3600'] restartPolicy: OnFailure # The pod template ends here",
    "description": "Les Pods sont les plus petites unités informatiques déployables qui peuvent être créées et gérées dans Kubernetes.\nUn pod est un groupe d’un ou plusieurs conteneurs (comme des conteneurs Docker), ayant du stockage/réseau partagé, et une spécification sur la manière d’exécuter ces conteneurs.\nLes conteneurs d’un pod partagent une adresse IP et un espace de ports, et peuvent communiquer via localhost. Ils peuvent aussi communiquer entre eux en utilisant des communications inter-process standard comme les sémaphores SystemV ou la mémoire partagée POSIX.",
    "tags": [
      "Kubernetes"
    ],
    "title": "Pods",
    "uri": "/devops/kubernetes/resources/pods/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Back-end \u003e Python",
    "content": "Classes Création et instanciation d’une classe Un classe se crée à l’aide du mot clé class puis s’instancie en utilisant directement son nom.\nclass MaClasse: ... object = MaClasse() Variables d’instance et constructeur Contrairement à d’autres langages, en Python, les attributs n’ont pas besoin d’être déclarés en avance. Ils peuvent simplement être définis au niveau du constructeur, lui-même définit avec la méthode __init__.\nclass MaClasse: def __init__(self, var1, var2 = \"value2\") self.var1 = var1 self.var2 = var2 object = MaClasse(var1 = \"value1\") Méthodes d’instance Les méthodes d’instance se définissent au sein de la classe comme des méthodes classiques et suivent les même conventions.\nInfo En Python, les méthodes d’instance incluent toujours en 1er paramètre l’instance de la classe, noté par convention self. Il n’y a pas de this “implicite”.\nclass MaClasse: def une_methode(self): \u003cinstructions\u003e object = MaClasse() object.une_methode() Il est possible d’appeler une autre méthode d’instance depuis une méthode à l’aide de self :\nclass MaClasse: def une_methode(self, var): \u003cinstructions\u003e def une_autre_methode(self): \u003cinstructions\u003e self.une_methode(var) \u003cinstructions\u003e Méthodes privées Python n’a pas de notion de scope et donc de méthodes ou d’attributs privés. Cependant, par convention les attributs et méthodes commençant par un underscore (_) sont considérés comme privés.\nclass MaClasse: def __init__(self): _attribut_prive = 1 def _methode_privee(self): \u003cinstructions\u003e",
    "description": "Classes Création et instanciation d’une classe Un classe se crée à l’aide du mot clé class puis s’instancie en utilisant directement son nom.\nclass MaClasse: ... object = MaClasse() Variables d’instance et constructeur Contrairement à d’autres langages, en Python, les attributs n’ont pas besoin d’être déclarés en avance. Ils peuvent simplement être définis au niveau du constructeur, lui-même définit avec la méthode __init__.\nclass MaClasse: def __init__(self, var1, var2 = \"value2\") self.var1 = var1 self.var2 = var2 object = MaClasse(var1 = \"value1\") Méthodes d’instance Les méthodes d’instance se définissent au sein de la classe comme des méthodes classiques et suivent les même conventions.",
    "tags": [
      "Python",
      "Poo"
    ],
    "title": "Programmation Orientée Objet",
    "uri": "/developpement/backend/python/poo/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Back-end \u003e Ruby",
    "content": "Classes Création et instanciation d’une classe Un classe se crée à l’aide du mot clé class puis s’instencie avec la méthode new.\nclass MaClasse ... end object = MaClasse.new puts object.inspect #\u003cMaClasse:id\u003e Variables d’instance et constructeur En Ruby, les variables d’instance sont symbolisées par un @ et sont définit directement au niveau du constructeur, lui-même définit avec la méthode initialize.\nclass MaClasse def initialize(var1, var2) @var1 = var1 @var2 = var2 end end Méthodes d’instance Les méthodes d’instance se définissent au sein de la classe comme des méthodes classiques et suivent les même conventions. (nommage, ? si renvoie booléen, ! si modifie l’objet…)\nclass MaClasse def une_methode \u003cinstructions\u003e end end object = MaClasse.new object.une_methode Il est possible d’appeler une autre méthode d’instance depuis une méthode comme on appellerait une fonction depuis l’exterieur de la classe. (Pas de this)\nclass MaClasse def une_methode(var) \u003cinstructions\u003e end def une_autre_methode \u003cinstructions\u003e une_methode(var) \u003cinstructions\u003e end end Setter et Getter Methode naïve class MaClasse def initialize(var) @var = var end def var() @var end def var=(var) @var = var end end object = MaClasse.new object.var = \"test\" puts object.var Utilisation de attr_accessor, attr_reader et attr_writer class MaClasse attr_accessor :var def initialize(var) @var = var end end object = MaClasse.new object.var = \"test\" puts object.var Ces 3 méthodes sont en fait des méthodes de classes qui permettent de créer les getter et setter qui est appelée statiquement à l’intérieur de la classe.\nMéthodes privées Les méthodes privées doivent être déclarées après le mot-clé private. Elles restent accessibles à l’intérieur de la classe.\nclass MaClasse private def une_methode(var) \u003cinstructions\u003e end end Méthodes et Variables de classe Méthodes de classe Les méthodes de classe ne sont pas rattachées à une instance de la classe et se déclarent avec le mot-clé self.\nclass MaClasse def self.methode_classe \u003cinstructions\u003e end end puts MaClasse.methode_classe Pour appeler une méthode de classe depuis une méthode d’instance, il faut utiliser self.class.\u003cnom_methode\u003e.\nclass MaClasse def self.methode_classe \u003cinstructions\u003e end def une_methode self.class.methode_classe end end Variables de classe Les variables de classe se déclarent avec @@. Dans les méthodes de classe ou d’instance, on accède toujours aux variables de classe directement.\nclass MaClasse @@variable_classe = 'test' def self.methode_classe \"#{@@variable_classe}\" end def une_methode \"#{@@variable_classe}\" end end puts MaClasse.methode_classe Ouverture des classes En Ruby, les classes restent toujours ouvertes, il est donc possible de les modifier après leur déclaration.\nSoit en créant une méthode de classe à l’exterieur de celle-ci :\nclass MaClasse def une_methode \u003cinstructions\u003e end end def MaClass.methode_classe \u003cinstructions\u003e end Soit en réutilisant la même déclaration :\nclass MaClasse def une_methode \u003cinstructions\u003e end end class MaClasse def self.methode_classe \u003cinstructions\u003e end end Il est ainsi possible de “modifier” les méthodes internes à Ruby comme les méthodes de la classe String par exemple…\nMéthodes “spéciales” et opérateurs methode class La méthode class, appelée sur un objet, renvoie le Class de cet objet.\ns = \"Ceci est un texte\" s.class # String \u003c et \u003e Il est possible d’implémenter les opérateurs de supériorité et d’infériorité sur des objets en définissant ces méthodes qui prennent chacune l’élément sur lequel s’applique la comparaison :\nclass MaClass def \u003c(elem) \u003cinstructions\u003e end end L’héritage L’héritage se fait en Ruby avec le symbole \u003c.\nclass BaseClass ... end class HeritedClass \u003c BaseClass ... end Ainsi, HeritedClass “hérite” de toutes les méthodes et tous les attributs de BaseClass. Et il est aussi possible d’en ajouter de nouveaux ou de les surcharger. Dans ce cas, la méthode parente est accessible via le mot-clé super.\nWarning En Ruby, super correspond bien à la méthode parente et non à l’objet parent. De plus, utiliser super appelle la méthode (par défaut, avec les même paramètres que la méthode surchargée).\nclass HeritedClass \u003c BaseClass def method(param) method_value = super # équivalent : method_value = super(param) other_method_value = super(other_param) ... end end Info De la même manière que la méthode class, appeler class.superclass donne des informations sur la classe de base. Si on remonte dans la hiérarchie, toutes les classe de base héritent de Object qui, elle-même, hérite de BaseObject.\nLes exceptions Lancement d’une exception En Ruby, une exception se lève avec la méthode raise.\ndef method raise if error # unhandled exception raise \"Il y a une erreur\" if error # RuntimeError avec message raise SpecificError \"Il y a une erreur\" if error # SpecificError avec message end Capture d’une exception Une exception peut être capturer entre un begin et un rescue (qui prend en paramètre le type d’exception qu’on veut capturer) :\nbegin method rescue SpecificError =\u003e e puts e.to_s end Execution de code même si erreur Le mot-clé ensure permet d’exécuter du code même si une exception a été capturée :\nbegin method rescue SpecificError =\u003e e puts e.to_s ensure \u003cinstructions\u003e end Créer une classe d’erreur class MonErreur \u003c RuntimeError def initialize(msg = \"Message par défaut\") super end end def method raise MonErreur if error end En général, on ne fait pas hériter les classes d’erreur de RuntimeError mais on crée une classe Error pour le module, qui hérite de RuntimeError, et ensuite les classes d’erreur héritent de cette Error. Cela permet de capturer en une seule fois toutes les erreurs possibles pour le module en question au niveau du rescue :\nmodule MonModule class Erreur \u003c RuntimeError end class PremiereErreur \u003c Erreur def initialize(msg = \"Message par défaut\") super end end class DeuxiemeErreur \u003c Erreur def initialize(msg = \"Message par défaut\") super end end def method raise PremiereErreur if error1 raise DeuxiemeErreur if error2 end end begin MonModule::method rescue MonModule::Erreur =\u003e e puts e.to_s end",
    "description": "Classes Création et instanciation d’une classe Un classe se crée à l’aide du mot clé class puis s’instencie avec la méthode new.\nclass MaClasse ... end object = MaClasse.new puts object.inspect #\u003cMaClasse:id\u003e Variables d’instance et constructeur En Ruby, les variables d’instance sont symbolisées par un @ et sont définit directement au niveau du constructeur, lui-même définit avec la méthode initialize.\nclass MaClasse def initialize(var1, var2) @var1 = var1 @var2 = var2 end end Méthodes d’instance Les méthodes d’instance se définissent au sein de la classe comme des méthodes classiques et suivent les même conventions. (nommage, ? si renvoie booléen, ! si modifie l’objet…)",
    "tags": [
      "Ruby",
      "Poo"
    ],
    "title": "Programmation Orientée Objet",
    "uri": "/developpement/backend/ruby/poo/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Back-end",
    "content": "Bases du langage Programmation Orientée Objet Data Science",
    "description": "Bases du langage Programmation Orientée Objet Data Science",
    "tags": [],
    "title": "Python",
    "uri": "/developpement/backend/python/index.html"
  },
  {
    "breadcrumb": "Ma documentation",
    "content": "Génération procédurale",
    "description": "Génération procédurale",
    "tags": [],
    "title": "Algorithmique",
    "uri": "/algorithmique/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e CSS - SCSS",
    "content": "Utiliser un PNG transparent au dessus de l’image (méthode traditionnelle). Définir le border-radius à la moitié (50%) de la dimension de l’image de manière à faire un cercle. Utiliser les propriétés CSS3 mask et mask-clip (démo). Utiliser un canvas en tant que masque. Utiliser un SVG en tant que masque avec l’image comme background-pattern. Utiliser la propriété CSS3 clip-path. Références https://stackoverflow.com/questions/8337570/best-way-to-mask-an-image-in-html5 https://bennettfeely.com/clippy/",
    "description": "Utiliser un PNG transparent au dessus de l’image (méthode traditionnelle). Définir le border-radius à la moitié (50%) de la dimension de l’image de manière à faire un cercle. Utiliser les propriétés CSS3 mask et mask-clip (démo). Utiliser un canvas en tant que masque. Utiliser un SVG en tant que masque avec l’image comme background-pattern. Utiliser la propriété CSS3 clip-path. Références https://stackoverflow.com/questions/8337570/best-way-to-mask-an-image-in-html5 https://bennettfeely.com/clippy/",
    "tags": [
      "Css"
    ],
    "title": "Appliquer un masque à une image",
    "uri": "/developpement/frontend/css-scss/image-mask/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Back-end \u003e Python",
    "content": "Numpy Matplotlib Scipy",
    "description": "Numpy Matplotlib Scipy",
    "tags": [],
    "title": "Data Science",
    "uri": "/developpement/backend/python/data-science/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e DevOps",
    "content": "Présentation Docker est un outil permettant de lancer des applications dans des environnements isolés appelés conteneurs.",
    "description": "Présentation Docker est un outil permettant de lancer des applications dans des environnements isolés appelés conteneurs.",
    "tags": [],
    "title": "Docker",
    "uri": "/devops/docker/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Back-end \u003e Ruby",
    "content": "Les modules Définition et création Il est possible de créer un module avec le mot-clé module.\nUn module fonctionne un peu comme une classe. À la différence qu’il ne peut ni être instancié ni hérité. Il peut en revanche contenir des constantes, des variables, des méthodes (toujours avec self) ou des classes.\nmodule MonModule MA_CONSTANTE = 1 def self.une_methode() ... end class MaClasse ... end end Inclusion de modules tiers Tous les modules ne sont pas inclus par defaut, il est possible d’inclure des modules tiers avec le mot-clé require.\nrequire 'date' Info L’inclusion avec le mot-clé require ne concerne que le gems installées globalement. Pour inclure un fichier dont le chemin est relatif au fichier courant, il faut utiliser le mot-clé require_relative.\nrequire_relative 'fichier_local' Namespaces Pour éviter les doublons de classes ou de méthodes, il est possible d’utiliser les modules comme des namespaces. Les classes et méthodes d’un module sont accessibles dans un autre module avec la syntaxe \u003cNomModule\u003e::. (Fonctionnement similaire aux namespaces C++)\nLe but des namespaces est de regrouper les classes liées à une même logique.\nMixins Le système de module permet aussi de faire de l’héritage “horizontal” car ils peuvent être inclus dans une class.\nmodule Feature def une_fonction_liee_a_la_feature ... end end class MaClasse include Feature ... end objet = MaClass.new puts objet.une_fonction_liee_a_la_feature Inclure un module dans une classe greffe automatiquement toutes les méthodes d’instance qui sont dans le module, au niveau de la classe.\nMéthode included Les modules ont tous une méthode de classe included. Si on la définit, cela permet de capturer à chaque fois qu’une module est inclus dans un sous-module ou dans une classe.\nmodule Feature def self.included(base) # base = classe dans laquelle le module est inclus puts base end end Il est ainsi possible de modifier la classe dynamiquement à l’inclusion d’un module :\nmodule Feature def self.included(base) # base = classe dans laquelle le module est inclus def base.une_nouvelle_methode ... end end end extend au lieu de include extend transfère les méthodes d’instance en méthode classe.\nmodule Feature def une_methode ... end end class MaClasse extend Feature ... end puts MaClass.une_methode extend peut aussi être appelé depuis une instance de classe :\nmodule Feature def une_methode ... end end class MaClasse ... end objet = MaClasse.new objet.extend(Feature) puts objet.une_methode Cela a pour effet de rajouter les méthodes du mixin dans l’instance, mais uniquement pour cette instance.\nDe la même manière que include a un hook included permettant de capturer quand un module est inclus dans une classe. Il existe un hook extended qui permet de capturer quand un module est étendu par une classe.",
    "description": "Les modules Définition et création Il est possible de créer un module avec le mot-clé module.\nUn module fonctionne un peu comme une classe. À la différence qu’il ne peut ni être instancié ni hérité. Il peut en revanche contenir des constantes, des variables, des méthodes (toujours avec self) ou des classes.\nmodule MonModule MA_CONSTANTE = 1 def self.une_methode() ... end class MaClasse ... end end Inclusion de modules tiers Tous les modules ne sont pas inclus par defaut, il est possible d’inclure des modules tiers avec le mot-clé require.",
    "tags": [
      "Ruby"
    ],
    "title": "Modules, namespaces et mixins",
    "uri": "/developpement/backend/ruby/modules/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Poste de travail",
    "content": "Distributions LazyVim AstroVim NvChad Plugins Plugins Manager lazy.nvim LSP (Language Server Protocol) Manager nvim-lspconfig Installer mason.nvim mason-lspconfig.nvim Autocompletion nvim-cmp cmp-nvim-lsp cmp-buffer cmp-path Syntax nvim-treesitter nvim-treesitter-textobjects nvim-treesitter-context Keybinding which-key.nvim Git gitsigns.nvim Themes tokyonight.nvim",
    "description": "Distributions LazyVim AstroVim NvChad Plugins Plugins Manager lazy.nvim LSP (Language Server Protocol) Manager nvim-lspconfig Installer mason.nvim mason-lspconfig.nvim Autocompletion nvim-cmp cmp-nvim-lsp cmp-buffer cmp-path Syntax nvim-treesitter nvim-treesitter-textobjects nvim-treesitter-context Keybinding which-key.nvim Git gitsigns.nvim Themes tokyonight.nvim",
    "tags": [
      "Workspace",
      "Nvim"
    ],
    "title": "NeoVim",
    "uri": "/workspace/neovim/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Poste de travail \u003e Linux",
    "content": "Paquets DNF Installer un nouveau paquet dnf install \u003cnom du paquet1\u003e \u003cnom du paquet2\u003e Supprimer un paquet dnf remove \u003cnom du paquet\u003e Supprimer un paquet et toutes ses dépendances non utilisées dnf autoremove \u003cnom du paquet\u003e Modules DNF Lister les paquets d’un module dnf module list \u003cnom du module\u003e Installer un paquet d’un module dnf module install \u003cnom du paquet\u003e Changer de version d’un module dnf module switch-to \u003cnom du paquet\u003e Reset d’un module dnf module reset \u003cnom du module\u003e Ressources https://doc.fedora-fr.org/wiki/DNF,_le_gestionnaire_de_paquets_de_Fedora#Supprimer_un_paquet https://www.linuxtricks.fr/wiki/utilisation-de-dnf-commandes-de-base https://www.linuxtricks.fr/wiki/utilisation-de-dnf-les-modules https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_software_with_the_dnf_tool/assembly_managing-versions-of-application-stream-content_managing-software-with-the-dnf-tool",
    "description": "Paquets DNF Installer un nouveau paquet dnf install \u003cnom du paquet1\u003e \u003cnom du paquet2\u003e Supprimer un paquet dnf remove \u003cnom du paquet\u003e Supprimer un paquet et toutes ses dépendances non utilisées dnf autoremove \u003cnom du paquet\u003e Modules DNF Lister les paquets d’un module dnf module list \u003cnom du module\u003e Installer un paquet d’un module dnf module install \u003cnom du paquet\u003e Changer de version d’un module dnf module switch-to \u003cnom du paquet\u003e Reset d’un module dnf module reset \u003cnom du module\u003e Ressources https://doc.fedora-fr.org/wiki/DNF,_le_gestionnaire_de_paquets_de_Fedora#Supprimer_un_paquet https://www.linuxtricks.fr/wiki/utilisation-de-dnf-commandes-de-base https://www.linuxtricks.fr/wiki/utilisation-de-dnf-les-modules https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_software_with_the_dnf_tool/assembly_managing-versions-of-application-stream-content_managing-software-with-the-dnf-tool",
    "tags": [
      "Workspace",
      "Linux",
      "Redhat"
    ],
    "title": "RedHat",
    "uri": "/workspace/linux/redhat/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e DevOps \u003e Kubernetes",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Ressources: Limits et Requests",
    "uri": "/devops/kubernetes/limits-requests/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Back-end",
    "content": "Bases du langage Programmation Orientée Objet Modules, namespaces et mixins",
    "description": "Bases du langage Programmation Orientée Objet Modules, namespaces et mixins",
    "tags": [],
    "title": "Ruby",
    "uri": "/developpement/backend/ruby/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Back-end \u003e Python \u003e Data Science",
    "content": "Présentation de SciPy Différences entre NumPy et SciPy NumPy est une bibliothèque qui implémente, entre autres, les fonctionnalités présentées dans l’article précédent. Historiquement, elle est la bibliothèque de référence pour ce genre de problématiques. Elle a pour vocation à rester dans ce domaine précis et elle assure une compatibilité ascendante pour permettre à ses utilisateurs une certaine stabilité.\nLe coeur du module NumPy est le tableau multidimensionnel et les fonctionnalités basiques qui lui sont liées, telles que l’indexation, le tri, ou encore le modelage des données, par exemple. Cependant, elle contient aussi les composants d’algèbre linéaire qui devraient plutôt appartenir à SciPy. Pour faire simple, toutes les nouvelles fonctionnalités se retrouvent dans SciPy, alors que les fonctionnalités stables et qui ont vocation à l’être sont dans NumPy.\nConcrètement, SciPy est, comme on le disait en introduction, un meta-projet qui réunit plusieurs autres bibliothèques de calcul scientifique. Dans le fichier d’initialisation du module SciPy, on trouve tout simplement ceci :\nfrom numpy import * Autrement dit, toutes les fonctionnalités de NumPy sont intégrées à SciPy. Mais ce n’est en réalité pas aussi simple. Parce qu’apres cette instruction, on trouve d’autres importations dont certaines vont écraser l’une ou l’autre des fonctionnalités de NumPy, les remplaçants par de nouvelles qui sont des améliorations de celles de NumPy. Par exemple, on peut trouver un peu plus loin :\nfrom numpy.lib.scimath import * Cet import écrase certaines fonctionnalités de base de NumPy telles que log10, par exemple.\nimport inspect import scipy as sp from scipy.stats._continuous_distns import johnsonsb, johnsonsu, cauchy from numpy.random.mtrand import pareto from scipy.weave.inline_tools import inline inspect.getfile(sp.log10) D’autre part, on peut trouver des fonctions qui, à première vue, font doublon, mais qui sont en réalité différentes :\nimport numpy as np import scipy as sp np.sqrt(-1) sp.sqrt(-1) np.log(-1) sp.log(-1) Cet exemple montre que NumPy travaille sur des réels, alors que SciPy peut travailler avec les nombres complexes.\nParfois, la signature de la fonction est modifiée, ce qui brise la compatibilité ascendante. Par exemple, NumPy a une fonction numpy.fft.fft2(a, s=None, axes=(-2, -1)), tandis que SciPy a une fonction scipy.fft.fft2(x, shape=None, axes=(-2, -1), overwrite_x=0). Voici comment le verifier :\nfrom numpy.fft import fft2 as np_fft2 from scipy.fftpack import fft2 as sp_fft2 help(np_fft2) help(sp_fft2) D’une manière générale, les deux bibliothèques sont utiles. Si vous n’utilisez que des tableaux multidimensionnels, vous pouvez n’utiliser que NumPy. Si vous utilisez l’algèbre linéaire, les deux bibliothèques vous seront utiles suivant votre besoin. Par rapport à ce qui a été présenté dans l’article sur NumPy, vous trouverez dans la documentation des variantes qui utilisent des fonctions spécifiques de SciPy, comme pour trouver l’inverse d’une matrice, par exemple. Ceci dit, les differences restent minimes.\nPar contre, SciPy dispose également de nombreux autres modules et nous allons des maintenant en présenter une selection.\nBibliothèques externes de SciPy SciPy peut être vu comme un assemblage de diverses fonctionnalités au sein d’un seul projet, lequel est destiné a être une grande boîte à outils permettant de toucher à tout et d’utiliser ce qui se fait de mieux dans divers domaines.\nAinsi, outre NumPy, SciPy intègre un grand nombre d’autres projets. Une bonne partie des fonctionnalités de SciPy sont une intégration de bibliothèques de références écrites en FORTRAN, ce langage ayant été (et étant toujours dans une certaine mesure) une référence dans le calcul scientifique.\nSciPy dispose d’un module particulier, nomme lib, qui intègre l’ensemble des connecteurs vers des bibliothèques externes, parmi lesquels lib.lapack, qui est un connecteur a la bibliothèque LAPACK (Linear Algebra PACKage, écrite en FORTRAN, http://www.netlib.org/lapack/) et lib.blas, qui est un connecteur vers la bibliothèque BLAS (Basic Linear Algebra Subprograms, http://www.netlib.org/blas/).\nCertains autres modules, comme scipy.odr que l’on présentera plus loin, utilisent également des bibliothèques FORTRAN.\nMigrer vers SciPy De la meme manière que SciPy utilise des bibliothèques FORTRAN, vous avez aussi la possibilité d’importer vos propres fichiers réalisés avec ce langage. La bibliothèque scipy.io permet de charger des fichiers FORTRAN à l’aide de la classe FortranFile. Ceci vous permet de migrer de FORTRAN vers SciPy et d’éviter ainsi d’avoir à repartir de zéro.\nD’autre part, SciPy offre des possibilités intéressantes pour ceux qui utilisaient auparavant MATLAB. De manière à faciliter la migration vers SciPy, il permet de traiter des fichiers .mat, toujours à l’aide de la bibliothèque scipy.io et plus particulièrement des fonctions suivantes :\nloadmat (permet de charger un fichier .mat); savemat (permet de sauvegarder des donnees dans un fichier .mat); whosmat (permet de lister les variables d’un fichier .mat). On peut donc passer de MATLAB à SciPy sans avoir à réécrire tout le code que l’on avait produit auparavant, ce qui facilite grandement la transition.\nSciPy peut également traiter des fichiers générés avec Matrix Market (http://math.nist.gov/MatrixMarket/) à l’aide des fonctions mmread, mmwrite et mminfos permettant respectivement de lire, écrire et obtenir des informations sur ces fichiers.\nIl peut aussi traiter des fichiers IDL. IDL est un langage apparu dans les années 1990, a une époque de transition et destine a un public non informaticien qui devait traiter des donnees d’une manière simple, lisible et efficace, soit exactement le meme positionnement que SciPy aujourd’hui. La difference reside dans le coût élevé de la licence IDL, et le fait que ce langage n’ait pas su se moderniser depuis.\nToujours est-il que dans le but de permettre de réutiliser le travail réalisé en IDL, SciPy offre une fonction readsav permettant de lire les fichiers .sav, générés par IDL.\nOn notera également la possibilité de traiter des fichiers audio au format WAV (en lecture et en écriture, ce qui est utile pour analyser ou générer des sons a partir d’un tableau multidimensionnel NumPy), les fichiers ARFF (Attribute-Relation File Format), qui est un format NetCDF, qui permettent de partager des données stockées sous la forme de tableaux.\nModules usuels Une des fonctionnalités essentielles de SciPy est l’algèbre linéaire. Le module de base est linalg (Linear algebra routines). Il serait redondant de le presenter ici, puisque l’essentiel a ete vu dans l’article sur NumPy. On peut également citer le module sparse permettant de traiter spécifiquement des matrices creuses (des matrices avec tout plein de zeros dedans, http://fr.wikipedia.org/wiki/Matrice_creuse). Ce dernier dispose de nombreux sous-modules :\nsparse.linalg : algèbre linéaire dédié aux matrices creuses; sparse.linalg.dsolve : resolution d’equations représentées par une matrice creuse; sparse.linalg.eigen : resolution d’equations linéaires utilisant les valeurs propres; sparse.linalg.eigen.lobpcg : méthode du gradient conjugue (Locally Optimal Block Preconditioned Conjugate Gradient Method) sparse.linalg.eigen.arpack : recherche de la valeur propre par l’utilisation de méthodes itératives On peut également citer trois autres grands modules, qui ne seront pas présentés en details dans cet article. Il s’agit du module scipy.spatial permettant de manipuler des structures de donnees spéciales et qui contient l’implementation d’algorithmes lies a ce domaine scientifique, ainsi que du module scipy.signal qui permet de gérer tous les aspects du traitement de signaux. Enfin, il existe un dernier module intéressant qui est scipy.ndimage et qui permet de gérer des images multidimensionnelles.\nStatistiques Le module scipy.stats est un ensemble conséquent de fonctions statistiques (Bradford, Burr, Cauchy, Pareto, Gamma, Johnson, …). On peut ainsi calculer une loi de fiabilité, une loi normale, une loi log-normale, une loi exponentielle (ou plus généralement, une loi de Waibull), entre autres.\nChacune de ces lois se base sur une fonction de densité de probabilité (pdf: probability density function). Pour Cauchy, par exemple, il s’agit de :\n$$cauchy.pdf(x) = \\frac{1}{\\pi (1 + x^2)}$$ On peut également citer d’autres exemples :\n$$johnsonsb.pdf(x;a,b) = \\frac{b}{x (1 - x)} \\phi (a + b \\log{\\frac{x}{1 - x}})$$ Avec les conditions suivantes : $0 \u003c x \u003c 1, a \u003e 0, b \u003e 0, \\phi$ étant la fonction normale de densité.\n$$johnsonsu.pdf(x;a,b) = \\frac{b}{\\sqrt{x^2 + 1}} \\phi (a + b \\log{(x + \\sqrt{x^2 + 1})})$$ Avec les conditions suivantes : $x \u003e 0, a \u003e 0, b \u003e 0, phi$ étant la fonction normale de densité.\n$$burr.pdf(x;c,d) = \\frac{cd}{x^{c+1} (1 + x^{-c})^{d+1}}$$ Avec la condition suivante : $x \u003e 0$.\n$$bradford.pdf(x;c) = \\frac{c}{k(1 + cx)}$$ Avec les conditions suivantes : $0 \u003c x \u003c 1, c \u003e 0, k = \\log{1 + c}$\n$$pareto.pdf(x;b) = \\frac{b}{x^{b + 1}}$$ Avec les conditions suivantes : $x \\ge 1, b \\gt 0$\nToutes ces fonctions se basent sur une variable aléatoire notée rv (random variable). Voici un exemple d’illustration pour la fonction de Cauchy\nfrom scipy.stats import cauchy rv = cauchy() rv On peut obtenir une distribution ainsi : rv.dist.\nGrace à cet objet, on peut créer un graphique :\nfrom numpy import linspace x = np.linspace(-10, 10, 101) import matplotlib.pyplot as plt f = plt.plot(x, rv.pdf(x)) L’exemple restera similaire avec les autres méthodes.\nPour la création du linspace, on peut utiliser des gardes-fous permettant de s’assurer que l’on reste dans les limites de définition de la fonction x = linspace(np.maximum(rv.dist.a, -10), np.minimum(rv.dist.b, 10), 101).\nAinsi, rv.dist.a est le minimum de la distribution, tandis que rv.dist.b en est le maximum. Dans notre cas, il s’agit des infinis.\nVoici le graphique obtenu en réalisant ce code a l’aide de IPython Notebook, en le lançant avec la commande suivante :\nipython3 notebook --pylab inline On peut également afficher le graphique cumulatif, en utilisant la fonction cdf (cumulative distribution function), en procédant ainsi :\nplt.plot(x, cauchy.cdf(x)) Citons également deux autres fonctions qui peuvent trouver leur utilité :\nplt.plot(x, rv.logpdf(x)) plt.plot(x, rv.logcdf(x)) Enfin, pour terminer, voici comment obtenir l’intervalle qui regroupe un pourcentage donne de la distribution :\ncauchy.interval(.01) cauchy.interval(.20) cauchy.interval(.50) cauchy.interval(.80) cauchy.interval(.99) Interpolation et regression linéaire Lorsque l’on réalise des mesures, on obtient des points que l’on est capable de placer sur un graphique. L’objectif de l’interpolation est de relier tous les points de cette courbe. Pour réaliser cette tache, nous disposons d’un module scipy.interpolate\nPour les besoins de ce chapitre, nous allons utiliser une simple fonction cosinus, de manière à ne pas complexifier inutilement la demonstration et aller à l’essentiel qui est non pas l’etude d’une fonction, mais comment utiliser les outils de SciPy.\nOn va donc commencer par créer un échantillon de données pour les besoins de tout le chapitre. On va partir de la fonction théorique cosinus, puis on va ajouter des interferences a l’aide de randn pour simuler un bruit dans la mesure.\nfrom numpy import arange, cos, pi, random, array x = arange(0, 2\\*pi, pi/4) y_true = cos(x) y_noise = random.randn(len(x)) / 2 y_measure = y_true + y_noise On vient ainsi d’obtenir y_measure, qui est la simulation d’une mesure réelle effectuée à l’aide d’instruments et sur laquelle nous allons pouvoir travailler a partir de maintenant. Vous aurez noté, au passage, la faible résolution de notre échantillon (uniquement 9 points).\nNous allons présenter la manière de réaliser une interpolation entre ces points, c’est-à-dire de les relier. La manière par défaut est de les relier de manière linéaire. Voici un exemple :\nfrom scipy.interpolate import interp1d f1 = interp1d(x, y_measure) f2 = interp1d(x, y_measure, kind='cubic') xnew = arange(0, 11/6\\*pi, pi/12) plt.plot(x, y_measure, 'o', xnew, f1(xnew), '-', xnew, f2(xnew), '--') plt.legend(['data', 'linear', 'cubic'], loc='best') Le résultat ici n’a rien a voir avec la réalité de la fonction cosinus, mais attention, ceci n’est pas l’objectif de l’interpolation ! Si l’on veut faire ceci, il faut faut plutôt utiliser des méthodes de regression linéaire.\nL’objectif de la regression linéaire est de décrire la courbe representee par les points obtenus d’une mesure (ici y_measure) à l’aide d’une fonction linéaire qui soit la plus proche possible de chaque point, sans forcement passer par ces derniers. Pour cela, il s’agit de determiner la meilleure approximation de fonction possible et plusieurs méthodes existent.\nUne des méthodes les plus communes est la méthode des moindres carres (least squares). Elle se trouve, avec d’autres telles que la méthode de Nelder-Mead ou l’algorithme BFGS (Broyden-Fletcher-Goldfarb-Shanno), dans le module scipy.optimize. C’est celle que nous allons presenter ici.\nVoici un exemple d’utilisation de cette fonction, laquelle nous permet d’obtenir une courbe relativement moins precise (cela est d’autant plus evident que l’on a moins de points)\nfrom scipy.optimize import leastsq def residuals(p, y, x): err = y - cos(p[0] \\* x + p[1]) return err def peval(x, p): return cos(p[0] \\* x + p[1]) p0 = [1, 0] plsq = leastsq(residuals, p0, args=(y_measure, x)) plsq[0] Il ne reste plus qu’a dessiner le graphique ainsi obtenu, ainsi que les points de la mesure et le graphique théorique, afin de visualiser la difference\nplt.plot(x, peval(x, plsq[0]), '\\*', x, y_measure, 'o', x, y_true) plt.title('Illustration de la méthode des moindres carrés') plt.legend(['Ajuste', 'Mesure', 'Théorique']) Il est nécessaire de preciser ici que les differences entre la courbe ajustée à l’aide des moindres carrés et la courbe théorique est ici tres visible parce que l’échantillon de données est tres faible. Avec un échantillon de données plus grand, donc une mesure plus precise, les erreurs introduites ici aléatoirement se compenseraient mieux et les deux courbes seraient alors logiquement beaucoup plus proches. Vous pourrez tester avec ceci :\nx = arange(0, 2*pi, pi/16) Il existe également un module scipy.odr (Orthogonal Distance Regression), qui offre une alternative à la méthode des moindres carrés ordinaire.\nPour commencer, il faut choisir selon quel modèle on veut réaliser notre approximation.\nDans notre exemple, on choisit un polynôme de troisième degré :\nfrom scipy.odr import models func = models.polynomial(3) Ensuite, il faut charger les donnees de base et utiliser le module scipy.odr ainsi :\nfrom scipy.odr import odrpack as odr mydata = odr.Data(x, y_measure) myodr = odr.ODR(mydata, func, maxit=250) myodr.set_job(fit_type=2) fit = myodr.run() Cet objet fit contient l’approximation désirée (ainsi que des donnees sur les marges d’erreur). Il ne nous reste plus qu’à construire le polynôme à l’aide de la fonction poly1d présentée dans l’article sur NumPy, et le dessiner :\nf = np.poly1d(fit.beta[::-1]) plt.plot(x, y_measure, 'o', x, f(x), '-') plt.legend(['data', 'ord'], loc='best') Pour cet exemple-la comme pour les précédents, l’approximation est meilleure avec un échantillonnage plus élevé.\nConclusion La souplesse du langage Python, sa lisibilité, sa facilite d’apprentissage, le fait qu’il soit un langage pérenne, qui continue d’évoluer (et d’évoluer dans le bon sens), en font un choix efficace et surtout sûr. Grace a cela, les scientifiques qui ne sont pas forcement des spécialistes de la programmation, et n’ont pas vocation à l’être, peuvent apprendre Python l’esprit tranquille, en sachant que cet apprentissage ne sera pas perdu et qu’il ne sera pas nécessaire d’en apprendre un autre dans 10 ans.\nComme on l’a vu dans cet article, SciPy est réellement une bibliothèque gigantesque et dispose de ce que tout scientifique a besoin. Elle est également largement extensible. Elle respecte la philosophie de Python, en particulier en réutilisant intelligemment des modules écrits en FORTRAN au lieu de les réécrire, par exemple, profitant ainsi de l’énorme experience acquise ailleurs et en la capitalisant.\nElle offre également tous les outils nécessaires pour que celui qui utilise deja MATLAB ou un autre outil de calcul scientifique puisse passer sous SciPy sans avoir a payer un coût de migration exorbitant.\nL’ensemble fait que SciPy est réellement la bibliothèque de référence pour le calcul scientifique, en partenariat avec NumPy et Matplotlib.",
    "description": "Présentation de SciPy Différences entre NumPy et SciPy NumPy est une bibliothèque qui implémente, entre autres, les fonctionnalités présentées dans l’article précédent. Historiquement, elle est la bibliothèque de référence pour ce genre de problématiques. Elle a pour vocation à rester dans ce domaine précis et elle assure une compatibilité ascendante pour permettre à ses utilisateurs une certaine stabilité.\nLe coeur du module NumPy est le tableau multidimensionnel et les fonctionnalités basiques qui lui sont liées, telles que l’indexation, le tri, ou encore le modelage des données, par exemple. Cependant, elle contient aussi les composants d’algèbre linéaire qui devraient plutôt appartenir à SciPy. Pour faire simple, toutes les nouvelles fonctionnalités se retrouvent dans SciPy, alors que les fonctionnalités stables et qui ont vocation à l’être sont dans NumPy.",
    "tags": [
      "Python",
      "Data Science"
    ],
    "title": "Scipy",
    "uri": "/developpement/backend/python/data-science/scipy/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e Angular \u003e Gestion de l'état",
    "content": "Références https://state-adapt.github.io/angular https://github.com/state-adapt/state-adapt",
    "description": "Références https://state-adapt.github.io/angular https://github.com/state-adapt/state-adapt",
    "tags": [
      "Angular",
      "Redux",
      "State Management"
    ],
    "title": "StateAdapt",
    "uri": "/developpement/frontend/angular/state_management/state-adapt/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e Angular",
    "content": "Vues en Angular En Angular, une vue (View) est le plus petit groupe d’éléments qui sont créés et détruits ensemble et dont le rendu est défini par une ou plusieurs directives. La philosophie d’Angular encourage les dévelopeurs à voir l’application comme une composition de vues, et non un assemblage d’éléments HTML.\nUne vue est définie par une classe Component et son template associé. Elle est représentée par une instance de ViewRef associée à un composant. Une vue qui est directement issue d’un composant est appelée HostView. Une hiérarchie de vues est ainsi établie.\nLes propriétés des éléments d’une vue peuvent être modifiées dynamiquement (suite à une action utilisateur par exemple). Cependant la structure (leur nombre et leur ordre) des éléments d’une vue ne peut pas changer. Il est possible de modifier la structure des éléments en insérant, déplaçant ou supprimant des vues imbriquées à l’intérieur de conteneurs de vues spécifiques.\nLes hiérarchies de vues sont chargées et déchargées dynamiquement en naviguant dans l’application, sous le contrôle du routeur.\nHiérarchie de vues L’assemblage de vues associées défini une arborescence sur lesquelles il est possible d’agir. La vue racine est référencée en tant que host view d’un composant. Une host view est la racine d’une arborescence de embedded views, collecté dans un conteneur de vue ViewContainerRef attaché à un élément d’ancrage dans le composant hôte. La hiérarchie des vues est un élément clé de la détection des changements en Angular.\nL’arborescence de vues n’implique pas d’arborescence de composants. Les embedded views dans le contexte d’une arborescence particulière peuvent être des host views d’autres composants. Ces composants peuvent être dans le même NgModule que le composant hôte, ou appartenir à d’autres NgModules.\nViewRef ViewRef est une classe abstraite représentant une vue Angular. Angular supporte 2 types de vues :\nles EmbeddedView qui sont liées à un Template les HostView qui sont liées à un Component Références https://indepth.dev/posts/1052/exploring-angular-dom-manipulation-techniques-using-viewcontainerref https://indepth.dev/posts/1134/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques",
    "description": "Vues en Angular En Angular, une vue (View) est le plus petit groupe d’éléments qui sont créés et détruits ensemble et dont le rendu est défini par une ou plusieurs directives. La philosophie d’Angular encourage les dévelopeurs à voir l’application comme une composition de vues, et non un assemblage d’éléments HTML.\nUne vue est définie par une classe Component et son template associé. Elle est représentée par une instance de ViewRef associée à un composant. Une vue qui est directement issue d’un composant est appelée HostView. Une hiérarchie de vues est ainsi établie.",
    "tags": [
      "Angular",
      "Dom",
      "View"
    ],
    "title": "Vues et manipulations du DOM",
    "uri": "/developpement/frontend/angular/dom_manipulation/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e CSS - SCSS",
    "content": "Élément en position absolue \u003chtml\u003e \u003cbody\u003e \u003cdiv class=\"overlay\"\u003e\u003c/div\u003e \u003cbody\u003e \u003chtml\u003e html, body { min-height: 100%; } body { position: relative; } .overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; background-color: rgba(0,0,0,0.5); /*dim the background*/ } Élément avec une position fixe Utilisation d’un pseudo élément Appliquer un grand contour à une modale Appliquer une grande ombre à une modale Utilisation de l’élément HTML \u003cdialog\u003e Références https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/",
    "description": "Élément en position absolue \u003chtml\u003e \u003cbody\u003e \u003cdiv class=\"overlay\"\u003e\u003c/div\u003e \u003cbody\u003e \u003chtml\u003e html, body { min-height: 100%; } body { position: relative; } .overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; background-color: rgba(0,0,0,0.5); /*dim the background*/ } Élément avec une position fixe Utilisation d’un pseudo élément Appliquer un grand contour à une modale Appliquer une grande ombre à une modale Utilisation de l’élément HTML \u003cdialog\u003e Références https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/",
    "tags": [
      "Css",
      "Overlay"
    ],
    "title": "CSS Overlay Techniques",
    "uri": "/developpement/frontend/css-scss/overlay-techniques/index.html"
  },
  {
    "breadcrumb": "Ma documentation",
    "content": "Back-end Java Maven Python Bases du langage Programmation Orientée Objet Data Science Ruby Bases du langage Programmation Orientée Objet Modules, namespaces et mixins Front-end Angular Mise en place d'un projet Organisation des fichiers Vues et manipulations du DOM Injection de dépendances Gestion de l'état Migration de Karma vers Jest Librairies à points d'entrée multiples Angular sans CLI CSS - SCSS CSS Reset Block Margin Issue Appliquer un masque à une image CSS Overlay Techniques Faire de belles ombres en CSS",
    "description": "Back-end Java Maven Python Bases du langage Programmation Orientée Objet Data Science Ruby Bases du langage Programmation Orientée Objet Modules, namespaces et mixins Front-end Angular Mise en place d'un projet Organisation des fichiers Vues et manipulations du DOM Injection de dépendances Gestion de l'état Migration de Karma vers Jest Librairies à points d'entrée multiples Angular sans CLI CSS - SCSS CSS Reset Block Margin Issue Appliquer un masque à une image CSS Overlay Techniques Faire de belles ombres en CSS",
    "tags": [],
    "title": "Développement",
    "uri": "/developpement/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e Angular",
    "content": "En Angular, les dépendances sont principalement des services, mais elles peuvent aussi être des valeurs telles que des string ou des fonctions.\nUn Injector global à l’application est créé automatiquement au bootstrap et est en charge d’instancier les dépendances lorsqu’elles sont utilisées en utilisant un provider pour le service ou la valeur.\nInjection context Multiple providers Références https://angular.io/guide/dependency-injection-overview",
    "description": "En Angular, les dépendances sont principalement des services, mais elles peuvent aussi être des valeurs telles que des string ou des fonctions.\nUn Injector global à l’application est créé automatiquement au bootstrap et est en charge d’instancier les dépendances lorsqu’elles sont utilisées en utilisant un provider pour le service ou la valeur.\nInjection context Multiple providers Références https://angular.io/guide/dependency-injection-overview",
    "tags": [],
    "title": "Injection de dépendances",
    "uri": "/developpement/frontend/angular/dependency_injection/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e DevOps \u003e Kubernetes",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Les volumes",
    "uri": "/devops/kubernetes/volumes/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Poste de travail",
    "content": "Installation d'un serveur Ubuntu Commandes utiles RedHat",
    "description": "Installation d'un serveur Ubuntu Commandes utiles RedHat",
    "tags": [],
    "title": "Linux",
    "uri": "/workspace/linux/index.html"
  },
  {
    "breadcrumb": "Ma documentation",
    "content": "CI/CD Kubernetes Labels et Annotations Healthchecks: Liveness et Readiness Ressources: Limits et Requests Les volumes Ressources Outils Jenkins Docker",
    "description": "CI/CD Kubernetes Labels et Annotations Healthchecks: Liveness et Readiness Ressources: Limits et Requests Les volumes Ressources Outils Jenkins Docker",
    "tags": [],
    "title": "DevOps",
    "uri": "/devops/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e CSS - SCSS",
    "content": "Références https://www.joshwcomeau.com/css/designing-shadows/",
    "description": "Références https://www.joshwcomeau.com/css/designing-shadows/",
    "tags": [
      "Css"
    ],
    "title": "Faire de belles ombres en CSS",
    "uri": "/developpement/frontend/css-scss/shadows/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e Angular",
    "content": "NgRx NgXs StateAdapt",
    "description": "NgRx NgXs StateAdapt",
    "tags": [],
    "title": "Gestion de l'état",
    "uri": "/developpement/frontend/angular/state_management/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e DevOps \u003e Kubernetes",
    "content": "Contextes et Namespaces Pods",
    "description": "Contextes et Namespaces Pods",
    "tags": [
      "Kubernetes"
    ],
    "title": "Ressources",
    "uri": "/devops/kubernetes/resources/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Poste de travail",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Windows",
    "uri": "/workspace/windows/index.html"
  },
  {
    "breadcrumb": "Ma documentation",
    "content": "Design systems et librairies graphiques Figma Raccourcis clavier",
    "description": "Design systems et librairies graphiques Figma Raccourcis clavier",
    "tags": [],
    "title": "Design",
    "uri": "/design/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e Angular",
    "content": "Angular est fourni par défaut avec Karma. Il est cependant très simple de passer de Karma à Jest.\nSupprimer Karma Commencer par supprimer les fichiers src/karma.conf.js et src/test.ts.\nPuis dans le fichier package.json, supprimer les dépendances suivantes dans devDependencies:\n\"karma\": \"*\", \"karma-chrome-launcher\": \"*\", \"karma-coverage-istanbul-reporter\": \"*\", \"karma-jasmine\": \"*\", \"karma-jasmine-html-reporter\": \"*\", Installer Jest Installer Jest dans le projet à l’aide de la commande suivante :\nnpm i -D jest @types/jest ts-jest @angular-builders/jest Ajouter un fichier nommé jest.config.js dans le même dossier que package.json\n/** jest.config.js */ module.exports = { collectCoverageFrom: [ '\u003crootDir\u003e/src/app/**/*.ts', '!\u003crootDir\u003e/src/app/**/index.ts', '!\u003crootDir\u003e/src/app/**/*.module.ts' ], coverageDirectory: 'coverage', coverageReporters: [ 'lcov', 'text-summary' ], testPathIgnorePatterns: [ '\u003crootDir\u003e/coverage/', '\u003crootDir\u003e/dist/', '\u003crootDir\u003e/e2e/', '\u003crootDir\u003e/node_modules/', '\u003crootDir\u003e/src/app/*.(js|scss)' ], testMatch: [ '\u003crootDir\u003e/src/app/*.spec.ts', '\u003crootDir\u003e/src/app/**/*.spec.ts' ] }; Puis dans le fichier src/tsconfig.spec.json:\nRemplcez “jasmine” et “node” par “jest” dans la liste types Ajouter \"module\": \"commonjs\" aux compilerOptions Supprimer “test.js” de la liste files Le fichier src/tsconfig.spec.json doit maintenant ressembler à ça:\n{ \"extends\": \"./tsconfig.json\", \"compilerOptions\": { \"module\": \"commonjs\", \"outDir\": \"./out-tsc/spec\", \"types\": [ \"jest\" ], }, \"files\": [ \"polyfills.ts\" ], \"include\": [ \"**/*.spec.ts\", \"**/*.d.ts\" ] } Dans src/tsconfig.app.json supprimer “test.ts” de la liste exclude.\nEt pour finir, modifier le fichier angular.json. Changer la section projects[your-project].architect.test de manière à ce quelle ressemble à cela:\n\"test\": { \"builder\": \"@angular-builders/jest:run\", \"options\": {} }, À la suite des ces changements, il peut être nécessaire de supprimer le dossier node_modules et de lancer un npm install à nouveau.\nIl devrait maintenant être possible de lancer les tests avec la commande npm test.\nIl est aussi possible d’ajouter un script au package.json pour lancer la suite de tests directement avec la couverture de code.\n... \"scripts\": { ... \"test:cov\": \"ng test --coverage\" }, ... Et lancer le avec la commande npm run test:cov.\nLe rapport de couverture de code doit être présent dans le dossier coverage à la racine du projet.\nRéférences https://medium.com/angular-in-depth/migrate-your-angular-library-to-jest-faba9579591a https://dev.to/this-is-angular/migrate-from-jasmine-to-jest-and-testing-in-angular-286i",
    "description": "Angular est fourni par défaut avec Karma. Il est cependant très simple de passer de Karma à Jest.\nSupprimer Karma Commencer par supprimer les fichiers src/karma.conf.js et src/test.ts.\nPuis dans le fichier package.json, supprimer les dépendances suivantes dans devDependencies:\n\"karma\": \"*\", \"karma-chrome-launcher\": \"*\", \"karma-coverage-istanbul-reporter\": \"*\", \"karma-jasmine\": \"*\", \"karma-jasmine-html-reporter\": \"*\", Installer Jest Installer Jest dans le projet à l’aide de la commande suivante :\nnpm i -D jest @types/jest ts-jest @angular-builders/jest Ajouter un fichier nommé jest.config.js dans le même dossier que package.json",
    "tags": [
      "Tests Unitaires",
      "Jest",
      "Angular"
    ],
    "title": "Migration de Karma vers Jest",
    "uri": "/developpement/frontend/angular/karma2jest/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e DevOps \u003e Kubernetes",
    "content": "Helm",
    "description": "Helm",
    "tags": [
      "Kubernetes"
    ],
    "title": "Outils",
    "uri": "/devops/kubernetes/tools/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e Angular",
    "content": "Points d’entrée multiples Références https://sandroroth.com/blog/angular-library",
    "description": "Points d’entrée multiples Références https://sandroroth.com/blog/angular-library",
    "tags": [
      "Angular"
    ],
    "title": "Librairies à points d'entrée multiples",
    "uri": "/developpement/frontend/angular/multi-entrypoints/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Développement \u003e Front-end \u003e Angular",
    "content": "Références https://prog.world/angular-without-cli-tutorial/",
    "description": "Références https://prog.world/angular-without-cli-tutorial/",
    "tags": [
      "Angular"
    ],
    "title": "Angular sans CLI",
    "uri": "/developpement/frontend/angular/without-cli/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Algorithmique",
    "uri": "/tags/algorithmique/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Angular",
    "uri": "/tags/angular/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Architecture-as-Code",
    "uri": "/tags/architecture-as-code/index.html"
  },
  {
    "breadcrumb": "Ma documentation",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Ci/Cd",
    "uri": "/tags/ci/cd/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Css",
    "uri": "/tags/css/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Data Science",
    "uri": "/tags/data-science/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Design Systems",
    "uri": "/tags/design-systems/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Di",
    "uri": "/tags/di/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Diagrams",
    "uri": "/tags/diagrams/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Dom",
    "uri": "/tags/dom/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Domain Driven Design",
    "uri": "/tags/domain-driven-design/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Dotfiles",
    "uri": "/tags/dotfiles/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Figma",
    "uri": "/tags/figma/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Git",
    "uri": "/tags/git/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Helm",
    "uri": "/tags/helm/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Java",
    "uri": "/tags/java/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Jest",
    "uri": "/tags/jest/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Kubernetes",
    "uri": "/tags/kubernetes/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Linux",
    "uri": "/tags/linux/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Ma documentation",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Maven",
    "uri": "/tags/maven/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Neovim",
    "uri": "/tags/neovim/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Nvim",
    "uri": "/tags/nvim/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Overlay",
    "uri": "/tags/overlay/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Perlin-Noise",
    "uri": "/tags/perlin-noise/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Poo",
    "uri": "/tags/poo/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Python",
    "uri": "/tags/python/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Redhat",
    "uri": "/tags/redhat/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Redux",
    "uri": "/tags/redux/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Ruby",
    "uri": "/tags/ruby/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Server",
    "uri": "/tags/server/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Shell",
    "uri": "/tags/shell/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: State Management",
    "uri": "/tags/state-management/index.html"
  },
  {
    "breadcrumb": "Ma documentation",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Tests Unitaires",
    "uri": "/tags/tests-unitaires/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Ubuntu",
    "uri": "/tags/ubuntu/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: View",
    "uri": "/tags/view/index.html"
  },
  {
    "breadcrumb": "Ma documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Workspace",
    "uri": "/tags/workspace/index.html"
  }
]
