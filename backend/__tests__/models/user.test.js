const db = require('../../src/models')
const { User } = db.sequelize.models

describe('User', () => {
  it('works', () => {
    expect(1 + 1).toStrictEqual(2)
  })

  it('must have an email', () => {
    expect.assertions(1)

    const user = User.build({ password: 'azerty' })
    return user.validate().catch(error => {
      console.log(error.get('email').length)
      expect(error.get('email')).toHaveLength(1)
    })
  })

  it('encrypts password', () => {
    expect.assertions(2)
    const user = User.build({ email: process.env.email, password: process.env.password})
    user
      .save()
      .then(() => {
        expect(user.password).not.toBeNull()
        expect(user.password).not.toStrictEqual(process.env.password)
      })
      .catch(error => console.log(error))
  })
})
