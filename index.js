        var tablinks = document.getElementsByClassName ("tab-links");
        var tabcontents = document.getElementsByClassName ("tab-contents");
        const myDiv = document.getElementById("about");

        function opentab (tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove ("active-link");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove ("skill-tab");
            }
                event.currentTarget.classList.add ("active-link");  
                document.getElementById(tabname).classList.add("skill-tab");
        }

        var sidemenu = document.getElementById("sidemenu");

        function openmenu() {
            sidemenu.style.right = "0";
        }

        function closemenu() {
            sidemenu.style.right = "-200px";
        }


        // myDiv.addEventListener('click', (event) => {
        //     event.currentTarget.getAttribute("first-skill"); 
        // });
    
        

        
        
        
        
        