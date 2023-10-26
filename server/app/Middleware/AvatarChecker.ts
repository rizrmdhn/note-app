import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import fs from 'fs'

export default class AvatarChecker {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
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

    const oldAvatar = await Database.from('users')
      .select('users.*')
      .where('id', userId)
      .returning('avatar')

    if (oldAvatar[0].avatar) {
      // Delete old avatar
      fs.unlinkSync(`./tmp/uploads/${oldAvatar[0].avatar}`)
    }

    await next()
  }
}
