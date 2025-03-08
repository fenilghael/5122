var footballPlayer = {
    name: "Sunil",
    position: "Forward",
    team: "India",
    goals: 763,
    scoreGoal: function () {
        footballPlayer.goals = footballPlayer.goals + 1;
        alert(footballPlayer.name + " scored! New goal count: " + footballPlayer.goals);
    }
};

// Show in console
console.log("Before update:", footballPlayer);

// Ask to the user
footballPlayer.team = prompt("Enter a new team:", footballPlayer.team);

footballPlayer.position = prompt("Enter a new position:", footballPlayer.position);

// Call the function to add a goal
footballPlayer.scoreGoal();

// Show the updated object in the console
console.log("New update:", footballPlayer);




