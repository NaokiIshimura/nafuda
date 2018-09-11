function mix(){

  resultText = '';
  name1 = document.getElementById('name1').value;
  name2 = document.getElementById('name2').value;

  for (var i = 0; i < 10; i++) {
    resultText += nafuda(name1, name2) + "\n";
  }

  document.getElementById('output').value = resultText;

}

function nafuda(name1, name2){

  var result = '';

  var name = name1 + name2;
  var name_length = name.length;
  var randnum = 4 + Math.floor( Math.random() * 4 );
  //console.log(name);
  //console.log(randnum);

  for (var i = 0; i < randnum; i++) {

    j = Math.floor( Math.random() * name_length );

    result += name.charAt(j);

  }

  return result;

}
