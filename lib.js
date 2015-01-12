<html>
<div id="container"> </div>

  <script src="jquery-2.1.1.js"></script>
  <script>
  var elements = [];
  elements.push({id : "A",id_father : "" , top: 50, left: 100})
  elements.push({id : "B",id_father : "A", top: 150, left: 300})
  elements.push({id : "C",id_father : "A", top: 90, left: 120})
  elements.push({id : "D",id_father : "B", top: 500, left: 80})
  elements.push({id : "E",id_father : "A", top: 500, left: 80})

  var api ={
    render : function(tableau, color)
  {
    elements.forEach(function(el)
  {
    var html = "<div id='"+el.id+"' class='el' style='top:"+el.top+"px;left:"+el.left+"px;width:"Math.floor((Math.random() * 30) + 10)"; height:"Math.floor((Math.random() * 80) + 10)"background:"+color+"'></div>";
    $('#container').append(html)
  });
}
,
GetFather : function(father)
{
  for ( i in elements)
  {
    if ( elements[i].id == father ){

      return elements[i];
    }
  }
}
,
GetLastChild : function()
{
  return TabChild[(TabChild.length - 1)];
},

GetChilds : function(father)
{
  TabChild = [];
  for ( i in elements)
  {
    if ( elements[i].id_father == father ){

      TabChild.push(elements[i])
    }
  }
  return TabChild;
}
,
GetDeltaX : function(espaceLeft)
{
  var espace=0;
  nbrchild = TabChild.length;
  if ( TabChild.length > 0 )
  {
    espace = ( $("#"+TabChild[0].id+"").width() + $("#"+this.GetLastChild().id+"").width()) / 2;

    for ( var a = 1; a < TabChild.length - 1 ; a++ )
    {
      espace = espace +  $("#"+TabChild[a].id+"").width();
    }
  }
  DeltaX = (( nbrchild - 1) * espaceLeft + espace ) /2 ;

  return DeltaX;
},
GetDeltaY : function(father, espaceTop)
{
  var plusGrosseBulle = 0;

  for ( z in TabChild)
  {
    if ($("#"+TabChild[z].id+"").height() > plusGrosseBulle )
    {
      plusGrosseBulle = $("#"+TabChild[z].id+"").height();
    }
  }
  DeltaY = ( ( $("#"+this.GetFather(father).id+"").height() + plusGrosseBulle ) / 2 + espaceTop );
  return DeltaY;
},
ChangePosition : function(father, espaceTop, espaceLeft)
{

  for ( j in TabChild )
  {
    TabChild[0].left = this.GetFather(father).left - DeltaX
    if ( j >= 1)
    {

      TabChild[j].left = TabChild[(j-1)].left + ( $("#"+TabChild[(j-1)].id+"").width() / 2 ) + ( $("#"+TabChild[j].id+"").width() / 2 ) + espaceLeft;

    }
    TabChild[j].top = this.GetFather(father).top + DeltaY
  }
  return TabChild;
},

alignH : function(father, espaceLeft, espaceTop){


  // api.render(elements, "white");

  var TabChild = api.GetChilds(father);
  var DeltaY = api.GetDeltaY(father, espaceTop)
  var DeltaX = api.GetDeltaX(espaceLeft);

  var TabChildPosition = api.ChangePosition(father, espaceTop, espaceLeft);
  return TabChildPosition;

}
}

</script>
<
