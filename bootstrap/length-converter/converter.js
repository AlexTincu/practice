let Feets, Meters, Inches, Centimeters, Kilometers, Miles;

      function weightConverter(val, unit) {
        /*
            Convert from Feet to Meters	m=ft/3.2808
            Convert from Feet to Inches	in=ft*12
            Convert from Feet to cm	cm=ft/0.032808
            Convert from Feet to Yards	yd=ft*0.33333
            Convert from Feet to Kilometers	km=ft/3280.8
            Convert from Feet to Miles	mi=ft*0.00018939
          */

        const value = +val;

        let Feets;
        switch (unit) {
          case "Feets":
            Feets = value;
            break;
          case "Meters":
            Feets = value * 3.2808;
            break;
          case "Inches":
            Feets = value / 12;
            break;
          case "Centimeters":
            Feets = value * 0.032808;
            break;
          case "Yards":
            Feets = value / 0.33333;
            break;
          case "Kilometers":
            Feets = value * 3280.8;
            break;
          case "Miles":
            Feets = value / 0.00018939;
            break;
          default:
            alert("Unit name is unknown");
        }

        Meters = Feets / 3.2808;
        Inches = Feets * 12;
        Centimeters = Feets / 0.032808;
        Yards = Feets * 0.33333;
        Kilometers = Feets / 3280.8;
        Miles = Feets * 0.00018939;

        document.getElementById("Feets").value = Feets.toFixed(3);
        document.getElementById("Meters").value = Meters.toFixed(3);
        document.getElementById("Inches").value = Inches.toFixed(3);
        document.getElementById("Centimeters").value = Centimeters.toFixed(3);
        document.getElementById("Yards").value = Yards.toFixed(3);
        document.getElementById("Kilometers").value = Kilometers.toFixed(3);
        document.getElementById("Miles").value = Miles.toFixed(3);
      }