const electricity =  electricity(); // Factory Function

// get a reference to the Top-up electricity radio buttons
const topup = document.querySelector(".topup");

//get a reference to the add button
const buyBtn = document.querySelector(".topupNow");

// get a reference to the Use electricity radio buttons
const usageBtn = document.querySelector(".usage");

//get a reference to the add button
const useBtn = document.querySelector(".useNow");
//get a reference to the Electrcity 
const unitsAvailable = document.querySelector(".unitsAvailable");
const totalUnits = document.querySelector(".totalUnits");
const totalAmount = document.querySelector(".totalAmount");
//////
const advanceTaken = document.querySelector(".advanceTaken");






function addCostButton() {
    //tryna check if radio btn was checked 
        var checkedRadioBtn = document.querySelector("input[name='buyelectricity']:checked");
    
        if (checkedRadioBtn) {
    
            //  electricity will cost 10 , 20 50 or advance
            if (checkedRadioBtn.value === "10") {
                 electricity.topUpelectricity();
 //what im tryna say is that if the checkedradiobtn gets the value of 10rand if not check if the others are selected.
            }
            else if (checkedRadioBtn.value === "20") {
                 electricity.topUpelectricity();
    
            }

            else if (checkedRadioBtn.value === "50") {
                 electricity.topUpelectricity();
    
            }

            else if (checkedRadioBtn.value === "advance") {
                 electricity.advanceTaken();
    
            }
          
  electricity.getUnitsAvailable(parseFloat(unitsAvailable.value));//
  
  electricity.totalUnitsBought(parseFloat(totalUnits.value));//

  electricity.totalAmountSpent(parseFloat(totalAmount.value));//
  
  electricity.advanceTaken(parseFloat(advanceTaken.value));//advance taken alows user to take 21 unis in avance but you wnt be able to 
  
        }
    
        unitsAvailable.innerHTML =  electricity.getUnitsAvailable().toFixed(2);
    
        totalUnits.innerHTML =  electricity.totalUnitsBought().toFixed(2);
    
        totalAmount.innerHTML =  electricity.totalAmountSpent().toFixed(2);
    
        advanceTaken.innerHTML =  electricity.advanceTaken().toFixed(2);

    }

    function applianceType() {
        //tryna check if radio btn was checked 
            var checkedRadioBtn = document.querySelector("input[name='useelectricity']:checked");
        
            if (checkedRadioBtn) {
        
                //  electricity will cost 10 , 20 50 or advance
                if (checkedRadioBtn.value === "Stove") {
                    electricity.useAppliance();
                    //what im tryna say is that if the checkedradiobtn gets the value of stove if not check the others.
                }
                else if (checkedRadioBtn.value === "TV") {
                     electricity.useAppliance();
        
                }
                else if (checkedRadioBtn.value === "Fridge") {
                     electricity.useAppliance();
        
                }
    
                else if (checkedRadioBtn.value === "Kettle") {
                     electricity.useAppliance();
        
                }
        
            }
        
           
        }
    


        buyBtn.addEventListener("click", addCostButton);

        useBtn.addEventListener("click", applianceType);






