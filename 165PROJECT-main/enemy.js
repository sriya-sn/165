
AFRAME.registerComponent("enemy-fireballs", {
    init: function () {        
        setInterval(this.shootEnemyMonster, 2000)
    },
    shootEnemyMonster: function () {
        var scene = document.querySelector("#scene");

        //enemyMonster entity








        
            
        for (var i = 0; i < enemyMonster.length; i++) {

       //create fireballs
        var fireball = document.createElement("a-entity");

        fireball.setAttribute("class","fireball")
        fireball.setAttribute("gltf-model", "./models/fireball/scene.gltf");
        fireball.setAttribute("dynamic-body", { mass: 0 });
     
        var pos=enemyMonster[i].getAttribute("position")

        fireball.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
        });
        fireball.setAttribute("scale", {
            x: 0.05,
            y: 0.05,
            z: 0.05,
        });

        scene.appendChild(fireball);      
//Finding the direction vector using Three.js objects
      











        /******************************************************************************************* */

        //check player life


        //collide event on enemy bullets
        fireball.addEventListener("collide", function (e) {
           
           
                    //show text
                  

                    //remove monsters
                   

                

            
        });

    }
    },
    

});
