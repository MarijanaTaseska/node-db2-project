// STRETCH
const cars =[
    {
        vin: '1111111111111',
        make:'toyota',
        model: 'prius',
        mileage:215000,
        title:'clean',
        transmission: 'manual',
    },
    {
        vin: '2222222222222',
        make:'toyota',
        model: 'corola',
        mileage:115000,
        title:'salvage',
    },
    {
        vin: '33333333333333',
        make:'ford',
        model: 'focus',
        mileage:135000,
    },
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars)
//     })
// }

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}