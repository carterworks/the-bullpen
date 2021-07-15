const teams = Object.freeze({
  submitter: ['Abby', 'Beto', 'Bryson', 'Carter', 'Joe', 'Nate', 'Thad'],
  falcon: ['Daren', 'Sam', 'Zach'],
  nato: ['Alpha', 'Bravo', 'Charlie'],
});

const handler = async () => ({
  statusCode: 200,
  body: JSON.stringify(teams),
});

module.exports = { teams, handler };
