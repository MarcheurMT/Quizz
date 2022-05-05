document.addEventListener("DOMContentLoaded", function () {
  var b = document.querySelector("button");
  var q1 = false;
  var q2 = false;
  
  function verifquestionnaire() {
    if (q1 === true && q2 === true) {
      b.disabled = false;
    }
  }

      var reponsesq1 = document.querySelectorAll('input[name="rep[0]"]');
      reponsesq1.forEach((e) => {
  
        e.addEventListener("click", function () {
          q1 = true;
          verifquestionnaire();
        });
      });

      var reponsesq2 = document.querySelectorAll('input[name="rep[1]"]');
      reponsesq2.forEach((e) => {
  
        e.addEventListener("click", function () {
          q2 = true;
          verifquestionnaire();
        });
      });

      var reponsesq3 = document.querySelectorAll('input[name="rep[2]"]');
      reponsesq3.forEach((e) => {
  
        e.addEventListener("click", function () {
          q3 = true;
          verifquestionnaire();
        });
      });

      var reponsesq4 = document.querySelectorAll('input[name="rep[3]"]');
      reponsesq4.forEach((e) => {
  
        e.addEventListener("click", function () {
          q4 = true;
          verifquestionnaire();
        });
      });

      var reponsesq5 = document.querySelectorAll('input[name="rep[4]"]');
      reponsesq5.forEach((e) => {
  
        e.addEventListener("click", function () {
          q5 = true;
          verifquestionnaire();
        });
      });

      var reponsesq6 = document.querySelectorAll('input[name="rep[5]"]');
      reponsesq6.forEach((e) => {
  
        e.addEventListener("click", function () {
          q6 = true;
          verifquestionnaire();
        });
      });

      var reponsesq7 = document.querySelectorAll('input[name="rep[6]"]');
      reponsesq7.forEach((e) => {
  
        e.addEventListener("click", function () {
          q7 = true;
          verifquestionnaire();
        });
      });

      var reponsesq8 = document.querySelectorAll('input[name="rep[7]"]');
      reponsesq8.forEach((e) => {
  
        e.addEventListener("click", function () {
          q8 = true;
          verifquestionnaire();
        });
      });

      var reponsesq9 = document.querySelectorAll('input[name="rep[8]"]');
      reponsesq9.forEach((e) => {
  
        e.addEventListener("click", function () {
          q9 = true;
          verifquestionnaire();
        });
      });

      var reponsesq10 = document.querySelectorAll('input[name="rep[9]"]');
      reponsesq10.forEach((e) => {
  
        e.addEventListener("click", function () {
          q10 = true;
          verifquestionnaire();
        });
      });
  
      // 2 - Afficher le score et les réponses....
  
      b.addEventListener("click", function () {
        b.disabled = true;
        let note = 0;
        let vraireponse1 = 1;
        let vraireponse2 = 2;
        let vraireponse3 = 2;
        let vraireponse4 = 3;
        let vraireponse5 = 3;
        let vraireponse6 = 2;
        let vraireponse7 = 3;
        let vraireponse8 = 3;
        let vraireponse9 = 3;
        let vraireponse10 = 1;
  
        var valeurreponse1 = document.querySelector('input[name="rep[0]"]:checked');
        var valeurreponse2 = document.querySelector('input[name="rep[1]"]:checked');
        var valeurreponse3 = document.querySelector('input[name="rep[2]"]:checked');
        var valeurreponse4 = document.querySelector('input[name="rep[3]"]:checked');
        var valeurreponse5 = document.querySelector('input[name="rep[4]"]:checked');
        var valeurreponse6 = document.querySelector('input[name="rep[5]"]:checked');
        var valeurreponse7 = document.querySelector('input[name="rep[6]"]:checked');
        var valeurreponse8 = document.querySelector('input[name="rep[7]"]:checked');
        var valeurreponse9 = document.querySelector('input[name="rep[8]"]:checked');
        var valeurreponse10 = document.querySelector('input[name="rep[9]"]:checked');

        console.log("reponse1 : " + valeurreponse1.value);
        console.log("reponse2 : " + valeurreponse2.value);
        console.log("reponse3 : " + valeurreponse1.value);
        console.log("reponse4 : " + valeurreponse2.value);
        console.log("reponse5 : " + valeurreponse1.value);
        console.log("reponse6 : " + valeurreponse2.value);
        console.log("reponse7 : " + valeurreponse1.value);
        console.log("reponse8 : " + valeurreponse2.value);
        console.log("reponse9 : " + valeurreponse1.value);
        console.log("reponse10 : " + valeurreponse2.value);
  
        if (valeurreponse1.value == vraireponse1) {
          console.log("la réponse 1 est bonne");
          document.querySelector('input[name="rep[0]"]:checked').classList.add("juste");
          note++;
          document.getElementById('l0q1r'+valeurreponse1.value).innerHTML += "<span class='reponsejuste'>Juste</span>";
          } else {
          console.log("la réponse 1 est fausse");
          document.querySelector('input[name="rep[0]"]:checked').classList.add("faux");
          document.getElementById('l0q1r'+valeurreponse1.value).innerHTML += "<span class='reponsefausse'>Faux</span>";
          }
        if (valeurreponse2.value == vraireponse2) {
          console.log("la réponse 2 est bonne");
          document.querySelector('input[name="rep[1]"]:checked').classList.add("juste");
          note++;
          document.getElementById('l1q2r'+valeurreponse1.value).innerHTML += "<span class='reponsejuste'>Juste</span>";
          } else {
          console.log("la réponse 2 est fausse");
          document.querySelector('input[name="rep[1]"]:checked').classList.add("faux");
          document.getElementById('l1q2r'+valeurreponse1.value).innerHTML += "<span class='reponsefausse'>Faux</span>";
          }

        if (valeurreponse3.value == vraireponse3) {
            console.log("la réponse 3 est bonne");
            document.querySelector('input[name="rep[2]"]:checked').classList.add("juste");
            note++;
            document.getElementById('l2q3r'+valeurreponse1.value).innerHTML += "<span class='reponsejuste'>Juste</span>";
          } else {
            console.log("la réponse 3 est fausse");
            document.querySelector('input[name="rep[2]"]:checked').classList.add("faux");
            document.getElementById('l2q3r'+valeurreponse1.value).innerHTML += "<span class='reponsefausse'>Faux</span>";
          }

          if (valeurreponse4.value == vraireponse4) {
            console.log("la réponse 4 est bonne");
            document.querySelector('input[name="rep[3]"]:checked').classList.add("juste");
            note++;
            document.getElementById('l3q4r'+valeurreponse1.value).innerHTML += "<span class='reponsejuste'>Juste</span>";
          } else {
            console.log("la réponse 4 est fausse");
            document.querySelector('input[name="rep[3]"]:checked').classList.add("faux");
            document.getElementById('l3q4r'+valeurreponse1.value).innerHTML += "<span class='reponsefausse'>Faux</span>";
          }

          if (valeurreponse5.value == vraireponse5) {
            console.log("la réponse 5 est bonne");
            document.querySelector('input[name="rep[4]"]:checked').classList.add("juste");
            note++;
            document.getElementById('l4q5r'+valeurreponse1.value).innerHTML += "<span class='reponsejuste'>Juste</span>";
          } else {
            console.log("la réponse 5 est fausse");
            document.querySelector('input[name="rep[4]"]:checked').classList.add("faux");
            document.getElementById('l4q5r'+valeurreponse1.value).innerHTML += "<span class='reponsefausse'>Faux</span>";
          }

          if (valeurreponse6.value == vraireponse6) {
            console.log("la réponse 6 est bonne");
            document.querySelector('input[name="rep[5]"]:checked').classList.add("juste");
            note++;
            document.getElementById('l5q6r'+valeurreponse1.value).innerHTML += "<span class='reponsejuste'>Juste</span>";
          } else {
            console.log("la réponse 6 est fausse");
            document.querySelector('input[name="rep[5]"]:checked').classList.add("faux");
            document.getElementById('l5q6r'+valeurreponse1.value).innerHTML += "<span class='reponsefausse'>Faux</span>";
          }

          if (valeurreponse7.value == vraireponse7) {
            console.log("la réponse 7 est bonne");
            document.querySelector('input[name="rep[6]"]:checked').classList.add("juste");
            note++;
            document.getElementById('l6q7r'+valeurreponse1.value).innerHTML += "<span class='reponsejuste'>Juste</span>";
          } else {
            console.log("la réponse 7 est fausse");
            document.querySelector('input[name="rep[6]"]:checked').classList.add("faux");
            document.getElementById('l6q7r'+valeurreponse1.value).innerHTML += "<span class='reponsefausse'>Faux</span>";
          }

          if (valeurreponse8.value == vraireponse8) {
            console.log("la réponse 8 est bonne");
            document.querySelector('input[name="rep[7]"]:checked').classList.add("juste");
            note++;
            document.getElementById('l7q8r'+valeurreponse1.value).innerHTML += "<span class='reponsejuste'>Juste</span>";
          } else {
            console.log("la réponse 8 est fausse");
            document.querySelector('input[name="rep[7]"]:checked').classList.add("faux");
            document.getElementById('l7q8r'+valeurreponse1.value).innerHTML += "<span class='reponsefausse'>Faux</span>";
          }

          if (valeurreponse9.value == vraireponse9) {
            console.log("la réponse 9 est bonne");
            document.querySelector('input[name="rep[8]"]:checked').classList.add("juste");
            note++;
            document.getElementById('l8q9r'+valeurreponse1.value).innerHTML += "<span class='reponsejuste'>Juste</span>";
          } else {
            console.log("la réponse 9 est fausse");
            document.querySelector('input[name="rep[8]"]:checked').classList.add("faux");
            document.getElementById('l8q9r'+valeurreponse1.value).innerHTML += "<span class='reponsefausse'>Faux</span>";
          }

          if (valeurreponse10.value == vraireponse10) {
            console.log("la réponse 10 est bonne");
            document.querySelector('input[name="rep[9]"]:checked').classList.add("juste");
            note++;
            document.getElementById('l9q10r'+valeurreponse1.value).innerHTML += "<span class='reponsejuste'>Juste</span>";
          } else {
            console.log("la réponse 10 est fausse");
            document.querySelector('input[name="rep[9]"]:checked').classList.add("faux");
            document.getElementById('l9q10r'+valeurreponse1.value).innerHTML += "<span class='reponsefausse'>Faux</span>";
          }
          
          console.log("note finale : " + note + "/10");
        // METTRE A JOUR LA NOTE
        const monscrore = document.getElementsByClassName('Score');
        monscrore[0].innerHTML = note + '/10';
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
    },
    false
  );