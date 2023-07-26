let markerValues = [

]
AFRAME.registerComponent("cursor-event", {
    init: function(){
        window.addEventListener("mouseenter", (e) =>{

            if(e.target.getAttribute("class") != null && e.target.getAttribute("class") === "marker"){
                console.log(e.target)
                var id= e.target.getAttribute("id");
                
                var displayName = document.querySelector("#display-name");
                displayName.setAttribute("text", {value: id})
                document.querySelector

            }else{
                console.log("not marker")
            }
        })
    }
})