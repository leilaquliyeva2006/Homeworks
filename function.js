// Написать функцию, которая возвращает всю цепочку прототипов для любого объекта вплоть до null. После того как
// показывается null в консоли программа завершает свою работу

function prototype_func(obj) {
    let proto_obj = obj;
  
    while (proto_obj !== null) {
      console.log(proto_obj);
      proto_obj = Object.getPrototypeOf(proto_obj);
    }
    process.exit();
  }
  const obj1 = { langueage: "JavaScript" };
 prototype_func(obj1);