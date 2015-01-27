
GetAllFeuilles : function(father)                           // Cette fonction vas réutiliser en boucle
{                                                           // la fonction GetFeuilles.
  var TabFeuilles =[];                                      // Cela nous permet de faire un tableau des
  var TabDChilds = lib.GetChilds(father);                   // de TOUS les elements et donc de savoir
  // qui est la feuille, qui se situe à la
  for ( var f = 0; TabDChilds.length > 0; f++)             // fin de la branche.
  {                                                         // Elle retourne notre tableau contenant
    TabDChilds = lib.GetFeuilles(TabDChilds, TabFeuilles)   // toutes les feuilles.
  }

  return TabFeuilles;
},
