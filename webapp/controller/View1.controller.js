sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast" // Import MessageToast module
],
function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("com.mindset.apps.project9.controller.View1", {
      onInit: function() {
          this.array1 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
          this.array2 = [1, 3, 4, 5, 13, 14, 15];
    
          this.displayArrays();
      },
    
      onUnionPress: function() {
          var unionArray = [];
          for( let i = 0; i<this.array1.length; i++){
            let b = true;
            for( let j=0; j<unionArray.length; j++){
                if(unionArray[j] === this.array1[i]){
                    b = false;
                    break;
                }
            }
            if(b){
                unionArray.push(this.array1[i]);
            }
          }

          for( let i = 0; i<this.array2.length; i++){
            let b = true;
            for( let j=0; j<unionArray.length; j++){
                if(unionArray[j] === this.array2[i]){
                    b = false;
                    break;
                }
            }
            if( b ){
                unionArray.push(this.array2[i]);
            }
          }
          
          console.log(unionArray);
    
          // Display the union array
          this.getView().byId("resultText").setText("Result Array (Union): " + unionArray);
          
          MessageToast.show("Union Successful!");
      },
    
      onIntersectionPress: function() {
        var intersectionArray = [];
        
        for (var i = 0; i < this.array1.length; i++) {
            var value = this.array1[i];
            let b = false;
            for (var j = 0; j < this.array2.length; j++) {
                if (value === this.array2[j]) {
                    b = true;
                    break;
                }
            }
            for (var j = 0; j < intersectionArray.length; j++) {
                if (value === intersectionArray[j]) {
                    b = false;
                    break;
                }
            }
            if(b) intersectionArray.push(value);
        }
        // Display the Intersection array
        this.getView().byId("resultText").setText("Result Array (Intersection): " + intersectionArray);
    
        MessageToast.show("Intersection Successful!");
    },
    
    
      displayArrays: function() {
          this.getView().byId("array1Text").setText("Array 1: " + this.array1);
          this.getView().byId("array2Text").setText("Array 2: " + this.array2);
      }
  });
});
