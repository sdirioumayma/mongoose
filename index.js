const Person = require("./model/person");


/***********************Create_and_Save_a_Record_of_a_Model***********************************/
Person.insertMany([{
    name: "Sdiri Oumayma",
    age: 25,
    favoriteFoods: ["favFoodOne", "favFoodTwo", "favFoodThree"]
}]).then(insertedElement => { console.log("The Inserted Elemenmt: ", insertedElement) });
/*********************************************************************************************/

/***********************Create_Many_Records_with_model.create()*******************************/
Person.create([
    {
        name: "Person X",
        age: 34,
        favoriteFoods: ["favFoodFour", "favFoodFive"]
    },
    {
        name: "Person Y",
        age: 43,
        favoriteFoods: ["favFoodSix", "favFoodSeven"]
    },
    {
        name: "Person Z",
        age: 19,
        favoriteFoods: ["favFoodEight", "favFoodNine"]
    }
]).then(insertedElement => { console.log("The Inserted Elemenmt: ", insertedElement) });
/*********************************************************************************************/

/*********************Use_model.find()_to_Search_Your_Database********************************/
Person.find().then(remainingPerson => { console.log(remainingPerson) });
/*********************************************************************************************/

/********************************Use_model.findOne()******************************************/
Person.findOne().then(remainingPerson => { console.log(remainingPerson) });
/*********************************************************************************************/

/******************************Use_model.findById()*******************************************/
Person.findById(id, function (err, docs) { console.log(docs) });
/*********************************************************************************************/

/**********************************model.findOneAndUpdate()***********************************/
Person.findOneAndUpdate({ "name": "Sdiri Oumayma" }, { $set: { age: "26" } })
    .then(updatedPerson => { console.log("Updated Person: ", updatedPerson) });
/*********************************************************************************************/

/***********************************model.findByIdAndRemove()*********************************/

Person.findByIdAndRemove(id, function (err, docs) { console.log("Removed Person :", docs) });
/*********************************************************************************************/

/***************************************model.remove()****************************************/
Person.remove({ name: "Sdiri Oumayma" })
    .then(removedPersons => { console.log("Removed Person :", removedPersons) });
/*********************************************************************************************/