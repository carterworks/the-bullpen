const { teams } = require("./get-teams");

// get int in range [min, max]
function randInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function chooseRandomElement(choices) {
    if (choices.length === 0) {
        throw "Choices cannot be empty";
    }
    return choices[randInt(choices.length - 1, 0)];
}

exports.handler = async (event) => {
    const teamName = event.queryStringParameters?.team?.toLowerCase();
    let choices;
    if (teamName) {
        choices = teams[teamName];
    } else {
        choices = event.queryStringParameters?.choices?.split(",");
    }
    if (!choices || choices.length === 0) {
        const validTeamNames = Object.keys(teams).map(s => `"${s}"`).join(", ");
        let body
        if (!teams[teamName]) {
            body = `Name "${teamName}" is an invalid team name. Valid names are: ${validTeamNames}`
        } else {
            body = `Missing required query parameters. Must have "team" (valid values are: ${validTeamNames}) or "choices" (valid values is a comma-separated, like "Alpha,Bravo,Charlie")`
        }
        return {
            statusCode: 400,
            body
        }
    }

    return {
        statusCode: 200,
        body: chooseRandomElement(choices)
    }
}