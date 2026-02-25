$w.onReady(function () {
    // initially সব form hide থাকবে
     $w('#Dropdown1').value = "Domiciliary Care"
    $w("#form1").show();
    $w("#form2").hide();
    $w("#form3").hide();
   
    // dropdown change হলে
    $w("#Dropdown1").onChange(() => {
        const selected = $w("#Dropdown1").value;
        
        // আগে সব hide
        $w("#form1").hide();
        $w("#form2").hide();
        $w("#form3").hide();

        // selected অনুযায়ী show
        if (selected === "Domiciliary Care") {
            $w("#form1").show();
        } 
        else if (selected === "Magnolia House") {
            $w("#form2").show();
        } 
        else if (selected === "Eden House") {
            $w("#form3").show();
        }
    });
});
