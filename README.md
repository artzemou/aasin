# Circo Futuro


                 ,7'  ''²$(  )
                ,7'      '?q$7'
             ..,$$,.
   ,.  .,,--***²""²***--,,.  .,
 ²   ,p²''              ''²q,   ²
:  ,7'                      '7,  :
 ' $      ,db,      ,db,      $ '
  '$      ²$$²      ²$$²      $' 
  '$                          $'
   '$.     .,        ,.     .$'
    'b,     '²«»«»«»²'     ,d'
     '²?bn,,          ,,nd?²'
       ,7$ ''²²²²²²²²'' $7,
     ,² ²$              $² ²,
     $  :$              $:  $
     $   $              $   $
     'b  q:            :p  d'
      '²«?$.          .$?»²'
         'b            d'
       ,²²'?,.      .,?'²²,
      ²==--≥²²==--==²²≤--==²

### Limitations

Si le *Server Side Rendering* permet de raccourcir le temps du premier affichage sur le client, la méthode n'est pas encore parfaite.
Le back end, plutôt que de renvoyer très rapidement un fichier html contenant les fichiers JS à télécharger, va devoir passer du temps à générer le html.
Cette génération va prendre plus ou moins de temps suivant le nombre d'appels asynchrones à des ressources.

La première stratégie peut donc, dans la mesure du possible, cacher des requêtes. L'idéal étant sans doute de mettre en cache le html généré (le résultat de *renderToString*) pour chaque route.
Et si ce n'est pas possible (par exemple dans le cas de page qui dépendent de l'utilisateur connecté), il est peut-être possible de cacher les résultats des appels aux APIs.

Il existe encore une voie possible d'amélioration, forcément encore un peu plus complexe à mettre en place. Cela consiste à faire du **streaming html**.

### Html Streaming

...
