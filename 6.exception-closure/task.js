function parseCount(value) {
    let afterParsed = Number.parseInt(value);
       if(isNaN(afterParsed)) {
           throw new Error("Невалидное значение")
       } 
      return afterParsed;
    }
    
    
    function validateCount(value) {
        try {
        return parseCount(value);
        } catch (error) {
           return error;
        }
    }
    
    
    //задача 2
    
    class Triangle {
        constructor(side1, side2, side3) {
            this.side1 = side1;
            this.side2 = side2;
            this.side3 = side3;
        if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1) {
         throw new Error ("Треугольник с такими сторонами не существует");
        }
    }
        getPerimeter() {
          return this.side1 + this.side2 + this.side3;
        }
        
        getArea() {
            const perimeterHf = this.getPerimeter() / 2;
            const s = Math.sqrt(perimeterHf * (perimeterHf - this.side1) * (perimeterHf - this.side2) * (perimeterHf - this.side3));
            return Number(s.toFixed(3));
         }
         }
         
    
        function getTriangle(side1, side2, side3) {
         try {
             return new Triangle(side1, side2, side3);
         }
            catch (error) {
                return {
                    getPerimeter() {
                        return "Ошибка! Треугольник не существует";
                    },
                    getArea() {
                        return "Ошибка! Треугольник не существует";
                    }
                }
            }
        }