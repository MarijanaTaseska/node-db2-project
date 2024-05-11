// STRETCH
const cars = [
    {
        vin: '4JGBF7BE8AA539546',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: 'KM8SB12B44U669681',
        make: 'toyota',
        model: 'corola',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: '1J4FA24197L227924',
        make: 'ford',
        model: 'focus',
        mileage: 135000,
    },
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars)
//     })
// }

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}