import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const { email, password } = request.body()

    const loginWithEmailSchema = schema.create({
      email: schema.string([rules.email()]),
      password: schema.string([rules.minLength(8)]),
    })

    const customMessage = {
      'required': 'The {{ field }} is required to login.',
      'email.email': 'The email must be a valid email address.',
      'password.minLength': 'The password must be at least 8 characters.',
    }

    try {
      await request.validate({ schema: loginWithEmailSchema, messages: customMessage })
    } catch (error) {
      return response.badRequest({
        meta: {
          status: 400,
          message: 'Bad Request',
        },
        data: error.messages,
      })
    }

    const token = await auth.use('api').attempt(email, password)

    return response.status(200).send({
      meta: {
        status: 200,
        message: 'Success',
      },
      data: token,
    })
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('api').revoke()
    return response.status(200).send({
      meta: {
        status: 200,
        message: 'Success',
      },
    })
  }
}
