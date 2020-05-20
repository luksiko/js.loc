let json = '{"id":2}';

try {
   let user = JSON.parse(json)
   console.log(json);
   if (!user.name) {
      throw new Error("В этих данных нет имени"); // оператор throw генерирует ошибки
   }
   /*    console.log("Normal");
      console.log(a);
      console.log("result");
    */
} catch (error) {
   // методы error name,message,stack
   console.log(error.name);
   console.log(error.message);
   console.log(error.stack);
   // 
   console.log(`Mы получили ошибку: ${error.name}`);
} finally { // необязательная секция. но полезна чтобы закончить начатое, если вышла ошибка.
   console.log("А я Выполнюсь всегда");

}

console.log("А я буду работать дальше");

//чтобы отловить ошибки у блока setTimout нужно посестить try_catch внутрь
setTimeout(function() { 
   try {
     noSuchVariable; // try..catch обрабатывает ошибку!
   } catch {
      console.log( "ошибка поймана!" );
   }
}, 1000);
 
let json2 = "{ некорректный JSON }";

try {

  let user = JSON.parse(json2); // <-- тут возникает ошибка...
  alert( user.name ); // не сработает

} catch (e) {
  // ...выполнение прыгает сюда
  alert( "Извините, в данных ошибка, мы попробуем получить их ещё раз." );
  alert( e.name );
  alert( e.message );
}