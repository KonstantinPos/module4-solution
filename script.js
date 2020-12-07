(function () {
   var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
   for (var name in names) {
      var firstLetter = names[name].charAt(0).toLowerCase();
       if (firstLetter === 'j') {
		    console.log("Goodbye " + names[name]);
  } else {
    console.log("Hello " + names[name]);
  }
}

})();