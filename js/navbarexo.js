function saisie (txt_defaut, nom_controle){
  if (document.getElementById(nom_controle).value == txt_defaut)
    document.getElementById(nom_controle).value = '';
}
function retablir (txt_defaut, nom_controle){
    if(document.getElementById(nom_controle).value == '')
       document.getElementById(nom_controle).value = txt_defaut;
}

