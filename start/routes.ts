/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import MakeView from '@adonisjs/core/commands/make/view'
import router from '@adonisjs/core/services/router'

const UsersController = () => import('#controllers/users_controller')

router.post('users', [UsersController, 'getAll'])
router.post('insert-users', [UsersController, 'insertData'])
router.post('update-users', [UsersController, 'updateData'])
router.post('delete-users', [UsersController, 'deleteData'])

router.on('/').render('pages/home')

router.on('/profile').render('pages/profile')


router.on('/about').render('pages/about')

router.post('/test', ({ request }) => {
    const name = request.input('name')

    console.log(name)
})
  
  
router.get('/posts/:id', ({ params }) => {
    return params.id
})
