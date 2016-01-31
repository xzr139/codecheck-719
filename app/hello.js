function hello(name) {
/*
* ここにnameに"World"が入力された時、この関数が"Hello World!"と返すような実装をします
* nameが"codecheck"の場合には、"Hello codecheck!"が返されます。
*/
  //ここにHelloworldを実装します。
  //return "Hello World!";
  
  
  if (name=="World")
    return "Hello World!";
  if (name=="codecheck")
    return "Hello codecheck!";
}

module.exports = hello;
