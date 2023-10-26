import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Application from '@ioc:Adonis/Core/Application'
import { schema } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'
import Env from '@ioc:Adonis/Core/Env'

export default class AvatarsController {
  public async store({ auth, request, response }: HttpContextContract) {
    const userId = auth.use('api').user?.id
    const avatar = request.file('avatar')

    if (!userId) {
      return response.unauthorized({
        meta: {
          status: 401,
          message: 'Please login first',
        },
      })
    }

    const avatarSchema = schema.create({
      avatar: schema.file({
        size: '2mb',
        extnames: ['jpg', 'png', 'jpeg'],
      }),
    })

    const customMessage = {
      'required': 'The {{ field }} is required to upload an avatar.',
      'avatar.file': 'The avatar must be a file.',
      'avatar.size': 'The avatar must be less than 2MB.',
      'avatar.extnames': 'The avatar must be a file of type: jpg, png, jpeg.',
    }

    try {
      await request.validate({ schema: avatarSchema, messages: customMessage })
    } catch (error) {
      return response.badRequest({
        meta: {
          status: 400,
          message: 'Bad Request',
        },
        data: error.messages,
      })
    }

    await avatar?.move(Application.tmpPath('uploads'), {
      name: `${new Date().getTime()}.${avatar?.extname}`,
    })

    const newAvatar = await Database.from('users')
      .where('id', userId)
      .update({
        avatar: avatar?.fileName,
        updated_at: 'now()',
      })
      .returning(['id', 'name', 'email', 'username', 'avatar', 'created_at', 'updated_at'])

    newAvatar.forEach((avatar) => {
      if (avatar.avatar) {
        avatar.avatar = `${Env.get('APP_URL')}/uploads/${avatar.avatar}`
      }
    })

    return response.created({
      meta: {
        status: 201,
        message: 'Created',
      },
      data: newAvatar[0],
    })
  }
}
