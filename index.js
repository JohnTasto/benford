const uniform = (min, max) => Math.random() * (max - min) + min
const benford = (min, max) => Math.exp(uniform(Math.log(min), Math.log(max)))

module.exports = benford
