import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from '@ioc:Adonis/Lucid/Database'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Hash from '@ioc:Adonis/Core/Hash'
import Env from '@ioc:Adonis/Core/Env'
import * as nanoid from 'nanoid'

export default class UsersController {
  public async index({ auth, response }: HttpContextContract) {
    const userId = auth.use('api').user?.id
    if (!userId) {
      response.unauthorized({
        meta: {
          status: 401,
          message: 'Please login first',
        },
      })
      return
    }

    const users = await Database.from('users')
      .select('id', 'name', 'email', 'username', 'avatar', 'created_at', 'updated_at')
      .whereNot('id', userId)
      .returning('*')

    users.forEach((user) => {
      if (user.avatar) {
        user.avatar = `${Env.get('APP_URL')}/uploads/${user.avatar}`
      }
    })

    return response.status(200).send({
      meta: {
        status: 200,
        message: 'Success',
      },
      data: users,
    })
  }

  public async store({ request }: HttpContextContract) {
    const { name, email, username, password } = request.body()

    const registerSchema = schema.create({
      name: schema.string([rules.minLength(3), rules.maxLength(100)]),
      email: schema.string([rules.email(), rules.unique({ table: 'users', column: 'email' })]),
      username: schema.string([
        rules.minLength(3),
        rules.maxLength(50),
        rules.unique({ table: 'users', column: 'username' }),
      ]),
      password: schema.string([rules.minLength(8)]),
    })

    const customMessage = {
      'required': 'The {{ field }} is required to register.',
      'name.minLength': 'The name must be at least 3 characters.',
      'name.maxLength': 'The name must be less than 100 characters.',
      'email.email': 'The email must be a valid email address.',
      'email.unique': 'The email has already been taken.',
      'username.minLength': 'The username must be at least 3 characters.',
      'username.maxLength': 'The username must be less than 50 characters.',
      'username.unique': 'The username has already been taken.',
      'password.minLength': 'The password must be at least 8 characters.',
    }

    await request.validate({ schema: registerSchema, messages: customMessage })

    const encryptedPassword = await Hash.make(password)

    const user = await Database.table('users')
      .insert({ name, email, username, password: encryptedPassword })
      .returning(['id', 'name', 'email', 'username', 'avatar', 'created_at', 'updated_at'])

    const slug = `welcome-to-notes-app-${nanoid.nanoid(10)}`

    await Database.table('notes').insert({
      owner_id: user[0].id,
      title: 'Welcome to Notes App',
      content: 'This is your first note. You can delete this note and create your own note.',
      slug: slug,
      tags: ['welcome', 'notes'],
    })

    return {
      meta: {
        status: 200,
        message: 'Success',
      },
      data: user[0],
    }
  }

  public async show({ auth, response }: HttpContextContract) {
    const userId = auth.use('api').user?.id

    if (userId) {
      const user = await Database.from('users')
        .select('id', 'name', 'email', 'username', 'avatar', 'created_at', 'updated_at')
        .where('id', userId)
        .first()

      if (user.avatar) {
        user.avatar = `${Env.get('APP_URL')}/uploads/${user.avatar}`
      }

      return response.status(200).send({
        meta: {
          status: 200,
          message: 'Success',
        },
        data: user,
      })
    }

    return response.unauthorized({
      meta: {
        status: 401,
        message: 'Please login first',
      },
    })
  }

  public async update({ auth, request, response }: HttpContextContract) {
    const userId = auth.use('api').user?.id
    const { name, email, username, password } = request.body()

    if (!userId) {
      return response.unauthorized({
        meta: {
          status: 401,
          message: 'Please login first',
        },
      })
    }

    const updateSchema = schema.create({
      name: schema.string.optional([rules.minLength(3), rules.maxLength(100)]),
      email: schema.string.optional([rules.email()]),
      username: schema.string.optional([
        rules.minLength(3),
        rules.maxLength(50),
        rules.unique({ table: 'users', column: 'username' }),
      ]),
      password: schema.string.optional([rules.minLength(8)]),
    })

    const customMessage = {
      'required': 'The {{ field }} is required to update.',
      'name.minLength': 'The name must be at least 3 characters.',
      'name.maxLength': 'The name must be less than 100 characters.',
      'email.email': 'The email must be a valid email address.',
      'username.minLength': 'The username must be at least 3 characters.',
      'username.maxLength': 'The username must be less than 50 characters.',
      'username.unique': 'The username has already been taken.',
      'password.minLength': 'The password must be at least 8 characters.',
    }

    try {
      await request.validate({ schema: updateSchema, messages: customMessage })
    } catch (error) {
      return response.badRequest({
        meta: {
          status: 400,
          message: 'Bad Request',
        },
        data: error.messages,
      })
    }

    const user = await Database.from('users')
      .where('id', userId)
      .update({
        name: name,
        email: email,
        username: username,
        password: password,
        updated_at: 'now()',
      })
      .returning(['id', 'name', 'email', 'username', 'avatar', 'created_at', 'updated_at'])

    return response.status(200).send({
      meta: {
        status: 200,
        message: 'Success',
      },
      data: user,
    })
  }
}
