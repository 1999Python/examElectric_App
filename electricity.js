function electricity() {


    let appliances = {
        'Stove': 10,
        'Kettle': 5,
        'TV': 3,
        'Fridge': 13
    };

    let unitsAvailable = 0;
    let advanceCounter = 0;
    let totalUnits = 0;
    let totalAmount = 0;

    function topUpElectricity(amount) {

        if (amount === 10) {
            unitsAvailable += 7;
        }
        else if (amount === 20) {
            unitsAvailable += 14;
        }

        else if (amount === 50) {
            unitsAvailable += 35;
        }
      

        return unitsAvailable;

    }

    function getUnitsAvailable() {

        return unitsAvailable;// returning a varaiable of amount that left.
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance() {
       if(totalUnits >= appliances.Stove){
        totalUnits -= 10;///Im trying to say that the total amount of units must be more or equal to the
        // amount of the selected appliance and subtract that amount from the total.If the amount of units is less than the appliances then it shouldnt work.
       }
      else if(totalUnits >= appliances.Fridge){
        totalUnits -= 13;
       }
      else if(totalUnits >= appliances.TV){
        totalUnits -= 3;
       }
else if(totalUnits >= appliances.Kettle){
        totalUnits -= 5;
       }
    }

    function advanceTaken(advanceTaken) {
        advanceTaken === 0;
        return advanceCounter; // I want to say that there will be 21 units given in advance but you wont be abale to get any more until you pay again 

    }

    function totalAmountSpent() {
        return totalAmount;//total amount that was spent for electrcity
    }

    function totalUnitsBought() {
        return totalUnits;// total amount of units that are available to be used depending on if there are enough for that appliance to work.
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought

    }
    }